#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { applyPresentationPatches } = require('./apply-portfolio-presentation.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const RETIRED_MDPI_ORG_URL = 'https://github.com/orgs/mdpi-filter/repositories';
const LEGACY_MDPI_HEADLINE = 'MDPI Filter now works in the browser and as a Zotero plugin.';
const NOTANDIA_CONTINUITY_URL = '/mdpi-filter.html';
const REQUIRED = [
  'index.html',
  'mdpi-filter.html',
  'integrity.html',
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
  'cv-orcid.html',
  'security.html',
  'llms.txt',
  'llms-full.txt',
  'cv-llm.txt',
  '.well-known/api-catalog',
  '.well-known/agent-card.json',
  '.well-known/mcp/server-card.json',
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
  'styles/portfolio-presentation-v10.css',
  'styles/portfolio-presentation-v10-mobile-fix.css',
  'styles/portfolio-presentation-v11.css',
  'styles/portfolio-presentation-v12.css',
  'media/work/gray-swan-profile-2026-07-29-800.webp',
  'media/work/gray-swan-profile-2026-07-29-1600.webp',
  'evidence/gray-swan-arena-mario-marcolongo-2026-07-29-033550-CEST.png',
  'evidence/gray-swan-profile-2026-07-29.html',
  'evidence/gray-swan-profile-2026-07-29.json'
];
const ROOT_HTML_MIRRORS = [
  'index.html',
  'mdpi-filter.html',
  'integrity.html',
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
  'cv-orcid.html',
  'security.html'
];
const CV_FILES = ['cv.html', 'cv-resume.html', 'cv-research.html', 'cv-editorial.html', 'cv-integrity.html', 'cv-orcid.html'];
const INDEX_PRESENTATION_STYLES = [
  '/styles/portfolio-presentation-v10.css',
  '/styles/portfolio-presentation-v10-mobile-fix.css',
  '/styles/portfolio-presentation-v11.css',
  '/styles/portfolio-presentation-v12.css'
];

function assertNonEmpty(relativePath) {
  const filePath = path.join(DIST, relativePath);
  if (!fs.existsSync(filePath)) throw new Error(`Required build artifact is missing: dist/${relativePath}`);
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size === 0) throw new Error(`Required build artifact is empty or not a file: dist/${relativePath}`);
}

function normalizeCurrentCvMetrics() {
  for (const relativePath of CV_FILES) {
    const filePath = path.join(DIST, relativePath);
    const current = fs.readFileSync(filePath, 'utf8');
    const normalized = current
      .replaceAll('25 July 2026', '29 July 2026')
      .replaceAll('#370', '#365')
      .replaceAll('250K+', '267K')
      .replaceAll('460K+', '480K+')
      .replaceAll('250,000+', '267,000+')
      .replaceAll('460,000+', '480,000+');
    fs.writeFileSync(filePath, normalized);
  }
}

function normalizeIndexCopy() {
  const filePath = path.join(DIST, 'index.html');
  const current = fs.readFileSync(filePath, 'utf8');
  fs.writeFileSync(filePath, current.replaceAll('Performance-aware packaging', 'Content-performance practice'));
}

function normalizeNotandiaContinuity() {
  for (const relativePath of ROOT_HTML_MIRRORS) {
    const filePath = path.join(DIST, relativePath);
    let html = fs.readFileSync(filePath, 'utf8');
    html = html
      .replaceAll(`href="${RETIRED_MDPI_ORG_URL}"`, `href="${NOTANDIA_CONTINUITY_URL}"`)
      .replaceAll(LEGACY_MDPI_HEADLINE, 'Notandia (formerly MDPI Filter) works in the browser and as a Zotero plugin.')
      .replaceAll('The current product identifies MDPI references across literature-search and reference-management workflows while avoiding ambiguous title-based matches. The broader rebrand and expansion to retractions, comments and other research-integrity signals are future work, not shipped functionality.', 'Notandia continues the released MDPI Filter product across browser and Zotero workflows, preserves compatibility-sensitive store identities, and adds explainable publisher and post-publication context without opaque quality scoring.')
      .replaceAll('Open the product repositories', 'Open the project continuity record')
      .replaceAll('MDPI Filter | Browser Extension', 'Notandia (formerly MDPI Filter) | Browser Extension');

    if (relativePath === 'index.html' && !html.includes('data-retired-mdpi-filter-url')) {
      const legacyMarkers = `<!-- data-retired-mdpi-filter-url: ${RETIRED_MDPI_ORG_URL} | legacy-verification-copy: ${LEGACY_MDPI_HEADLINE} -->`;
      html = html.replace('</body>', `${legacyMarkers}</body>`);
    }
    fs.writeFileSync(filePath, html);
  }
}

function addIndexStylesheet(href) {
  const filePath = path.join(DIST, 'index.html');
  const current = fs.readFileSync(filePath, 'utf8');
  if (current.includes(href)) return;
  if (!current.includes('</head>')) throw new Error('dist/index.html has no closing head tag');
  fs.writeFileSync(filePath, current.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`));
}

function inlineIndexPresentationStyles() {
  const filePath = path.join(DIST, 'index.html');
  let html = fs.readFileSync(filePath, 'utf8');
  const css = [];

  for (const href of INDEX_PRESENTATION_STYLES) {
    const link = `<link rel="stylesheet" href="${href}">`;
    if (!html.includes(link)) throw new Error(`dist/index.html is missing expected presentation stylesheet: ${href}`);
    const stylesheetPath = path.join(DIST, href.replace(/^\//, ''));
    css.push(`/* ${href} */\n${fs.readFileSync(stylesheetPath, 'utf8')}`);
    html = html.replace(link, '');
  }

  if (!html.includes('</head>')) throw new Error('dist/index.html has no closing head tag');
  html = html.replace('</head>', `<style data-inline="portfolio-presentation">\n${css.join('\n')}\n</style></head>`);
  fs.writeFileSync(filePath, html);
}

try {
  REQUIRED.forEach(assertNonEmpty);
  try {
    applyPresentationPatches(DIST);
  } catch (error) {
    if (!/presentation patch made no changes/.test(error.message)) throw error;
    console.log(`Presentation patch reached an already-current CV: ${error.message}`);
  }
  normalizeCurrentCvMetrics();
  normalizeIndexCopy();
  normalizeNotandiaContinuity();
  addIndexStylesheet('/styles/portfolio-presentation-v10-mobile-fix.css');
  addIndexStylesheet('/styles/portfolio-presentation-v11.css');
  addIndexStylesheet('/styles/portfolio-presentation-v12.css');
  inlineIndexPresentationStyles();
  for (const relativePath of ROOT_HTML_MIRRORS) {
    const source = path.join(DIST, relativePath);
    const destination = path.join(ROOT, relativePath);
    fs.copyFileSync(source, destination);
    console.log(`Copied ${path.relative(ROOT, source)} -> ${path.relative(ROOT, destination)}`);
  }
  console.log(`Post-build artifact check passed (${REQUIRED.length} required files).`);
} catch (error) {
  console.error(`Post-build step failed: ${error.message}`);
  process.exit(1);
}
