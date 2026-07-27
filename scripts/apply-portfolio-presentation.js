#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const CURRENT = Object.freeze({
  graySwanDate: '26 July 2026',
  arenaRank: 371,
  screenshot: '/media/work/gray-swan-profile-2026-07-26.svg',
  evidence: '/evidence/gray-swan-profile-2026-07-26.html',
  entropyWorkUrl: 'https://entropyforlife.it/mario-marcolongo-entropy-for-life/',
  documentedOutputs: '80',
  youtubeContributions: '55',
  articles: '4',
  shortForm: '21',
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

const entropyCaseHtml = `<article class="v8-case v8-case-red is-reversed" data-case="scientific-verification" data-reveal><a class="v8-case-media v10-entropy-panel v11-entropy-panel v12-entropy-panel" href="${CURRENT.entropyWorkUrl}" target="_blank" rel="noopener noreferrer" aria-label="Open Mario Marcolongo's official Entropy for Life work record"><header class="v12-panel-head"><span class="v12-kicker">Entropy for Life · paid contractor</span><h4>Research, content and website work</h4><p>I contributed to ${CURRENT.documentedOutputs} documented published pieces.</p></header><div class="v12-impact-grid"><div class="v12-project-stat"><strong>${CURRENT.documentedOutputs}</strong><span>published contributions</span><small>${CURRENT.youtubeContributions} YouTube videos · ${CURRENT.articles} articles · ${CURRENT.shortForm} short-form pieces</small></div><div class="v12-role-list" aria-label="Mario's work"><div><strong>Research and fact-checking</strong><span>Primary literature, source verification and evidence synthesis</span></div><div><strong>Content production</strong><span>Scripts, data analysis, visualizations, slides and selected thumbnails</span></div><div><strong>Website design and management</strong><span>WordPress, responsive design, publishing and OVHcloud operations</span></div></div></div><section class="v12-platform-proof" aria-label="Current public Entropy for Life channel metrics"><div class="v12-youtube-row"><div class="v12-platform-label"><span class="v12-icon v12-icon--youtube" aria-hidden="true">${youtubeIcon}</span><strong>YouTube channel</strong></div><div class="v12-youtube-metric"><strong>${CURRENT.youtubeViews}</strong><span>views</span></div><div class="v12-youtube-meta"><span><strong>${CURRENT.youtubeSubscribers}</strong> subscribers</span><span><strong>${CURRENT.youtubeVideos}</strong> videos</span></div></div><div class="v12-social-row"><span><i class="v12-icon v12-icon--instagram" aria-hidden="true">${instagramIcon}</i><strong>Instagram</strong> ${CURRENT.instagramFollowers}</span><span><i class="v12-icon v12-icon--tiktok" aria-hidden="true">${tiktokIcon}</i><strong>TikTok</strong> ${CURRENT.tiktokFollowers} · ${CURRENT.tiktokLikes} likes</span></div></section><div class="v12-performance"><strong>Official evidence index</strong><span>Videos · articles · short-form work · selected thumbnails</span></div><span class="v12-evidence-link"><span>View the official Entropy for Life work record</span><i aria-hidden="true">↗</i></span></a><div class="v8-case-copy"><div class="v8-case-index"><span>02</span><strong>Scientific content quality &amp; operations</strong></div><h3>Evidence quality and content operations at creator scale.</h3><p class="v8-case-lead">Paid contractor supporting an established Italian science-communication brand across evidence review, content production and website operations.</p><dl class="v8-case-details"><div><dt>What I owned</dt><dd>Recurring primary-literature research and scientific fact-checking. Depending on the assignment, I also developed scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnails. I designed and built entropyforlife.it in WordPress and manage its responsive design, publishing and OVHcloud technical operations.</dd></div><div><dt>Result</dt><dd>${CURRENT.documentedOutputs} documented published content contributions: ${CURRENT.youtubeContributions} YouTube videos, ${CURRENT.articles} co-authored articles and ${CURRENT.shortForm} short-form pieces. The official work record also indexes selected thumbnail work, which overlaps with video projects and is not added to the total.</dd></div></dl><p class="v8-scope-note"><strong>Scope:</strong> Platform metrics describe the production environment, not a personal audience. Quantified thumbnail lift is stated only when comparable analytics are available.</p><div class="v8-case-links" aria-label="Scientific content quality and operations evidence link"><a class="v8-text-link" href="${CURRENT.entropyWorkUrl}" target="_blank" rel="noopener noreferrer">Official work record published by Entropy for Life<span aria-hidden="true">↗</span></a></div></div></article>`;

function patchIndex(html) {
  html = html.replaceAll('/media/work/model-behavior-profile.jpg', CURRENT.screenshot);
  html = html.replaceAll('25 July 2026', CURRENT.graySwanDate);
  html = html.replaceAll('#370', `#${CURRENT.arenaRank}`);
  html = html.replaceAll('250K+', CURRENT.youtubeSubscribers);
  html = html.replaceAll('460K+', CURRENT.combinedFollowers);
  html = replaceRegexRequired(
    html,
    /<strong>(?:480K\+|36\.5M)<\/strong>\s*<span>(?:combined public platform following|YouTube channel views in the production environment)<\/span>\s*<small>(?:Entropy for Life brand audience · 267K YouTube subscribers · non-unique|267K subscribers · Entropy for Life brand context)<\/small>/,
    '<strong>36.5M</strong><span>YouTube channel views in the production environment</span><small>267K subscribers · Entropy for Life brand context</small>',
    'Homepage Entropy proof metric'
  );
  html = html.replaceAll(
    'Supported 59+ published projects for an Italian science-communication brand with 267K YouTube subscribers and 480K+ combined platform following; recurring evidence review plus audience-focused visual packaging, selected thumbnails and web operations.',
    'Delivered 80 documented published content contributions—55 YouTube videos, 4 co-authored articles and 21 short-form pieces—for an Italian science-communication brand with 267K YouTube subscribers and 480K+ combined platform following; recurring evidence review, content production, selected thumbnails and website operations.'
  );
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
