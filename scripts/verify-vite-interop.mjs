#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import config from '../astro.config.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const targets = [
  'data/release-data.js',
  'data/career-positioning.js',
  'data/multilingual-positioning.js'
];
const plugin = config.vite?.plugins?.find(
  (candidate) => candidate.name === 'mario-legacy-data-commonjs-interop'
);

if (!plugin) {
  console.error('FAIL: Missing Vite legacy-data interop plugin.');
  process.exit(1);
}

let failures = 0;
for (const relativePath of targets) {
  const source = fs.readFileSync(path.join(ROOT, relativePath), 'utf8');
  const result = await plugin.transform(source, path.join(ROOT, relativePath));
  const transformed = typeof result === 'string' ? result : result?.code;

  if (!transformed) {
    failures += 1;
    console.error(`FAIL: ${relativePath} was not transformed for Vite.`);
    continue;
  }
  if (/\brequire\s*\(/.test(transformed) || transformed.includes('module.exports')) {
    failures += 1;
    console.error(`FAIL: ${relativePath} retains CommonJS runtime syntax after the Vite transform.`);
  }
  if (!transformed.includes('export default')) {
    failures += 1;
    console.error(`FAIL: ${relativePath} has no ESM default export after the Vite transform.`);
  }
}

if (failures) process.exit(1);
console.log('Vite legacy-data interop verification passed.');
