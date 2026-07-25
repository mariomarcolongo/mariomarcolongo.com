#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const DOCUMENTS = [
  {
    route: 'cv-resume.html',
    output: 'Mario Marcolongo — AI Evaluation & Model Behavior CV.pdf',
    label: 'AI Evaluation & Model Behavior CV'
  },
  {
    route: 'cv-research.html',
    output: 'Mario Marcolongo — Scientific AI Quality & Research Data CV.pdf',
    label: 'Scientific AI Quality & Research Data CV'
  },
  {
    route: 'cv-editorial.html',
    output: 'Mario Marcolongo — Research Editorial & Community Operations CV.pdf',
    label: 'Research, Editorial & Community Operations CV'
  },
  {
    route: 'cv-integrity.html',
    output: 'Mario Marcolongo — Trust Safety & Knowledge Integrity CV.pdf',
    label: 'Trust, Safety & Knowledge Integrity CV'
  }
];

async function generateResumePdfs() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const auditDir = path.resolve(process.cwd(), 'audit-output');
  fs.mkdirSync(auditDir, { recursive: true });
  for (const document of DOCUMENTS) {
    const htmlPath = path.join(distDir, document.route);
    if (!fs.existsSync(htmlPath)) throw new Error(`dist/${document.route} not found. Run npm run build first.`);
  }

  const staticServer = await startStaticServer(distDir);
  const browser = await launchBrowser();
  const failures = [];

  try {
    for (const document of DOCUMENTS) {
      const page = await browser.newPage();
      await page.emulateMediaType('print');
      await page.goto(`${staticServer.origin}/${document.route}`, { waitUntil: 'networkidle0', timeout: 45000 });
      await page.evaluate((phone) => {
        document.documentElement.setAttribute('data-theme', 'light');
        const phoneSlot = document.getElementById('cvPhoneSlot');
        if (phoneSlot && phone) {
          phoneSlot.textContent = phone;
          phoneSlot.setAttribute('href', `tel:${String(phone).replace(/\s+/g, '')}`);
          phoneSlot.hidden = false;
        }
      }, process.env.CV_PHONE || '');

      const fit = await page.evaluate(() => Array.from(document.querySelectorAll('.application-page')).map((applicationPage, index) => {
        const pageRect = applicationPage.getBoundingClientRect();
        const footer = applicationPage.querySelector('.application-footer-note');
        const footerRect = footer?.getBoundingClientRect();
        const flowChildren = Array.from(applicationPage.children).filter((child) => !child.classList.contains('application-footer-note'));
        const contentBottom = Math.max(...flowChildren.map((child) => child.getBoundingClientRect().bottom), pageRect.top);
        const footerTop = footerRect?.top ?? pageRect.bottom;
        const clearance = footerTop - contentBottom;
        return {
          page: index + 1,
          contentBottom: Math.round(contentBottom - pageRect.top),
          footerTop: Math.round(footerTop - pageRect.top),
          clearance: Math.round(clearance),
          pageHeight: Math.round(pageRect.height)
        };
      }));

      const fitPath = path.join(auditDir, `${document.route.replace(/\.html$/, '')}-print-fit.json`);
      fs.writeFileSync(fitPath, JSON.stringify({ label: document.label, route: document.route, pages: fit }, null, 2));
      const collisions = fit.filter((item) => item.clearance < 6);
      console.log(`${document.label} print-fit: ${JSON.stringify(fit)}`);
      if (collisions.length) {
        failures.push(`${document.label} content collides with the footer or is clipped: ${JSON.stringify(collisions)}`);
      }

      const outPath = path.resolve(process.cwd(), document.output);
      await page.pdf({
        printBackground: true,
        preferCSSPageSize: true,
        displayHeaderFooter: false,
        margin: { top: '0', bottom: '0', left: '0', right: '0' },
        path: outPath
      });

      const pdf = await PDFDocument.load(fs.readFileSync(outPath));
      const pageCount = pdf.getPageCount();
      console.log(`${document.label} PDF page count: ${pageCount}`);
      console.log(`${document.label} PDF path: ${outPath}`);
      if (pageCount !== 2) failures.push(`${document.label} must be exactly 2 pages; generated ${pageCount}.`);
      await page.close();
    }
  } finally {
    await browser.close();
    await staticServer.close();
  }

  if (failures.length) {
    throw new Error(`Targeted CV verification failed:\n- ${failures.join('\n- ')}`);
  }
}

generateResumePdfs().catch((error) => {
  console.error(`Application CV PDF generation failed: ${error.stack || error.message}`);
  process.exit(1);
});
