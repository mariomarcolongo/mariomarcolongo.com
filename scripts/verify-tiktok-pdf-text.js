#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const extractedPath = path.join(ROOT, 'audit-output/tiktok-cv-extracted.txt');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

if (!fs.existsSync(extractedPath)) {
  console.error('FAIL: Missing audit-output/tiktok-cv-extracted.txt');
  process.exit(1);
}

const text = fs.readFileSync(extractedPath, 'utf8').replace(/\s+/g, ' ').trim();

for (const needle of [
  'Mario Marcolongo',
  'AI Safety Data Quality & Operations Specialist',
  'Scientific Content Quality & Operations Contractor',
  'Entropy for Life',
  '80 documented published content contributions',
  '55 YouTube videos',
  '21 short-form pieces',
  'Model-Behavior Evaluator',
  '113 platform-displayed total breaks',
  'Founder & Research-Workflow Owner',
  'Volunteer Focus-Group Co-Facilitator & Research Operations Contributor',
  'Safety model evaluation',
  'Quality operations',
  'Media content quality',
  'Workflow and project ownership',
  'Italian',
  'English',
  'C1 overall',
  'Page 1 of 2',
  'Page 2 of 2'
]) {
  if (!text.includes(needle)) fail(`ATS extraction is missing: ${needle}`);
}

for (const unsupported of [
  'managed a QA team',
  'managed labeling projects',
  'one year of Trust & Safety leadership',
  'major tech company leadership'
]) {
  if (text.includes(unsupported)) fail(`ATS extraction contains unsupported claim: ${unsupported}`);
}

if (!process.exitCode) console.log('TikTok CV ATS text extraction verification passed.');
