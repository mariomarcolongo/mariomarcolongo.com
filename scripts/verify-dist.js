#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const { D, H, P } = require('../data/career-positioning.js');
const {
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt
} = require('./lib/dossier-generators.js');

const ROOT = path.resolve(__dirname, '..');
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}
function pass(message) { console.log(`PASS: ${message}`); }
function read(relativePath) {
  const full = path.join(ROOT, relativePath);
  if (!fs.existsSync(full)) { fail(`Missing file: ${relativePath}`); return ''; }
  const value = fs.readFileSync(full, 'utf8');
  if (!value.length) fail(`Empty file: ${relativePath}`);
  return value;
}
function normalizeHtmlText(content) {
  const entities = new Map([
    ['&amp;', '&'], ['&#39;', "'"], ['&quot;', '"'], ['&gt;', '>'], ['&lt;', '<']
  ]);
  return String(content).replace(/&(?:amp|#39|quot|gt|lt);/g, (entity) => entities.get(entity) || entity);
}
function assertContains(content, needle, label) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}
function assertNotContains(content, needle, label) {
  if (content.includes(needle)) fail(`${label} contains prohibited text: ${needle}`);
}
function verifyExact(relativePaths, expected, label) {
  for (const relativePath of relativePaths) {
    const actual = read(relativePath);
    if (actual !== expected) fail(`${relativePath} is not byte-identical to canonical ${label} output`);
  }
}
function parseJsonLd(html, label) {
  const regex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count += 1;
    try { JSON.parse(match[1].trim()); }
    catch (error) { fail(`${label} has invalid JSON-LD block ${count}: ${error.message}`); }
  }
  if (count === 0) fail(`${label} has no JSON-LD block`);
}

const canonical = {
  'llms.txt': generateLlmsTxt(D),
  'llms-full.txt': generateLlmsFullTxt(D),
  'cv-llm.txt': generateCvLlmTxt(D)
};
for (const [name, expected] of Object.entries(canonical)) {
  verifyExact([name, `public/${name}`, `dist/${name}`], expected, name);
}
pass('Canonical dossier mirrors checked');

const pages = {
  index: read('dist/index.html'), integrityPage: read('dist/integrity.html'), cv: read('dist/cv.html'),
  resume: read('dist/cv-resume.html'), research: read('dist/cv-research.html'), editorial: read('dist/cv-editorial.html'),
  integrityCv: read('dist/cv-integrity.html'), security: read('dist/security.html')
};

for (const [name, html] of Object.entries(pages)) {
  if (!html) continue;
  parseJsonLd(html, `dist/${name}.html`);
  ['{D.', 'Astro.props', '<SiteNav', '<SiteFooter'].forEach((needle) => assertNotContains(html, needle, `dist/${name}.html`));
  assertNotContains(html, 'Released under CC BY 4.0 / Open Science', `dist/${name}.html`);
  assertNotContains(html, 'biobanking platform', `dist/${name}.html`);
  assertNotContains(html, 'codebase navigation and modification', `dist/${name}.html`);
  assertNotContains(html, 'Founder &amp; Technical Product Builder', `dist/${name}.html`);
  assertNotContains(html, 'C2 Reading/Listening, B2 Writing/Speaking', `dist/${name}.html`);
  assertNotContains(html, 'Institutional and individual attribution is withheld', `dist/${name}.html`);
}

const index = pages.index;
const indexText = normalizeHtmlText(index);
for (const needle of [
  H.headline,
  ...H.proofMoments.flatMap((item) => [item.value, item.label]),
  ...H.scopes.map((item) => item.title),
  ...H.cases.map((item) => item.title),
  H.mdpiFilter.title,
  H.featuredArtifact.title,
  ...H.visualArtifacts.map((item) => item.title),
  H.workingStyle.title,
  ...H.workingPrinciples.map((item) => item.title),
  ...H.applicationDocuments.map((item) => item.title),
  'data-testid="human-capabilities"', 'data-testid="human-work"', 'data-testid="human-documents"',
  'Where I can contribute.', 'Selected work, shown through the actual output.',
  'Start with the role you are hiring for.', 'AI evaluation and scientific evidence roles.',
  'Zotero plugin', 'Protein by bodyweight by country', '#75 on the Proving Ground,',
  '480K+', '267K', '36.5M', 'Content-performance practice', 'click-through rate', 'watch time',
  'audience and channel-level totals belong to Entropy for Life'
]) assertContains(indexText, needle, 'dist/index.html');
for (const obsolete of [
  'class="portfolio-v4"', 'class="portfolio-v5"', 'class="portfolio-v7"',
  'class="v3-network"', 'class="v7-engine', 'class="p5-work-mosaic"',
  'Scale, failure modes, systems and evidence.', 'Useful when the problem is strange, ambiguous or uncomfortable.',
  'One evidence base. Four high-upside application routes.', 'Evidence for the next role—and the path after it.',
  'Autistic, direct and unusually comfortable with difficult problems.', 'I am autistic.',
  'The hard part is rarely finding a paper.', 'Discuss a difficult problem.',
  'Pencil_Fascist_Tuberculosis', 'Alessandro Lanzoni', 'Public analysis across three platforms.',
  '/media/work/model-behavior-method.svg', '/media/work/entropy-social-proof.svg',
  '/media/work/model-behavior-record.svg', '/media/work/model-behavior-profile.webp',
  '/evidence/gray-swan-metrics-2026-07-25.svg', '/media/work/entropy-dashboard-800.webp',
  'Special:ListFiles/Digressivo'
]) assertNotContains(index, obsolete, 'dist/index.html');
assertContains(index, 'class="portfolio-v8"', 'dist/index.html');
assertContains(index, 'class="v8-hero-gallery"', 'dist/index.html');
assertContains(index, 'class="v8-case-stack"', 'dist/index.html');
assertContains(index, 'class="v8-product"', 'dist/index.html');
assertContains(index, 'v10-entropy-panel', 'dist/index.html');
for (const media of [
  '/media/work/model-behavior-profile.jpg', '/media/work/gray-swan-profile-2026-07-26.svg', '/media/work/entropy-h5n1.png',
  '/media/work/yourself-to-science-800.webp', '/media/work/mdpi-filter-1-800.webp',
  '/media/work/mdpi-filter-2-800.webp', '/media/work/wikimedia-clinical-overlap.svg',
  '/media/work/tableau-mortality-800.webp', '/media/work/flourish-oesophageal-cancer.svg'
]) assertContains(index, media, 'dist/index.html');
assertContains(index, 'https://github.com/orgs/mdpi-filter/repositories', 'dist/index.html');
assertContains(index, 'https://jnton.github.io/protein-by-bodyweight-country/', 'dist/index.html');
pass('Artifact-led homepage checked');

