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
  'AI-agent red teaming',
  '#74 globally',
  '113 platform-recorded total breaks',
  'attacker goals, trust boundaries, preconditions and potential impact',
  'Creator & Research-Integrity Product Operator',
  'Crossref/Retraction Watch',
  'Python and API operations',
  'Open to relocating to Paris',
  'No sponsorship required',
  'Role-aligned contribution',
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
  'International B2B contracting'
]) {
  if (text.toLowerCase().includes(prohibited.toLowerCase())) fail(`Giskard CV contains prohibited overclaim or generic copy: ${prohibited}`);
}

if (/\+39[\s\d()-]{8,}/.test(html) || /tel:\+39[\d-]{8,}/.test(html)) {
  fail('Giskard public HTML contains an injected Italian phone number.');
}
if (!html.includes('content="noindex,nofollow"')) fail('Giskard CV must remain unlisted with noindex,nofollow.');
if (!html.includes('id="cvPhoneSlot"')) fail('Giskard CV is missing the private phone-injection slot.');
if ((html.match(/class="application-page"/g) || []).length !== 2) fail('Giskard CV must render exactly two application pages.');
if ((html.match(/class="application-footer-note"/g) || []).length !== 2) fail('Giskard CV must render exactly two internal page labels.');

const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
if (!jsonLdBlocks.length) fail('Giskard CV is missing JSON-LD.');
for (const [, block] of jsonLdBlocks) {
  try {
    JSON.parse(block.trim());
  } catch (error) {
    fail(`Giskard CV has invalid JSON-LD: ${error.message}`);
  }
}

if (!process.exitCode) pass('Giskard application CV content, evidence boundaries, privacy and two-page structure verified.');
