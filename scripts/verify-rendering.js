#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const H = require('../data/portfolio-human.js');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUTPUT = path.join(ROOT, 'audit-output');
const ROUTES = [
  'index.html', 'integrity.html', 'cv.html', 'cv-resume.html',
  'cv-research.html', 'cv-editorial.html', 'cv-integrity.html', 'security.html'
];
const APPLICATION_ROUTES = new Set(['cv-resume.html', 'cv-research.html', 'cv-editorial.html', 'cv-integrity.html']);
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 }
];

function slug(value) {
  return value.replace(/\.html$/, '').replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '') || 'index';
}

async function assertPage(page, route, theme, viewport) {
  const result = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    documentHeight: document.documentElement.scrollHeight,
    h1Count: document.querySelectorAll('h1').length,
    title: document.title,
    bodyText: document.body.innerText
  }));

  if (result.scrollWidth > result.clientWidth + 1) {
    throw new Error(`${route} ${theme} ${viewport.name} overflows horizontally (${result.scrollWidth} > ${result.clientWidth})`);
  }
  if (result.h1Count !== 1) throw new Error(`${route} must have exactly one H1; found ${result.h1Count}`);
  if (!result.title.trim() || !result.bodyText.trim()) throw new Error(`${route} rendered empty title or body`);
  if (route === 'index.html' && viewport.name === 'mobile' && result.documentHeight > 15000) {
    throw new Error(`Mobile homepage is excessively long: ${result.documentHeight}px`);
  }
}

async function verifyHomepage(page, viewport) {
  const result = await page.evaluate(() => ({
    proofCount: document.querySelectorAll('.v8-proof-strip a').length,
    heroMediaCount: document.querySelectorAll('.v8-hero-shot img').length,
    scopeCount: document.querySelectorAll('.v8-scope-grid article').length,
    caseCount: document.querySelectorAll('.v8-case').length,
    caseMediaCount: document.querySelectorAll('.v8-case-media img').length,
    productImageCount: document.querySelectorAll('.v8-product-shot img').length,
    visualArtifactCount: document.querySelectorAll('.v8-artifact img').length,
    principleCount: document.querySelectorAll('.v8-principles > article').length,
    documentCount: document.querySelectorAll('.v8-document').length,
    diagnosisDisclosureCount: document.querySelectorAll('.v7-disclosure, [data-diagnosis-disclosure]').length,
    navLinks: Array.from(document.querySelectorAll('.nav-editorial .nav-actions a')).map((item) => item.textContent.trim()),
    heroHeight: document.querySelector('.v8-hero')?.getBoundingClientRect().height,
    documentHeight: document.documentElement.scrollHeight
  }));

  fs.writeFileSync(path.join(OUTPUT, `homepage-${viewport.name}-model.json`), JSON.stringify(result, null, 2));

  if (result.proofCount !== H.proofMoments.length) throw new Error(`Homepage must render ${H.proofMoments.length} proof moments`);
  if (result.heroMediaCount !== H.heroMedia.length) throw new Error(`Homepage must render ${H.heroMedia.length} hero work previews`);
  if (result.scopeCount !== H.scopes.length) throw new Error(`Homepage must render ${H.scopes.length} scope statements`);
  if (result.caseCount !== H.cases.length || result.caseMediaCount !== H.cases.length) throw new Error(`Homepage must render ${H.cases.length} media-led cases`);
  if (result.productImageCount !== H.mdpiFilter.images.length) throw new Error(`Homepage must render ${H.mdpiFilter.images.length} MDPI Filter screenshots`);
  if (result.visualArtifactCount < 1 + H.visualArtifacts.length) throw new Error('Homepage must render the featured visualization and secondary visual artifacts');
  if (result.principleCount !== H.workingPrinciples.length) throw new Error(`Homepage must render ${H.workingPrinciples.length} working principles`);
  if (result.documentCount !== H.applicationDocuments.length) throw new Error(`Homepage must render ${H.applicationDocuments.length} application documents`);
  if (result.diagnosisDisclosureCount !== 0) throw new Error('Homepage must not render a diagnosis disclosure');
  for (const expected of ['Work', 'Experience', 'CV', 'Contact']) {
    if (!result.navLinks.includes(expected)) throw new Error(`Homepage navigation is missing ${expected}`);
  }
  if (viewport.name === 'desktop' && (!result.heroHeight || result.heroHeight > 1450)) {
    throw new Error(`Desktop hero is too tall: ${result.heroHeight}`);
  }
  if (!result.documentHeight || result.documentHeight > 15000) throw new Error(`Homepage is excessively long: ${result.documentHeight}px`);
}

