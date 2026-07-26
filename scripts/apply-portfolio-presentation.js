#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const CURRENT = Object.freeze({
  graySwanDate: '26 July 2026',
  arenaRank: 371,
  screenshot: '/media/work/gray-swan-profile-2026-07-26.svg',
  evidence: '/evidence/gray-swan-profile-2026-07-26.html',
  youtubeSubscribers: '267K',
  youtubeVideos: '592',
  youtubeViews: '36.5M',
  youtubeViewsExact: '36,524,137',
  instagramFollowers: '159K',
  tiktokFollowers: '54K',
  tiktokLikes: '528K',
  combinedFollowers: '480K+'
});

function replaceRequired(value, search, replacement, label) {
  if (!value.includes(search)) throw new Error(`${label}: expected source fragment was not found`);
  return value.replace(search, replacement);
}

function replaceRegexRequired(value, pattern, replacement, label) {
  if (!pattern.test(value)) throw new Error(`${label}: expected pattern was not found`);
  pattern.lastIndex = 0;
  return value.replace(pattern, replacement);
}

function writePatched(filePath, transform) {
  const before = fs.readFileSync(filePath, 'utf8');
  const after = transform(before);
  if (after === before) throw new Error(`${path.basename(filePath)}: presentation patch made no changes`);
  fs.writeFileSync(filePath, after);
}

const youtubeIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z"/></svg>`;
const instagramIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`;
const tiktokIcon = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.7 3c.4 2.3 1.8 3.8 4.3 4.2v3.4a9 9 0 0 1-4.3-1.2v6.2a6.6 6.6 0 1 1-5.7-6.5v3.5a3.2 3.2 0 1 0 2.2 3V3h3.5Z"/></svg>`;

const entropyCaseHtml = `<article class="v8-case v8-case-red is-reversed" data-case="scientific-verification" data-reveal><div class="v8-case-media v10-entropy-panel v11-entropy-panel" role="group" aria-label="Entropy for Life production context and Mario Marcolongo contribution"><header class="v11-panel-head"><div><span class="v11-kicker">Paid contractor · science communication</span><h4>Entropy for Life</h4><p>Production context for the work documented in this portfolio.</p></div><div class="v11-combined-note"><strong>${CURRENT.combinedFollowers}</strong><span>combined platform followers</span><small>non-unique brand audience</small></div></header><div class="v11-platform-grid" aria-label="Current public brand metrics"><div class="v11-youtube-card"><div class="v11-platform-name"><span class="v11-icon v11-icon--youtube" aria-hidden="true">${youtubeIcon}</span><strong>YouTube</strong></div><div class="v11-youtube-main"><strong>${CURRENT.youtubeViews}</strong><span>channel views</span></div><div class="v11-youtube-secondary"><span><strong>${CURRENT.youtubeSubscribers}</strong> subscribers</span><span><strong>${CURRENT.youtubeVideos}</strong> videos</span></div></div><div class="v11-secondary-platforms"><div class="v11-platform-row"><span class="v11-icon v11-icon--instagram" aria-hidden="true">${instagramIcon}</span><div><strong>Instagram</strong><span>${CURRENT.instagramFollowers} followers</span></div></div><div class="v11-platform-row"><span class="v11-icon v11-icon--tiktok" aria-hidden="true">${tiktokIcon}</span><div><strong>TikTok</strong><span>${CURRENT.tiktokFollowers} followers · ${CURRENT.tiktokLikes} likes</span></div></div></div></div><div class="v11-work-grid"><div class="v11-output-stat"><strong>59+</strong><span>documented projects supported</span><small>55+ YouTube projects · 4 co-authored articles</small></div><div class="v11-role-map"><span class="v11-role-kicker">My contribution</span><div><strong>Evidence quality</strong><span>Primary literature &amp; scientific fact-checking</span></div><div><strong>Content production</strong><span>Scripts, visual assets &amp; selected thumbnails</span></div><div><strong>Publishing operations</strong><span>Website, hosting, DNS/SSL &amp; technical SEO</span></div></div></div><div class="v11-performance"><strong>Content-performance practice</strong><ul><li>CTR</li><li>Watch time</li><li>Retention</li><li>Attention capture</li></ul></div><a class="v11-evidence-link" href="https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" target="_blank" rel="noopener noreferrer"><span>Open 55+ documented YouTube projects</span><i aria-hidden="true">↗</i></a><p class="v11-scope-note">Public metrics supplied from the platform profiles on 26 July 2026. They describe the brand and production environment, not Mario's personal audience or a causal performance claim.</p></div><div class="v8-case-copy"><div class="v8-case-index"><span>02</span><strong>Scientific content quality &amp; operations</strong></div><h3>Scientific evidence and content operations at creator scale.</h3><p class="v8-case-lead">Paid contractor supporting Entropy for Life, an Italian science-communication brand with ${CURRENT.youtubeSubscribers} YouTube subscribers and ${CURRENT.youtubeViews} channel views.</p><dl class="v8-case-details"><div><dt>What I owned</dt><dd>Primary-literature research and scientific fact-checking across documented productions. Depending on the assignment, I translate evidence into scripts, data visualizations, slides and on-screen assets; develop selected thumbnails and performance-aware visual packaging; and manage WordPress, hosting, DNS/SSL and technical SEO.</dd></div><div><dt>Result</dt><dd>59+ documented projects supported: 55+ YouTube video projects and 4 co-authored articles, with a cross-functional remit spanning evidence quality, content production and publishing operations.</dd></div></dl><p class="v8-scope-note"><strong>Scope:</strong> Audience and channel metrics describe the production environment, not a personal audience or a causal performance claim. Quantified thumbnail lift is stated only when comparable analytics are available.</p><div class="v8-case-links" aria-label="Scientific content quality and operations evidence links"><a class="v8-text-link" href="https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" target="_blank" rel="noopener noreferrer">55+ documented YouTube projects<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://entropyforlife.it/autore/mario-marcolongo/" target="_blank" rel="noopener noreferrer">4 co-authored articles<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://www.youtube.com/playlist?list=PLUXju4zC0Sks" target="_blank" rel="noopener noreferrer">Selected thumbnail work<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://entropyforlife.it" target="_blank" rel="noopener noreferrer">Official Entropy for Life website<span aria-hidden="true">↗</span></a></div></div></article>`;

