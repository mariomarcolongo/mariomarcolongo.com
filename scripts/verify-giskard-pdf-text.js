#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const TEXT_PATH = path.join(ROOT, 'audit-output', 'giskard-cv-extracted.txt');

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
}

function pass(message) {
  console.log(`PASS: ${message}`);
}

if (!fs.existsSync(TEXT_PATH)) {
  fail('ATS extraction output is missing: audit-output/giskard-cv-extracted.txt');
  process.exit(1);
}

const raw = fs.readFileSync(TEXT_PATH, 'utf8');
const text = raw.replace(/\s+/g, ' ').trim();
const normalized = text.toLowerCase();

if (!text) fail('Extracted Giskard PDF text is empty.');
if (text.includes('\uFFFD')) fail('Extracted Giskard PDF text contains replacement characters.');
if (raw.includes('\0')) fail('Extracted Giskard PDF text contains null bytes.');

for (const expected of [
  'Mario Marcolongo',
  'AI Evaluation & Model Behavior Specialist',
  'Professional Summary',
  'Core Competencies',
  'Machine Learning / Artificial Intelligence concepts',
  'Cybersecurity fundamentals: threat modeling, vulnerability assessment',
  'Relevant Experience',
  'Model-Behavior Evaluator',
  '113 platform-recorded total breaks',
  'Creator & Research-Integrity Product Operator',
  'Crossref/Retraction Watch',
  'Additional Relevant Experience',
  'Scientific Research, Fact-Checking & Technical Operations Contractor',
  'Selected Technical and Open-Source Projects',
  'English Wikipedia Link Converter',
  'Operate a deployed Python service on AWS Lambda',
  'Yourself to Science',
  'Additional Evidence',
  'Training, Languages and Work Authorization',
  'No sponsorship required',
  'Open to relocating to Paris'
]) {
  if (!normalized.includes(expected.toLowerCase())) fail(`Extracted Giskard PDF text is missing: ${expected}`);
}

const orderedMarkers = [
  'Mario Marcolongo',
  'Professional Summary',
  'Core Competencies',
  'Relevant Experience',
  'Model-Behavior Evaluator',
  'Creator & Research-Integrity Product Operator',
  'Additional Relevant Experience',
  'Scientific Research, Fact-Checking & Technical Operations Contractor',
  'Selected Technical and Open-Source Projects',
  'English Wikipedia Link Converter',
  'Yourself to Science',
  'Additional Evidence',
  'Training, Languages and Work Authorization'
];

let previousIndex = -1;
for (const marker of orderedMarkers) {
  const index = normalized.indexOf(marker.toLowerCase());
  if (index === -1) continue;
  if (index <= previousIndex) fail(`Extracted Giskard PDF reading order is not linear at: ${marker}`);
  previousIndex = index;
}

for (const prohibited of [
  'Role-aligned contribution',
  'Passionate about building robust solutions',
  'Hungry for learning',
  'Empathetic team player',
  'Salary:',
  '60 K€',
  '0.1 - 0.3%'
]) {
  if (normalized.includes(prohibited.toLowerCase())) fail(`Extracted Giskard PDF contains cover-letter or vacancy copy: ${prohibited}`);
}

const pageMarkers = (text.match(/page [12] of 2/gi) || []);
if (pageMarkers.length !== 2) fail(`Expected two extracted page markers; found ${pageMarkers.length}.`);

if (!process.exitCode) pass('Giskard PDF text extraction is complete, linear and ATS-oriented.');
