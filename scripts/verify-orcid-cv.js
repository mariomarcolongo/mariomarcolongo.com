#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const HTML_PATH = path.join(ROOT, 'dist', 'cv-orcid.html');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

if (!fs.existsSync(HTML_PATH)) {
  fail('dist/cv-orcid.html is missing.');
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
  'Scholarly Infrastructure & Technical Support Specialist',
  'API troubleshooting · research workflows · metadata quality · stakeholder support',
  'Member integration and API support',
  'Scholarly infrastructure implementation and workflow guidance',
  'API troubleshooting and technical operations',
  'Available to relocate to Spain before start',
  'European business hours',
  'Page 1 of 2',
  'Page 2 of 2',
  'C1 overall',
  'Yourself to Science',
  'Notandia (formerly MDPI Filter)',
  'English Wikipedia Link Converter',
  'FAIRsharing',
  'Zenodo',
  'HTTP',
  'REST',
  'JSON'
]) {
  if (!text.includes(expected)) fail(`ORCID CV is missing expected content: ${expected}`);
}

for (const prohibited of [
  'Zendesk experience',
  'Salesforce experience',
  'independent software developer',
  'bachelor’s degree',
  "bachelor's degree",
  'master’s degree',
  "master's degree"
]) {
  if (html.includes(prohibited)) fail(`ORCID public HTML contains prohibited content: ${prohibited}`);
}

if (/\+39[\s\d()-]{8,}/.test(html) || /tel:\+39[\d-]{8,}/.test(html)) {
  fail('ORCID public HTML contains an injected Italian phone number.');
}
if (html.includes('href="https://github.com/orgs/mdpi-filter/repositories"')) {
  fail('ORCID public HTML contains the retired MDPI Filter organization URL as a clickable link.');
}
if (html.includes('href="/mdpi-filter.html"')) fail('ORCID CV still links to the legacy MDPI Filter alias.');
if (!html.includes('href="/notandia.html"')) fail('ORCID CV is missing the canonical Notandia project link.');
if (!html.includes('content="noindex,nofollow"')) fail('ORCID CV must remain unlisted with noindex,nofollow.');
if (!html.includes('id="cvPhoneSlot"')) fail('ORCID CV is missing the private phone-injection slot.');
if ((html.match(/class="application-page"/g) || []).length !== 2) fail('ORCID CV must render exactly two application pages.');
if ((html.match(/class="application-footer-note"/g) || []).length !== 2) fail('ORCID CV must render exactly two internal page labels.');

const jsonLdBlocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
if (!jsonLdBlocks.length) fail('ORCID CV is missing JSON-LD.');
for (const [, block] of jsonLdBlocks) {
  try {
    JSON.parse(block.trim());
  } catch (error) {
    fail(`ORCID CV has invalid JSON-LD: ${error.message}`);
  }
}

if (!process.exitCode) pass('ORCID application CV content, privacy boundary, canonical Notandia link and structure verified.');
