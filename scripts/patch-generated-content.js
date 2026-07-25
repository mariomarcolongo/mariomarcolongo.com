#!/usr/bin/env node
/**
 * Normalize generated portfolio, CV, and machine-readable output.
 *
 * Browser hydration uses source-overrides.js. This script keeps server-rendered,
 * no-JavaScript, text-extracted, and machine-readable surfaces aligned with the
 * latest dated evidence and conservative capability wording.
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
  "https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-25.html";

const replacements = [
  [
    "https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-24.html",
    GRAY_SWAN_EVIDENCE,
  ],
  [
    "/evidence/gray-swan-profile-2026-07-24.html",
    "/evidence/gray-swan-profile-2026-07-25.html",
  ],
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
    "Science Verification & Editorial Acceleration",
    "Scientific Editorial & Visual Production",
  ],
  ["55+ Videos & 4 Articles", "59+ Published Projects"],
  ["59+ Documented Projects", "59+ Published Projects"],
  [
    "data visualizations across 55+ documentaries and articles",
    "data visualizations across 55+ published YouTube video projects and 4 co-authored articles",
  ],

  // Latest Gray Swan snapshot.
  ["#77 · Top 7%", "#75 · Top 6%"],
  ["#77 (top 7%)", "#75 (top 6%)"],
  ["rank #77 (top 7%)", "rank #75 (top 6%)"],
  ["Ranked #77 (top 7%)", "Ranked #75 (top 6%)"],
  ["top 7%", "top 6%"],
  ["Top 7%", "Top 6%"],
  ["106 platform-recorded challenge breaks", "110 platform-recorded challenge breaks"],
  ["106 Total Breaks", "110 Total Breaks"],
  ["106 total breaks", "110 total breaks"],
  ["24 global unique breaks", "27 global unique breaks"],
  ["1,050 points", "1,090 points"],
  ["1,050 Global Points", "1,090 Global Points"],
  ["242 submissions", "246 submissions"],
  ["Arena profile also reported 24", "Arena profile also displayed 27"],
  ["public Arena profile also reported 24", "Arena profile also displayed 27"],
  ["public profile also reported 24", "Arena profile also displayed 27"],
  ["36 Chat, 32 Image, 26 Agent, and 11 Indirect", "36 Chat, 32 Image, 28 Agent, and 13 Indirect"],
  ["archived 24 July 2026 snapshot", "25 July 2026 snapshot"],
  ["archived 24 July 2026", "25 July 2026"],
  ["24 July 2026 snapshot", "25 July 2026 snapshot"],

  // Legacy Gray Swan claims from before the dated evidence pages.
  [
    "ranked top 8% globally on Gray Swan AI's proving ground",
    "ranked #75 (top 6%) on Gray Swan AI's Proving Ground in the 25 July 2026 snapshot",
  ],
  [
    "ranked top 8% globally on Gray Swan AI's Proving Ground",
    "ranked #75 (top 6%) on Gray Swan AI's Proving Ground in the 25 July 2026 snapshot",
  ],
  [
    "Top 8% globally on Gray Swan AI Proving Ground",
    "Gray Swan Proving Ground rank #75 (top 6%) in the 25 July 2026 snapshot",
  ],
  [
    "top 8% globally across 75+ confirmed model breaks (as of July 2026)",
    "#75 (top 6%) with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot",
  ],
  [
    "Ranked top 8% globally on Gray Swan AI's Proving Ground — achieved 75+ confirmed model breaks across chat, image, agentic, and prompt-injection categories during safety evaluation challenges (as of July 2026). Gray Swan's research is cited across 11 frontier model system cards.",
    `Ranked #75 (top 6%) on Gray Swan AI's Proving Ground with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot; the Arena profile also displayed rank #370, 27 global unique breaks, 1,090 points, and 246 submissions. Dated evidence: ${GRAY_SWAN_EVIDENCE}`,
  ],
  [
    "Ranked top 8% globally on Gray Swan AI's Proving Ground — 75+ independently verified LLM breaks across chat, image, agentic, and prompt-injection categories (as of July 2026). Gray Swan's research is cited across 11 frontier model system cards, including Anthropic's Claude family and OpenAI's GPT-5/o1/o3-mini.",
    `Ranked #75 (top 6%) on Gray Swan AI's Proving Ground with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot. The Arena profile also displayed rank #370, 27 global unique breaks, 1,090 points, and 246 submissions. Dated evidence: ${GRAY_SWAN_EVIDENCE}`,
  ],
  ["75+ independently verified LLM breaks", "110 platform-recorded challenge breaks in the 25 July 2026 snapshot"],
  ["75+ confirmed adversarial model breaks", "110 platform-recorded challenge breaks in the 25 July 2026 snapshot"],
  ["75+ confirmed model breaks", "110 platform-recorded challenge breaks in the 25 July 2026 snapshot"],
  ["75+ platform-confirmed model breaks", "110 platform-recorded challenge breaks in the 25 July 2026 snapshot"],
  ["75+ confirmed breaks", "110 platform-recorded challenge breaks in the 25 July 2026 snapshot"],
  ["top-8%", "#75 (top 6%)"],
  ["Top-8%", "#75 (top 6%)"],
  ["top 8%", "top 6%"],
  ["Top 8%", "Top 6%"],

  // Interview-defensible technical wording.
  ["Founder & Lead Builder", "Founder & Technical Product Owner"],
  ["Founder and lead builder", "Founder and technical product owner"],
  ["Founder and lead developer", "Founder and technical product owner"],
  ["AI-Native Engineering & Open Science Data", "AI-Assisted Product Delivery & Open Science Data"],
  [
    "Architecting autonomous link converters, citizen science metadata registries, and computational genomic pipelines with frontier LLM benchmarks.",
    "Defining requirements, data models, workflows, validation, and deployment for open-science tools, serverless automations, and research-data pipelines.",
  ],
  [
    "Founded and engineered a FAIRsharing-indexed open directory",
    "Founded and defined the product, research taxonomy, and verification workflow for a FAIRsharing-indexed open directory",
  ],
  [
    "Architected with AI-native Linked Data",
    "Implemented with AI-assisted Linked Data",
  ],
  [
    "Sole web developer and scientific fact-checker",
    "Scientific research, fact-checking, and website operations contractor",
  ],
  [
    "Sole web developer for the project's official website",
    "Managed website operations for the project's official site",
  ],
  [
    "Full Technical Lifecycle & Cloud Architecture: Engineered official web platform on OVHCloud with zero downtime and technical SEO optimization",
    "Website Operations: Managed OVHCloud hosting, DNS, SSL, WordPress configuration, deployment, maintenance, and technical SEO",
  ],
  [
    "Scientific Fact-Checker, Writer & Web Developer",
    "Scientific Research, Fact-Checking & Website Operations Contractor",
  ],
  [
    "Scientific Research, Fact-Checking & Technical Web Contractor",
    "Scientific Research, Fact-Checking & Website Operations Contractor",
  ],
  [
    "Web Engineering & Architecture:",
    "AI-Assisted Web Product Delivery & Technical Operations:",
  ],
  [
    "Founder & architect of",
    "Founder and technical product owner of",
  ],
  [
    "Systems Architecture & Serverless Engineering",
    "AI-Assisted Product Delivery & Serverless Operations",
  ],
  [
    "Architected serverless Wikipedia Link Converter Bot on AWS Lambda.",
    "Defined and deployed an AI-assisted Wikipedia Link Converter Bot on AWS Lambda.",
  ],
  [
    "Architected on AWS Lambda and API Gateway for zero idle cloud cost, automated via GitHub Actions CI/CD.",
    "Deployed with AI-assisted implementation on AWS Lambda and API Gateway for zero idle cloud cost, automated via GitHub Actions CI/CD.",
  ],
  [
    "Architected downstream local bioinformatic pipeline",
    "Built and ran an AI-assisted downstream local bioinformatics workflow",
  ],
  [
    "Engineered custom Python extraction pipelines",
    "Used AI-assisted Python extraction scripts",
  ],

  // English credential: foreground the overall certified level.
  [
    "Italian (Native / Mother Tongue) · English (C1 Advanced Overall: C2 Reading/Listening, B2 Writing/Speaking)",
    "Italian (Native / Mother Tongue) · English (C1 overall, EF SET 68/100; advanced technical reading and professional/technical writing)",
  ],
  [
    "EF SET English Certificate 68/100 (C1 Advanced Overall · C2 Reading/Listening · B2 Writing/Speaking)",
    "EF SET English Certificate — 68/100 (C1 Overall)",
  ],
  [
    "English (C1 Advanced Overall: Listening C2, Reading C2, Writing B2, Spoken Production B2, Spoken Interaction B2)",
    "English (C1 overall, EF SET 68/100; advanced technical reading and professional/technical writing)",
  ],
];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function relabelAnchorByHref(text, href, label) {
  const escapedHref = escapeRegExp(href);
  const pattern = new RegExp(
    `(<a[^>]*href=["']${escapedHref}["'][^>]*>)[^<]*(</a>)`,
    "gi",
  );
  return text.replace(pattern, `$1${label}$2`);
}

function patchText(text) {
  let output = text;
  for (const [from, to] of replacements) {
    output = output.split(from).join(to);
  }

  // Give Entropy evidence destinations precise labels without changing unrelated links.
  output = relabelAnchorByHref(output, "https://entropyforlife.it", "Official Website ↗");
  output = relabelAnchorByHref(output, ENTROPY_VIDEOS, "55+ YouTube Projects ↗");
  output = relabelAnchorByHref(output, ENTROPY_ARTICLES, "4 Co-Authored Articles ↗");
  output = relabelAnchorByHref(output, ENTROPY_THUMBNAILS, "Selected Thumbnails ↗");

  // The script-fact-checking sentence must point to the documented video work, not the four-article site.
  output = output.replace(
    /<a([^>]*?)href=["']https:\/\/entropyforlife\.it\/?["']([^>]*)>(Fact-checking scientific scripts before publication\.?)<\/a>/gi,
    `<a$1href="${ENTROPY_VIDEOS}"$2>$3</a>`,
  );

  // Correct only the Gray Swan fallback period; other 2023-present roles remain.
  output = output.replace(
    /(<span class="cv-item-title">AI Red-Teaming(?:\s|&|&amp;|Model Behavior Evaluation)*Practitioner<\/span>[\s\S]{0,500}?<span class="cv-item-date">)2023 — Present(<\/span>)/g,
    "$1Jul 2026 — Present$2",
  );

  // Replace the static homepage proof-row claim while preserving its citation button.
  output = output.replace(
    /Ranked (?:top 8% globally|#77 \(top 7%\)) on Gray Swan AI's Proving Ground[\s\S]*?(?=<button class="cite-btn" data-cite="grayswan")/g,
    "Ranked <b>#75 (top 6%)</b> on Gray Swan AI's Proving Ground with <b>110 platform-recorded challenge breaks</b> in the 25 July 2026 snapshot across Chat, Image, Agent, and Indirect prompt-injection challenges. The same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points, and 246 submissions.",
  );

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
    if (entry.isDirectory()) {
      if (entry.name === "evidence") continue;
      walk(fullPath, extensions, output);
    } else if (extensions.has(path.extname(entry.name).toLowerCase())) {
      output.push(fullPath);
    }
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
