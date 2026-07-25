#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');

function read(relative) {
  return fs.readFileSync(path.join(ROOT, relative), 'utf8');
}

function write(relative, content) {
  fs.writeFileSync(path.join(ROOT, relative), content, 'utf8');
}

function replaceRequired(content, search, replacement, label, minimum = 1) {
  let count = 0;
  let output;
  if (search instanceof RegExp) {
    output = content.replace(search, (...args) => {
      count += 1;
      return typeof replacement === 'function' ? replacement(...args) : replacement;
    });
  } else {
    count = content.split(search).length - 1;
    output = content.split(search).join(replacement);
  }
  if (count < minimum) {
    throw new Error(`${label}: expected at least ${minimum} replacement(s), found ${count}`);
  }
  return output;
}

function replaceOptional(content, search, replacement) {
  return search instanceof RegExp ? content.replace(search, replacement) : content.split(search).join(replacement);
}

function updateSource() {
  const file = 'data/source.js';
  let text = read(file);

  const replacements = [
    ['buildVersion: "v2026.07.21"', 'buildVersion: "v2026.07.25"', 'build version'],
    ['grayswanArchiveUrl: "/evidence/gray-swan-2026-07-24/"', 'grayswanArchiveUrl: "/evidence/gray-swan-profile-2026-07-25.html"', 'current evidence URL'],
    ['evaluationAsOf: "24 July 2026"', 'evaluationAsOf: "25 July 2026"', 'evaluation date'],
    ['The dated Gray Swan Proving Ground record shows #77 on the leaderboard (top 7%) on 24 July 2026, with 105 leaderboard-counted breaks across 232 Proving Ground submissions. The record demonstrates sustained evaluation activity; it is not an independent security audit or certification.', 'The dated Gray Swan profile shows Proving Ground rank #75 (top 6%) with 110 platform-recorded total breaks on 25 July 2026. The same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions. The record demonstrates sustained evaluation activity; it is not an independent security audit or certification.', 'AI pillar description'],
    ['#77 · top 7% · 105 breaks across 26 waves on 24 July 2026', '#75 · top 6% · 110 platform-recorded breaks on 25 July 2026', 'AI pillar highlight'],
    ['{ value: "105", label: "Leaderboard-Counted Model Breaks", detail: "#77 · top 7% · 26 Proving Ground waves · 24 July 2026" },', '{ value: "110", label: "Platform-Recorded Proving Ground Breaks", detail: "#75 · top 6% · 25 July 2026" },', 'primary Gray Swan stat'],
    ['{ value: "232", label: "Proving Ground Submissions", detail: "242 total Arena submissions shown separately on the dated profile" },', '{ value: "246", label: "Arena Submissions", detail: "Arena rank #370 · 27 global unique breaks · 1,090 points" },', 'Arena stat'],
    ['description: "Self-directed model-behavior evaluation conducted through the Gray Swan Proving Ground. The dated record shows #77 on the Proving Ground leaderboard, top 7%, with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 listed waves. Aggregate counts and selected public labels are presented with explicit evidence limitations; complete prompts, outputs, model versions and adjudication materials are not reproduced."', 'description: "Self-directed model-behavior evaluation conducted through the Gray Swan Proving Ground. The dated 25 July 2026 screenshot shows Proving Ground rank #75, top 6%, with 110 platform-recorded total breaks; the same profile shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions. Aggregate counts and selected public labels are presented with explicit evidence limitations; complete prompts, outputs, model versions and adjudication materials are not reproduced."', 'AI project description'],
    ['"105 Leaderboard-Counted Model Breaks: #77 and top 7% on the dated Proving Ground snapshot",', '"110 Platform-Recorded Proving Ground Breaks: #75 and top 6% on the dated 25 July 2026 snapshot",', 'AI project highlight 1'],
    ['"232 Proving Ground Submissions: 242 total Arena submissions are shown separately",', '"Arena Profile Context: #370 rank, 27 global unique breaks, 1,090 points and 246 submissions",', 'AI project highlight 2'],
    ['oneLiner: "Paid scientific fact-checker, writer, data visualizer and website manager supporting more than 55 videos and documentaries and four articles."', 'oneLiner: "Paid scientific research, fact-checking, script-development, visual-production and website-operations work across 59+ published projects."', 'Entropy one-liner'],
    ['description: "Conduct bibliographic research and verify primary literature for more than 55 videos and documentaries and four articles. Identify unsupported claims, conflicting evidence and source-quality problems; communicate corrections to a non-specialist production team. Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO. Formally acknowledged in Giacomo Moro Mauretto’s Mondadori book Italiani veri."', 'description: "Paid contractor for Entropy for Life across 59+ publicly indexed projects: 55+ published YouTube video projects and four co-authored articles. Most video assignments combine primary-literature research, scientific fact-checking and script development; selected assignments focus on fact-checking and/or data visualization. Also produce data visualizations, presentation slides, on-screen assets, short-form materials and selected thumbnails independently or with video editor Alessandro Lanzoni. Additional Instagram and TikTok work is not yet fully indexed. Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO. Formally acknowledged in Giacomo Moro Mauretto’s Mondadori book Italiani veri."', 'Entropy project description'],
    ['role: "Scientific Fact-Checker, Writer & Website Manager"', 'role: "Scientific Research, Fact-Checking & Website Operations Contractor"', 'Entropy role'],
    ['tech: ["Primary-Source Fact-Checking", "Bibliographic Research", "Scientific Writing", "WordPress", "DNS/SSL", "Technical SEO"]', 'tech: ["Primary-Literature Research", "Scientific Fact-Checking", "Script Development", "Data Visualization & Presentation Design", "WordPress", "DNS/SSL", "Technical SEO"]', 'Entropy skills'],
    ['authorPage: "https://entropyforlife.it/autore/mario-marcolongo/"\n      },', 'authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",\n        thumbnails: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"\n      },', 'Entropy thumbnail links', 2],
    ['"55+ Videos and Documentaries: Primary literature researched and checked",', '"55+ Published YouTube Projects: Primary literature researched, checked and developed into scripts",', 'Entropy highlight 1'],
    ['"Four Published Articles: Scientific writing and evidence verification",', '"Four Co-Authored Articles: Scientific writing and evidence verification",', 'Entropy highlight 2'],
    ['"Operational Responsibility: Hosting, DNS, SSL, WordPress and technical SEO"', '"Visual & Website Operations: Slides, on-screen assets, selected thumbnails, hosting, DNS/SSL, WordPress and technical SEO"', 'Entropy highlight 3'],
    ['asOf: "24 July 2026",', 'asOf: "25 July 2026",', 'red-team date'],
    ['rankBand: "#77 · Top 7%",', 'rankBand: "#75 · Top 6%",', 'red-team rank band'],
    ['leaderboardRank: 77,', 'leaderboardRank: 75,\n    platformReportedBreaks: 110,\n    areaBreaks: { chat: 36, image: 32, agent: 28, indirect: 13 },\n    areaBreaksTotal: 109,\n    arenaRank: 370,\n    globalUniqueBreaks: 27,\n    globalPoints: 1090,', 'red-team current metrics'],
    ['totalArenaSubmissions: 242,', 'totalArenaSubmissions: 246,', 'Arena submissions'],
    ['profileReportedBreaks: 106,', 'profileReportedBreaks: 110,', 'profile total breaks'],
    ['period: "2023 — Present",\n      links: {\n        caseStudy: "/security.html"', 'period: "Jul 2026 — Present",\n      links: {\n        caseStudy: "/security.html"', 'formal Gray Swan tenure'],
    ['"Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 listed waves on 24 July 2026."', '"Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks on 25 July 2026; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions."', 'Gray Swan experience bullet'],
    ['"Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 listed waves on 24 July 2026."', '"Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks on 25 July 2026."', 'Gray Swan resume bullet'],
    ['"Conduct bibliographic research and verify primary literature for more than 55 videos and documentaries and four articles."', '"Deliver primary-literature research, scientific fact-checking and script development across 55+ published YouTube video projects and four co-authored articles; most video assignments combine all three functions, while selected work focuses on fact-checking and/or data visualization."', 'Entropy experience bullet 1'],
    ['"Identify unsupported claims, conflicting evidence and source-quality problems and communicate corrections within a small recurring team consisting primarily of Giacomo Moro Mauretto, the video editor and me."', '"Produce data visualizations, presentation slides and on-screen assets, short-form materials and selected thumbnails independently or with video editor Alessandro Lanzoni; additional Instagram and TikTok work is not yet fully indexed."', 'Entropy experience bullet 2'],
    ['"Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO."', '"Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO as website operations rather than conventional independent software development."', 'Entropy experience bullet 3'],
    ['"Conduct bibliographic research and verify primary literature for more than 55 videos and documentaries and four articles."', '"Deliver research, fact-checking and script development across 55+ published YouTube projects and four co-authored articles, with additional visualization, slide and selected-thumbnail work."', 'Entropy resume bullet 1'],
    ['"Identify unsupported claims and source-quality problems; manage WordPress, hosting, DNS/SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri."', '"Identify unsupported claims and source-quality problems; manage WordPress, hosting, DNS/SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri."', 'Entropy resume bullet 2']
  ];

  for (const [from, to, label, minimum] of replacements) {
    text = replaceRequired(text, from, to, label, minimum || 1);
  }

  write(file, text);
  write('public/data/source.js', text);
}