const applicationProfiles = [
  ['resume', P.aiSafety], ['research', P.researchQuality], ['editorial', P.editorialCommunity], ['integrityCv', P.integrity]
];
for (const [name, profile] of applicationProfiles) {
  const html = pages[name];
  const text = normalizeHtmlText(html);
  assertContains(text, profile.title, `dist/${name}.html`);
  assertContains(text, 'Page 1 of 2', `dist/${name}.html`);
  assertContains(text, 'Page 2 of 2', `dist/${name}.html`);
  assertContains(text, 'C1 overall', `dist/${name}.html`);
  assertContains(html, 'id="cvPhoneSlot"', `dist/${name}.html`);
}
assertContains(normalizeHtmlText(pages.editorial), 'Marta Panzeri', 'dist/cv-editorial.html');
assertContains(normalizeHtmlText(pages.editorial), 'Department of Developmental Psychology and Socialisation', 'dist/cv-editorial.html');
assertContains(normalizeHtmlText(pages.editorial), '480K+', 'dist/cv-editorial.html');
assertContains(normalizeHtmlText(pages.editorial), 'click-through rate', 'dist/cv-editorial.html');
pass('Four specialized application CVs checked');

const integrityText = normalizeHtmlText(pages.integrityPage);
for (const needle of [
  'Investigation is useful only when the evidence trail survives scrutiny.', "Fascist-era carpenter's pencil",
  'H5N1 situation tracker', 'Yourself to Science: verifying participation opportunities',
  'Wikimedia and Wikidata: auditable source and metadata work', 'Evidence boundary', 'Ethical boundary'
]) assertContains(integrityText, needle, 'dist/integrity.html');
pass('Knowledge-integrity work sample checked');

const masterText = normalizeHtmlText(pages.cv);
for (const needle of [
  'Master CV & Evidence Record', 'not presented as an independent software developer', 'AI Safety',
  'Research & Data Quality', 'Editorial & Community', 'Trust & Knowledge Integrity', 'Marta Panzeri',
  '480K+', 'Audience Optimization Contractor'
]) assertContains(masterText, needle, 'dist/cv.html');
pass('Master CV positioning checked');

const securityText = normalizeHtmlText(pages.security);
for (const needle of [
  'AI evaluation and model-behavior record.', 'What the record demonstrates', 'Evaluation approach',
  'Limitations and interpretation', 'Proving Ground total breaks', 'historical 24 July 26-wave activity table',
  '/evidence/gray-swan-2026-07-25/', '/evidence/gray-swan-profile-2026-07-26.html',
  '/media/work/gray-swan-profile-2026-07-26.svg', 'Open live Gray Swan profile', '109'
]) assertContains(securityText, needle, 'dist/security.html');
for (const needle of [
  'independently verified policy or alignment boundary failure',
  'tracking boundary resilience across major model architecture updates',
  'ensuring research directories and data pipelines are resilient', 'Model Behavior & Safety Case Study'
]) assertNotContains(securityText, needle, 'dist/security.html');
pass('Evaluation record evidence boundary checked');

const allGenerated = normalizeHtmlText(Object.values(pages).join('\n')) + Object.values(canonical).join('\n');
assertContains(allGenerated, D.identity.jobTitle, 'Generated outputs');
assertContains(allGenerated, D.identity.secondaryTitle, 'Generated outputs');
for (const needle of [
  'AI Safety Evaluation & Research Verification Specialist', 'AI Evaluation & Research Verification Specialist',
  'Founder & Technical Product Builder', 'Product Owner & Technical Builder', 'Creator & Systems Builder'
]) assertNotContains(allGenerated, needle, 'Generated outputs');

if (failures) {
  console.error(`\nGenerated-output verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('\nGenerated-output verification passed.');
