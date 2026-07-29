#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = path.resolve(__dirname, '..');
const ORIGINAL = 'public/evidence/gray-swan-arena-mario-marcolongo-2026-07-29-033550-CEST.png';
const PREVIEW_800 = '/media/work/gray-swan-profile-2026-07-29-800.webp';
const PREVIEW_1600 = '/media/work/gray-swan-profile-2026-07-29-1600.webp';
const PREVIEW_SET = `${PREVIEW_800} 800w, ${PREVIEW_1600} 1600w`;
const EVIDENCE_PAGE = '/evidence/gray-swan-2026-07-29/';
const MANIFEST_HTML = '/evidence/gray-swan-profile-2026-07-29.html';
const MANIFEST_JSON = '/evidence/gray-swan-profile-2026-07-29.json';

function abs(file) { return path.join(ROOT, file); }
function read(file) { return fs.readFileSync(abs(file), 'utf8'); }
function write(file, value) {
  fs.mkdirSync(path.dirname(abs(file)), { recursive: true });
  fs.writeFileSync(abs(file), value);
}
function replace(file, from, to, options = {}) {
  const original = read(file);
  const occurrences = original.split(from).length - 1;
  const minimum = options.minimum ?? 1;
  if (occurrences < minimum) throw new Error(`${file}: expected at least ${minimum} occurrence(s) of ${JSON.stringify(from)}, found ${occurrences}`);
  const next = options.firstOnly ? original.replace(from, to) : original.split(from).join(to);
  write(file, next);
}
function replaceMany(file, replacements) {
  let value = read(file);
  for (const [from, to, minimum = 1] of replacements) {
    const count = value.split(from).length - 1;
    if (count < minimum) throw new Error(`${file}: expected ${JSON.stringify(from)} at least ${minimum} time(s), found ${count}`);
    value = value.split(from).join(to);
  }
  write(file, value);
}
function replaceRegex(file, regex, replacement, minimum = 1) {
  const value = read(file);
  const matches = value.match(regex) || [];
  if (matches.length < minimum) throw new Error(`${file}: expected ${regex} at least ${minimum} time(s), found ${matches.length}`);
  write(file, value.replace(regex, replacement));
}