function updatePortfolio() {
  const file = 'data/portfolio-human.js';
  let text = read(file);
  const replacements = [
    ['value: "105",\n      label: "leaderboard-counted model breaks",\n      detail: "#77 · top 7% · 24 July 2026"', 'value: "110",\n      label: "platform-recorded Proving Ground breaks",\n      detail: "#75 · top 6% · 25 July 2026"', 'homepage proof metric'],
    ['detail: "55+ video/documentary productions · 4 articles"', 'detail: "55+ YouTube video projects · 4 co-authored articles"', 'homepage Entropy metric'],
    ['image: "/media/work/model-behavior-profile.jpg"', 'image: "/evidence/gray-swan-metrics-2026-07-25.svg"', 'current Gray Swan image', 2],
    ['alt: "Gray Swan Arena profile screenshot showing Mario Marcolongo ranked number 77 in Proving Ground, top 7 percent"', 'alt: "Gray Swan Arena profile screenshot showing Mario Marcolongo ranked number 75 in Proving Ground, top 6 percent, with 110 total breaks"', 'hero image alt'],
    ['lead: "Across 26 public challenge waves, I tested chat, image, agent and indirect prompt-injection behavior and preserved a dated public record of the result."', 'lead: "I tested chat, image, agent and indirect prompt-injection behavior and preserved dated public evidence that keeps Proving Ground and Arena metrics separate."', 'model case lead'],
    ['result: "#77 on the Proving Ground leaderboard, top 7%, with 105 leaderboard-counted breaks across 232 Proving Ground submissions on 24 July 2026."', 'result: "#75 on the Proving Ground leaderboard, top 6%, with 110 platform-recorded total breaks on 25 July 2026; the same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions."', 'model case result'],
    ['imageCaption: "Real platform profile · #77 · top 7% · dated 24 July 2026"', 'imageCaption: "Real platform profile · #75 · top 6% · 110 total breaks · dated 25 July 2026"', 'model image caption'],
    ['result: "At least 59 published outputs supported: 55+ video and documentary productions indexed through the YouTube contribution playlist, plus four articles. A separate playlist records thumbnail work."', 'result: "At least 59 published projects supported: 55+ YouTube video projects indexed through the contribution playlist, plus four co-authored articles. A separate playlist records selected thumbnail work."', 'Entropy case result'],
    ['label: "Four published articles"', 'label: "Four co-authored articles"', 'article label'],
    ['label: "Thumbnail-work playlist"', 'label: "Selected thumbnail-work playlist"', 'thumbnail label'],
    ['        {\n          label: "Selected thumbnail-work playlist",\n          href: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"\n        }\n      ],', '        {\n          label: "Selected thumbnail-work playlist",\n          href: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"\n        },\n        {\n          label: "Official Entropy for Life website",\n          href: "https://entropyforlife.it"\n        }\n      ],', 'official website link']
  ];
  for (const [from, to, label, minimum] of replacements) text = replaceRequired(text, from, to, label, minimum || 1);
  write(file, text);
}

