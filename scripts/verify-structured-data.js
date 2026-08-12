#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
let failures = 0;
let checkedPages = 0;
let checkedBlocks = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}

function hasType(node, allowed) {
  if (!node || typeof node !== 'object') return false;
  const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
  return types.some((type) => allowed.includes(type));
}

function hasText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function collectObjects(value, output = []) {
  if (!value || typeof value !== 'object') return output;
  output.push(value);
  if (Array.isArray(value)) {
    for (const item of value) collectObjects(item, output);
  } else {
    for (const child of Object.values(value)) collectObjects(child, output);
  }
  return output;
}

function resolveEntity(reference, objects, allowedTypes) {
  if (!reference || typeof reference !== 'object') return null;
  if (hasType(reference, allowedTypes) && hasText(reference.name)) return reference;
  const id = reference['@id'];
  if (!hasText(id)) return null;
  return objects.find((candidate) =>
    candidate !== reference &&
    candidate &&
    candidate['@id'] === id &&
    hasType(candidate, allowedTypes) &&
    hasText(candidate.name)
  ) || null;
}

function extractJsonLd(html, label) {
  const regex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const blocks = [];
  let match;
  let index = 0;
  while ((match = regex.exec(html)) !== null) {
    index += 1;
    try {
      blocks.push(JSON.parse(match[1].trim()));
      checkedBlocks += 1;
    } catch (error) {
      fail(`${label} has invalid JSON-LD block ${index}: ${error.message}`);
    }
  }
  return blocks;
}

function isNoIndex(html) {
  return /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html) ||
    /<meta\b[^>]*content=["'][^"']*noindex[^"']*["'][^>]*name=["']robots["']/i.test(html);
}

function validateIndexablePage(filePath) {
  const relative = path.relative(DIST, filePath).replaceAll(path.sep, '/');
  const html = fs.readFileSync(filePath, 'utf8');
  const blocks = extractJsonLd(html, `dist/${relative}`);
  if (!blocks.length || isNoIndex(html)) return;

  checkedPages += 1;
  const objects = blocks.flatMap((block) => collectObjects(block));

  for (const node of objects.filter((item) => hasType(item, ['ProfilePage']))) {
    const entity = resolveEntity(node.mainEntity, objects, ['Person', 'Organization']);
    if (!entity) {
      fail(`dist/${relative} ProfilePage.mainEntity must resolve to a named Person or Organization`);
    }
  }

  for (const node of objects.filter((item) => hasType(item, ['Dataset']))) {
    if (!hasText(node.name)) fail(`dist/${relative} Dataset is missing name`);
    if (!hasText(node.description)) fail(`dist/${relative} Dataset "${node.name || '(unnamed)'}" is missing description`);
    const creator = resolveEntity(node.creator, objects, ['Person', 'Organization']);
    if (!creator) fail(`dist/${relative} Dataset "${node.name || '(unnamed)'}" creator must resolve to a named Person or Organization`);
  }
}

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.isFile() && entry.name.endsWith('.html')) validateIndexablePage(fullPath);
  }
}

if (!fs.existsSync(DIST)) {
  console.error('FAIL: dist/ does not exist; run the site build first.');
  process.exit(1);
}

walk(DIST);

if (failures) {
  console.error(`\nStructured-data verification failed with ${failures} issue(s).`);
  process.exit(1);
}

console.log(`Structured-data verification passed (${checkedPages} indexable pages, ${checkedBlocks} JSON-LD blocks parsed).`);