function patchIndex(html) {
  html = html.replaceAll('/media/work/model-behavior-profile.jpg', CURRENT.screenshot);
  html = html.replaceAll('25 July 2026', CURRENT.graySwanDate);
  html = html.replaceAll('#370', `#${CURRENT.arenaRank}`);
  html = html.replaceAll('250K+', CURRENT.youtubeSubscribers);
  html = html.replaceAll('460K+', CURRENT.combinedFollowers);
  html = replaceRequired(
    html,
    '<span>Original Gray Swan profile screenshot · dated public platform record</span>',
    '<span class="v10-gs-caption"><span><strong>#75</strong><small>Proving Ground</small></span><span><strong>Top 6%</strong><small>Global percentile</small></span><span><strong>110</strong><small>Total breaks</small></span><span><strong>#371</strong><small>Arena rank</small></span></span>',
    'Gray Swan evidence caption'
  );
  html = replaceRegexRequired(
    html,
    /<article class="v8-case v8-case-red is-reversed" data-case="scientific-verification"[\s\S]*?<\/article>/,
    entropyCaseHtml,
    'Entropy for Life case'
  );
  html = replaceRequired(
    html,
    '</head>',
    '<link rel="stylesheet" href="/styles/portfolio-presentation-v10.css"><!-- Previous cropped Gray Swan asset retained only as an audit reference: /media/work/model-behavior-profile.jpg --></head>',
    'index stylesheet insertion'
  );
  return html;
}

function patchSecurity(html) {
  html = html.replaceAll('/media/work/model-behavior-profile.jpg', CURRENT.screenshot);
  html = html.replaceAll('25 July 2026', CURRENT.graySwanDate);
  html = html.replaceAll('#370', `#${CURRENT.arenaRank}`);
  html = html.replaceAll('/evidence/gray-swan-profile-2026-07-25.html', CURRENT.evidence);
  html = html.replaceAll('width="800" height="350"', 'width="1200" height="680"');
  html = html.replaceAll('width="1200" height="760"', 'width="1200" height="680"');
  html = replaceRequired(
    html,
    'Open the dated evidence and preservation record →</a></p>',
    'Open the dated evidence and preservation record →</a> · <a class="p5-link" href="/evidence/gray-swan-profile-2026-07-25.html">Previous 25 July snapshot →</a> · <a class="p5-link" href="/evidence/gray-swan-2026-07-25/">Previous evidence route →</a></p>',
    'security previous-snapshot links'
  );
  html = replaceRequired(
    html,
    '</head>',
    '<link rel="stylesheet" href="/styles/portfolio-presentation-v10.css"><!-- Previous cropped Gray Swan asset retained only as an audit reference: /media/work/model-behavior-profile.jpg --></head>',
    'security stylesheet insertion'
  );
  return html;
}

function patchCv(html) {
  return html
    .replaceAll('25 July 2026', CURRENT.graySwanDate)
    .replaceAll('#370', `#${CURRENT.arenaRank}`)
    .replaceAll('250K+', CURRENT.youtubeSubscribers)
    .replaceAll('460K+', CURRENT.combinedFollowers)
    .replaceAll('250,000+', '267,000+')
    .replaceAll('460,000+', '480,000+');
}

function applyPresentationPatches(distDir) {
  writePatched(path.join(distDir, 'index.html'), patchIndex);
  writePatched(path.join(distDir, 'security.html'), patchSecurity);
  for (const name of ['cv.html', 'cv-resume.html', 'cv-research.html', 'cv-editorial.html', 'cv-integrity.html']) {
    writePatched(path.join(distDir, name), patchCv);
  }
  console.log('Applied recruiter-facing Gray Swan and Entropy presentation patches.');
}

if (require.main === module) {
  applyPresentationPatches(path.resolve(process.argv[2] || path.join(__dirname, '..', 'dist')));
}

module.exports = { applyPresentationPatches };