function updateApplicationProfiles() {
  const file = 'data/application-profiles.js';
  let text = read(file);
  const replacements = [
    ['Gray Swan Proving Ground participant ranked #77 (top 7%) on 24 July 2026, with 105 leaderboard-counted breaks across 232 Proving Ground submissions and 26 waves.', 'Gray Swan Proving Ground participant ranked #75 (top 6%) on 25 July 2026, with 110 platform-recorded total breaks; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.', 'AI CV summary'],
    ['{ value: "105", label: "Leaderboard-counted model breaks", detail: "#77 · top 7% · 26 Proving Ground waves" },', '{ value: "110", label: "Platform-recorded Proving Ground breaks", detail: "#75 · top 6% · 25 July 2026" },', 'AI CV primary strength'],
    ['{ value: "232", label: "Proving Ground submissions", detail: "242 total Arena submissions shown separately" },', '{ value: "246", label: "Arena submissions", detail: "#370 rank · 27 unique breaks · 1,090 points" },', 'AI CV Arena strength'],
    ['period: "2023 — Present",', 'period: "Jul 2026 — Present",', 'formal Gray Swan periods', 2],
    ['"Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 submissions and 26 listed waves on 24 July 2026."', '"Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks on 25 July 2026; the same profile showed Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions."', 'AI CV experience metric'],
    ['{ value: "105", label: "Leaderboard-counted model breaks", detail: "#77 · top 7% · four evaluation surfaces" },', '{ value: "110", label: "Platform-recorded Proving Ground breaks", detail: "#75 · top 6% · four evaluation surfaces" },', 'integrity CV strength'],
    ['"Reached #77 on the Proving Ground leaderboard (top 7%) with 105 leaderboard-counted breaks across 232 Proving Ground submissions, while documenting the limitations and the profile/leaderboard discrepancy."', '"Reached #75 on the Proving Ground leaderboard (top 6%) with 110 platform-recorded total breaks, while documenting that the four visible area counters sum to 109 and keeping Arena metrics separate."', 'integrity CV metric'],
    ['Scientific Fact-Checker, Writer & Website Manager', 'Scientific Research, Fact-Checking & Website Operations Contractor', 'Entropy role labels', 4],
    ['more than 55 videos and documentaries and four published articles', '55+ published YouTube video projects and four co-authored articles', 'published Entropy scope', 2],
    ['more than 55 videos and documentaries and four articles', '55+ published YouTube video projects and four co-authored articles', 'Entropy scope', 2],
    ['more than 55 videos and documentaries', '55+ published YouTube video projects', 'remaining Entropy scope'],
    ['{ value: "55+", label: "Videos and documentaries checked", detail: "Paid primary-source verification for Entropy for Life" },', '{ value: "59+", label: "Published projects supported", detail: "55+ YouTube video projects · 4 co-authored articles" },', 'AI CV Entropy strength'],
    ['{ value: "55+", label: "Videos and documentaries checked", detail: "Plus four published articles" },', '{ value: "59+", label: "Published projects supported", detail: "55+ YouTube video projects · 4 co-authored articles" },', 'research CV Entropy strength'],
    ['{ value: "55+", label: "Scientific productions supported", detail: "Videos and documentaries plus four articles" },', '{ value: "59+", label: "Published projects supported", detail: "55+ YouTube video projects · 4 co-authored articles" },', 'editorial CV Entropy strength'],
    ['{ value: "55+", label: "Scientific productions checked", detail: "Health and biology evidence verification" },', '{ value: "59+", label: "Published projects checked", detail: "55+ YouTube video projects · 4 co-authored articles" },', 'integrity CV Entropy strength'],
    ['"Conduct bibliographic research and verify primary literature for 55+ published YouTube video projects and four co-authored articles."', '"Deliver primary-literature research, scientific fact-checking and script development across 55+ published YouTube video projects and four co-authored articles; most video assignments combine all three functions, while selected work focuses on fact-checking and/or data visualization."', 'AI CV Entropy bullet'],
    ['"Support a small recurring science-communication team by researching primary literature, checking claims and communicating corrections for 55+ published YouTube video projects and four co-authored articles."', '"Support a small recurring science-communication team across 55+ published YouTube video projects and four co-authored articles through primary-literature research, scientific fact-checking, script development and clear correction notes."', 'editorial Entropy bullet'],
    ['"Write and co-author public-facing scientific content, maintain source documentation and translate complex evidence into clear editorial recommendations."', '"Create or support scripts, data visualizations, presentation slides, on-screen assets, short-form materials and selected thumbnails, with roles attributed per project."', 'editorial production bullet'],
    ['{ label: "Video archive", url: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" }', '{ label: "55+ YouTube projects", url: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh" },\n          { label: "Selected thumbnails", url: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks" }', 'direct Entropy evidence links', 2]
  ];
  for (const [from, to, label, minimum] of replacements) text = replaceRequired(text, from, to, label, minimum || 1);
  write(file, text);
}

