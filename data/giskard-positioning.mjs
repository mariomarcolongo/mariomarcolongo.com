import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.aiSafety);
const shared = structuredClone(career.P.shared);

profile.id = "giskard-ai-safety";
profile.documentLabel = "Giskard Application CV";
profile.title = "AI Evaluation & Model Behavior Specialist";
profile.subtitle = "AI-agent red teaming · LLM failure analysis · applied evaluation research · product verification";
profile.summary = "AI evaluation and research-verification specialist with self-directed adversarial testing across chat, image, AI-agent tool use and indirect prompt injection. Ranked #74 globally (top 6%) in Gray Swan's Proving Ground on 29 July 2026. Builds evidence-bound evaluation methods by mapping attacker goals, trust boundaries, interaction paths and potential impact; testing reproducibility; separating observation from inference; and documenting remediation and retesting. Operates open-source research tools through requirements, Python/Git/API workflows, behavioral testing and release verification.";
profile.strengthsTitle = "Role-relevant evidence";
profile.evidenceTitle = "Supporting evidence";
profile.fitTitle = "Role-aligned contribution";
profile.strengths = [
  { value: "113", label: "Proving Ground breaks", detail: "#74 globally · top 6% · 29 July 2026" },
  { value: "255", label: "Adversarial submissions", detail: "28 global unique breaks · 1,120 points" },
  { value: "5", label: "Research-tool targets", detail: "Chrome · Edge · Firefox · Safari · Zotero" },
  { value: "80", label: "Published scientific contributions", detail: "Literature review · fact-checking · explanation" }
];
profile.experience = [
  {
    role: "Model-Behavior Evaluator",
    organization: "Independent practice · Gray Swan Proving Ground",
    period: "Jul 2026 — Present",
    links: [
      { label: "Evaluation record", url: "/security.html" },
      { label: "Dated evidence", url: "/evidence/gray-swan-2026-07-29/" },
      { label: "Public profile", url: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf" }
    ],
    bullets: [
      "Conduct self-directed adversarial testing of LLM and AI-agent behavior across chat, image, agentic tool use and indirect prompt-injection settings, probing instruction hierarchy, multi-turn behavior and untrusted external context.",
      "Reached #74 globally in the Proving Ground (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same public profile showed 28 global unique breaks, 1,120 points and 255 submissions.",
      "Preserve interaction sequences and relevant system state; identify attacker goals, trust boundaries, preconditions and potential impact; test reproducibility; separate direct observation from inference; and record remediation and retesting considerations."
    ]
  },
  {
    role: "Creator & Research-Integrity Product Operator",
    organization: "Notandia (formerly MDPI Filter) · Independent open-source project",
    period: "2024 — Present",
    links: [
      { label: "Project record", url: "/notandia.html" },
      { label: "Browser repository", url: "https://github.com/notandia/browser-extension" },
      { label: "Zotero repository", url: "https://github.com/notandia/zotero-plugin" }
    ],
    bullets: [
      "Created and operate a browser and Zotero research-integrity product that identifies articles from publishers whose editorial and peer-review practices have attracted scrutiny and checks Crossref/Retraction Watch records for retractions, corrections and expressions of concern.",
      "Define evidence rules, identifier-resolution logic, privacy safeguards, ambiguity handling, false-positive boundaries and deterministic behavior; inspect API and implementation outputs, reproduce failures and convert research requirements into testable product behavior.",
      "Guide and review AI-assisted implementation, maintain documentation and regression checks, and verify releases across Chrome, Edge, Firefox, Safari and Zotero while distinguishing current-source capabilities from published-store versions."
    ]
  },
  {
    role: "Scientific Research, Fact-Checking & Technical Operations Contractor",
    organization: "Entropy for Life · Independent contractor",
    period: "Jun 2023 — Present",
    links: [
      { label: "Official work record", url: "https://entropyforlife.it/mario-marcolongo-entropy-for-life/" },
      { label: "Author page", url: "https://entropyforlife.it/autore/mario-marcolongo/" }
    ],
    bullets: [
      "Conduct ongoing scientific watch, primary-literature review and fact-checking across 80 documented published contributions: 55 YouTube projects, four co-authored articles and 21 short-form pieces.",
      "Identify unsupported claims, conflicting evidence and source-quality problems, then translate findings into scripts, articles, data analyses, visualizations, slides and clear correction or uncertainty notes for non-specialist audiences.",
      "Work in a small recurring remote production team and support WordPress, hosting, DNS/SSL, technical SEO and functional troubleshooting; formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for literature research and error detection."
    ]
  }
];
profile.evidence = [
  {
    title: "Open research workflow ownership",
    body: "Founded and operate Yourself to Science, an open-source directory of 55 research-participation resources with defined inclusion criteria, provenance, metadata, licensing and verification workflows; 37 Wikidata items use the project as a source.",
    link: "https://yourselftoscience.org/stats"
  },
  {
    title: "Python and API operations",
    body: "Operate a Python service on AWS Lambda using API Gateway, SQS and DynamoDB, with external API calls, monitoring, retries, dead-letter handling, rate limits, GitHub Actions and documented recovery behavior.",
    link: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
  },
  {
    title: "Auditable evidence-verification record",
    body: "4,317 public contributions across Wikipedia, Wikidata and Wikimedia Commons under one identity demonstrate eight years of source verification, metadata work and evidence-bound editorial judgment.",
    link: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
  }
];
profile.skills = [
  ["AI-agent and LLM evaluation", "Exploratory red teaming, prompt and jailbreak analysis, instruction hierarchy, multi-turn behavior, multimodal inputs, agentic tool use, indirect prompt injection and LLM failure modes"],
  ["Threat-oriented assessment", "Attacker goals, trust boundaries, attack paths and preconditions, system context, vulnerability-oriented classification, impact reasoning, reproducibility, remediation paths and mitigation retesting"],
  ["Applied evaluation research", "Test design, evidence capture, failure taxonomies, issue classification, benchmark and regression thinking, scientific watch, primary-source review and translation of findings into repeatable checks"],
  ["Python and technical workflows", "Python, Git/GitHub, JSON, REST APIs, AWS Lambda, API Gateway, SQS, DynamoDB, codebase inspection, functional and regression testing, AI-assisted implementation review and release verification"],
  ["Communication and collaboration", "C1 English, concise technical findings, presentations and explanatory assets, evidence limitations, mixed technical/non-technical audiences, asynchronous documentation and small remote-team collaboration"]
];
profile.fit = [
  "Design reproducible tests from observed AI-agent and LLM failure modes",
  "Move from research hypotheses to product behavior, regression checks and verified releases",
  "Document attack scenarios, evidence, impact, remediation paths and retesting clearly",
  "Collaborate with engineers through requirements, code review, functional testing and deployment verification"
];

shared.location = "Italy · Italian/EU citizen · No sponsorship required · Open to relocating to Paris";
shared.education = [
  "GALENOS Crowd Evidence Synthesis Training — Cochrane Crowd & GALENOS, 2026",
  "Career Essentials in Generative AI — Microsoft & LinkedIn, 2024",
  "EF SET English Certificate — 68/100, C1 overall, 2024"
];
shared.language = "Italian — native. English — C1 overall (EF SET 68/100), with advanced technical reading and professional writing.";

export default {
  ...career,
  P: {
    ...career.P,
    giskardAiSafety: profile,
    giskardShared: shared
  }
};
