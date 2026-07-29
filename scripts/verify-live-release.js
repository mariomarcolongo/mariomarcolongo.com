#!/usr/bin/env node

const baseUrl = (process.env.LIVE_BASE_URL || 'https://mariomarcolongo.com').replace(/\/$/, '');
const attempts = Number.parseInt(process.env.LIVE_VERIFY_ATTEMPTS || '18', 10);
const delayMs = Number.parseInt(process.env.LIVE_VERIFY_DELAY_MS || '10000', 10);
const releaseId = process.env.LIVE_RELEASE_ID || `v2026.07.29-${Date.now()}`;

const pages = [
  {
    path: '/',
    required: [
      '113',
      '#74',
      'top 6%',
      '#365',
      '29 July 2026',
      '/media/work/gray-swan-profile-2026-07-29-1600.webp'
    ],
    forbidden: [
      '<span class="v10-gs-caption"><span><strong>#75</strong>',
      '<span><strong>110</strong><small>Total breaks</small></span>',
      '<span><strong>#371</strong><small>Arena rank</small></span>'
    ]
  },
  {
    path: '/security',
    required: [
      '29 July 2026',
      '#74',
      '113',
      '#365',
      '28 unique breaks',
      '1,120 points',
      '/evidence/gray-swan-2026-07-29/'
    ],
    forbidden: [
      'Counts and ranking are platform-reported snapshots as of 26 July 2026',
      '#75 · top 6% · 26 July 2026'
    ]
  },
  {
    path: '/evidence/gray-swan-2026-07-29/',
    required: [
      'Gray Swan profile evidence',
      '#74',
      'Top 6%',
      '113',
      '255',
      '03:35:50 CEST'
    ],
    forbidden: []
  }
];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchText(pathname, attempt) {
  const separator = pathname.includes('?') ? '&' : '?';
  const url = `${baseUrl}${pathname}${separator}release=${encodeURIComponent(releaseId)}&attempt=${attempt}`;
  const response = await fetch(url, {
    headers: {
      'cache-control': 'no-cache, no-store, max-age=0',
      pragma: 'no-cache',
      'user-agent': 'mariomarcolongo-live-release-verifier/1.0'
    },
    cache: 'no-store',
    redirect: 'follow'
  });
  const body = await response.text();
  if (!response.ok) throw new Error(`${pathname} returned HTTP ${response.status}`);
  return body;
}

function validate(pathname, body, required, forbidden) {
  const missing = required.filter((value) => !body.includes(value));
  const stale = forbidden.filter((value) => body.includes(value));
  if (missing.length || stale.length) {
    const details = [];
    if (missing.length) details.push(`missing ${missing.map(JSON.stringify).join(', ')}`);
    if (stale.length) details.push(`contains stale ${stale.map(JSON.stringify).join(', ')}`);
    throw new Error(`${pathname}: ${details.join('; ')}`);
  }
}

let latestError = null;
for (let attempt = 1; attempt <= attempts; attempt += 1) {
  try {
    for (const page of pages) {
      const body = await fetchText(page.path, attempt);
      validate(page.path, body, page.required, page.forbidden);
    }
    console.log(`PASS: live release ${releaseId} verified at ${baseUrl} on attempt ${attempt}.`);
    process.exit(0);
  } catch (error) {
    latestError = error;
    console.log(`Attempt ${attempt}/${attempts} not current yet: ${error.message}`);
    if (attempt < attempts) await sleep(delayMs);
  }
}

console.error(`FAIL: live release did not become current: ${latestError?.message || 'unknown error'}`);
process.exit(1);
