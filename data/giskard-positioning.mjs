import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.aiSafety);
const shared = structuredClone(career.P.shared);

profile.id = "giskard-ai-safety";
profile.documentLabel = "Giskard Application CV";
profile.title = "AI Evaluation & Model Behavior Specialist";
profile.subtitle = "Generative AI and LLM evaluation | AI-agent red teaming | threat-oriented assessment | applied tool development";
profile.summary = "Applied AI evaluation and research-verification specialist with hands-on exposure to Generative AI, LLM failure modes and AI-agent red teaming across chat, image, tool use and indirect prompt injection. Ranked #74 globally (top 6%) in Gray Swan's Proving Ground on 29 July 2026. Apply cybersecurity fundamentals including threat modeling, vulnerability assessment, attack-scenario design, evidence capture, impact analysis, remediation planning and retesting to turn observed failures into reproducible evaluations. Operate open-source tools through Python, Git/GitHub, APIs, functional and regression testing, and direct review of AI-assisted implementation workflows.";

profile.competencies = [
  "Machine Learning / Artificial Intelligence concepts, Generative AI, LLM behavior and common failure modes",
  "AI-agent testing, evaluation and red teaming for chat, multimodal, tool-use and indirect prompt-injection scenarios",
  "Cybersecurity fundamentals: threat modeling, vulnerability assessment, attacker goals, trust boundaries, preconditions and impact",
  "Attack-scenario planning, evidence capture, reproducibility, issue classification, remediation paths and mitigation retesting",
  "Applied research methods, benchmark and regression thinking, failure taxonomies, scientific watch and primary-source review",
  "Python, Git/GitHub, JSON, REST APIs, AWS Lambda, API Gateway, SQS, DynamoDB, GitHub Actions, functional testing, release verification and review of AI-assisted implementation workflows"
];

profile.experience = [
  {
    role: "Model-Behavior Evaluator",
    organization: "Independent practice - Gray Swan Proving Ground",
    period: "Jul 2026 - Present",
    links: [
      { label: "Evaluation record", url: "/security.html" },
      { label: "Dated evidence", url: "/evidence/gray-swan-2026-07-29/" },
      { label: "Public profile", url: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf" }
    ],
    bullets: [
      "Conduct self-directed adversarial testing of LLM and AI-agent behavior across chat, image, agentic tool use and indirect prompt-injection settings, probing instruction hierarchy, multi-turn behavior, policy boundaries and untrusted external context.",
      "Reached #74 globally in the Proving Ground (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same public profile showed 28 global unique breaks, 1,120 points and 255 submissions.",
      "Plan attack scenarios by identifying the attacker goal, system context, trust boundary, required preconditions and plausible impact; preserve the interaction sequence and relevant state, test reproducibility, separate direct observation from inference, and document remediation and retesting considerations.",
      "Translate observed model failures into reusable test ideas, failure categories, evidence notes and regression-oriented checks rather than treating a single successful attack as sufficient evidence."
    ]
  },
  {
    role: "Creator & Research-Integrity Product Operator",
    organization: "Notandia (formerly MDPI Filter) - Independent open-source project",
    period: "May 2025 - Present",
    links: [
      { label: "Project record", url: "/notandia.html" },
      { label: "Browser repository", url: "https://github.com/notandia/browser-extension" },
      { label: "Zotero repository", url: "https://github.com/notandia/zotero-plugin" }
    ],
    bullets: [
      "Created and operate Notandia, formerly MDPI Filter, an open-source browser and Zotero research-integrity project. Current browser source identifies user-selected publishers whose editorial and peer-review practices have attracted scrutiny, including MDPI and Frontiers, and can check Crossref/Retraction Watch for formal notices; Zotero currently focuses on precise MDPI item and reference detection.",
      "Define evidence rules, identifier-resolution logic, privacy safeguards, ambiguity handling, false-positive boundaries and deterministic behavior; inspect API and implementation outputs, reproduce failures and convert research requirements into testable product behavior.",
      "Direct and review AI-assisted implementation, maintain documentation and regression checks, and verify releases across Chrome, Edge, Firefox, Safari and Zotero while distinguishing current-source capabilities from published-store versions."
    ]
  },
  {
    role: "Scientific Research, Fact-Checking & Technical Operations Contractor",
    organization: "Entropy for Life - Independent contractor",
    period: "Jun 2023 - Present",
    links: [
      { label: "Official work record", url: "https://entropyforlife.it/mario-marcolongo-entropy-for-life/" },
      { label: "Author page", url: "https://entropyforlife.it/autore/mario-marcolongo/" }
    ],
    bullets: [
      "Conduct continuing scientific watch, primary-literature review and fact-checking across 80 documented published contributions: 55 YouTube projects, four co-authored articles and 21 short-form pieces.",
      "Identify unsupported claims, conflicting evidence and source-quality problems, then translate findings into scripts, articles, data analyses, visualizations, slides and clear correction or uncertainty notes for non-specialist audiences.",
      "Work in a small recurring remote production team and support WordPress, hosting, DNS/SSL, technical SEO and functional troubleshooting; formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for literature research and error detection."
    ]
  }
];

profile.projects = [
  {
    name: "English Wikipedia Link Converter",
    role: "Creator & Technical Operator",
    period: "2024 - Present",
    links: [
      { label: "GitHub repository", url: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot" }
    ],
    bullets: [
      "Operate a deployed Python service on AWS Lambda using API Gateway, SQS and DynamoDB, with external API calls, queue-based processing, monitoring, retries, dead-letter handling, rate limits and GitHub Actions deployment.",
      "Reproduce failures, inspect request/response and runtime behavior, document incidents and releases, prioritize fixes, review AI-assisted changes and verify recovery and deployment behavior."
    ]
  },
  {
    name: "Yourself to Science",
    role: "Founder & Research-Workflow Owner",
    period: "Aug 2024 - Present",
    links: [
      { label: "Project statistics", url: "https://yourselftoscience.org/stats" },
      { label: "GitHub repository", url: "https://github.com/jnton/yourselftoscience" }
    ],
    bullets: [
      "Founded and operate an open-source directory of more than 55 clinical studies, biobanks, registries, donation programs and other research-participation initiatives.",
      "Defined inclusion criteria, verification workflows, metadata structure, provenance requirements, licensing boundaries and machine-readable interfaces; inspect implementation behavior, test releases and guide AI-assisted technical iteration."
    ]
  }
];

profile.additionalEvidence = [
  {
    title: "Eight-year auditable knowledge-integrity record",
    body: "4,317 public contributions across Wikipedia, Wikidata and Wikimedia Commons demonstrate sustained source verification, policy-based judgment, metadata work and explicit separation of evidence from inference.",
    link: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
  }
];

shared.location = "Italy | Italian/EU citizen | No sponsorship required | Open to relocating to Paris";
shared.education = [
  "GALENOS Crowd Evidence Synthesis Training - Cochrane Crowd & GALENOS, 2026",
  "Career Essentials in Generative AI - Microsoft & LinkedIn, 2024",
  "EF SET English Certificate - 68/100, C1 overall, 2024"
];
shared.language = "Italian - native. English - C1 overall (EF SET 68/100), with advanced technical reading and professional writing.";

export default {
  ...career,
  P: {
    ...career.P,
    giskardAiSafety: profile,
    giskardShared: shared
  }
};