function updateSecurityPage() {
  const file = 'src/pages/security.astro';
  let text = read(file);
  text = replaceRequired(text, 'const asOf = D.redTeamActivity.asOf || "24 July 2026";', 'const asOf = D.redTeamActivity.asOf || "25 July 2026";', 'security default date');
  text = replaceRequired(text, 'const archiveUrl = D.identity.grayswanArchiveUrl || "/evidence/gray-swan-2026-07-24/";', 'const archiveUrl = D.identity.grayswanArchiveUrl || "/evidence/gray-swan-profile-2026-07-25.html";', 'security evidence URL');
  text = replaceRequired(text, 'dateModified: "2026-07-24",', 'dateModified: "2026-07-25",', 'security modified date');
  text = replaceRequired(text,
`    <section class="evaluation-metrics" aria-label="Platform-reported activity">
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.confirmedBreaks}</strong>
        <span>Leaderboard-counted breaks</span>
        <small>#77 on the Proving Ground leaderboard · {asOf}</small>
      </article>
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.submissions}</strong>
        <span>Proving Ground submissions</span>
        <small>Repeated activity across multiple testing surfaces</small>
      </article>
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.rankBand}</strong>
        <span>Proving Ground rank</span>
        <small>Time-sensitive platform snapshot · {asOf}</small>
      </article>
    </section>`,
`    <section class="evaluation-metrics" aria-label="Platform-reported activity">
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.platformReportedBreaks}</strong>
        <span>Proving Ground total breaks</span>
        <small>#75 · top 6% · {asOf}</small>
      </article>
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.totalArenaSubmissions}</strong>
        <span>Arena submissions</span>
        <small>#370 Arena rank · 27 unique breaks · 1,090 points</small>
      </article>
      <article class="evaluation-metric">
        <strong>{D.redTeamActivity.rankBand}</strong>
        <span>Proving Ground rank</span>
        <small>Time-sensitive platform snapshot · {asOf}</small>
      </article>
    </section>`, 'security metrics');
  text = replaceRequired(text,
'The live Gray Swan profile is the primary source. A dated evidence page preserves the real platform screenshot and explains why the portfolio uses the independently reconcilable total of 105 rather than the profile aggregate of 106.',
'The live Gray Swan profile is the primary source. The latest dated evidence page preserves a real screenshot showing #75, top 6% and 110 total breaks, while keeping the Arena profile metrics separate. It also records that the four visible area counters sum to 109 rather than silently inferring an aggregation rule.', 'security evidence intro');
  text = replaceRequired(text,
`          <h3>24 July 2026 platform snapshot</h3>
          <p>Real platform screenshot preserving #77, top 7%, 232 Proving Ground submissions, 242 total Arena submissions and the visible 105/106 discrepancy.</p>`,
`          <h3>25 July 2026 platform snapshot</h3>
          <p>Real platform screenshot preserving #75, top 6%, 110 Proving Ground total breaks, Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.</p>
          <img src="/evidence/gray-swan-metrics-2026-07-25.svg" width="1200" height="593" alt="Gray Swan profile screenshot showing rank 75, top 6 percent and 110 Proving Ground total breaks, alongside Arena metrics" style="display:block;width:100%;height:auto;margin-top:1rem;border-radius:.75rem" />`, 'security evidence card');
  text = replaceRequired(text, '<summary>Open the complete 26-wave activity table</summary>', '<summary>Open the historical 24 July 26-wave activity table</summary>', 'historical table label');
  text = replaceRequired(text,
'        <li>The portfolio uses 105 because the leaderboard, four category totals and 26 wave totals agree; the dated profile aggregate displayed 106.</li>',
'        <li>The 25 July screenshot displays 110 Total Breaks while its four visible category counters sum to 109; both values are reported exactly and no internal aggregation rule is inferred.</li>\n        <li>The historical 24 July record remains available separately and documented a 105/106 discrepancy before the later profile update.</li>', 'security discrepancy note');
  write(file, text);
}

