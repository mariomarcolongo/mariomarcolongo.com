#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'dist', 'cv-bmj.html');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

if (!fs.existsSync(HTML_PATH)) {
  fail('dist/cv-bmj.html is missing.');
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
  'BMJ Insights Manager Application CV',
  'Publishing Data & Insights Specialist',
  'Scholarly metadata',
  'Crossref and Retraction Watch',
  'Tableau Public',
  '70+',
  'Role-relevant evidence',
  'Creator & Research-Integrity Product Operator',
  'Founder & Research-Workflow Owner',
  'Scientific Content Quality, Analysis & Publishing Operations Contractor',
  '37 unique Wikidata items',
  '80 documented published contributions',
  'retractions, corrections and expressions of concern',
  'UK work authorization not currently held',
  'Page 1 of 2',
  'Page 2 of 2'
]) {
  if (!text.includes(expected)) fail(`BMJ CV is missing expected content: ${expected}`);
}

for (const prohibited of [
  'Insights Manager at BMJ',
  'line manager',
  'managed two data analysts',
  'ScholarOne expert',
  'read and publish deal expert',
  'journal pricing strategist',
  'revenue and cost allocation expert',
  'commercial academic publishing expert',
  'senior management presentations',
  'no sponsorship required',
  'authorized to work in the UK'
]) {
  if (text.toLowerCase().includes(prohibited.toLowerCase())) {
    fail(`BMJ CV contains an unsupported or misleading claim: ${prohibited}`);
  }
}

if (/\+39[\s\d()-]{8,}/.test(html) || /tel:\+39[\d-]{8,}/.test(html)) {
  fail('BMJ public HTML contains an injected Italian phone number.');
}
if (!html.includes('content="noindex,nofollow"')) fail('BMJ CV must remain unlisted with noindex,nofollow.');
if (!html.includes('id="cvPhoneSlot"')) fail('BMJ CV is missing the private phone-injection slot.');
if ((html.match(/class="application-page"/g) || []).length !== 2) fail('BMJ CV must render exactly two standard application pages.');
if ((html.match(/class="application-footer-note"/g) || []).length !== 2) fail('BMJ CV must render exactly two internal page labels.');
if (html.includes('data-ats-layout="single-column"')) fail('BMJ CV should use the standard application design, not the separate ATS-only layout.');

const headingOrder = [
  'Role-relevant evidence',
  'Relevant experience',
  'Additional relevant experience',
  'Publishing data evidence',
  'Capabilities',
  'Role-aligned strengths',
  'Credentials & language'
];
let previousIndex = -1;
for (const heading of headingOrder) {
  const index = text.indexOf(heading);
  if (index === -1) fail(`BMJ CV is missing standard heading: ${heading}`);
  else if (index <= previousIndex) fail(`BMJ CV heading order is not linear at: ${heading}`);
  previousIndex = index;
}

if (!process.exitCode) pass('BMJ CV content, evidence boundaries, privacy, standard design and two-page format verified.');
