#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const relativePath = 'dist/cv-tiktok-safety-operations.html';
const fullPath = path.join(ROOT, relativePath);

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function assertContains(content, needle, label = relativePath) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}

function assertNotContains(content, needle, label = relativePath) {
  if (content.includes(needle)) fail(`${label} contains unsupported or prohibited text: ${needle}`);
}

if (!fs.existsSync(fullPath)) {
  console.error(`FAIL: Missing ${relativePath}. Run npm run build first.`);
  process.exit(1);
}

const html = fs.readFileSync(fullPath, 'utf8');
const text = html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&')
  .replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/\s+/g, ' ')
  .trim();

for (const needle of [
  'AI Safety Data Quality & Operations Specialist',
  'Safety model evaluation · quality operations · workflow ownership · media content quality',
  'Italian/EU citizen available to relocate to Dublin',
  'Scientific Content Quality & Operations Contractor',
  'Official Entropy for Life work record',
  '80 documented published content contributions',
  '55 YouTube videos',
  '4 co-authored articles',
  '21 short-form pieces',
  '54K TikTok followers',
  '36.5M YouTube channel views',
  'Model-Behavior Evaluator',
  '#74 on the Gray Swan Proving Ground leaderboard',
  '113 platform-displayed total breaks',
  'Founder & Research-Workflow Owner',
  'Volunteer Focus-Group Co-Facilitator & Research Operations Contributor',
  'lead or co-facilitator',
  'approximately 4–5 recorded Zoom focus-group sessions',
  'Page 1 of 2',
  'Page 2 of 2',
  'C1 overall'
]) assertContains(text, needle);

for (const needle of [
  'managed a QA team',
  'managed labeling projects',
  'one year of Trust & Safety leadership',
  'major tech company leadership',
  'Bachelor’s degree',
  'Team Leader — TikTok',
  'production labeling-team leadership'
]) assertNotContains(text, needle);

assertContains(html, 'id="cvPhoneSlot"');
assertContains(html, '<meta name="robots" content="noindex,nofollow"');
assertContains(html, 'https://entropyforlife.it/mario-marcolongo-entropy-for-life/');
assertContains(html, 'https://yourselftoscience.org/stats');
assertContains(html, 'https://mariomarcolongo.com/security.html');
assertNotContains(html, 'localhost');
assertNotContains(html, '127.0.0.1');

if (!process.exitCode) console.log('TikTok safety operations CV verification passed.');