function updateVerification() {
  let integrity = read('scripts/check-stale-strings.js');
  integrity = replaceRequired(integrity, "version: 'v2026.07.21'", "version: 'v2026.07.25'", 'integrity version');
  integrity = replaceRequired(integrity, "'public/media/work/model-behavior-profile.jpg', 'public/media/work/yourself-to-science-800.webp',", "'public/evidence/gray-swan-profile-2026-07-25.html', 'public/evidence/gray-swan-profile-2026-07-25.json',\n  'public/evidence/gray-swan-metrics-2026-07-25.svg', 'public/media/work/yourself-to-science-800.webp',", 'required evidence files');
  integrity = replaceRequired(integrity, "'#77 on the Proving Ground leaderboard',", "'#75 on the Proving Ground leaderboard',", 'homepage rank check');
  integrity = replaceRequired(integrity, "'PLUXju4zC0Sks'", "'PLUXju4zC0Sks',\n  'Official Entropy for Life website'", 'homepage evidence-link check');
  integrity = replaceRequired(integrity, "'/media/work/model-behavior-profile.jpg', 'https://entropyforlife.it/wp-content/uploads/2024/10/Dashboard-1-5-png.webp',", "'/evidence/gray-swan-metrics-2026-07-25.svg', 'https://entropyforlife.it/wp-content/uploads/2024/10/Dashboard-1-5-png.webp',", 'required current screenshot');
  integrity = replaceRequired(integrity,
"for (const [field, actual, expected] of identityChecks) {\n  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);\n}\n",
"for (const [field, actual, expected] of identityChecks) {\n  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);\n}\n\nconst currentGraySwanChecks = [\n  ['redTeamActivity.asOf', D.redTeamActivity?.asOf, '25 July 2026'],\n  ['redTeamActivity.leaderboardRank', D.redTeamActivity?.leaderboardRank, 75],\n  ['redTeamActivity.platformReportedBreaks', D.redTeamActivity?.platformReportedBreaks, 110],\n  ['redTeamActivity.totalArenaSubmissions', D.redTeamActivity?.totalArenaSubmissions, 246],\n  ['redTeamActivity.globalUniqueBreaks', D.redTeamActivity?.globalUniqueBreaks, 27],\n  ['redTeamActivity.globalPoints', D.redTeamActivity?.globalPoints, 1090]\n];\nfor (const [field, actual, expected] of currentGraySwanChecks) {\n  if (actual !== expected) fail('data/source.js', 1, `${field} must equal ${JSON.stringify(expected)}; found ${JSON.stringify(actual)}.`);\n}\n", 'current metric integrity checks');
  integrity = replaceRequired(integrity, "if (!String(packageJson.scripts?.build || '').includes('verify-dist.js')) fail('package.json', 1, 'Production build must run generated-output verification.');", "if (!String(packageJson.scripts?.build || '').includes('verify-dist.js')) fail('package.json', 1, 'Production build must run generated-output verification.');\nif (!String(packageJson.scripts?.deploy || '').includes('--project-name=mariomarcolongo-pages')) fail('package.json', 1, 'Deployment must target the production Cloudflare Pages project.');", 'deploy-project integrity check');
  write('scripts/check-stale-strings.js', integrity);

  let dist = read('scripts/verify-dist.js');
  dist = replaceRequired(dist,
`function normalizeHtmlText(content) {
  return String(content)
    .replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"')
    .replaceAll('&gt;', '>').replaceAll('&lt;', '<');
}`,
`function normalizeHtmlText(content) {
  const entities = new Map([
    ['&amp;', '&'], ['&#39;', "'"], ['&quot;', '"'], ['&gt;', '>'], ['&lt;', '<']
  ]);
  return String(content).replace(/&(?:amp|#39|quot|gt|lt);/g, (entity) => entities.get(entity) || entity);
}`, 'controlled HTML normalization');
  dist = replaceRequired(dist, "'#77 on the Proving Ground leaderboard'", "'#75 on the Proving Ground leaderboard'", 'generated homepage rank');
  dist = replaceRequired(dist,
"'Limitations and interpretation', 'Leaderboard-counted breaks', 'complete 26-wave activity table',\n   '/evidence/gray-swan-2026-07-24/', 'Open live Gray Swan profile', '105/106'",
"'Limitations and interpretation', 'Proving Ground total breaks', 'historical 24 July 26-wave activity table',\n   '/evidence/gray-swan-profile-2026-07-25.html', 'Open live Gray Swan profile', '109'",
'generated security expectations');
  write('scripts/verify-dist.js', dist);
}

