#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const extracted = path.join(ROOT, 'audit-output', 'tiktok-search-evaluator-extracted.txt');
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
  fail('audit-output/tiktok-search-evaluator-extracted.txt is missing.');
} else {
  const text = fs.readFileSync(extracted, 'utf8').replace(/\s+/g, ' ').trim();
  for (const needle of [
    'Mario Marcolongo',
    'Italian Search Quality & Content Evaluation Specialist',
    'Search relevance',
    'Native Italian',
    'English-C1',
    'Scientific Content Quality & Operations Contractor',
    'Entropy for Life',
    'Jun 2023',
    '80 documented published content contributions',
    '55 YouTube videos',
    '4 co-authored articles',
    '21 short-form pieces',
    '4,317 auditable contributions',
    'Model-Behavior Evaluator',
    '255 submissions',
    'Creator & AI-Assisted Technical Product Operator',
    'Notandia (formerly MDPI Filter)',
    'May 2025',
    'Crossref/Retraction Watch',
    'ambiguity skipping',
    'false-positive boundaries',
    'Documented standards and validation workflow',
    '55 verified research-participation resources',
    'degree not completed',
    '+39 000 000 0000',
    'Search and relevance analysis',
    'Standards-based evaluation',
    'Italian-market content quality',
    'Page 1 of 2',
    'Page 2 of 2'
  ]) assertContains(text, needle);

  for (const prohibited of [
    'completed bachelor',
    'production search evaluator',
    'formal search evaluator experience',
    'managed a QA team',
    'hiring authority',
    'independent software developer'
  ]) assertNotContains(text, prohibited);
}

if (failures) {
  console.error(`\nTikTok search-evaluator PDF ATS verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('TikTok search-evaluator PDF ATS verification passed.');
