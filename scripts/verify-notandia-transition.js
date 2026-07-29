#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-output');
const RETIRED_URL = 'https://github.com/orgs/mdpi-filter/repositories';
const CURRENT_BROWSER_REPO = 'https://github.com/notandia/browser-extension';
const CURRENT_ZOTERO_REPO = 'https://github.com/notandia/zotero-plugin';
const CONTINUITY_ROUTE = '/mdpi-filter.html';
const HTML_FILES = [
  'index.html', 'mdpi-filter.html', 'cv.html', 'cv-resume.html', 'cv-research.html',
  'cv-editorial.html', 'cv-integrity.html', 'cv-orcid.html', 'integrity.html', 'security.html'
];

function read(relativePath) {
  const filePath = path.join(DIST, relativePath);
  if (!fs.existsSync(filePath)) throw new Error(`Missing dist/${relativePath}`);
  return fs.readFileSync(filePath, 'utf8');
}

function assertContains(value, expected, label) {
  if (!value.includes(expected)) throw new Error(`${label} is missing: ${expected}`);
}

function parseJsonLd(html, label) {
  const blocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  if (!blocks.length) throw new Error(`${label} has no JSON-LD`);
  for (const [, block] of blocks) JSON.parse(block.trim());
}

async function verifyRendering() {
  fs.mkdirSync(OUTPUT, { recursive: true });
  const server = await startStaticServer(DIST);
  const browser = await launchBrowser();
  try {
    for (const viewport of [
      { name: 'desktop', width: 1440, height: 1000 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'mobile', width: 390, height: 844 }
    ]) {
      for (const theme of ['light', 'dark']) {
        const page = await browser.newPage();
        await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
        await page.evaluateOnNewDocument((selectedTheme) => {
          try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
        }, theme);
        await page.goto(`${server.origin}${CONTINUITY_ROUTE}`, { waitUntil: 'networkidle0', timeout: 45000 });
        const model = await page.evaluate(() => ({
          h1Count: document.querySelectorAll('h1').length,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          text: document.body.innerText,
          retiredClickableLinks: document.querySelectorAll('a[href="https://github.com/orgs/mdpi-filter/repositories"]').length,
          currentLinks: Array.from(document.querySelectorAll('a[href]')).map((item) => item.href)
        }));
        if (model.h1Count !== 1) throw new Error(`Continuity page ${theme}/${viewport.name} must have one H1`);
        if (model.scrollWidth > model.clientWidth + 1) throw new Error(`Continuity page ${theme}/${viewport.name} overflows horizontally`);
        if (!model.text.includes('MDPI Filter is becoming Notandia.')) throw new Error(`Continuity page ${theme}/${viewport.name} is missing the transition heading`);
        if (model.retiredClickableLinks !== 0) throw new Error('Continuity page renders the retired organization URL as a clickable link');
        if (!model.currentLinks.includes(CURRENT_BROWSER_REPO) || !model.currentLinks.includes(CURRENT_ZOTERO_REPO)) {
          throw new Error(`Continuity page ${theme}/${viewport.name} is missing current repository links`);
        }
        await page.screenshot({ path: path.join(OUTPUT, `notandia-${theme}-${viewport.name}.png`), fullPage: true });
        await page.close();
      }
    }
  } finally {
    await browser.close();
    await server.close();
  }
}

async function main() {
  for (const relativePath of HTML_FILES) {
    const html = read(relativePath);
    if (new RegExp(`href=["']${RETIRED_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`).test(html)) {
      throw new Error(`dist/${relativePath} still exposes the retired organization URL as a clickable link`);
    }
  }

  const continuity = read('mdpi-filter.html');
  parseJsonLd(continuity, 'dist/mdpi-filter.html');
  for (const expected of [
    'MDPI Filter is becoming Notandia.',
    'For application reviewers',
    CURRENT_BROWSER_REPO,
    CURRENT_ZOTERO_REPO,
    'Existing browser-store identities are retained',
    'Stable evidence URL'
  ]) assertContains(continuity, expected, 'dist/mdpi-filter.html');

  const index = read('index.html');
  assertContains(index, `href="${CONTINUITY_ROUTE}"`, 'dist/index.html');
  assertContains(index, 'Notandia (formerly MDPI Filter)', 'dist/index.html');

  const orcid = read('cv-orcid.html');
  assertContains(orcid, 'Notandia (formerly MDPI Filter)', 'dist/cv-orcid.html');
  assertContains(orcid, `href="${CONTINUITY_ROUTE}"`, 'dist/cv-orcid.html');

  const sitemap = read('sitemap.xml');
  assertContains(sitemap, 'https://mariomarcolongo.com/mdpi-filter.html', 'dist/sitemap.xml');

  await verifyRendering();
  console.log('Notandia continuity page, current repository links and retired-URL boundary verified.');
}

main().catch((error) => {
  console.error(`Notandia transition verification failed: ${error.stack || error.message}`);
  process.exit(1);
});
