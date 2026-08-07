#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const extracted = path.join(ROOT, 'audit-output', 'tiktok-search-qa-extracted.txt');
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}
function assertContains(content, needle) {
  if (!content.includes(needle)) fail(`ATS extraction is missing: ${needle}`);
}
function assertNotContains(content, needle) {
  if (content.includes(needle)) fail(`ATS extraction contains prohibited text: ${needle}`);
}

if (!fs.existsSync(extracted)) {
  fail('audit-output/tiktok-search-qa-extracted.txt is missing.');
} else {
  const text = fs.readFileSync(extracted, 'utf8').replace(/\s+/g, ' ').trim();
  for (const needle of [
    'Mario Marcolongo',
    'Search Quality & Evaluation Operations Specialist',
    'Quality inspection',
    'Native Italian',
    'English-C1',
    'Scientific Content Quality & Operations Contractor',
    '80 documented published content contributions',
    'Model-Behavior Evaluator',
    'top 6%',
    '113 platform-displayed breaks',
    '255 submissions',
    'Creator & AI-Assisted Technical Product Operator',
    'Notandia (formerly MDPI Filter)',
    'ambiguity skipping',
    'false-positive boundaries',
    'Crossref/Retraction Watch',
    'Scientific Contributor & Structured-Data Editor',
    '4,317 auditable contributions',
    'Documented standards and validation workflow',
    'bad-case analysis',
    'Standards alignment',
    'case calibration',
    'degree not completed',
    'Page 1 of 2',
    'Page 2 of 2'
  ]) assertContains(text, needle);

  for (const prohibited of [
    'completed bachelor',
    'TikTok employee',
    'formal QA calibration experience',
    'managed specialists',
    'production search QA experience',
    'independent software developer'
  ]) assertNotContains(text, prohibited);
}

if (failures) {
  console.error(`\nTikTok Search QA PDF ATS verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('TikTok Search QA PDF ATS verification passed.');
