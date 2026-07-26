#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");
const { D, H, P, graySwan: GS, audience: ENTROPY, ENTROPY_WORK_URL } = require("../data/career-positioning.js");

const ROOT = path.resolve(__dirname, "..");
let failures = 0;

function fail(message) {
  failures += 1;
  console.error(`FAIL: ${message}`);
}
function pass(message) {
  console.log(`PASS: ${message}`);
}
function read(relativePath) {
  const full = path.join(ROOT, relativePath);
  if (!fs.existsSync(full)) {
    fail(`Missing file: ${relativePath}`);
    return "";
  }
  const value = fs.readFileSync(full, "utf8");
  if (!value.length) fail(`Empty file: ${relativePath}`);
  return value;
}
function normalize(value) {
  return String(value)
    .replaceAll("&amp;", "&")
    .replaceAll("&#39;", "'")
    .replaceAll("&quot;", '"')
    .replaceAll("&gt;", ">")
    .replaceAll("&lt;", "<");
}
function contains(content, needle, label) {
  if (!content.includes(needle)) fail(`${label} is missing: ${needle}`);
}
function excludes(content, needle, label) {
  if (content.includes(needle)) fail(`${label} contains stale or rejected content: ${needle}`);
}
function parseJsonLd(html, label) {
  const regex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count += 1;
    try {
      JSON.parse(match[1].trim());
    } catch (error) {
      fail(`${label} has invalid JSON-LD block ${count}: ${error.message}`);
    }
  }
  if (!count) fail(`${label} has no JSON-LD`);
}

const requiredFiles = [
  "dist/index.html",
  "dist/security.html",
  "dist/cv.html",
  "dist/cv-resume.html",
  "dist/cv-research.html",
  "dist/cv-editorial.html",
  "dist/cv-integrity.html",
  "dist/integrity.html",
  "dist/evidence/gray-swan-2026-07-25/index.html",
  "dist/media/work/model-behavior-profile.webp",
  "dist/media/work/entropy-work-inventory.svg",
  "dist/evidence/gray-swan-profile-2026-07-25.png",
  "dist/llms.txt",
  "dist/llms-full.txt",
  "dist/cv-llm.txt"
];
for (const file of requiredFiles) read(file);

const pages = {
  home: read("dist/index.html"),
  security: read("dist/security.html"),
  master: read("dist/cv.html"),
  ai: read("dist/cv-resume.html"),
  research: read("dist/cv-research.html"),
  editorial: read("dist/cv-editorial.html"),
  integrity: read("dist/cv-integrity.html"),
  workSample: read("dist/integrity.html"),
  evidence: read("dist/evidence/gray-swan-2026-07-25/index.html")
};
for (const [name, html] of Object.entries(pages)) {
  if (html) parseJsonLd(html, name);
}

const currentOutputs = normalize(
  [
    ...Object.entries(pages)
      .filter(([name]) => name !== "workSample")
      .map(([, value]) => value),
    read("dist/llms.txt"),
    read("dist/llms-full.txt"),
    read("dist/cv-llm.txt")
  ].join("\n")
);

for (const expected of [
  `#${GS.rank}`,
  GS.percentile,
  String(GS.totalBreaks),
  GS.asOf,
  String(GS.arenaRank),
  String(GS.uniqueBreaks),
  GS.points.toLocaleString("en-US"),
  String(GS.submissions),
  ENTROPY.projects,
  `${ENTROPY.videoProjects} YouTube`,
  `${ENTROPY.articles} co-authored articles`,
  ENTROPY_WORK_URL,
  "/media/work/model-behavior-profile.webp",
  GS.evidencePath
]) contains(currentOutputs, expected, "Current applicant-facing outputs");

for (const stale of [
  "#77 on the Proving Ground",
  "top 7%",
  "105 leaderboard-counted",
  "232 Proving Ground submissions",
  "24 July 2026 platform snapshot",
  "/media/work/model-behavior-profile.jpg",
  "https://entropyforlife.it/wp-content/uploads/2024/10/Dashboard-1-5-png.webp",
  "Fact-checking scientific scripts before publication.",
  "Founder & Technical Product Builder",
  "Sole web developer",
  "AI-Native Engineering",
  "PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
  "PLUXju4zC0Sks"
]) excludes(currentOutputs, stale, "Current applicant-facing outputs");

const home = normalize(pages.home);
for (const expected of [
  H.headline,
  "Fact-checking and producing scientific content before publication.",
  `${ENTROPY.projects} documented published projects`,
  `${ENTROPY.videoProjects} YouTube projects`,
  `${ENTROPY.articles} co-authored articles`,
  "Official work record published by Entropy for Life",
  ENTROPY_WORK_URL,
  `#${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.asOf}`,
  "data-testid=\"human-capabilities\"",
  "data-testid=\"human-work\"",
  "data-testid=\"human-documents\""
]) contains(home, expected, "Homepage");
pass("Homepage evidence hierarchy and media checked");

const security = normalize(pages.security);
for (const expected of [
  "AI evaluation and model-behavior record.",
  `${GS.totalBreaks} platform-displayed total breaks`,
  `${GS.displayedAreaTotal}`,
  "Current dated profile evidence",
  "Historical 24 July wave record",
  GS.evidencePath,
  "Open live Gray Swan profile"
]) contains(security, expected, "Evaluation record");
pass("Evaluation evidence and historical boundary checked");

const profiles = [
  ["AI evaluation CV", pages.ai, P.aiSafety],
  ["Research CV", pages.research, P.researchQuality],
  ["Editorial CV", pages.editorial, P.editorialCommunity],
  ["Integrity CV", pages.integrity, P.integrity]
];
for (const [label, html, profile] of profiles) {
  const text = normalize(html);
  contains(text, profile.title, label);
  contains(text, "Page 1 of 2", label);
  contains(text, "Page 2 of 2", label);
  contains(text, "C1 overall", label);
  contains(text, ENTROPY.projects, label);
  contains(text, ENTROPY_WORK_URL, label);
  contains(text, "Official Entropy for Life work record", label);
}
contains(normalize(pages.ai), String(GS.totalBreaks), "AI evaluation CV");
contains(normalize(pages.integrity), String(GS.totalBreaks), "Integrity CV");
contains(normalize(pages.editorial), "Marta Panzeri", "Editorial CV");
pass("Four targeted two-page CVs checked");

const master = normalize(pages.master);
for (const expected of [
  "Master CV & Evidence Record",
  "not presented as an independent software developer",
  String(GS.totalBreaks),
  ENTROPY.projects,
  "Scientific Content Quality & Operations Contractor",
  ENTROPY_WORK_URL
]) contains(master, expected, "Master CV");
pass("Master CV checked");

if (D.identity.buildVersion !== "v2026.07.26") fail("Release build version is not current.");
if (D.redTeamActivity.platformReportedBreaks !== GS.totalBreaks) fail("Current Gray Swan total is inconsistent.");
if (D.redTeamActivity.areaBreaksTotal !== GS.displayedAreaTotal) fail("Area-total evidence boundary is inconsistent.");

if (failures) {
  console.error(`\nApplication-release verification failed with ${failures} issue(s).`);
  process.exit(1);
}
console.log("\nApplication-release verification passed.");
