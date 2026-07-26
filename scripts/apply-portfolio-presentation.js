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

const entropyCaseHtml = `<article class="v8-case v8-case-red is-reversed" data-case="scientific-verification" data-reveal><div class="v8-case-media v10-entropy-panel v11-entropy-panel v12-entropy-panel" role="group" aria-label="Mario Marcolongo's work for Entropy for Life and the channel's public scale"><header class="v12-panel-head"><span class="v12-kicker">Entropy for Life · paid contractor</span><h4>Research, production and website work</h4><p>I contributed to 59+ published science-communication projects.</p></header><div class="v12-impact-grid"><div class="v12-project-stat"><strong>59+</strong><span>published projects</span><small>55+ YouTube videos · 4 co-authored articles</small></div><div class="v12-role-list" aria-label="Mario's work"><div><strong>Research and fact-checking</strong><span>Primary literature and claim verification</span></div><div><strong>Production work</strong><span>Scripts, visualizations, slides and selected thumbnails</span></div><div><strong>Website management</strong><span>WordPress, hosting, DNS/SSL and technical SEO</span></div></div></div><section class="v12-platform-proof" aria-label="Current public Entropy for Life channel metrics"><div class="v12-youtube-row"><div class="v12-platform-label"><span class="v12-icon v12-icon--youtube" aria-hidden="true">${youtubeIcon}</span><strong>YouTube channel</strong></div><div class="v12-youtube-metric"><strong>${CURRENT.youtubeViews}</strong><span>views</span></div><div class="v12-youtube-meta"><span><strong>${CURRENT.youtubeSubscribers}</strong> subscribers</span><span><strong>${CURRENT.youtubeVideos}</strong> videos</span></div></div><div class="v12-social-row"><span><i class="v12-icon v12-icon--instagram" aria-hidden="true">${instagramIcon}</i><strong>Instagram</strong> ${CURRENT.instagramFollowers}</span><span><i class="v12-icon v12-icon--tiktok" aria-hidden="true">${tiktokIcon}</i><strong>TikTok</strong> ${CURRENT.tiktokFollowers} · ${CURRENT.tiktokLikes} likes</span></div></section><div class="v12-performance"><strong>Thumbnail goals</strong><span>CTR · watch time · retention · attention</span></div><a class="v12-evidence-link" href="https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" target="_blank" rel="noopener noreferrer"><span>See 55+ YouTube projects I worked on</span><i aria-hidden="true">↗</i></a></div><div class="v8-case-copy"><div class="v8-case-index"><span>02</span><strong>Scientific content quality &amp; operations</strong></div><h3>Evidence quality and content operations at creator scale.</h3><p class="v8-case-lead">Paid contractor supporting an established Italian science-communication brand across evidence review, content production and publishing operations.</p><dl class="v8-case-details"><div><dt>What I owned</dt><dd>Recurring primary-literature research and scientific fact-checking. Depending on the assignment, I also developed scripts, data visualizations, slides, on-screen assets and selected thumbnails; managed WordPress, hosting, DNS/SSL and technical SEO; and used click-through rate, watch time, retention and attention capture as visual-packaging criteria.</dd></div><div><dt>Result</dt><dd>59+ documented projects supported: 55+ YouTube video projects and 4 co-authored articles, with responsibilities spanning evidence quality, content production and publishing operations.</dd></div></dl><p class="v8-scope-note"><strong>Scope:</strong> Platform metrics describe the production environment, not a personal audience. Quantified thumbnail lift is stated only when comparable analytics are available.</p><div class="v8-case-links" aria-label="Scientific content quality and operations evidence links"><a class="v8-text-link" href="https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" target="_blank" rel="noopener noreferrer">55+ documented YouTube projects<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://entropyforlife.it/autore/mario-marcolongo/" target="_blank" rel="noopener noreferrer">4 co-authored articles<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://www.youtube.com/playlist?list=PLUXju4zC0Sks" target="_blank" rel="noopener noreferrer">Selected thumbnail work<span aria-hidden="true">↗</span></a><a class="v8-text-link" href="https://entropyforlife.it" target="_blank" rel="noopener noreferrer">Official Entropy for Life website<span aria-hidden="true">↗</span></a></div></div></article>`;

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
