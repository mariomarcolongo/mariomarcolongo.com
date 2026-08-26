const C = require("./investigation-cases.js");

const PORTFOLIO_V3 = {
  umbrella: "Data Quality, Evidence Research & AI Evaluation",
  headline: "I investigate claims, test systems, and build evidence-based processes.",
  introduction: "My work sits where research, public knowledge, AI behavior and technical delivery meet. I verify scientific evidence, recover and reconcile public records, maintain open research systems and test how AI products behave under pressure. The portfolio is designed for several credible role families rather than one narrow title.",
  metrics: [
    { value: "4,317", label: "Auditable Wikimedia contributions", detail: "Eight years across Wikipedia, Wikidata and Commons" },
    { value: "80", label: "Published content contributions", detail: "55 videos · 4 articles · 21 short-form pieces" },
    { value: "110", label: "Platform-displayed model breaks", detail: "#75 · top 6% · 246 Arena submissions" },
    { value: "55", label: "Research resources indexed", detail: "37 Wikidata items use the domain as a reference" },
    { value: "70+", label: "Public data visualizations", detail: "Biomedical, epidemiological and policy evidence" }
  ],
  lenses: [
    {
      id: "ai",
      number: "01",
      color: "blue",
      label: "Highest-upside emerging lane",
      title: "AI Safety & Model Behavior",
      summary: "Adversarial testing, safeguard testing, trust & safety and model-quality work built on sustained exploratory testing plus unusually strong evidence discipline.",
      roles: [
        "AI safety evaluator",
        "AI content red-team analyst",
        "Safeguards or evaluation support",
        "Model-quality and adversarial QA"
      ],
      evidence: [
        "110 platform-displayed Proving Ground breaks; #75 and top 6%",
        "Chat, image, agentic tool-use and indirect prompt-injection testing",
        "Public methodology and explicit evidence limits"
      ],
      next: "The engineering ceiling rises after independently verifiable Python automation, application-security practice and paid team experience.",
      cv: "/cv-resume",
      cvLabel: "AI Safety CV"
    },
    {
      id: "editorial",
      number: "02",
      color: "coral",
      label: "Strong immediate bridge lane",
      title: "Research, Editorial & Community Coordination",
      summary: "Evidence synthesis, editorial production, research coordination and sensitive community-facing work, including remote facilitation with autistic participants. This is the best lens for Campbell-style roles and mission-driven evidence organizations.",
      roles: [
        "Assistant editor or editorial coordinator",
        "Evidence-synthesis program officer",
        "Research community engagement",
        "Scientific communications support"
      ],
      evidence: [
        "Paid research and fact-checking across 80 published contributions",
        "Sensitive Zoom focus groups with autistic participants, structured protocols and two-person facilitation handoffs",
        "Founder and project lead for a public research-participation directory"
      ],
      next: "This route is credible now, but the highest compensation usually comes later through program leadership, technical program management or senior AI-evaluation and research-program roles.",
      cv: "/cv-editorial",
      cvLabel: "Editorial & Community CV"
    },
    {
      id: "integrity",
      number: "03",
      color: "violet",
      label: "Credible adjacent high-upside lane",
      title: "Source Quality, Trust & Investigations",
      summary: "Archival OSINT, source-quality auditing, public-record reconciliation, structured-data integrity and content-risk analysis, grounded in attributed public work rather than a generic OSINT skills list.",
      roles: [
        "Trust & safety analyst",
        "Source-quality or content-integrity support",
        "OSINT and public-record researcher",
        "AI abuse and policy-analysis support"
      ],
      evidence: [
        "Archived legal-record reconstruction with stage-by-stage source reconciliation",
        "Source-quality and notability review using SCImago, Scopus, Web of Science and policy criteria",
        "Biomedical taxonomy and prevalence synthesis from peer-reviewed literature"
      ],
      next: "Continue documenting attributed case studies with explicit legal, scientific and evidentiary boundaries.",
      cv: "/cv-integrity",
      cvLabel: "Trust & Integrity CV"
    },
    {
      id: "data",
      number: "04",
      color: "cyan",
      label: "Deepest established evidence base",
      title: "Open Science & Data Quality",
      summary: "Scientific verification, provenance, research metadata, knowledge graphs and human-data quality. This lane draws on the longest and most directly verifiable part of the profile.",
      roles: [
        "Research verification specialist",
        "Scientific or biomedical AI quality",
        "Metadata and data-provenance work",
        "Research data or knowledge-quality support"
      ],
      evidence: [
        "55 research-participation records with verification workflows",
        "FAIRsharing, Zenodo, Wikidata and ENA public records",
        "70+ evidence visualizations and 4,317 public contributions"
      ],
      next: "The revenue ceiling improves through enterprise AI/data programs, domain-expert model quality and technical program leadership rather than remaining in junior cataloguing work.",
      cv: "/cv-research",
      cvLabel: "Research & Data Quality CV"
    }
  ],
  cases: [
    {
      id: "model-behavior",
      eyebrow: "AI systems",
      title: "Model-behavior evaluation under ambiguous constraints",
      summary: "Repeated exploratory testing across instruction hierarchy, multimodal inputs, agentic tool use and indirect prompt injection, reported with an explicit separation between platform status and independent verification.",
      methods: ["Adversarial test design", "Behavior classification", "Evidence limits", "Reproduction notes"],
      metric: "110 platform-displayed breaks · #75 · top 6%",
      href: "/security",
      linkLabel: "Open evaluation record"
    },
    {
      id: C.giannino.id,
      eyebrow: "Archival OSINT",
      title: C.giannino.title,
      summary: "Recovered unstable and missing material through archives and URL reconstruction, then reconciled the original reporting with multiple judicial stages using legally cautious attribution.",
      methods: ["Archive recovery", "URL reconstruction", "Legal chronology", "Source reconciliation"],
      metric: "Attributed public diff · original PDF and court-stage sources",
      href: C.giannino.links[0].href,
      linkLabel: "Open attributed diff"
    },
    {
      id: C.teodorani.id,
      eyebrow: "Content governance",
      title: C.teodorani.title,
      summary: "Audited claim-to-source fit, bibliometric evidence, source independence and notability under Wikipedia policy during a contentious public moderation process.",
      methods: ["Source-quality audit", "Scopus & Web of Science", "Policy application", "Evidence caveats"],
      metric: "Community-reviewed process · article deleted by consensus",
      href: C.teodorani.links[0].href,
      linkLabel: "Open deletion discussion"
    },
    {
      id: C.syndromicAutism.id,
      eyebrow: "Biomedical evidence synthesis",
      title: C.syndromicAutism.title,
      summary: "Synthesized peer-reviewed literature into a structured taxonomy and sortable evidence table spanning genetic causes, prevalence estimates and clinical characteristics.",
      methods: ["Literature synthesis", "Taxonomy design", "Prevalence extraction", "Structured evidence"],
      metric: "Attributed principal diff · later dedicated article",
      href: C.syndromicAutism.links[0].href,
      linkLabel: "Open principal diff"
    },
    {
      id: "h5n1",
      eyebrow: "Rapid evidence monitoring",
      title: "Tracking a fast-changing H5N1 evidence landscape",
      summary: "Co-authored a continuously updated epidemiological tracker, organizing dated developments, comparing public-health reporting and preserving links to the underlying evidence.",
      methods: ["Source monitoring", "Chronology", "Cross-source checking", "Uncertainty communication"],
      metric: "Public rolling tracker · co-authored",
      href: C.h5n1.links[0].href,
      linkLabel: "Open published tracker"
    },
    {
      id: "focus-group",
      eyebrow: "Sensitive research facilitation",
      title: "Co-facilitating remote discussions where participant comfort and team reliability mattered",
      summary: "Co-developed and co-facilitated recorded Zoom focus groups with autistic participants on sensitive sexuality and relationship topics, using structured prompts, respectful pacing, live handoffs and recovery when a facilitator missed steps or needed support.",
      methods: ["Sensitive-topic moderation", "Neurodiversity-aware communication", "Two-person handoffs", "Remote-session logistics"],
      metric: "2022–2025 collaboration · public institutional attribution",
      href: "/cv-editorial",
      linkLabel: "Open relevant CV"
    },
    {
      id: "research-directory",
      eyebrow: "Research data quality",
      title: "Verifying who can participate in research—and under what conditions",
      summary: "Designed the inclusion, source, geography, participation-type and provenance workflow for a public directory of clinical studies, biobanks, registries and donation programs.",
      methods: ["Inclusion criteria", "Entity reconciliation", "Provenance", "Structured metadata"],
      metric: "55 resources · 37 Wikidata references",
      href: "https://yourselftoscience.org",
      linkLabel: "Open research directory"
    }
  ],
  timeline: [
    {
      year: "2018 — now",
      title: "Public knowledge and source work",
      body: "Wikipedia, Wikidata and Wikimedia Commons contributions spanning archival recovery, source-quality review, biomedical evidence synthesis, citations, structured data, scientific diagrams and public media records."
    },
    {
      year: "2022 — 2025",
      title: "Community-facing research facilitation",
      body: "Co-developed and co-facilitated recorded Zoom discussions with autistic participants on sensitive sexuality and relationship topics, combining participant-sensitive moderation, technical session support and reliable two-person handoffs."
    },
    {
      year: "2023 — now",
      title: "Paid scientific editorial work and website maintenance",
      body: "Primary-literature research, scientific fact-checking, content-production support and website maintenance for Entropy for Life."
    },
    {
      year: "2024 — now",
      title: "Open research infrastructure",
      body: "Founded Yourself to Science, defining verification, metadata and public-participation workflows for 55 research resources."
    },
    {
      year: "2026 — now",
      title: "Structured public AI testing record",
      body: "Gray Swan Proving Ground participation with platform-displayed aggregate results and a public evidence-limitations page."
    }
  ],
  documents: [
    {
      id: "ai",
      label: "AI systems",
      title: "AI Safety & Adversarial Testing CV",
      body: "For safeguard testing, model behavior, adversarial QA, trust & safety and evaluation-support roles.",
      href: "/cv-resume"
    },
    {
      id: "editorial",
      label: "Research organizations",
      title: "Editorial & Community Coordination CV",
      body: "For assistant editor, evidence-synthesis coordination, research programs and community-engagement roles.",
      href: "/cv-editorial"
    },
    {
      id: "integrity",
      label: "Trust & investigations",
      title: "Trust, Safety & Source Quality CV",
      body: "For content integrity, archival and public-record research, OSINT support, trust & safety and abuse-analysis roles.",
      href: "/cv-integrity"
    },
    {
      id: "data",
      label: "Research and data",
      title: "Research Verification & Data Quality CV",
      body: "For scientific evidence, provenance, metadata, research support and domain-expert AI quality roles.",
      href: "/cv-research"
    },
    {
      id: "master",
      label: "Complete archive",
      title: "Master CV & Evidence Record",
      body: "The comprehensive source document for due diligence and future tailored applications—not the default attachment.",
      href: "/cv"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_V3;
}