// Canonical dossier: update the current platform snapshot while retaining historical wave data.
replaceMany('data/source.js', [
  ['buildVersion: "v2026.07.25"', 'buildVersion: "v2026.07.29"'],
  ['grayswanArchiveUrl: "/evidence/gray-swan-profile-2026-07-25.html"', `grayswanArchiveUrl: "${EVIDENCE_PAGE}"`],
  ['evaluationAsOf: "25 July 2026"', 'evaluationAsOf: "29 July 2026"'],
  ['Proving Ground rank #75 (top 6%) with 110 platform-recorded total breaks on 25 July 2026', 'Proving Ground rank #74 (top 6%) with 113 platform-recorded total breaks on 29 July 2026'],
  ['#75 · top 6% · 110 platform-recorded breaks on 25 July 2026', '#74 · top 6% · 113 platform-recorded breaks on 29 July 2026'],
  ['{ value: "110", label: "Platform-Recorded Proving Ground Breaks", detail: "#75 · top 6% · 25 July 2026" }', '{ value: "113", label: "Platform-Recorded Proving Ground Breaks", detail: "#74 · top 6% · 29 July 2026" }'],
  ['{ value: "246", label: "Arena Submissions", detail: "Arena rank #370 · 27 global unique breaks · 1,090 points" }', '{ value: "255", label: "Arena Submissions", detail: "Arena rank #365 · 28 global unique breaks · 1,120 points" }'],
  ['The dated 25 July 2026 screenshot shows Proving Ground rank #75, top 6%, with 110 platform-recorded total breaks; the same profile shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'The dated 29 July 2026 screenshot shows Proving Ground rank #74, top 6%, with 113 platform-recorded total breaks; the same profile shows Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.'],
  ['110 Platform-Recorded Proving Ground Breaks: #75 and top 6% on the dated 25 July 2026 snapshot', '113 Platform-Recorded Proving Ground Breaks: #74 and top 6% on the dated 29 July 2026 snapshot'],
  ['Arena Profile Context: #370 rank, 27 global unique breaks, 1,090 points and 246 submissions', 'Arena Profile Context: #365 rank, 28 global unique breaks, 1,120 points and 255 submissions'],
  ['asOf: "25 July 2026"', 'asOf: "29 July 2026"'],
  ['rankBand: "#75 · Top 6%"', 'rankBand: "#74 · Top 6%"'],
  ['leaderboardRank: 75', 'leaderboardRank: 74'],
  ['platformReportedBreaks: 110', 'platformReportedBreaks: 113'],
  ['areaBreaks: { chat: 36, image: 32, agent: 28, indirect: 13 }', 'areaBreaks: { chat: 39, image: 32, agent: 28, indirect: 13 }'],
  ['areaBreaksTotal: 109', 'areaBreaksTotal: 112'],
  ['arenaRank: 370', 'arenaRank: 365'],
  ['globalUniqueBreaks: 27', 'globalUniqueBreaks: 28'],
  ['globalPoints: 1090', 'globalPoints: 1120'],
  ['submissions: 232', 'submissions: 255'],
  ['totalArenaSubmissions: 246', 'totalArenaSubmissions: 255'],
  ['profileReportedBreaks: 110', 'profileReportedBreaks: 113'],
  ['Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks on 25 July 2026; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'Reached #74 on the Proving Ground leaderboard (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same profile showed Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.']
]);

// Base human portfolio and application CV data.
replaceMany('data/portfolio-human.js', [
  ['value: "110"', 'value: "113"'],
  ['detail: "#75 · top 6% · 25 July 2026"', 'detail: "#74 · top 6% · 29 July 2026"'],
  ['#75 on the Proving Ground leaderboard, top 6%, with 110 platform-recorded total breaks on 25 July 2026; the same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', '#74 on the Proving Ground leaderboard, top 6%, with 113 platform-recorded total breaks on 29 July 2026; the same screenshot shows Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.'],
  ['/media/work/model-behavior-profile.jpg', PREVIEW_1600]
]);
replaceRegex('data/portfolio-human.js', /image: "\/media\/work\/gray-swan-profile-2026-07-29-1600\.webp",\n\s*alt:/g, `image: "${PREVIEW_1600}",\n      imageSet: "${PREVIEW_SET}",\n      alt:`, 2);

replaceMany('data/application-profiles.js', [
  ['ranked #75 (top 6%) on 25 July 2026, with 110 platform-recorded total breaks; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'ranked #74 (top 6%) on 29 July 2026, with 113 platform-recorded total breaks; the same profile showed Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.'],
  ['{ value: "110", label: "Platform-recorded Proving Ground breaks", detail: "#75 · top 6% · 25 July 2026" }', '{ value: "113", label: "Platform-recorded Proving Ground breaks", detail: "#74 · top 6% · 29 July 2026" }'],
  ['{ value: "246", label: "Arena submissions", detail: "#370 rank · 27 unique breaks · 1,090 points" }', '{ value: "255", label: "Arena submissions", detail: "#365 rank · 28 unique breaks · 1,120 points" }'],
  ['Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks on 25 July 2026; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'Reached #74 on the Proving Ground leaderboard (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same profile showed Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.']
]);

// Release overlays are the source for generated dossiers and most CV content.
replaceMany('data/release-data.js', [
  ['asOf: "25 July 2026",\n  rank: 75,', 'asOf: "29 July 2026",\n  rank: 74,'],
  ['totalBreaks: 110', 'totalBreaks: 113'],
  ['displayedAreaTotal: 109', 'displayedAreaTotal: 112'],
  ['arenaRank: 370', 'arenaRank: 365'],
  ['arenaUniqueBreaks: 27', 'arenaUniqueBreaks: 28'],
  ['arenaPoints: 1090', 'arenaPoints: 1120'],
  ['arenaSubmissions: 246', 'arenaSubmissions: 255'],
  ['evidencePath: "/evidence/gray-swan-2026-07-25/"', `evidencePath: "${EVIDENCE_PAGE}"`],
  ['D.identity.buildVersion = "v2026.07.26"', 'D.identity.buildVersion = "v2026.07.29"'],
  ['{ name: "Chat", breaks: 36, available: 552, percent: 7 }', '{ name: "Chat", breaks: 39, available: 552, percent: 7 }'],
  ['grayHero.image = "/media/work/gray-swan-summary-2026-07-25.svg";\n  delete grayHero.imageSet;', `grayHero.image = "${PREVIEW_1600}";\n  grayHero.imageSet = "${PREVIEW_SET}";`],
  ['modelCase.image = "/media/work/gray-swan-summary-2026-07-25.svg";', `modelCase.image = "${PREVIEW_1600}";\n  modelCase.imageSet = "${PREVIEW_SET}";`]
]);

replaceMany('data/career-positioning.js', [
  ["asOf: '26 July 2026',\n  rank: 75,", "asOf: '29 July 2026',\n  rank: 74,"],
  ['totalBreaks: 110', 'totalBreaks: 113'],
  ['displayedAreaTotal: 109', 'displayedAreaTotal: 112'],
  ['arenaRank: 371', 'arenaRank: 365'],
  ['uniqueBreaks: 27', 'uniqueBreaks: 28'],
  ['points: 1090', 'points: 1120'],
  ['submissions: 246', 'submissions: 255'],
  ["evidencePath: '/evidence/gray-swan-profile-2026-07-26.html'", `evidencePath: '${EVIDENCE_PAGE}'`],
  ["screenshotPath: '/media/work/gray-swan-profile-2026-07-26.svg'", `screenshotPath: '${PREVIEW_1600}',\n  screenshotSet: '${PREVIEW_SET}'`],
  ["D.identity.buildVersion = 'v2026.07.27'", "D.identity.buildVersion = 'v2026.07.29'"],
  ['modelCase.image = graySwan.screenshotPath;\n  modelCase.imageCaption', 'modelCase.image = graySwan.screenshotPath;\n  modelCase.imageSet = graySwan.screenshotSet;\n  modelCase.imageCaption']
]);

replaceMany('data/investigation-positioning.mjs', [
  ['rank #75 (top 6%) and 110 total breaks on 26 July 2026', 'rank #74 (top 6%) and 113 total breaks on 29 July 2026'],
  ['value: "110"', 'value: "113"'],
  ['detail: "#75 · top 6% · supporting adversarial evidence"', 'detail: "#74 · top 6% · supporting adversarial evidence"'],
  ['#75 on the Proving Ground (top 6%) with 110 platform-displayed breaks on 26 July 2026', '#74 on the Proving Ground (top 6%) with 113 platform-displayed breaks on 29 July 2026']
]);

// Homepage: use the full-resolution-derived responsive previews instead of the outdated SVG/JPEG.
replaceMany('src/pages/index.astro', [
  ['image: "/media/work/model-behavior-profile.jpg",\n      imageSet: undefined,', `image: "${PREVIEW_1600}",\n      imageSet: "${PREVIEW_SET}",`],
  ['image: "/media/work/model-behavior-profile.jpg",\n      imageSet: undefined,\n      alt: "Screenshot of the dated Gray Swan Arena profile', `image: "${PREVIEW_1600}",\n      imageSet: "${PREVIEW_SET}",\n      alt: "Screenshot of the dated Gray Swan Arena profile`]
]);

// Evaluation page: make the 29 July capture the primary current record.
replaceMany('src/pages/security.astro', [
  ['const asOf = D.redTeamActivity.asOf || "25 July 2026";', 'const asOf = D.redTeamActivity.asOf || "29 July 2026";'],
  ['const archiveUrl = D.identity.grayswanArchiveUrl || "/evidence/gray-swan-profile-2026-07-25.html";', `const archiveUrl = D.identity.grayswanArchiveUrl || "${EVIDENCE_PAGE}";`],
  ['dateModified: "2026-07-26"', 'dateModified: "2026-07-29"'],
  ['<small>#75 · top 6% · {asOf}</small>', '<small>#74 · top 6% · {asOf}</small>'],
  ['<small>#370 Arena rank · 27 unique breaks · 1,090 points</small>', '<small>#365 Arena rank · 28 unique breaks · 1,120 points</small>'],
  ['The latest dated evidence page records the later 25 July metrics, the original screenshot hash and capture metadata, while keeping Proving Ground and Arena figures separate. It also records that the four visible area counters sum to 109 rather than silently inferring an aggregation rule.', 'The latest dated evidence page records the 29 July metrics, the original screenshot hash and capture metadata, while keeping Proving Ground and Arena figures separate. It also records that the four visible area counters sum to 112 rather than silently inferring an aggregation rule.'],
  ['<h3>25 July 2026 Gray Swan profile screenshot</h3>', '<h3>29 July 2026 Gray Swan profile screenshot</h3>'],
  ['Dated public profile record for #75, top 6%, 110 Proving Ground total breaks, Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'Dated public profile record for #74, top 6%, 113 Proving Ground total breaks, Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.'],
  ['<a href="/media/work/model-behavior-profile.jpg" aria-label="Open the Gray Swan profile screenshot at full size">\n            <img src="/media/work/model-behavior-profile.jpg" width="800" height="350"', `<a href="/${ORIGINAL}" aria-label="Open the original Gray Swan profile screenshot at full size">\n            <img src="${PREVIEW_1600}" srcset="${PREVIEW_SET}" sizes="(max-width: 900px) 100vw, 800px" width="1600" height="903"`],
  ['The 25 July screenshot displays 110 Total Breaks while its four visible category counters sum to 109; both values are reported exactly and no internal aggregation rule is inferred.', 'The 29 July screenshot displays 113 Total Breaks while its four visible category counters sum to 112; both values are reported exactly and no internal aggregation rule is inferred.'],
  ['The historical 24 July record remains available separately and documented a 105/106 discrepancy before the later profile update.', 'The 25 July and 24 July records remain available as historical snapshots, preserving earlier totals and aggregation discrepancies.']
]);

// Current-source integrity and generated-output assertions.
replaceMany('scripts/check-stale-strings.js', [
  ["version: 'v2026.07.25'", "version: 'v2026.07.29'"],
  ["'public/evidence/gray-swan-profile-2026-07-25.html', 'public/evidence/gray-swan-profile-2026-07-25.json',\n  'public/media/work/model-behavior-profile.jpg'", "'public/evidence/gray-swan-profile-2026-07-29.html', 'public/evidence/gray-swan-profile-2026-07-29.json',\n  'public/evidence/gray-swan-arena-mario-marcolongo-2026-07-29-033550-CEST.png',\n  'public/media/work/gray-swan-profile-2026-07-29-800.webp', 'public/media/work/gray-swan-profile-2026-07-29-1600.webp'"],
  ["['redTeamActivity.asOf', D.redTeamActivity?.asOf, '25 July 2026']", "['redTeamActivity.asOf', D.redTeamActivity?.asOf, '29 July 2026']"],
  ["['redTeamActivity.leaderboardRank', D.redTeamActivity?.leaderboardRank, 75]", "['redTeamActivity.leaderboardRank', D.redTeamActivity?.leaderboardRank, 74]"],
  ["['redTeamActivity.platformReportedBreaks', D.redTeamActivity?.platformReportedBreaks, 110]", "['redTeamActivity.platformReportedBreaks', D.redTeamActivity?.platformReportedBreaks, 113]"],
  ["['redTeamActivity.totalArenaSubmissions', D.redTeamActivity?.totalArenaSubmissions, 246]", "['redTeamActivity.totalArenaSubmissions', D.redTeamActivity?.totalArenaSubmissions, 255]"],
  ["['redTeamActivity.globalUniqueBreaks', D.redTeamActivity?.globalUniqueBreaks, 27]", "['redTeamActivity.globalUniqueBreaks', D.redTeamActivity?.globalUniqueBreaks, 28]"],
  ["['redTeamActivity.globalPoints', D.redTeamActivity?.globalPoints, 1090]", "['redTeamActivity.globalPoints', D.redTeamActivity?.globalPoints, 1120]"],
  ["'#75 on the Proving Ground leaderboard'", "'#74 on the Proving Ground leaderboard'"],
  ["'/media/work/model-behavior-profile.jpg', '/media/work/entropy-h5n1.png'", ` '${PREVIEW_1600}', '/media/work/entropy-h5n1.png'`]
]);

replaceMany('scripts/verify-dist.js', [
  ["'#75 on the Proving Ground,'", "'#74 on the Proving Ground,'"],
  ["'/media/work/model-behavior-profile.jpg', '/media/work/gray-swan-profile-2026-07-26.svg', '/media/work/entropy-h5n1.png'", `'${PREVIEW_1600}', '/media/work/entropy-h5n1.png'`],
  ["'/evidence/gray-swan-2026-07-25/', '/evidence/gray-swan-profile-2026-07-26.html',\n   '/media/work/gray-swan-profile-2026-07-26.svg', 'Open live Gray Swan profile', '109'", `'${EVIDENCE_PAGE}', '${MANIFEST_HTML}',\n   '${PREVIEW_1600}', 'Open live Gray Swan profile', '112'`]
]);

replaceMany('README.md', [
  ['The current dated evidence page preserves the 25 July 2026 screenshot showing Proving Ground rank #75, top 6%, and 110 platform-recorded total breaks, alongside the separate Arena metrics (#370 rank, 27 global unique breaks, 1,090 points and 246 submissions).', 'The current dated evidence page preserves the original 29 July 2026 screenshot showing Proving Ground rank #74, top 6%, and 113 platform-displayed total breaks, alongside the separate Arena metrics (#365 rank, 28 global unique breaks, 1,120 points and 255 submissions). The portfolio uses responsive WebP previews derived from that original PNG rather than the now-outdated synthetic SVG.'],
  ['The independently preserved 24 July snapshot remains available through Perma.cc.', 'The 25 July account-holder snapshot and independently preserved 24 July Perma.cc record remain available as historical evidence.'],
  ['- [Gray Swan evidence — 25 July 2026](https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-25.html)', '- [Gray Swan evidence — 29 July 2026](https://mariomarcolongo.com/evidence/gray-swan-2026-07-29/)\n- [Historical Gray Swan evidence — 25 July 2026](https://mariomarcolongo.com/evidence/gray-swan-2026-07-25/)']
]);

replaceMany('package.json', [
  ['"version": "2026.07.2"', '"version": "2026.07.29"']
]);

// Sitemap: refresh core last-modified dates and expose the current evidence route.
let sitemap = read('public/sitemap.xml').replaceAll('<lastmod>2026-07-21</lastmod>', '<lastmod>2026-07-29</lastmod>');
if (!sitemap.includes('gray-swan-2026-07-29')) {
  sitemap = sitemap.replace('  <url><loc>https://mariomarcolongo.com/evidence/gray-swan-2026-07-24/</loc></url>\n', '  <url><loc>https://mariomarcolongo.com/evidence/gray-swan-2026-07-29/</loc><lastmod>2026-07-29</lastmod></url>\n  <url><loc>https://mariomarcolongo.com/evidence/gray-swan-2026-07-25/</loc></url>\n  <url><loc>https://mariomarcolongo.com/evidence/gray-swan-2026-07-24/</loc></url>\n');
}
write('public/sitemap.xml', sitemap);

// Metadata for the exact committed PNG.
const png = fs.readFileSync(abs(ORIGINAL));
if (png.toString('ascii', 1, 4) !== 'PNG') throw new Error(`${ORIGINAL} is not a PNG`);
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
const sha256 = crypto.createHash('sha256').update(png).digest('hex');
const screenshotPublicPath = `/${ORIGINAL}`;

const manifest = {
  schemaVersion: 1,
  subject: {
    name: 'Mario Marcolongo',
    platform: 'Gray Swan Arena',
    profileUrl: 'https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf'
  },
  snapshot: {
    displayDate: '29 July 2026',
    capturedLocal: '2026-07-29T03:35:50+02:00',
    capturedUtc: '2026-07-29T01:35:50Z',
    timezone: 'CEST (UTC+02:00)',
    originalScreenshot: {
      filename: path.basename(ORIGINAL),
      publicPath: screenshotPublicPath,
      pixelDimensions: `${width}x${height}`,
      mediaType: 'image/png',
      sha256
    },
    responsivePreviews: [PREVIEW_800, PREVIEW_1600]
  },
  metrics: {
    provingGround: {
      globalRank: 74,
      percentileLabel: 'top 6%',
      totalBreaks: 113,
      progressByArea: {
        chat: { breaks: 39, available: 552, displayedPercent: 7 },
        image: { breaks: 32, available: 387, displayedPercent: 8 },
        agent: { breaks: 28, available: 593, displayedPercent: 5 },
        indirect: { breaks: 13, available: 547, displayedPercent: 2 }
      },
      displayedAreaTotal: 112
    },
    arenaProfile: {
      globalRank: 365,
      globalUniqueBreaks: 28,
      globalPoints: 1120,
      submissions: 255,
      maximumStreakWeeks: 3
    }
  },
  notes: [
    'The four displayed Proving Ground area counters sum to 112 while the profile displays 113 Total Breaks. Both values are transcribed exactly; no internal aggregation rule is inferred.',
    'Rankings, percentiles, points and totals are dynamic. Claims cite this snapshot date and capture time.',
    'The original PNG is retained unchanged as the evidence object. Responsive WebP derivatives are used for website performance and are not presented as independent evidence.',
    'This is account-holder-preserved platform evidence, not an attestation issued by Gray Swan and not independent reproduction of every adjudicated result.'
  ],
  previousSnapshots: [
    'https://mariomarcolongo.com/evidence/gray-swan-2026-07-25/',
    'https://perma.cc/U8TY-PWYA'
  ]
};
write('public/evidence/gray-swan-profile-2026-07-29.json', `${JSON.stringify(manifest, null, 2)}\n`);

const manifestHtml = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Gray Swan profile preservation manifest — 29 July 2026</title>
  <meta name="description" content="Preservation manifest for Mario Marcolongo's Gray Swan Arena profile screenshot captured on 29 July 2026.">
  <style>body{max-width:880px;margin:0 auto;padding:40px 20px;font:16px/1.6 system-ui,sans-serif;color:#17191d}code{overflow-wrap:anywhere}img{max-width:100%;height:auto;border:1px solid #bbb;border-radius:12px}table{border-collapse:collapse;width:100%}th,td{text-align:left;padding:.65rem;border-bottom:1px solid #ddd}small{color:#555}</style>
</head>
<body>
  <main>
    <p><a href="${EVIDENCE_PAGE}">← Dated evidence page</a></p>
    <h1>Gray Swan profile preservation manifest</h1>
    <p><strong>Captured:</strong> 29 July 2026, 03:35:50 CEST (01:35:50 UTC)</p>
    <p><strong>Original file:</strong> <a href="${screenshotPublicPath}">${path.basename(ORIGINAL)}</a></p>
    <p><strong>Dimensions:</strong> ${width} × ${height} pixels</p>
    <p><strong>SHA-256:</strong> <code>${sha256}</code></p>
    <h2>Transcribed platform values</h2>
    <table><tbody>
      <tr><th>Proving Ground</th><td>#74 · top 6% · 113 Total Breaks</td></tr>
      <tr><th>Arena profile</th><td>#365 · 28 global unique breaks · 1,120 points · 255 submissions</td></tr>
      <tr><th>Visible area total</th><td>112 (39 Chat + 32 Image + 28 Agent + 13 Indirect)</td></tr>
    </tbody></table>
    <h2>Original screenshot</h2>
    <a href="${screenshotPublicPath}"><img src="${PREVIEW_1600}" srcset="${PREVIEW_SET}" sizes="100vw" width="1600" height="903" alt="Gray Swan Arena profile screenshot showing Mario Marcolongo ranked 74 in Proving Ground, top 6%, with 113 total breaks on 29 July 2026"></a>
    <p><small>The ranking and totals are time-sensitive platform records. The original PNG is the preserved evidence object; the WebP image above is a performance derivative.</small></p>
    <p><a href="${MANIFEST_JSON}">Machine-readable JSON manifest</a> · <a href="https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf">Live Gray Swan profile</a></p>
  </main>
</body>
</html>
`;
write('public/evidence/gray-swan-profile-2026-07-29.html', manifestHtml);

const astroPage = `---
import Layout from "../../layouts/Layout.astro";
import SiteNav from "../../components/SiteNav.astro";
import SiteFooter from "../../components/SiteFooter.astro";
import "../../styles/career-v2.css";
import D from "../../../data/source.js";

const title = "Gray Swan Proving Ground Evidence — 29 July 2026";
const description = "Dated Gray Swan evidence record for Mario Marcolongo: original profile screenshot, Proving Ground rank 74, top 6%, 113 total breaks and separate Arena metrics.";
const original = "${screenshotPublicPath}";
const preview = "${PREVIEW_1600}";
const previewSet = "${PREVIEW_SET}";
const evidenceJsonLd = {
  "@context": "https://schema.org",
  "@type": "DigitalDocument",
  name: title,
  description,
  url: "https://mariomarcolongo.com${EVIDENCE_PAGE}",
  dateCreated: "2026-07-29T01:35:50Z",
  dateModified: "2026-07-29",
  author: { "@id": "https://mariomarcolongo.com/#person" },
  isBasedOn: D.identity.grayswanUrl,
  encoding: [
    { "@type": "MediaObject", contentUrl: `https://mariomarcolongo.com${screenshotPublicPath}`, encodingFormat: "image/png", width: ${width}, height: ${height} },
    { "@type": "MediaObject", contentUrl: "https://mariomarcolongo.com${MANIFEST_JSON}", encodingFormat: "application/json" }
  ]
};
---

<Layout title={title} description={description} canonical="https://mariomarcolongo.com${EVIDENCE_PAGE}">
  <Fragment slot="head"><script type="application/ld+json" set:html={JSON.stringify(evidenceJsonLd)}></script></Fragment>
  <SiteNav activePage="security" />
  <main class="evaluation-shell">
    <section class="evaluation-hero">
      <div>
        <div class="evaluation-eyebrow">Dated platform record · 29 July 2026 · 03:35:50 CEST</div>
        <h1 class="evaluation-title">Gray Swan profile evidence.</h1>
        <p class="evaluation-lede">The account-holder capture displayed Proving Ground rank #74, top 6% and 113 Total Breaks. The separate Arena profile displayed rank #365, 28 global unique breaks, 1,120 points and 255 submissions.</p>
        <div class="career-actions">
          <a class="btn btn-primary" href={D.identity.grayswanUrl} target="_blank" rel="noopener noreferrer">Open live Gray Swan profile ↗</a>
          <a class="btn" href="/security.html">Read the evaluation record</a>
          <a class="btn" href="${MANIFEST_HTML}">Preservation manifest</a>
          <a class="btn" href="/evidence/gray-swan-2026-07-25/">Previous snapshot</a>
        </div>
      </div>
      <aside class="evaluation-scope-note"><strong>Evidence boundary</strong><p>The original PNG is retained unchanged. Responsive WebP derivatives are used on the website. Counts and rankings are platform-reported, time-sensitive and not independent reproduction of every adjudicated result.</p></aside>
    </section>

    <section class="evaluation-metrics" aria-label="Dated Gray Swan metrics">
      <article class="evaluation-metric"><strong>#74</strong><span>Proving Ground rank</span><small>Top 6% · time-sensitive snapshot</small></article>
      <article class="evaluation-metric"><strong>113</strong><span>Platform-displayed total breaks</span><small>Visible area counters sum to 112</small></article>
      <article class="evaluation-metric"><strong>255</strong><span>Arena submissions shown</span><small>28 unique breaks · 1,120 points</small></article>
    </section>

    <section class="evaluation-section">
      <div class="evaluation-section-head"><h2>Original public profile screenshot</h2><p>The image is shown directly rather than replaced with a synthetic metric graphic. Select it to open the exact committed PNG.</p></div>
      <figure style="margin:0">
        <a href={original} aria-label="Open the original Gray Swan profile screenshot at full size"><img src={preview} srcset={previewSet} sizes="(max-width: 900px) 100vw, 1200px" alt="Screenshot of Mario Marcolongo's Gray Swan profile showing Proving Ground rank 74, top 6%, 113 total breaks and separate Arena activity on 29 July 2026" width="1600" height="903" style="display:block;width:100%;height:auto;border:1px solid rgba(127,127,127,.3);border-radius:18px;background:#090b0d" /></a>
        <figcaption style="margin-top:12px;line-height:1.6">Original capture: ${width} × ${height} PNG · captured 29 July 2026 at 03:35:50 CEST.</figcaption>
      </figure>
      <div class="career-actions" style="margin-top:18px"><a class="btn" href="${MANIFEST_HTML}">Preservation manifest and SHA-256</a><a class="btn" href="${MANIFEST_JSON}">Machine-readable evidence JSON</a></div>
    </section>

    <section class="evaluation-section">
      <div class="evaluation-section-head"><h2>Values transcribed from the capture</h2><p>Arena and Proving Ground are separate ranking and activity systems.</p></div>
      <div class="evaluation-grid">
        <article class="evaluation-card"><div class="evaluation-step">PROVING GROUND</div><h3>#74 · Top 6%</h3><p>113 Total Breaks displayed.</p></article>
        <article class="evaluation-card"><div class="evaluation-step">ARENA PROFILE</div><h3>#365 global rank</h3><p>28 global unique breaks · 1,120 points · 255 submissions.</p></article>
        <article class="evaluation-card"><div class="evaluation-step">CHAT</div><h3>39 / 552</h3><p>7% displayed.</p></article>
        <article class="evaluation-card"><div class="evaluation-step">IMAGE</div><h3>32 / 387</h3><p>8% displayed.</p></article>
        <article class="evaluation-card"><div class="evaluation-step">AGENT</div><h3>28 / 593</h3><p>5% displayed.</p></article>
        <article class="evaluation-card"><div class="evaluation-step">INDIRECT</div><h3>13 / 547</h3><p>2% displayed.</p></article>
      </div>
      <aside class="evaluation-scope-note" style="margin-top:24px"><strong>Visible aggregation discrepancy</strong><p>The four visible area counters total 112, while the profile displays 113 Total Breaks. Both are preserved exactly; no internal aggregation rule is inferred.</p></aside>
    </section>
  </main>
  <SiteFooter version={D.identity.buildVersion} />
</Layout>
`;
write('src/pages/evidence/gray-swan-2026-07-29.astro', astroPage);

console.log(`Updated Gray Swan current snapshot: #74, top 6%, 113 breaks; original ${width}x${height}, SHA-256 ${sha256}`);
