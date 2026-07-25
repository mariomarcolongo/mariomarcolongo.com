#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const OG = path.join(PUBLIC, 'og');

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[char]));
}

function socialCard({ eyebrow, title, subtitle, accent = '#d9593f', metrics = [] }) {
  const metricMarkup = metrics.map((item, index) => {
    const x = 74 + index * 252;
    return `
      <g transform="translate(${x} 456)">
        <text x="0" y="0" font-family="Georgia,serif" font-size="48" fill="#17202a">${escapeHtml(item.value)}</text>
        <text x="0" y="35" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#596875">${escapeHtml(item.label)}</text>
      </g>`;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <rect width="1200" height="630" fill="#f7f6f2"/>
    <rect x="34" y="34" width="1132" height="562" rx="28" fill="#ffffff"/>
    <circle cx="1088" cy="108" r="13" fill="${accent}"/>
    <path d="M78 520V102l172 205 172-205v418" fill="none" stroke="#e7ebef" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="74" y="102" font-family="Arial,sans-serif" font-size="18" font-weight="700" letter-spacing="2.2" fill="${accent}">${escapeHtml(eyebrow.toUpperCase())}</text>
    <text x="74" y="190" font-family="Georgia,serif" font-size="60" fill="#17202a">${escapeHtml(title)}</text>
    <foreignObject x="74" y="230" width="940" height="138">
      <div xmlns="http://www.w3.org/1999/xhtml" style="font:28px/1.38 Arial,sans-serif;color:#3d4a56;">${escapeHtml(subtitle)}</div>
    </foreignObject>
    ${metricMarkup}
    <text x="74" y="570" font-family="Arial,sans-serif" font-size="17" font-weight="700" fill="#17202a">mariomarcolongo.com</text>
  </svg>`;
}

async function renderSvg(browser, svg, outputPath, width, height, transparent = false) {
  const page = await browser.newPage();
  try {
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.setContent(`<!doctype html><html><head><style>*{box-sizing:border-box}html,body{margin:0;width:${width}px;height:${height}px;overflow:hidden;background:${transparent ? 'transparent' : '#f7f6f2'}}</style></head><body>${svg}</body></html>`, { waitUntil: 'load' });
    await page.screenshot({ path: outputPath, type: 'png', omitBackground: transparent, clip: { x: 0, y: 0, width, height } });
  } finally {
    await page.close();
  }
}

async function main() {
  fs.mkdirSync(OG, { recursive: true });
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  try {
    const favicon = fs.readFileSync(path.join(PUBLIC, 'favicon.svg'), 'utf8')
      .replace(/<svg([^>]*)viewBox="0 0 64 64"/, '<svg$1 width="100%" height="100%" viewBox="0 0 64 64"');
    for (const size of [48, 180, 192, 512]) {
      const name = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
      await renderSvg(browser, favicon, path.join(PUBLIC, name), size, size, true);
    }

    await renderSvg(browser, socialCard({
      eyebrow: 'AI evaluation · scientific evidence · research operations',
      title: 'Mario Marcolongo',
      subtitle: 'Model-behavior evaluation, paid primary-source verification and ownership of public research systems.',
      metrics: [
        { value: '75', label: 'CONFIRMED MODEL BREAKS' },
        { value: '55+', label: 'PRODUCTIONS CHECKED' },
        { value: '55+', label: 'RESEARCH INITIATIVES' },
        { value: '70+', label: 'PUBLIC VISUALIZATIONS' }
      ]
    }), path.join(OG, 'home.png'), 1200, 630);

    await renderSvg(browser, socialCard({
      eyebrow: 'Public AI evaluation evidence',
      title: 'Model Behavior Record',
      subtitle: 'Threat-surface selection, adversarial variation, conservative evidence capture and an archived Gray Swan public profile.',
      accent: '#2257d6',
      metrics: [
        { value: '75', label: 'PLATFORM-CONFIRMED BREAKS' },
        { value: '156', label: 'SUBMISSIONS' },
        { value: '26', label: 'LISTED WAVES' }
      ]
    }), path.join(OG, 'security.png'), 1200, 630);

    await renderSvg(browser, socialCard({
      eyebrow: 'Targeted application documents',
      title: 'Evidence matched to the role',
      subtitle: 'AI evaluation and model behavior · scientific AI quality · knowledge integrity · research and editorial operations.',
      accent: '#2f7254',
      metrics: [
        { value: '4', label: 'SPECIALIZED TWO-PAGE CVS' },
        { value: '1', label: 'MASTER EVIDENCE RECORD' }
      ]
    }), path.join(OG, 'cv.png'), 1200, 630);

    await renderSvg(browser, socialCard({
      eyebrow: 'Knowledge integrity and evidence verification',
      title: 'Sources that survive scrutiny',
      subtitle: 'Public-record investigation, provenance, citation reconciliation, structured metadata and explicit evidence boundaries.',
      accent: '#7356a5',
      metrics: [
        { value: '4,317', label: 'WIKIMEDIA CONTRIBUTIONS' },
        { value: '8 yrs', label: 'AUDITABLE PUBLIC WORK' }
      ]
    }), path.join(OG, 'integrity.png'), 1200, 630);
  } finally {
    await browser.close();
  }
  console.log('Generated favicon PNGs and page-specific social preview cards.');
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
