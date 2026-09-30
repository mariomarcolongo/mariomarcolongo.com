#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { createHash } = require('node:crypto');
const { startStaticServer } = require('./lib/static-server.js');
const P = require('../data/source.js').presence;
const M = require('../data/work-media.json');
const G = P.aiEvaluationSnapshot;
const DIST = path.resolve(__dirname, '../dist');
const local = process.argv.includes('--local');
const attempts = Number(process.env.LIVE_VERIFY_ATTEMPTS || (local ? 1 : 18));
const delayMs = Number(process.env.LIVE_VERIFY_DELAY_MS || 10000);
const releaseId = process.env.LIVE_RELEASE_ID || `release-${Date.now()}`;
const pages = [
  { path: '/', required: [P.name, `#${G.provingGround.rank}`, G.provingGround.percentile,
    G.displayDate, `${G.provingGround.totalBreaks} platform-recorded breaks`,
    M.screenshots.hypermandala.image, '/work/entropy', '/work/atlas', '/notandia', '/cv'] },
  { path: '/ai-evaluation', required: [G.evidencePath, G.displayDate, '/cv-ai'] },
  { path: G.evidencePath, required: [G.displayDate, `#${G.provingGround.rank}`,
    G.provingGround.percentile, `${G.provingGround.totalBreaks} platform-recorded`,
    `#${G.arena.rank}`, G.originalImage, G.originalSha256] },
  { path: '/work/hypermandala', required: [M.screenshots.hypermandala.image,
    'https://github.com/mariomarcolongo/hypermandala', 'experimental'] },
  ...Object.entries(P.cv).map(([key, cv]) => ({ path: P.resumeRoutes[key], required:
    [P.name, cv.title, `/${cv.filename}`, P.orcidUrl, '3 ECTS', 'non-degree'] }))
];
const assets = [...new Set([M.screenshots.hypermandala.image, G.originalImage,
  '/profile.json', `/evidence/gray-swan-profile-${G.observedAt}.json`,
  ...Object.values(P.cv).map((cv) => `/${cv.filename}`)])];
const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');
const entities = { amp: '&', '#39': "'", apos: "'", quot: '"', lt: '<', gt: '>' };
const htmlText = (value) => value.replace(/&(amp|#39|apos|quot|lt|gt);/g,
  (_, entity) => entities[entity]);

async function fetchBytes(baseUrl, pathname, attempt) {
  const url = new URL(`${baseUrl}${pathname}`);
  url.searchParams.set('release', releaseId);
  url.searchParams.set('attempt', String(attempt));
  const response = await fetch(url, {
    headers: { 'cache-control': 'no-cache, no-store, max-age=0', pragma: 'no-cache',
      'user-agent': 'mariomarcolongo-live-release-verifier/2.0' },
    cache: 'no-store', redirect: 'follow', signal: AbortSignal.timeout(15000)
  });
  if (!response.ok) throw new Error(`${pathname} returned HTTP ${response.status}`);
  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  assert.ok(Number.isInteger(attempts) && attempts > 0, 'Attempts must be a positive integer');
  assert.ok(Number.isFinite(delayMs) && delayMs >= 0 && delayMs <= 60000,
    'Retry delay must be between 0 and 60000 ms');
  const expectedHashes = new Map(assets.map((asset) =>
    [asset, sha256(fs.readFileSync(path.join(DIST, asset)))]));
  const server = local ? await startStaticServer(DIST) : null;
  const baseUrl = (server?.origin || process.env.LIVE_BASE_URL || P.canonicalUrl).replace(/\/$/, '');
  let latestError;
  try {
    for (let attempt = 1; attempt <= attempts; attempt += 1) {
      try {
        for (const page of pages) {
          const body = htmlText((await fetchBytes(baseUrl, page.path, attempt)).toString('utf8'));
          const missing = page.required.filter((value) => !body.includes(value));
          assert.equal(missing.length, 0, `${page.path}: missing ${missing.join(', ')}`);
          assert.ok(!/private\.local|href=["'][^"']*\/private\//.test(body),
            `${page.path}: private contact or application reference`);
        }
        for (const [asset, expected] of expectedHashes) {
          assert.equal(sha256(await fetchBytes(baseUrl, asset, attempt)), expected,
            `${asset}: served content differs from this build`);
        }
        console.log(`PASS: ${pages.length} current routes and ${assets.length} exact assets verified at ${baseUrl}.`);
        return;
      } catch (error) {
        latestError = error;
        console.log(`Attempt ${attempt}/${attempts}: ${error.message}`);
        if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    throw new Error(`Release did not become current: ${latestError?.message || 'unknown error'}`);
  } finally {
    if (server) await server.close();
  }
}

main().catch((error) => {
  console.error(`FAIL: ${error.message}`);
  process.exitCode = 1;
});
