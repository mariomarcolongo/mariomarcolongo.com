#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');
const { resolveCvPhone } = require('./lib/private-contact.js');
const {
  rewriteLoopbackLinksForPdf,
  rewriteLoopbackPdfLinks,
  assertNoLoopbackPdfLinks
} = require('./lib/pdf-links.js');

const ROUTE = 'cv-tiktok-search-qa.html';
const OUTPUT = 'Mario Marcolongo — TikTok Search Operations QA Italian CV.pdf';
const LABEL = 'TikTok Search Operations QA Italian CV';

async function generate() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const auditDir = path.resolve(process.cwd(), 'audit-output');
  const htmlPath = path.join(distDir, ROUTE);
  const outPath = path.resolve(process.cwd(), OUTPUT);
  const phone = resolveCvPhone();
  fs.mkdirSync(auditDir, { recursive: true });
  if (!fs.existsSync(htmlPath)) throw new Error(`dist/${ROUTE} not found. Run npm run build first.`);

  const staticServer = await startStaticServer(distDir);
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(`${staticServer.origin}/${ROUTE}`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.evaluate((privatePhone) => {
      document.documentElement.setAttribute('data-theme', 'light');
      const phoneSlot = document.getElementById('cvPhoneSlot');
      if (phoneSlot && privatePhone) {
        phoneSlot.textContent = privatePhone;
        phoneSlot.setAttribute('href', `tel:${String(privatePhone).replace(/\s+/g, '')}`);
        phoneSlot.hidden = false;
      }
    }, phone);
    await rewriteLoopbackLinksForPdf(page);

    const fit = await page.evaluate(() => Array.from(document.querySelectorAll('.application-page')).map((cvPage, index) => {
      const pageRect = cvPage.getBoundingClientRect();
      const footer = cvPage.querySelector('.application-footer-note');
      const footerRect = footer?.getBoundingClientRect();
      const flowChildren = Array.from(cvPage.children).filter((child) => !child.classList.contains('application-footer-note'));
      const contentBottom = Math.max(...flowChildren.map((child) => child.getBoundingClientRect().bottom), pageRect.top);
      const footerTop = footerRect?.top ?? pageRect.bottom;
      return {
        page: index + 1,
        contentBottom: Math.round(contentBottom - pageRect.top),
        footerTop: Math.round(footerTop - pageRect.top),
        clearance: Math.round(footerTop - contentBottom),
        pageHeight: Math.round(pageRect.height)
      };
    }));
    fs.writeFileSync(path.join(auditDir, 'cv-tiktok-search-qa-print-fit.json'), JSON.stringify({ label: LABEL, route: ROUTE, pages: fit }, null, 2));
    if (fit.length !== 2) throw new Error(`${LABEL} print-fit inspection found ${fit.length} pages instead of 2.`);
    const collisions = fit.filter((item) => item.clearance < 6);
    if (collisions.length) throw new Error(`${LABEL} content collides with footer or is clipped: ${JSON.stringify(collisions)}`);

    await page.pdf({
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
      path: outPath
    });
    await page.close();

    let pdfBytes = fs.readFileSync(outPath);
    pdfBytes = await rewriteLoopbackPdfLinks(pdfBytes, LABEL);
    fs.writeFileSync(outPath, pdfBytes);
    await assertNoLoopbackPdfLinks(pdfBytes, LABEL);
    const pdf = await PDFDocument.load(pdfBytes);
    if (pdf.getPageCount() !== 2) throw new Error(`${LABEL} must be exactly 2 pages; generated ${pdf.getPageCount()}.`);
    console.log(`${LABEL} PDF path: ${outPath}`);
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

generate().catch((error) => {
  console.error(`TikTok Search QA PDF generation failed: ${error.stack || error.message}`);
  process.exit(1);
});
