#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

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
  'site.webmanifest'
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

function assertNonEmpty(relativePath) {
  const filePath = path.join(DIST, relativePath);
  if (!fs.existsSync(filePath)) throw new Error(`Required build artifact is missing: dist/${relativePath}`);
  const stat = fs.statSync(filePath);
  if (!stat.isFile() || stat.size === 0) throw new Error(`Required build artifact is empty or not a file: dist/${relativePath}`);
}

try {
  REQUIRED.forEach(assertNonEmpty);
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
