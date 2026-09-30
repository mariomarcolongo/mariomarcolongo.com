#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, process.env.CI ? 'audit-output' : 'private/qa/notandia');
const RETIRED_URL = 'https://github.com/orgs/mdpi-filter/repositories';
const BROWSER_REPO = 'https://github.com/notandia/browser-extension';
const ZOTERO_REPO = 'https://github.com/notandia/zotero-plugin';
const read = (file) => fs.readFileSync(path.join(DIST, file), 'utf8');
const contains = (value, expected, label) =>
  assert.ok(value.includes(expected), `${label}: missing ${expected}`);
const sameUrl = (value, expected) => {
  try { return new URL(value).href === new URL(expected).href; } catch { return false; }
};
const hasUrl = (value, expected) => [...value.matchAll(/https?:\/\/[^\s"'<>\\]+/g)]
  .some(([url]) => sameUrl(url, expected));
const boundaries = ['publisher-level', 'article-specific', 'AI-assisted',
  'Source development is not proof that every capability has shipped in Chrome and Edge.'];

async function main() {
  for (const file of ['index.html', 'notandia.html', 'mdpi-filter.html', 'cv.html',
    'cv-technical.html', 'cv-ai.html']) {
    assert.ok(!hasUrl(read(file), RETIRED_URL), `${file}: retired organization link`);
  }
  const canonical = read('notandia.html');
  for (const expected of [...boundaries, 'MDPI Filter',
    '/media/work/notandia-current-options.webp']) contains(canonical, expected, 'Notandia');
  for (const url of [BROWSER_REPO, ZOTERO_REPO]) assert.ok(hasUrl(canonical, url), `Notandia: missing ${url}`);
  contains(read('index.html'), 'href="/notandia"', 'Homepage');
  contains(read('cv-technical.html'), 'Notandia', 'Technical résumé');
  const legacy = read('mdpi-filter.html');
  assert.match(legacy, /<meta\s+name="robots"\s+content="noindex(?:,\s*follow)?">/);
  assert.ok(hasUrl(legacy, 'https://mariomarcolongo.com/notandia'), 'Legacy canonical');
  assert.match(read('_redirects'), /^\/mdpi-filter\.html\s+\/notandia\s+301\s*$/m);
  assert.ok(hasUrl(read('sitemap.xml'), 'https://mariomarcolongo.com/notandia'), 'Sitemap');
  assert.ok(!hasUrl(read('sitemap.xml'), 'https://mariomarcolongo.com/mdpi-filter.html'));
  for (const file of ['llms.txt', 'llms-full.txt', 'cv-llm.txt', 'profile.json']) {
    assert.ok(!hasUrl(read(file), RETIRED_URL), `${file}: retired source`);
  }
  for (const file of ['cv-llm.txt', 'profile.json']) contains(read(file), 'Notandia', file);

  fs.mkdirSync(OUTPUT, { recursive: true });
  const server = await startStaticServer(DIST);
  let browser;
  try {
    browser = await launchBrowser();
    for (const viewport of [{ width: 1440, height: 1000 },
      { width: 768, height: 1024 }, { width: 390, height: 844 }]) {
      for (const theme of ['light', 'dark']) {
        const page = await browser.newPage();
        await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
        await page.evaluateOnNewDocument((value) => {
          try { localStorage.setItem('theme', value); } catch {}
        }, theme);
        await page.goto(`${server.origin}/notandia`, { waitUntil: 'networkidle0', timeout: 45000 });
        const model = await page.evaluate(() => ({
          h1Count: document.querySelectorAll('h1').length,
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
          text: document.body.innerText,
          links: Array.from(document.querySelectorAll('a[href]'), (link) => link.href)
        }));
        assert.equal(model.h1Count, 1, 'One Notandia heading');
        assert.equal(model.overflow, false, `${theme}/${viewport.width}: horizontal overflow`);
        for (const expected of boundaries) contains(model.text, expected, 'Visible scope');
        assert.ok(model.links.some((url) => sameUrl(url, BROWSER_REPO)) &&
          model.links.some((url) => sameUrl(url, ZOTERO_REPO)));
        assert.ok(!model.links.some((url) => sameUrl(url, RETIRED_URL)));
        await page.screenshot({ path: path.join(OUTPUT, `notandia-${theme}-${viewport.width}.png`), fullPage: true });
        await page.close();
      }
    }
  } finally {
    if (browser) await browser.close();
    await server.close();
  }
  console.log('Notandia source/store boundaries, repositories, current CVs, redirects and six rendered views passed.');
}

main().catch((error) => {
  console.error(`Notandia verification failed: ${error.stack || error.message}`);
  process.exitCode = 1;
});
