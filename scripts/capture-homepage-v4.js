#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-v4');

async function warmLazyContent(page) {
  await page.evaluate(async () => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(420, Math.floor(window.innerHeight * 0.78));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await delay(100);
    }
    window.scrollTo(0, document.documentElement.scrollHeight);
    await delay(1600);
    window.scrollTo(0, 0);
    await delay(700);
  });
}

async function capture(browser, server, name, width, height, theme) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.evaluateOnNewDocument((selectedTheme) => {
    try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
  }, theme);
  await page.goto(`${server.origin}/index.html`, { waitUntil: 'networkidle0', timeout: 45000 });
  await warmLazyContent(page);
  const measurements = await page.evaluate(() => {
    const brokenImages = Array.from(document.images)
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => ({ src: image.getAttribute('src'), alt: image.alt }));
    const contact = document.querySelector('.v8-contact');
    const contactStyle = contact ? getComputedStyle(contact) : null;
    return {
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      documentHeight: document.documentElement.scrollHeight,
      contactExists: Boolean(contact),
      contactOpacity: contactStyle ? Number.parseFloat(contactStyle.opacity) : null,
      contactHeight: contact ? Math.round(contact.getBoundingClientRect().height) : null,
      heroImages: document.querySelectorAll('.v8-hero-shot img').length,
      caseImages: document.querySelectorAll('.v8-case-media img').length,
      productImages: document.querySelectorAll('.v8-product-shot img').length,
      totalPortfolioImages: document.querySelectorAll('.portfolio-v8 img').length,
      brokenLocalImages: brokenImages.filter((item) => item.src && item.src.startsWith('/')),
      brokenExternalImages: brokenImages.filter((item) => !item.src || !item.src.startsWith('/'))
    };
  });

  await page.screenshot({ path: path.join(OUTPUT, `${name}.png`), fullPage: true });
  fs.writeFileSync(path.join(OUTPUT, `${name}.json`), JSON.stringify(measurements, null, 2));
  await page.close();

  if (measurements.scrollWidth > measurements.clientWidth + 1) {
    throw new Error(`${name} overflows horizontally (${measurements.scrollWidth} > ${measurements.clientWidth})`);
  }
  if (!measurements.contactExists || measurements.contactOpacity < 0.95 || !measurements.contactHeight) {
    throw new Error(`${name} has a hidden or missing contact conversion section: ${JSON.stringify(measurements)}`);
  }
  if (measurements.heroImages < 4 || measurements.caseImages < 3 || measurements.productImages < 2 || measurements.totalPortfolioImages < 12) {
    throw new Error(`${name} does not render the expected real-work media: ${JSON.stringify(measurements)}`);
  }
  if (measurements.brokenLocalImages.length) {
    throw new Error(`${name} has broken first-party images: ${JSON.stringify(measurements.brokenLocalImages)}`);
  }
  if (measurements.brokenExternalImages.length) {
    throw new Error(`${name} has broken external images: ${JSON.stringify(measurements.brokenExternalImages)}`);
  }
}

async function main() {
  if (!fs.existsSync(DIST)) throw new Error('dist is missing; run npm run build first');
  fs.rmSync(OUTPUT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT, { recursive: true });
  const server = await startStaticServer(DIST);
  const browser = await launchBrowser();
  try {
    await capture(browser, server, 'index-light-desktop-scrolled', 1440, 1000, 'light');
    await capture(browser, server, 'index-dark-desktop-scrolled', 1440, 1000, 'dark');
    await capture(browser, server, 'index-light-mobile-scrolled', 390, 844, 'light');
    await capture(browser, server, 'index-dark-mobile-scrolled', 390, 844, 'dark');
    console.log(`Homepage visual audit passed: ${OUTPUT}`);
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
