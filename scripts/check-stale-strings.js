#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');

const ROOT = path.resolve(__dirname, '..');
const EXPECTED = {
  jobTitle: 'AI Evaluation & Research Operations Specialist',
  secondaryTitle: 'Model Behavior · Scientific Evidence · Knowledge Integrity · Open Science & Data Quality',
  email: 'me@mariomarcolongo.com',
  orcid: '0000-0003-2846-7115',
  ena: 'PRJEB109744',
  version: 'v2026.07.25',
  graySwanId: '6a57be70d15e123775a1e9cf'
};

const REQUIRED = [
  'package.json', 'package-lock.json', 'data/source.js', 'data/application-profiles.js',
  'data/portfolio-human.js', 'data/recent-application-evidence.js',
  'data/career-positioning.js',
  'src/layouts/Layout.astro', 'src/components/SiteNav.astro',
  'src/components/SiteFooter.astro', 'src/components/ApplicationCv.astro', 'src/pages/index.astro',
  'src/pages/integrity.astro', 'src/pages/cv.astro', 'src/pages/cv-resume.astro',
  'src/pages/cv-research.astro', 'src/pages/cv-editorial.astro', 'src/pages/cv-integrity.astro',
  'src/pages/security.astro', 'src/styles/global.css', 'src/styles/career-v2.css',
  'src/styles/portfolio-v7.css', 'src/styles/portfolio-v7-mobile.css',
  'src/styles/portfolio-v7-safety.css', 'src/styles/portfolio-v8.css',
  'src/styles/nav-editorial.css', 'src/styles/integrity.css',
  'src/styles/v3-accessibility.css', 'scripts/lib/dossier-generators.js',
  'scripts/generate-llm-dossiers.js', 'scripts/postbuild.js', 'scripts/verify-dist.js',
  'scripts/verify-rendering.js', 'public/.well-known/api-catalog',
  'public/.well-known/agent-card.json', 'public/.well-known/mcp/server-card.json',
  'public/robots.txt', 'public/sitemap.xml', 'public/site.webmanifest',
  'public/evidence/gray-swan-profile-2026-07-25.html', 'public/evidence/gray-swan-profile-2026-07-25.json',
  'public/media/work/model-behavior-profile.jpg', 'public/media/work/entropy-h5n1.png',
  'public/media/work/yourself-to-science-800.webp', 'public/media/work/mdpi-filter-1-800.webp',
  'public/media/work/mdpi-filter-2-800.webp', 'public/media/work/wikimedia-clinical-overlap.svg'
];

const SCAN_ROOTS = [
  'data', 'src', 'package.json', 'README.md', 'public/.well-known',
  'public/robots.txt', 'public/sitemap.xml', 'public/site.webmanifest'
];

const PROHIBITED = [
  ['independently verified policy or alignment boundary failure', 'Unsupported independent-verification claim'],
  ['tracking boundary resilience across major model architecture updates', 'Unsupported architecture-update inference'],
  ['ensuring research directories and data pipelines are resilient', 'Unsupported security-assurance claim'],
  ['Released under CC BY 4.0 / Open Science', 'Incorrect blanket licence'],
  ['biobanking platform', 'Incorrect Yourself to Science description'],
  ['Model Behavior & Safety Case Study', 'Outdated evaluation-page positioning'],
  ['AI Evaluation & Scientific Research Verification Specialist', 'Competing primary title'],
  ['Scientific AI Evaluation & Research Data Specialist', 'Competing primary title'],
  ['AI Safety Evaluation & Research Verification Specialist', 'Rejected narrow umbrella title'],
  ['C2 Reading/Listening, B2 Writing/Speaking', 'Unnecessary language subscore emphasis'],
  ['Institutional and individual attribution is withheld', 'Outdated focus-group attribution status'],
  ['Scale, failure modes, systems and evidence.', 'Rejected oversized portfolio-v4 heading'],
  ['Useful when the problem is strange, ambiguous or uncomfortable.', 'Rejected self-promotional portfolio-v4 heading'],
  ['Autistic, direct and unusually comfortable with difficult problems.', 'Rejected diagnosis-first portfolio headline'],
  ['I am autistic.', 'Diagnosis disclosure should not appear on the public homepage'],
  ['The hard part is rarely finding a paper.', 'Rejected aphoristic scientific-verification copy'],
  ['Evidence for the next role—and the path after it.', 'Rejected repetitive portfolio-v5 heading'],
  ['Discuss a difficult problem.', 'Rejected generic portfolio-v5 contact heading']
];

