#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { PDFDocument } = require('pdf-lib');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

async function generateCvPdf() {
  const distDir = path.resolve(process.cwd(), 'dist');
  const htmlPath = path.join(distDir, 'cv.html');
  if (!fs.existsSync(htmlPath)) throw new Error('dist/cv.html not found. Run `npm run build` first.');

  const staticServer = await startStaticServer(distDir);
  const browser = await launchBrowser();

  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(`${staticServer.origin}/cv.html`, { waitUntil: 'networkidle0', timeout: 45000 });
    await page.evaluate((phone) => {
      document.documentElement.setAttribute('data-theme', 'light');
      const phoneSlot = document.getElementById('cvPhoneSlot');
      if (phoneSlot && phone) {
        phoneSlot.innerHTML = `· <a href="tel:${phone.replace(/\s/g, '')}">${phone}</a>`;
        phoneSlot.classList.add('has-phone');
      }
    }, process.env.CV_PHONE || '');

    const outPath = path.resolve(process.cwd(), 'Mario Marcolongo — Curriculum Vitae.pdf');
    await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: false,
      margin: { top: '15mm', bottom: '24mm', left: '18mm', right: '18mm' },
      displayHeaderFooter: true,
      headerTemplate: '<div></div>',
      footerTemplate: `<div style="width:calc(100% - 36mm);margin:0 auto;font:8.5px Arial,sans-serif;color:#64748b;display:flex;justify-content:space-between"><span>Mario Marcolongo · Curriculum Vitae</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`,
      path: outPath
    });

    const pdf = await PDFDocument.load(fs.readFileSync(outPath));
    console.log(`Full CV PDF page count: ${pdf.getPageCount()}`);
    console.log(`Full CV PDF path: ${outPath}`);
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

generateCvPdf().catch((error) => {
  console.error(`Full CV PDF generation failed: ${error.stack || error.message}`);
  process.exit(1);
});
