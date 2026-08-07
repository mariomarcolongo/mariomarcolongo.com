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
  if (!item) throw new Error(`TikTok Search QA CV source experience not found: ${label}`);
  return cloneExperience(item);
}

const entropy = requireExperience(
  P.editorialCommunity,
  (item) => item?.organization?.includes("Entropy for Life"),
  "Entropy for Life"
);
const modelBehavior = requireExperience(
  P.aiSafety,
  (item) => item?.role?.includes("Model-Behavior Evaluator"),
  "Model-Behavior Evaluator"
);
const wikimedia = requireExperience(
  P.integrity,
  (item) => item?.organization?.includes("Wikipedia"),
  "Wikimedia"
);

entropy.role = "Scientific Content Quality & Operations Contractor";
entropy.links = [{ label: "Official Entropy for Life work record", url: ENTROPY_WORK_URL }];
entropy.bullets = [
  "Delivered 80 documented published content contributions: 55 YouTube videos, 4 co-authored articles and 21 short-form pieces, supporting recurring evidence review, quality control, Italian-language adaptation and publishing operations.",
  "Review claims and source selections against explicit evidence standards; identify unsupported or conflicting content, document corrections and uncertainty, and communicate actionable feedback within a recurring production team.",
  "Translate predominantly English-language scientific evidence into clear Italian scripts, analyses and short-form content while preserving terminology, meaning and source context; also support website publishing and technical operations."
];

modelBehavior.links = [
  { label: "Evaluation record", url: "/security.html" },
  { label: "Public profile", url: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf" }
];
modelBehavior.bullets = [
  "Conduct self-directed evaluation of model outputs across chat, image, agentic tool-use and indirect prompt-injection scenarios, including ambiguous cases, policy boundaries and sensitive content.",
  "Reached #74 on the Gray Swan Proving Ground leaderboard (top 6%) with 113 platform-displayed breaks on 29 July 2026; the same profile displayed 255 submissions, 28 global unique breaks and 1,120 points.",
  "Compare cases across varied interaction paths, classify bad cases and recurring failure patterns, preserve reproducibility evidence and document feedback with explicit limits on what each result establishes."
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
    "Created and maintain an independent open-source browser extension and Zotero plugin for research-integrity checks across literature-search and citation workflows.",
    "Define evidence hierarchies, matching rules and display behavior; test exact identifier and structured-reference matching, ambiguity skipping, false-positive boundaries and reproducible release behavior.",
    "The browser product can check Crossref/Retraction Watch data for formal notices such as retractions, corrections and expressions of concern, requiring careful separation of documented signals from broader quality judgments."
  ]
};

wikimedia.role = "Scientific Contributor & Structured-Data Editor";
wikimedia.links = [
  { label: "Public contribution record", url: CENTRAL_AUTH_URL },
  { label: "Investigation and source-quality work", url: "/integrity.html" }
];
wikimedia.bullets = [
  "Completed 4,317 auditable contributions involving claim verification, citation review, source retrieval, structured metadata and multilingual content quality.",
  "Reconcile conflicting public records, assess claim-to-source fit, recover archived material and distinguish supported fact, allegation, hypothesis, inference and unresolved uncertainty.",
  "Create and refine classifications and structured records with inspectable revision histories, provenance and iterative correction across scientific, biomedical and public-policy topics."
];

P.tiktokSearchQa = {
  id: "tiktok-search-operations-qa-italian",
  documentLabel: "Targeted Application CV",
  title: "Search Quality & Evaluation Operations Specialist",
  subtitle: "Quality inspection · standards alignment · Italian localization · calibration-oriented case review · data quality",
  summary: "Native Italian and English-C1 quality, evaluation and research-operations specialist with more than three years of paid work inside a recurring digital-media production team and eight years of auditable source and structured-data verification. Experience includes reviewing outputs against documented criteria, identifying discrepancies and bad cases, reconciling conflicting evidence, documenting corrections, localizing English-language material into Italian, and translating ambiguous requirements into testable quality rules. Supporting work includes 255 Gray Swan evaluation submissions, ownership of Notandia's exact-matching and false-positive controls, and 4,317 auditable Wikimedia contributions. Italian/EU citizen open to relocating to Bucharest.",
  strengthsTitle: "Selected QA evidence",
  strengths: [
    { value: "3+ years", label: "Paid content-quality operations", detail: "Entropy for Life · Jun 2023 — Present" },
    { value: "80", label: "Published items quality-supported", detail: "55 YouTube videos · 4 articles · 21 short-form pieces" },
    { value: "Top 6%", label: "Documented evaluation performance", detail: "#74 · 113 breaks · 255 submissions · 29 Jul 2026" },
    { value: "4,317", label: "Auditable source/data contributions", detail: "Claims · citations · metadata · multilingual content" }
  ],
  experience: [entropy, modelBehavior, notandia, wikimedia],
  evidenceTitle: "Additional quality evidence",
  evidence: [
    {
      title: "Documented standards and validation workflow",
      body: "Yourself to Science applies explicit inclusion and exclusion criteria, classification fields, provenance requirements, validation rules and update workflows to 55 verified research-participation resources before publication.",
      link: "https://yourselftoscience.org/stats"
    },
    {
      title: "Italian localization and platform-content context",
      body: "Paid Entropy for Life work includes English-to-Italian scientific adaptation and 21 documented short-form pieces. The brand had 54K TikTok followers as of 26 July 2026; that metric describes the production environment, not a personal audience.",
      link: ENTROPY_WORK_URL
    },
    {
      title: "Sensitive-content and structured-session experience",
      body: "Model-behavior testing includes sensitive and policy-boundary scenarios. Separately, approximately 4–5 recorded research sessions involved lead or co-facilitation of sensitive sexuality and relationship discussions under consent, privacy and accessibility procedures.",
      link: "/cv-editorial.html"
    }
  ],
  skills: [
    ["Quality inspection and bad-case analysis", "Reviewing outputs against explicit criteria, discrepancy analysis, error taxonomy, false-positive control, recurrent-pattern detection, evidence capture and actionable correction feedback"],
    ["Standards alignment and case calibration", "Documented-rule interpretation, comparative case review, disagreement analysis, reproducibility notes, criteria updates and alignment-oriented feedback without claiming prior formal QA-calibration ownership"],
    ["Italian localization and market context", "Native Italian judgment, English-C1 working language, English-to-Italian localization, terminology consistency, cultural context and familiarity with short-form social-media content"],
    ["Search and data quality", "Query and claim decomposition, candidate-source comparison, relevance judgment, identifier matching, structured metadata, entity reconciliation, provenance and validation rules"],
    ["Sensitive-content and stakeholder feedback", "Professional handling of sensitive topics, policy-boundary testing, privacy procedures, uncertainty communication and concise quality findings for technical or operational stakeholders"]
  ],
  fitTitle: "Best-fit role families",
  fit: [
    "Search operations quality assurance and data inspection",
    "AI data services, evaluation quality and human-feedback operations",
    "Trust & Safety-adjacent QA, policy alignment and content quality",
    "Italian-language quality operations and search evaluation"
  ]
};

P.tiktokSearchQaShared = {
  ...P.shared,
  location: "Italy · Italian/EU citizen · Open to relocating to Bucharest",
  education: [
    "Medicine and Surgery studies — Università degli Studi della Campania Luigi Vanvitelli; enrolled 2020, degree not completed and studies currently inactive",
    "EF SET English Certificate — 68/100, C1 overall, 2024",
    "GALENOS Crowd Evidence Synthesis Training — Cochrane Crowd & GALENOS, 2026"
  ]
};

export default career;