let failures = 0;
function fail(file, line, message) {
  failures += 1;
  console.error(`FAIL ${file}:${line} — ${message}`);
}
function filesUnder(relative) {
  const absolute = path.join(ROOT, relative);
  if (!fs.existsSync(absolute)) return [];
  if (fs.statSync(absolute).isFile()) return [absolute];
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.join(relative, entry.name);
    return entry.isDirectory() ? filesUnder(child) : [path.join(ROOT, child)];
  });
}
function scanFile(filePath) {
  if (!/\.(?:astro|js|mjs|json|md|txt|xml|webmanifest)$/.test(filePath) && !/api-catalog$/.test(filePath)) return;
  const relative = path.relative(ROOT, filePath);
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const [needle, message] of PROHIBITED) {
      if (line.includes(needle)) fail(relative, index + 1, `${message}: ${needle}`);
    }
    if (/\|\|\s*true/.test(line)) fail(relative, index + 1, 'Build/deployment failures must not be suppressed with `|| true`.');
    if (/2>\/dev\/null/.test(line)) fail(relative, index + 1, 'Build/deployment errors must not be suppressed.');
  });
}

for (const relative of REQUIRED) {
  const absolute = path.join(ROOT, relative);
  if (!fs.existsSync(absolute)) fail(relative, 1, 'Required source or configuration file is missing.');
  else if (!fs.statSync(absolute).isFile() || fs.statSync(absolute).size === 0) fail(relative, 1, 'Required file is empty or not a regular file.');
}
for (const root of SCAN_ROOTS) filesUnder(root).forEach(scanFile);

const identityChecks = [
  ['identity.jobTitle', D.identity?.jobTitle, EXPECTED.jobTitle],
  ['identity.secondaryTitle', D.identity?.secondaryTitle, EXPECTED.secondaryTitle],
  ['identity.email', D.identity?.email, EXPECTED.email],
  ['identity.orcid', D.identity?.orcid, EXPECTED.orcid],
  ['identity.enaAccession', D.identity?.enaAccession, EXPECTED.ena],
  ['identity.buildVersion', D.identity?.buildVersion, EXPECTED.version],
  ['identity.grayswanId', D.identity?.grayswanId, EXPECTED.graySwanId]
];
for (const [field, actual, expected] of identityChecks) {
  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);
}

const currentGraySwanChecks = [
  ['redTeamActivity.asOf', D.redTeamActivity?.asOf, '25 July 2026'],
  ['redTeamActivity.leaderboardRank', D.redTeamActivity?.leaderboardRank, 75],
  ['redTeamActivity.platformReportedBreaks', D.redTeamActivity?.platformReportedBreaks, 110],
  ['redTeamActivity.totalArenaSubmissions', D.redTeamActivity?.totalArenaSubmissions, 246],
  ['redTeamActivity.globalUniqueBreaks', D.redTeamActivity?.globalUniqueBreaks, 27],
  ['redTeamActivity.globalPoints', D.redTeamActivity?.globalPoints, 1090]
];
for (const [field, actual, expected] of currentGraySwanChecks) {
  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);
}

const focusGroup = (D.experience || []).find((item) => String(item.role || '').includes('Focus-Group'));
if (!focusGroup) fail('data/source.js', 1, 'Named focus-group research experience is missing.');
else {
  for (const required of ['Marta Panzeri', 'Department of Developmental Psychology and Socialisation', 'University of Padua']) {
    const serialized = JSON.stringify(focusGroup);
    if (!serialized.includes(required)) fail('data/source.js', 1, `Focus-group record is missing approved attribution: ${required}`);
  }
}

const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8'));
for (const [name, command] of Object.entries(packageJson.scripts || {})) {
  if (/\|\|\s*true|2>\/dev\/null/.test(command)) fail('package.json', 1, `Script ${name} suppresses failures.`);
}
if (!String(packageJson.scripts?.deploy || '').startsWith('npm run build')) fail('package.json', 1, 'Deployment must begin with a successful production build.');
if (!String(packageJson.scripts?.build || '').includes('verify-dist.js')) fail('package.json', 1, 'Production build must run generated-output verification.');
if (!String(packageJson.scripts?.deploy || '').includes('--project-name=mariomarcolongo-pages')) fail('package.json', 1, 'Deployment must target the production Cloudflare Pages project.');

