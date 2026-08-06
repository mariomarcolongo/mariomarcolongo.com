import career from "./investigation-positioning.mjs";

const { P } = career;
const ENTROPY_WORK_URL = "https://entropyforlife.it/mario-marcolongo-entropy-for-life/";

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
  if (!item) throw new Error(`TikTok CV source experience not found: ${label}`);
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
  "Delivered 80 documented published content contributions: 55 YouTube videos, 4 co-authored articles and 21 short-form pieces, supporting evidence review, content preparation, localization and publishing operations.",
  "Own recurring primary-literature research and scientific fact-checking; identify unsupported claims, conflicting evidence and source-quality problems, then communicate corrections and evidence boundaries within a small recurring production team.",
  "Depending on the assignment, translate evidence into scripts, data analyses, visualizations, presentation slides, on-screen assets, short-form content and selected visual packaging; designed and built entropyforlife.it and manage publishing, responsive design, hosting, DNS, SSL and technical SEO."
];

modelBehavior.bullets = [
  "Conduct self-directed safety and model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection settings, including policy boundaries, sensitive content and untrusted external context.",
  "Reached #74 on the Gray Swan Proving Ground leaderboard (top 6%) with 113 platform-displayed total breaks on 29 July 2026; the same profile displayed 255 submissions, 28 global unique breaks and 1,120 points.",
  "Preserve interaction sequences and relevant state, test reproducibility, classify observed failures, document evidence limitations and translate findings into reusable test ideas and regression-oriented checks."
];

researchWorkflow.bullets = [
  "Founded and operate an open-source research-participation directory indexing 55 verified resources, with documented inclusion, verification, provenance, metadata, licensing and update workflows.",
  "Own requirements, prioritization, issue tracking, functional testing, release verification, public documentation, deployment and ongoing maintenance across an AI-assisted technical workflow.",
  "Convert ambiguous research and data-quality requirements into explicit criteria and inspectable records while keeping assumptions, source boundaries and maintenance responsibilities visible."
];

focusGroups.bullets = [
  "Served as lead or co-facilitator across approximately 4–5 recorded Zoom focus-group sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.",
  "Co-developed structured procedures covering recruitment, recorded consent, participant privacy, pseudonymous naming, accessibility options, scripted prompts, timed turn-taking, recording boundaries and two-person facilitation handoffs."
];

P.tiktokSafetyOperations = {
  id: "tiktok-safety-model-operations",
  documentLabel: "Targeted Application CV",
  title: "AI Safety Data Quality & Operations Specialist",
  subtitle: "Safety model evaluation · quality operations · workflow ownership · media content quality",
  summary: "AI evaluation, content-quality and operations specialist with more than three years of paid work supporting a recurring digital-media production team, ownership of verification and release workflows for public projects, and self-directed safety-model testing across chat, image, agentic tool use and indirect prompt injection. Entropy for Life work covers 80 documented published content contributions—55 YouTube videos, 4 co-authored articles and 21 short-form pieces—inside an established science-communication production environment. Experience includes defining quality criteria, identifying unsupported or conflicting content, documenting corrections, coordinating sensitive research sessions and converting ambiguous requirements into testable workflows. Italian/EU citizen available to relocate to Dublin.",
  strengths: [
    { value: "3+ years", label: "Paid content-quality operations", detail: "Entropy for Life · Jun 2023 — Present" },
    { value: "80", label: "Published content contributions", detail: "55 YouTube videos · 4 articles · 21 short-form pieces" },
    { value: "113", label: "Safety-model evaluation breaks", detail: "#74 · top 6% · four evaluation surfaces" },
    { value: "4–5", label: "Sensitive research sessions", detail: "Lead or co-facilitation · structured protocols" }
  ],
  experience: [entropy, modelBehavior, researchWorkflow, focusGroups],
  evidence: [
    {
      title: "Short-form and platform-content production environment",
      body: "Contributed to 21 documented short-form pieces inside the Entropy for Life brand, which had 54K TikTok followers and 36.5M YouTube channel views as of 26 July 2026. Platform metrics describe the production environment, not a personal audience.",
      link: ENTROPY_WORK_URL
    },
    {
      title: "Multimodal safety-model evaluation",
      body: "Repeated testing across chat, image, agentic tool use and indirect prompt injection, with evidence capture, reproducibility notes, issue classification and explicit limits on what platform-displayed results establish.",
      link: "/security.html"
    },
    {
      title: "Workflow ownership and quality controls",
      body: "Defined and maintain inclusion, verification, provenance, metadata, licensing and update processes for 55 research-participation records, with requirements, issue tracking, release testing and public documentation.",
      link: "https://yourselftoscience.org/stats"
    }
  ],
  skills: [
    ["Safety model evaluation", "Multimodal model-behavior testing, policy-boundary review, sensitive-content exposure, evidence capture, reproducibility notes and regression-oriented checks"],
    ["Quality operations", "Requirements definition, quality criteria, validation rules, issue classification, documentation, functional testing, release verification and continuous-improvement thinking"],
    ["Media content quality", "Primary-source fact-checking, script and claim review, English-to-Italian localization, short-form content support, correction notes and production troubleshooting"],
    ["Workflow and project ownership", "Prioritization, issue tracking, process documentation, stakeholder communication, deployment coordination, maintenance and delivery across overlapping workstreams"],
    ["Collaboration and facilitation", "Sensitive-session facilitation, recruitment, consent, privacy procedures, accessibility options, structured prompts and two-person handoffs"]
  ],
  fit: [
    "Safety model data quality and evaluation operations",
    "Trust & Safety quality assurance and content operations",
    "AI data services and human-feedback workflows",
    "Project coordination and quality-process improvement"
  ]
};

export default career;
