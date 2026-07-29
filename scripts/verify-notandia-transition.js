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
const CANONICAL_ROUTE = '/notandia.html';
const LEGACY_ROUTE = '/mdpi-filter.html';
const CANONICAL_URL = 'https://mariomarcolongo.com/notandia.html';
const HTML_FILES = [
  'index.html', 'notandia.html', 'mdpi-filter.html', 'cv.html', 'cv-resume.html', 'cv-research.html',
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

function assertNotContains(value, prohibited, label) {
  if (value.includes(prohibited)) throw new Error(`${label} contains prohibited text: ${prohibited}`);
}

function parseJsonLd(html, label) {
  const blocks = [...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script\s*>/gi)];
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
        await page.goto(`${server.origin}${CANONICAL_ROUTE}`, { waitUntil: 'networkidle0', timeout: 45000 });
        const model = await page.evaluate(() => ({
          h1Count: document.querySelectorAll('h1').length,
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          text: document.body.innerText,
          retiredClickableLinks: document.querySelectorAll('a[href="https://github.com/orgs/mdpi-filter/repositories"]').length,
          currentLinks: Array.from(document.querySelectorAll('a[href]')).map((item) => item.href)
        }));
        if (model.h1Count !== 1) throw new Error(`Notandia page ${theme}/${viewport.name} must have one H1`);
        if (model.scrollWidth > model.clientWidth + 1) throw new Error(`Notandia page ${theme}/${viewport.name} overflows horizontally`);
        if (!model.text.includes('Notandia') || !model.text.includes('Originally released as MDPI Filter')) {
          throw new Error(`Notandia page ${theme}/${viewport.name} is missing the current-brand continuity statement`);
        }
        if (model.retiredClickableLinks !== 0) throw new Error('Notandia page renders the retired organization URL as a clickable link');
        if (!model.currentLinks.includes(CURRENT_BROWSER_REPO) || !model.currentLinks.includes(CURRENT_ZOTERO_REPO)) {
          throw new Error(`Notandia page ${theme}/${viewport.name} is missing current repository links`);
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
    const retiredLink = new RegExp(`href=["']${RETIRED_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`);
    if (retiredLink.test(html)) throw new Error(`dist/${relativePath} still exposes the retired organization URL as a clickable link`);
  }

  const canonical = read('notandia.html');
  parseJsonLd(canonical, 'dist/notandia.html');
  for (const expected of [
    '<h1>Notandia</h1>',
    'Originally released as <em>MDPI Filter</em>',
    'For application reviewers',
    CURRENT_BROWSER_REPO,
    CURRENT_ZOTERO_REPO,
    'Stable evidence URL'
  ]) assertContains(canonical, expected, 'dist/notandia.html');

  const legacy = read('mdpi-filter.html');
  assertContains(legacy, 'noindex,follow', 'dist/mdpi-filter.html');
  assertContains(legacy, CANONICAL_URL, 'dist/mdpi-filter.html');
  assertContains(legacy, CANONICAL_ROUTE, 'dist/mdpi-filter.html');

  const redirects = read('_redirects');
  assertContains(redirects, '/mdpi-filter.html', 'dist/_redirects');
  assertContains(redirects, CANONICAL_ROUTE, 'dist/_redirects');

  const index = read('index.html');
  assertContains(index, `href="${CANONICAL_ROUTE}"`, 'dist/index.html');
  assertContains(index, 'Notandia', 'dist/index.html');

  const orcid = read('cv-orcid.html');
  assertContains(orcid, 'Notandia', 'dist/cv-orcid.html');
  assertContains(orcid, `href="${CANONICAL_ROUTE}"`, 'dist/cv-orcid.html');

  const sitemap = read('sitemap.xml');
  assertContains(sitemap, CANONICAL_URL, 'dist/sitemap.xml');
  assertNotContains(sitemap, 'https://mariomarcolongo.com/mdpi-filter.html', 'dist/sitemap.xml');

  for (const dossier of ['llms.txt', 'llms-full.txt', 'cv-llm.txt', 'data/source.js']) {
    const value = read(dossier);
    assertContains(value, 'Notandia', `dist/${dossier}`);
    assertNotContains(value, RETIRED_URL, `dist/${dossier}`);
    assertNotContains(value, LEGACY_ROUTE, `dist/${dossier}`);
  }

  await verifyRendering();
  console.log('Canonical Notandia page, legacy redirects, CV links, dossiers and retired-URL boundary verified.');
}

main().catch((error) => {
  console.error(`Notandia transition verification failed: ${error.stack || error.message}`);
  process.exit(1);
});