async function verifyNoJavaScript(browser, staticServer, route) {
  const page = await browser.newPage();
  await page.setJavaScriptEnabled(false);
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.goto(`${staticServer.origin}/${route}`, { waitUntil: 'load', timeout: 45000 });

  const expected = route === 'index.html'
    ? [
        H.headline,
        ...H.proofMoments.map((item) => item.label),
        ...H.scopes.map((item) => item.title),
        ...H.cases.map((item) => item.title),
        H.mdpiFilter.title,
        H.featuredArtifact.title,
        ...H.visualArtifacts.map((item) => item.title),
        H.workingStyle.title,
        ...H.applicationDocuments.map((item) => item.title)
      ]
    : [];

  const result = await page.evaluate((required) => {
    const text = document.body.innerText;
    return {
      missing: required.filter((value) => !text.includes(value)),
      h1Count: document.querySelectorAll('h1').length,
      title: document.title,
      bodyTextLength: text.trim().length,
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      externalLinks: document.querySelectorAll('a[href^="http"]').length,
      imageCount: document.querySelectorAll('.portfolio-v8 img').length
    };
  }, expected);

  fs.writeFileSync(path.join(OUTPUT, `${slug(route)}-no-js-model.json`), JSON.stringify(result, null, 2));
  if (result.missing.length) throw new Error(`${route} no-JS output is missing: ${result.missing.join(', ')}`);
  if (result.h1Count !== 1) throw new Error(`${route} no-JS output must have one H1; found ${result.h1Count}`);
  if (!result.title.trim() || result.bodyTextLength === 0) throw new Error(`${route} no-JS output rendered empty`);
  if (result.scrollWidth > result.clientWidth + 1) {
    throw new Error(`${route} no-JS mobile output overflows horizontally (${result.scrollWidth} > ${result.clientWidth})`);
  }
  if (route === 'index.html' && result.externalLinks === 0) throw new Error('Homepage no-JS output has no external evidence links');
  if (route === 'index.html' && result.imageCount < 10) throw new Error(`Homepage no-JS output has too few real work images: ${result.imageCount}`);

  await page.screenshot({ path: path.join(OUTPUT, `${slug(route)}-no-js-mobile.png`), fullPage: true });
  await page.close();
}

async function main() {
  if (!fs.existsSync(DIST)) throw new Error('dist directory is missing. Run npm run build first.');
  fs.rmSync(OUTPUT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT, { recursive: true });
  const staticServer = await startStaticServer(DIST);
  const browser = await launchBrowser();

  try {
    for (const viewport of VIEWPORTS) {
      for (const theme of ['light', 'dark']) {
        for (const route of ROUTES) {
          const page = await browser.newPage();
          const consoleErrors = [];
          const pageErrors = [];
          page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()); });
          page.on('pageerror', (error) => pageErrors.push(error.message));
          await page.setViewport({ width: viewport.width, height: viewport.height, deviceScaleFactor: 1 });
          await page.evaluateOnNewDocument((selectedTheme) => {
            try { localStorage.setItem('theme', selectedTheme); } catch (error) {}
          }, theme);
          await page.goto(`${staticServer.origin}/${route}`, { waitUntil: 'networkidle0', timeout: 45000 });
          await assertPage(page, route, theme, viewport);

          const themeState = await page.evaluate(() => {
            const button = document.getElementById('themeBtn');
            return button ? { pressed: button.getAttribute('aria-pressed'), label: button.getAttribute('aria-label') } : null;
          });
          if (!themeState) throw new Error(`${route} is missing theme control`);
          const expectedPressed = theme === 'dark' ? 'true' : 'false';
          const expectedLabel = theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
          if (themeState.pressed !== expectedPressed || themeState.label !== expectedLabel) {
            throw new Error(`${route} theme control state is incorrect for ${theme}`);
          }

          if (APPLICATION_ROUTES.has(route)) {
            const model = await page.evaluate(() => ({
              applicationPages: document.querySelectorAll('.application-page').length,
              internalPageLabels: document.querySelectorAll('.application-footer-note').length,
              phoneSlot: Boolean(document.getElementById('cvPhoneSlot'))
            }));
            if (model.applicationPages !== 2 || model.internalPageLabels !== 2) throw new Error(`${route} must render exactly two visible application pages`);
            if (!model.phoneSlot) throw new Error(`${route} is missing the private phone injection slot`);
          }

          if (route === 'index.html' && theme === 'light') await verifyHomepage(page, viewport);

          if (pageErrors.length) throw new Error(`${route} page errors: ${pageErrors.join(' | ')}`);
          const relevant = consoleErrors.filter((message) => !/favicon|google.*font|net::ERR_|Failed to load resource/i.test(message));
          if (relevant.length) throw new Error(`${route} console errors: ${relevant.join(' | ')}`);
          await page.screenshot({ path: path.join(OUTPUT, `${slug(route)}-${theme}-${viewport.name}.png`), fullPage: true });
          await page.close();
        }
      }
    }

    for (const route of ROUTES) await verifyNoJavaScript(browser, staticServer, route);

    console.log(`Rendering verification passed for ${ROUTES.length} routes, three viewports, two themes and no-JS mobile output. Screenshots: ${OUTPUT}`);
  } finally {
    await browser.close();
    await staticServer.close();
  }
}

main().catch((error) => {
  console.error(`Rendering verification failed: ${error.stack || error.message}`);
  process.exit(1);
});