function updatePackage() {
  const file = 'package.json';
  let text = read(file);
  text = replaceRequired(text, '--project-name=mariomarcolongo"', '--project-name=mariomarcolongo-pages"', 'Cloudflare production project');
  write(file, text);
}

function updateEvidenceManifest() {
  const jsonPath = 'public/evidence/gray-swan-profile-2026-07-25.json';
  const manifest = JSON.parse(read(jsonPath));
  manifest.sameDayWacz = {
    capturedUtc: '2026-07-25T17:09:22.921Z',
    packageModifiedUtc: '2026-07-25T17:39:08.982Z',
    waczVersion: '1.1.1',
    software: 'Webrecorder ArchiveWeb.page 0.16.2, using warcio.js 2.4.10',
    packageSha256: '1bce44f1fb2a15dfeac79ee500a6fe3b2ac2d9187576acebdd9b873c81cdc983',
    displayedMetrics: {
      provingGroundRank: 75,
      percentileLabel: 'top 6%',
      totalBreaks: 109,
      arenaRank: 372,
      globalUniqueBreaks: 26,
      globalPoints: 1080,
      totalSubmissions: 245
    },
    scope: 'Locally retained WACZ package captured roughly two hours before the later screenshot; it corroborates the rank and percentile but records the immediately preceding totals.'
  };
  manifest.notes = [
    'The four displayed Proving Ground area counters in the later screenshot sum to 109 while the platform displays 110 Total Breaks. Both values are transcribed exactly; no internal aggregation rule is inferred.',
    'A same-day WACZ capture at 17:09 UTC records #75, top 6%, and 109 total breaks before the later screenshot recorded 110. This documents the profile changing during the day.',
    'Rankings, percentiles, points, and totals are dynamic. Portfolio claims should cite the snapshot date and, where precision matters, the capture time.',
    'The current screenshot and locally retained WACZ are account-holder-preserved evidence, not attestations issued by Gray Swan.'
  ];
  write(jsonPath, `${JSON.stringify(manifest, null, 2)}\n`);

  const htmlPath = 'public/evidence/gray-swan-profile-2026-07-25.html';
  let html = read(htmlPath);
  html = replaceRequired(html,
`          This page documents what is visibly displayed in the account-holder-supplied
          screenshot. It is not an attestation issued by Gray Swan, and the current image
          is hosted with this portfolio rather than by an independent archive. The live
          profile is retained for comparison. The <a href="./gray-swan-profile-2026-07-24.html">24 July 2026 snapshot</a>
          remains separately preserved through <a href="https://perma.cc/U8TY-PWYA">Perma.cc</a>
          and a locally verified WACZ package.`,
`          This page documents what is visibly displayed in the account-holder-supplied
          screenshot. It is not an attestation issued by Gray Swan. A locally retained WACZ
          package captured the same profile at 17:09 UTC—roughly two hours earlier—showing
          the same #75 and top-6% position with 109 total breaks, Arena rank #372, 26 unique
          breaks, 1,080 points and 245 total submissions. The later 19:19 UTC screenshot
          records the subsequent increment to 110 breaks, Arena rank #370, 27 unique breaks,
          1,090 points and 246 submissions. The WACZ SHA-256 is
          <code>1bce44f1fb2a15dfeac79ee500a6fe3b2ac2d9187576acebdd9b873c81cdc983</code>.
          The <a href="./gray-swan-profile-2026-07-24.html">24 July 2026 snapshot</a> also remains
          separately preserved through <a href="https://perma.cc/U8TY-PWYA">Perma.cc</a>.`, 'same-day WACZ evidence note');
  write(htmlPath, html);
}

function updateReadme() {
  const file = 'README.md';
  let text = read(file);
  text = replaceOptional(text, /#77/g, '#75');
  text = replaceOptional(text, /top 7%/gi, (match) => match[0] === 'T' ? 'Top 6%' : 'top 6%');
  text = replaceOptional(text, /105 leaderboard-counted breaks/g, '110 platform-recorded total breaks');
  text = replaceOptional(text, /24 July 2026/g, '25 July 2026');
  write(file, text);
}

updateSource();
updatePortfolio();
updateApplicationProfiles();
updateSecurityPage();
updateVerification();
updatePackage();
updateEvidenceManifest();
updateReadme();

// The workflow is a one-shot release migration. Remove its temporary implementation files
// before committing the final branch so production retains only the resulting canonical data.
for (const relative of [
  'scripts/finalize-application-release.js',
  '.github/workflows/finalize-application-release.yml'
]) {
  const absolute = path.join(ROOT, relative);
  if (fs.existsSync(absolute)) fs.rmSync(absolute);
}

console.log('Application release data updated successfully.');
