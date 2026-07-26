#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { applyPresentationPatches } = require('./apply-portfolio-presentation.js');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const REQUIRED = [
  'index.html',
  'integrity.html',
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
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
  'media/work/gray-swan-profile-2026-07-26.svg',
  'evidence/gray-swan-profile-2026-07-26.html',
  'evidence/gray-swan-profile-2026-07-26.json'
];
const ROOT_HTML_MIRRORS = [
  'index.html',
  'integrity.html',
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
  'security.html'
];
const CV_FILES = ['cv.html', 'cv-resume.html', 'cv-research.html', 'cv-editorial.html', 'cv-integrity.html'];

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
      .replaceAll('25 July 2026', '26 July 2026')
      .replaceAll('#370', '#371')
      .replaceAll('250K+', '267K')
      .replaceAll('460K+', '480K+')
      .replaceAll('250,000+', '267,000+')
      .replaceAll('460,000+', '480,000+');
    fs.writeFileSync(filePath, normalized);
  }
}

function addIndexStylesheet(href) {
  const filePath = path.join(DIST, 'index.html');
  const current = fs.readFileSync(filePath, 'utf8');
  if (current.includes(href)) return;
  if (!current.includes('</head>')) throw new Error('dist/index.html has no closing head tag');
  fs.writeFileSync(filePath, current.replace('</head>', `<link rel="stylesheet" href="${href}"></head>`));
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
  addIndexStylesheet('/styles/portfolio-presentation-v10-mobile-fix.css');
  addIndexStylesheet('/styles/portfolio-presentation-v11.css');
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
