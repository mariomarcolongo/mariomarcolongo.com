import career from "./investigation-positioning.mjs";
import notandiaModule from "./notandia-branding.js";

const { P } = career;
const { NOTANDIA } = notandiaModule;
const ENTROPY_WORK_URL = "https://entropyforlife.it/mario-marcolongo-entropy-for-life/";
const CENTRAL_AUTH_URL = "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo";

function cloneExperience(item) {
  if (!item) return null;
  return {
    ...item,
    links: Array.isArray(item.links) ? item.links.map((link) => ({ ...link })) : [],
    bullets: Array.isArray(item.bullets) ? [...item.bullets] : []
  };
}

function requireExperience(profile, predicate, label) {
  const item = profile?.experience?.find(predicate);
  if (!item) throw new Error(`TikTok search-evaluator CV source experience not found: ${label}`);
  return cloneExperience(item);
}

const entropy = requireExperience(
  P.editorialCommunity,
  (item) => item?.organization?.includes("Entropy for Life"),
  "Entropy for Life"
);
const wikimedia = requireExperience(
  P.integrity,
  (item) => item?.organization?.includes("Wikipedia"),
  "Wikimedia"
);
const modelBehavior = requireExperience(
  P.aiSafety,
  (item) => item?.role?.includes("Model-Behavior Evaluator"),
  "Model-Behavior Evaluator"
);
const researchWorkflow = requireExperience(
  P.editorialCommunity,
  (item) => item?.role?.includes("Founder & Research-Workflow Owner"),
  "Yourself to Science"
);
const focusGroups = requireExperience(
  P.editorialCommunity,
  (item) => item?.role?.includes("Focus-Group Co-Facilitator"),
  "Focus-group facilitation"
);

entropy.role = "Scientific Content Quality & Operations Contractor";
entropy.links = [{ label: "Official Entropy for Life work record", url: ENTROPY_WORK_URL }];
entropy.bullets = [
  "Delivered 80 documented published content contributions: 55 YouTube videos, 4 co-authored articles and 21 short-form pieces, supporting evidence search, claim review, Italian-language adaptation and publishing operations.",
  "Conduct recurring primary-literature and public-source research; compare candidate sources, identify unsupported claims, conflicting evidence and source-quality problems, and communicate corrections with explicit evidence boundaries.",
  "Translate predominantly English-language scientific evidence into clear Italian scripts, analyses, visual materials and short-form content while preserving terminology, meaning, source context and uncertainty; also manage website publishing and technical operations."
];

wikimedia.role = "Scientific Contributor & Structured-Data Editor";
wikimedia.links = [
  { label: "Public contribution record", url: CENTRAL_AUTH_URL },
  { label: "Investigation and source-quality work", url: "/integrity.html" }
];
wikimedia.bullets = [
  "Completed 4,317 auditable contributions across Wikipedia, Wikidata and Wikimedia Commons, involving claim verification, citation review, source retrieval, structured metadata and multilingual content quality.",
  "Assess claim-to-source fit, reconcile conflicting public records, recover archived material and distinguish supported fact, allegation, hypothesis, inference and unresolved uncertainty.",
  "Create and refine classifications, taxonomies and structured records across scientific, biomedical and public-policy topics, with inspectable revision histories and source provenance."
];

modelBehavior.bullets = [
  "Conduct self-directed evaluation of model outputs across chat, image, agentic tool-use and indirect prompt-injection scenarios, testing instruction handling, policy boundaries and ambiguous cases.",
  "Reached #74 on the Gray Swan Proving Ground leaderboard (top 6%) with 113 platform-displayed breaks on 29 July 2026; the same profile displayed 255 submissions, 28 global unique breaks and 1,120 points.",
  "Compare outcomes across varied interaction paths, preserve reproduction notes, classify bad cases and document feedback without overstating what a single result or platform metric establishes."
];

const notandia = {
  role: "Creator & AI-Assisted Technical Product Operator",
  organization: "Notandia (formerly MDPI Filter) · Browser extension & Zotero plugin",
  period: "May 2025 — Present",
  links: [
    { label: "Product record", url: NOTANDIA.canonicalUrl },
    { label: "Browser repository", url: NOTANDIA.browserRepository },
    { label: "Zotero repository", url: NOTANDIA.zoteroRepository }
  ],
  bullets: [
    "Created and maintain an independent open-source browser extension and Zotero plugin for scholarly-reference analysis across search and citation workflows.",
    "The browser product identifies articles from publishers users choose to monitor, supports contextual display choices, and can check Crossref/Retraction Watch data for formal notices such as retractions, corrections and expressions of concern.",
    "Define product requirements and evidence hierarchies; test cross-browser and Zotero behavior using exact identifier and structured-reference evidence, ambiguity skipping, false-positive boundaries, privacy controls and reproducible release checks."
  ]
};

