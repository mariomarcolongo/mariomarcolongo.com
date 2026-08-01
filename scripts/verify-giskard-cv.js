#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'dist', 'cv-giskard.html');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

if (!fs.existsSync(HTML_PATH)) {
  fail('dist/cv-giskard.html is missing.');
  process.exit(1);
}

const html = fs.readFileSync(HTML_PATH, 'utf8');
const text = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replaceAll('&amp;', '&')
  .replaceAll('&#39;', "'")
  .replaceAll('&quot;', '"')
  .replaceAll('&gt;', '>')
  .replaceAll('&lt;', '<')
  .replace(/\s+/g, ' ')
  .trim();

for (const expected of [
  'Giskard Application CV',
  'AI Evaluation & Model Behavior Specialist',
  'Generative AI and LLM evaluation',
  'Machine Learning / Artificial Intelligence concepts',
  'Cybersecurity fundamentals: threat modeling, vulnerability assessment',
  '#74 globally',
  '113 platform-recorded total breaks',
  'attacker goal, system context, trust boundary, required preconditions and plausible impact',
  'Creator & Research-Integrity Product Operator',
  'Crossref/Retraction Watch',
  'English Wikipedia Link Converter',
  'Operate a deployed Python service on AWS Lambda',
  'Selected Technical and Open-Source Projects',
  'Training, Languages and Work Authorization',
  'Open to relocating to Paris',
  'No sponsorship required',
  'Page 1 of 2',
  'Page 2 of 2'
]) {
  if (!text.includes(expected)) fail(`Giskard CV is missing expected content: ${expected}`);
}

for (const prohibited of [
  'penetration tester',
  'security engineer',
  'formal cybersecurity audit experience',
  'independent software developer',
  'bachelor’s degree',
  "bachelor's degree",
  'master’s degree',
  "master's degree",
  'worldwide relocation',
  'International B2B contracting',
  'Role-aligned contribution',
  'Passionate about building robust solutions',
  'Hungry for learning',
  'Empathetic team player',
  'Salary:',
  '60 K€',
  '0.1 - 0.3%'
]) {
  if (text.toLowerCase().includes(prohibited.toLowerCase())) fail(`Giskard CV contains prohibited overclaim, generic copy or cover-letter content: ${prohibited}`);
}

if (/\+39[\s\d()-]{8,}/.test(html) || /tel:\+39[\d-]{8,}/.test(html)) {
  fail('Giskard public HTML contains an injected Italian phone number.');
}
if (!html.includes('content="noindex,nofollow"')) fail('Giskard CV must remain unlisted with noindex,nofollow.');
if (!html.includes('id="cvPhoneSlot"')) fail('Giskard CV is missing the private phone-injection slot.');
if (!html.includes('data-ats-layout="single-column"')) fail('Giskard CV is missing the explicit single-column ATS layout marker.');
if ((html.match(/class="ats-page"/g) || []).length !== 2) fail('Giskard CV must render exactly two ATS pages.');
if ((html.match(/class="ats-page-footer"/g) || []).length !== 2) fail('Giskard CV must render exactly two internal page labels.');

const documentMatch = html.match(/<div class="ats-document"[\s\S]*?<\/div>\s*<\/div>\s*<script/);
if (!documentMatch) {
  fail('Unable to isolate the ATS CV document for structural checks.');
} else {
  const documentHtml = documentMatch[0];
  if (/<table\b/i.test(documentHtml)) fail('ATS CV document must not use layout tables.');
  for (const prohibitedClass of ['application-metrics', 'application-evidence', 'application-two-col']) {
    if (documentHtml.includes(prohibitedClass)) fail(`ATS CV document contains multi-column/card structure: ${prohibitedClass}`);
  }
}

const headingOrder = [
  'Professional Summary',
  'Core Competencies',
  'Relevant Experience',
  'Additional Relevant Experience',
  'Selected Technical and Open-Source Projects',
  'Additional Evidence',
  'Training, Languages and Work Authorization'
];
let previousIndex = -1;
for (const heading of headingOrder) {
  const index = text.indexOf(heading);
  if (index === -1) {
    fail(`ATS CV is missing standard heading: ${heading}`);
  } else if (index <= previousIndex) {
    fail(`ATS CV heading order is not linear at: ${heading}`);
  }
  previousIndex = index;
}

const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
if (!jsonLdBlocks.length) fail('Giskard CV is missing JSON-LD.');
for (const [, block] of jsonLdBlocks) {
  try {
    JSON.parse(block.trim());
  } catch (error) {
    fail(`Giskard CV has invalid JSON-LD: ${error.message}`);
  }
}

if (!process.exitCode) pass('Giskard CV ATS structure, role evidence, cover-letter separation, privacy and two-page format verified.');
