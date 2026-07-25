#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const OUT_DIR = path.resolve(process.cwd(), 'public/media/work');

const pageTargets = [
  { id: 'yourself-to-science', url: 'https://yourselftoscience.org/', waitFor: 'body' },
  { id: 'telegram-bot', url: 'https://t.me/ToEnWikipediaBot', waitFor: '.tgme_page, body' },
  {
    id: 'tableau-mortality',
    url: 'https://public.tableau.com/app/profile/mario.marcolongo/viz/TavolediMortalitSingoleEtItalia-ISTAT/Sheet1',
    waitFor: 'body',
    settle: 8000
  },
  { id: 'flourish-profile', url: 'https://app.flourish.studio/@Digressivo', waitFor: 'body', settle: 6000 },
  { id: 'emergent-humanity', url: 'https://jnton.github.io/emergent-humanity/', waitFor: 'body', optional: true }
];

const imageTargets = [
  {
    id: 'mdpi-filter-1',
    url: 'https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800'
  },
  {
    id: 'mdpi-filter-2',
    url: 'https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800'
  }
];

async function cleanPage(page) {
  await page.evaluate(() => {
    const selectors = [
      '[id*="cookie" i]', '[class*="cookie" i]', '[id*="consent" i]', '[class*="consent" i]',
      '.cky-consent-container', '.cmplz-cookiebanner', '#onetrust-consent-sdk', '[aria-label*="cookie" i]'
    ];
    selectors.forEach((selector) => document.querySelectorAll(selector).forEach((element) => element.remove()));
    document.documentElement.style.scrollBehavior = 'auto';
  });
}

async function capturePage(browser, target) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1440, height: 980, deviceScaleFactor: 1 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36');
    const response = await page.goto(target.url, { waitUntil: ['domcontentloaded', 'networkidle2'], timeout: 90000 });
    if (!response || (!response.ok() && response.status() !== 304)) throw new Error(`HTTP ${response ? response.status() : 'no response'}`);
    await page.waitForSelector(target.waitFor, { timeout: 30000 });
    await cleanPage(page);
    await new Promise((resolve) => setTimeout(resolve, target.settle || 2200));
    await page.evaluate(() => window.scrollTo(0, 0));
    const destination = path.join(OUT_DIR, `${target.id}.png`);
    await page.screenshot({ path: destination, clip: { x: 0, y: 0, width: 1440, height: 900 }, type: 'png' });
    console.log(`PASS ${target.id}: ${destination}`);
    return true;
  } catch (error) {
    console.error(`${target.optional ? 'OPTIONAL' : 'FAIL'} ${target.id}: ${error.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function captureImage(browser, target) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1320, height: 880, deviceScaleFactor: 1 });
    const response = await page.goto(target.url, { waitUntil: 'load', timeout: 60000 });
    if (!response || !response.ok()) throw new Error(`HTTP ${response ? response.status() : 'no response'}`);
    const image = await page.waitForSelector('img', { timeout: 20000 });
    const destination = path.join(OUT_DIR, `${target.id}.png`);
    await image.screenshot({ path: destination, type: 'png' });
    console.log(`PASS ${target.id}: ${destination}`);
    return true;
  } catch (error) {
    console.error(`FAIL ${target.id}: ${error.message}`);
    return false;
  } finally {
    await page.close();
  }
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium']
  });
  const results = new Map();
  try {
    for (const target of imageTargets) results.set(target.id, await captureImage(browser, target));
    for (const target of pageTargets) results.set(target.id, await capturePage(browser, target));
  } finally {
    await browser.close();
  }

  const missingRequired = [
    ...imageTargets.map((target) => ({ ...target, optional: false })),
    ...pageTargets
  ].filter((target) => !target.optional && !results.get(target.id));

  if (missingRequired.length) {
    throw new Error(`Required public previews failed: ${missingRequired.map((target) => target.id).join(', ')}`);
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
