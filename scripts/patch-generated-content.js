#!/usr/bin/env node
/**
 * Normalize generated portfolio, CV, and machine-readable output.
 *
 * The browser uses source-overrides.js for live hydration. This script also
 * updates no-JavaScript/static fallbacks and gives evidence links precise,
 * recruiter-readable labels.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ENTROPY_VIDEOS =
  "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh";
const ENTROPY_ARTICLES =
  "https://entropyforlife.it/autore/mario-marcolongo/";
const ENTROPY_THUMBNAILS =
  "https://www.youtube.com/playlist?list=PLUXju4zC0Sks";
const GRAY_SWAN_EVIDENCE =
  "https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-24.html";

const replacements = [
  [
    `Videos & Documentaries: ${ENTROPY_VIDEOS}`,
    `55+ YouTube Projects: ${ENTROPY_VIDEOS}`,
  ],
  [
    `Author Page: ${ENTROPY_ARTICLES}`,
    `4 Co-Authored Articles: ${ENTROPY_ARTICLES}`,
  ],
  [
    `YouTube: ${ENTROPY_THUMBNAILS}`,
    `Selected Thumbnails: ${ENTROPY_THUMBNAILS}`,
  ],
  [
    "ranked top 8% globally on Gray Swan AI's proving ground",
    "ranked #77 (top 7%) on Gray Swan AI's Proving Ground in the archived 24 July 2026 snapshot",
  ],
  [
    "ranked top 8% globally on Gray Swan AI's Proving Ground",
    "ranked #77 (top 7%) on Gray Swan AI's Proving Ground in the archived 24 July 2026 snapshot",
  ],
  [
    "with 75+ confirmed adversarial model breaks (as of July 2026)",
    "with 106 platform-recorded challenge breaks",
  ],
  [
    "Top 8% globally on Gray Swan AI Proving Ground",
    "Gray Swan Proving Ground rank #77 (top 7%) in the archived 24 July 2026 snapshot",
  ],
  [
    "top 8% globally across 75+ confirmed model breaks (as of July 2026)",
    "#77 (top 7%) with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot",
  ],
  [
    "Ranked top 8% globally on Gray Swan AI's Proving Ground — achieved 75+ confirmed model breaks across chat, image, agentic, and prompt-injection categories during safety evaluation challenges (as of July 2026). Gray Swan's research is cited across 11 frontier model system cards.",
    `Ranked #77 (top 7%) on Gray Swan AI's Proving Ground with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot; the public profile also reported 24 global unique breaks, 1,050 points, and 242 submissions. Dated evidence: ${GRAY_SWAN_EVIDENCE}`,
  ],
  [
    "Scientific Fact-Checker, Writer & Web Developer",
    "Scientific Research, Fact-Checking & Technical Web Contractor",
  ],
  [
    "55+ Videos & 4 Articles",
    "59+ Documented Projects",
  ],
  // Final safety normalizations for legacy fallback wording variants.
  ["75+ confirmed model breaks", "106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot"],
  ["75+ platform-confirmed model breaks", "106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot"],
  ["top 8%", "top 7%"],
  ["Top 8%", "Top 7%"],
];

function patchText(text) {
  let output = text;
  for (const [from, to] of replacements) {
    output = output.split(from).join(to);
  }
  return output;
}

function patchFile(filePath) {
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return false;
  const original = fs.readFileSync(filePath, "utf8");
  const patched = patchText(original);
  if (patched === original) return false;
  fs.writeFileSync(filePath, patched, "utf8");
  return true;
}

function walk(directory, extensions, output = []) {
  if (!fs.existsSync(directory)) return output;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath, extensions, output);
    else if (extensions.has(path.extname(entry.name).toLowerCase())) output.push(fullPath);
  }
  return output;
}

const targets = [
  "llms.txt",
  "llms-full.txt",
  "cv-llm.txt",
  "public/llms.txt",
  "public/llms-full.txt",
  "public/cv-llm.txt",
].map((relativePath) => path.join(ROOT, relativePath));

targets.push(
  ...walk(path.join(ROOT, "dist"), new Set([".html", ".txt", ".md", ".js"])),
);

let changed = 0;
for (const target of targets) {
  if (patchFile(target)) changed += 1;
}

console.log(`✓ Normalized ${changed} generated evidence file(s).`);