P.tiktokSearchEvaluator = {
  id: "tiktok-search-evaluator-italian",
  documentLabel: "Targeted Application CV",
  title: "Italian Search Quality & Content Evaluation Specialist",
  subtitle: "Search relevance · intent and source analysis · standards-based evaluation · Italian-market expertise",
  summary: "Native Italian and English-C1 evaluation, content-quality and research-operations specialist with more than three years of paid work inside a recurring digital-media production team and eight years of auditable source, relevance and structured-data verification. Entropy for Life work covers 80 documented published contributions—55 YouTube videos, 4 co-authored articles and 21 short-form pieces—requiring primary-source search, claim-to-source assessment, Italian localization and clear correction feedback. Additional work includes classification and provenance review across 4,317 Wikimedia contributions, evaluation of ambiguous AI outputs across 255 Gray Swan submissions, and ownership of Notandia, a browser and Zotero research-integrity tool built around evidence hierarchies, exact matching, ambiguity handling and false-positive controls. Italian/EU citizen open to relocating to Bucharest. This record is search-evaluation-adjacent and does not claim prior formal employment as a production search evaluator.",
  strengths: [
    { value: "3+ years", label: "Paid content-quality operations", detail: "Entropy for Life · Jun 2023 — Present" },
    { value: "80", label: "Published content contributions", detail: "55 YouTube videos · 4 articles · 21 short-form pieces" },
    { value: "4,317", label: "Auditable source and data contributions", detail: "Claims · citations · metadata · multilingual content" },
    { value: "255", label: "Documented evaluation submissions", detail: "Chat · image · agent · indirect scenarios" }
  ],
  experience: [entropy, wikimedia, modelBehavior, notandia],
  evidence: [
    {
      title: "Italian-language and short-form platform context",
      body: "Native-Italian content work includes English-to-Italian scientific adaptation and 21 documented short-form pieces inside the Entropy for Life brand, which had 54K TikTok followers as of 26 July 2026. Platform metrics describe the production environment, not a personal audience.",
      link: ENTROPY_WORK_URL
    },
    {
      title: "Documented standards and validation workflow",
      body: "Yourself to Science applies explicit inclusion and exclusion criteria, classification fields, provenance requirements, validation rules and update workflows to 55 verified research-participation resources before publication.",
      link: "https://yourselftoscience.org/stats"
    },
    {
      title: "Sensitive and ambiguous evaluation settings",
      body: "Model-behavior testing includes policy-boundary and sensitive-content scenarios. Separately, approximately 4–5 structured research sessions involved lead or co-facilitation of sensitive sexuality and relationship discussions with consent, privacy and accessibility procedures.",
      link: "/cv-editorial.html"
    }
  ],
  skills: [
    ["Search and relevance analysis", "User-intent interpretation, query and claim decomposition, candidate-source comparison, publisher and identifier matching, relevance and quality judgment, ambiguity skipping, false-positive boundaries and explicit evidence limits"],
    ["Standards-based evaluation", "Applying documented criteria, comparative assessment, quality rating, bad-case identification, taxonomy development, reproducibility notes and actionable feedback"],
    ["Italian-market content quality", "Native Italian judgment, English-C1 research and communication, English-to-Italian localization, terminology consistency, cultural context and social-media content familiarity"],
    ["Data quality and classification", "Structured metadata, inclusion and exclusion rules, entity reconciliation, provenance, validation rules, documentation and update workflows"],
    ["Sensitive-content and policy awareness", "Professional handling of sensitive topics, policy-boundary testing, privacy procedures, uncertainty communication and escalation-ready documentation"]
  ],
  fit: [
    "Italian search quality and relevance evaluation",
    "Search operations, content quality and bad-case analysis",
    "AI data services and human-evaluation workflows",
    "Trust & Safety-adjacent content and policy quality"
  ]
};

P.tiktokSearchEvaluatorShared = {
  ...P.shared,
  location: "Italy · Italian/EU citizen · Open to relocating to Bucharest",
  education: [
    "Medicine and Surgery studies — Università degli Studi della Campania Luigi Vanvitelli; enrolled 2020, degree not completed and studies currently inactive",
    "EF SET English Certificate — 68/100, C1 overall, 2024",
    "GALENOS Crowd Evidence Synthesis Training — Cochrane Crowd & GALENOS, 2026"
  ]
};

export default career;