const indexSource = fs.readFileSync(path.join(ROOT, 'src/pages/index.astro'), 'utf8');
const portfolioSource = fs.readFileSync(path.join(ROOT, 'data/portfolio-human.js'), 'utf8');
const homepageSource = `${indexSource}\n${portfolioSource}`;
for (const marker of ['human-capabilities', 'human-work', 'human-documents']) {
  if (!indexSource.includes(`data-testid="${marker}"`)) fail('src/pages/index.astro', 1, `Missing homepage marker ${marker}.`);
}
for (const requiredText of [
  'I test AI systems and verify scientific claims.',
  'Where I can contribute.',
  'Selected work, shown through the actual output.',
  'MDPI Filter now works in the browser and as a Zotero plugin.',
  'A diagram that became a reusable public reference.',
  'Start with the role you are hiring for.',
  'AI evaluation and scientific evidence roles.',
  '#75 on the Proving Ground leaderboard',
  'Fact-checking and producing scientific content before publication.',
  'At least 59 documented published projects supported',
  '460K+',
  '250K+',
  'Audience optimization',
  'click-through rate',
  'watch time',
  'PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh',
  'PLUXju4zC0Sks',
  'Official Entropy for Life website'
]) {
  if (!homepageSource.includes(requiredText)) fail('src/pages/index.astro', 1, `Homepage is missing current artifact-led portfolio content: ${requiredText}`);
}
for (const requiredMedia of [
  '/media/work/model-behavior-profile.jpg', '/media/work/entropy-h5n1.png',
  '/media/work/yourself-to-science-800.webp', '/media/work/mdpi-filter-1-800.webp',
  '/media/work/mdpi-filter-2-800.webp', '/media/work/wikimedia-clinical-overlap.svg'
]) {
  if (!homepageSource.includes(requiredMedia)) fail('src/pages/index.astro', 1, `Homepage is missing current evidence media: ${requiredMedia}`);
}
for (const rejectedText of [
  'class="v3-network"', 'Explore role lenses', 'One profile. Four credible lenses.',
  'Pencil_Fascist_Tuberculosis', 'class="portfolio-v4"',
  'class="portfolio-v5"', 'class="portfolio-v7"', 'class="v7-engine"',
  'class="p5-work-mosaic"', 'Public analysis across three platforms.',
  '/media/work/model-behavior-record.svg',
  '/media/work/entropy-dashboard-800.webp', '/evidence/gray-swan-metrics-2026-07-25.svg'
]) {
  if (homepageSource.includes(rejectedText)) fail('src/pages/index.astro', 1, `Homepage still contains rejected content: ${rejectedText}`);
}

const integritySource = fs.readFileSync(path.join(ROOT, 'src/pages/integrity.astro'), 'utf8');
for (const requiredText of ['evidence trail survives scrutiny', 'Evidence boundary', 'Ethical boundary']) {
  if (!integritySource.includes(requiredText)) fail('src/pages/integrity.astro', 1, `Integrity work sample is missing: ${requiredText}`);
}

const securitySource = fs.readFileSync(path.join(ROOT, 'src/pages/security.astro'), 'utf8');
for (const requiredText of ['AI evaluation and model-behavior record.', 'What the record demonstrates', 'Limitations and interpretation', 'Open live Gray Swan profile']) {
  if (!securitySource.includes(requiredText)) fail('src/pages/security.astro', 1, `Evaluation record is missing required text: ${requiredText}`);
}

const navSource = fs.readFileSync(path.join(ROOT, 'src/components/SiteNav.astro'), 'utf8');
for (const requiredText of ['aria-pressed="false"', 'Switch to dark theme', 'Switch to light theme', 'Work', 'Experience', 'CV', 'Contact']) {
  if (!navSource.includes(requiredText)) fail('src/components/SiteNav.astro', 1, `Navigation is missing required text: ${requiredText}`);
}

if (failures) {
  console.error(`\nSource integrity check failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log('Source integrity check passed.');
