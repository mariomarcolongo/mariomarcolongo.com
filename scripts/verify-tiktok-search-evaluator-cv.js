#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const file = path.join(ROOT, 'dist', 'cv-tiktok-search-evaluator.html');
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}
function assertContains(content, needle, label) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}
function assertNotContains(content, needle, label) {
  if (content.includes(needle)) fail(`${label} contains prohibited text: ${needle}`);
}
function normalizeHtmlText(content) {
  return String(content)
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

if (!fs.existsSync(file)) {
  fail('dist/cv-tiktok-search-evaluator.html is missing. Run npm run build first.');
} else {
  const html = fs.readFileSync(file, 'utf8');
  const text = normalizeHtmlText(html);

  for (const needle of [
    'Italian Search Quality & Content Evaluation Specialist',
    'Search relevance · intent and source analysis · standards-based evaluation · Italian-market expertise',
    'Native Italian and English-C1',
    'search-evaluation-adjacent',
    'Scientific Content Quality & Operations Contractor',
    '80 documented published content contributions',
    '55 YouTube videos',
    '4 co-authored articles',
    '21 short-form pieces',
    '4,317 auditable contributions',
    '255 submissions',
    'Italian/EU citizen',
    'Open to relocating to Bucharest',
    'degree not completed',
    'EF SET English Certificate',
    'Search and relevance analysis',
    'Standards-based evaluation',
    'Italian-market content quality',
    'Sensitive-content and policy awareness',
    'Evaluation record ↗ | Public profile ↗',
    'Page 1 of 2',
    'Page 2 of 2'
  ]) assertContains(text, needle, 'TikTok search-evaluator CV');

  for (const needle of [
    'https://entropyforlife.it/mario-marcolongo-entropy-for-life/',
    'https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo',
    'https://mariomarcolongo.com/integrity.html',
    'https://mariomarcolongo.com/security.html',
    'id="cvPhoneSlot"',
    'class="application-link-separator"',
    '<meta name="robots" content="noindex,nofollow"'
  ]) assertContains(html, needle, 'TikTok search-evaluator CV HTML');

  for (const prohibited of [
    'Bachelor’s degree',
    "Bachelor's degree",
    'completed bachelor',
    'production search evaluator',
    'formal search evaluator experience',
    'TikTok employee',
    'Search Evaluation Team Lead',
    'managed a QA team',
    'hiring authority',
    'production labeling leadership'
  ]) assertNotContains(text, prohibited, 'TikTok search-evaluator CV');

  const pageCount = (html.match(/class="application-page"/g) || []).length;
  if (pageCount !== 2) fail(`TikTok search-evaluator CV must render exactly two application pages; found ${pageCount}.`);
}

if (failures) {
  console.error(`\nTikTok search-evaluator CV verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('TikTok search-evaluator CV verification passed.');
