const PORTFOLIO_V3 = {
  umbrella: "Research, Evidence & AI Operations",
  headline: "I investigate claims, test systems, and build evidence workflows.",
  introduction: "My work sits where research, public knowledge, AI behavior and technical operations meet. I verify scientific evidence, investigate provenance, operate open research systems and test how AI products behave under pressure. The portfolio is designed for several credible role families rather than one narrow title.",
  metrics: [
    { value: "4,317", label: "Auditable Wikimedia contributions", detail: "Eight years across Wikipedia, Wikidata and Commons" },
    { value: "55+", label: "Scientific productions checked", detail: "Videos and documentaries plus four published articles" },
    { value: "75", label: "Platform-confirmed model breaks", detail: "156 Gray Swan submissions across 26 listed waves" },
    { value: "55+", label: "Research initiatives indexed", detail: "Clinical studies, biobanks, registries and donation programs" },
    { value: "70+", label: "Public data visualizations", detail: "Biomedical, epidemiological and policy evidence" }
  ],
  lenses: [
    {
      id: "ai",
      number: "01",
      color: "blue",
      label: "Highest-upside emerging lane",
      title: "AI Safety & Model Behavior",
      summary: "Adversarial testing, safeguards operations, trust & safety and model-quality work built on sustained exploratory testing plus unusually strong evidence discipline.",
      roles: [
        "AI safety evaluator",
        "AI content red-team analyst",
        "Safeguards or evaluation operations",
        "Model-quality and adversarial QA"
      ],
      evidence: [
        "75 platform-confirmed breaks across 156 submissions",
        "Chat, image, agentic tool-use and indirect prompt-injection testing",
        "Evidence-bound public methodology and limitations"
      ],
      next: "The engineering ceiling rises after independently verifiable Python automation, application-security practice and paid team experience.",
      cv: "/cv-resume.html",
      cvLabel: "AI Safety CV"
    },
    {
      id: "editorial",
      number: "02",
      color: "coral",
      label: "Strong immediate bridge lane",
      title: "Research, Editorial & Community Operations",
      summary: "Evidence synthesis, editorial production, research coordination and sensitive community-facing work, including remote facilitation with autistic participants. This is the best lens for Campbell-style roles and mission-driven evidence organizations.",
      roles: [
        "Assistant editor or editorial coordinator",
        "Evidence-synthesis program officer",
        "Research community engagement",
        "Scientific communications operations"
      ],
      evidence: [
        "Paid research and fact-checking for 55+ productions and four articles",
        "Sensitive Zoom focus groups with autistic participants, structured protocols and two-person facilitation handoffs",
        "Independent ownership of a public research-participation directory"
      ],
      next: "This route is credible now, but the highest compensation usually comes later through program leadership, technical program management or senior AI/research operations.",
      cv: "/cv-editorial.html",
      cvLabel: "Editorial & Community CV"
    },
    {
      id: "integrity",
      number: "03",
      color: "violet",
      label: "Credible adjacent high-upside lane",
      title: "Knowledge Integrity, Trust & Investigations",
      summary: "Open-source research, source provenance, public-record reconciliation, structured-data integrity and content-risk analysis, grounded in inspectable public work rather than a generic OSINT skills list.",
      roles: [
        "Trust & safety analyst",
        "Knowledge-integrity or content-integrity operations",
        "OSINT and public-record researcher",
        "AI abuse and policy-analysis support"
      ],
      evidence: [
        "Eight-year public source and structured-data record",
        "Historical-object provenance and rights-verification case",
        "Rapid health-information monitoring and source reconciliation"
      ],
      next: "Publish additional redacted investigation notes, a reproducible research methodology and a small case taxonomy to strengthen this lane.",
      cv: "/cv-integrity.html",
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
        "Metadata and data-provenance operations",
        "Research data or knowledge operations"
      ],
      evidence: [
        "55+ research-participation records with verification workflows",
        "FAIRsharing, Zenodo, Wikidata and ENA public records",
        "70+ evidence visualizations and 4,317 public contributions"
      ],
      next: "The revenue ceiling improves through enterprise AI/data programs, domain-expert model quality and technical program ownership rather than remaining in junior cataloguing work.",
      cv: "/cv-research.html",
      cvLabel: "Research & Data Quality CV"
    }
  ],
  cases: [
    {
      id: "model-behavior",
      eyebrow: "AI systems",
      title: "Model-behavior evaluation under ambiguous constraints",
      summary: "Repeated exploratory testing across instruction hierarchy, multimodal inputs, agentic tool use and indirect prompt injection, reported with an explicit separation between platform status and independent verification.",
      methods: ["Adversarial test design", "Behavior classification", "Evidence boundaries", "Reproduction notes"],
      metric: "75 platform-confirmed breaks · 156 submissions",
      href: "/security.html",
      linkLabel: "Open evaluation record"
    },
    {
      id: "h5n1",
      eyebrow: "Rapid evidence monitoring",
      title: "Tracking a fast-changing H5N1 evidence landscape",
      summary: "Co-authored a continuously updated epidemiological tracker, organizing dated developments, comparing public-health reporting and preserving links to the underlying evidence.",
      methods: ["Source monitoring", "Chronology", "Cross-source checking", "Uncertainty communication"],
      metric: "Public rolling tracker · co-authored",
      href: "https://entropyforlife.it/2024/10/25/influenza-aviaria-situazione-epidemiologica-aggiornata/",
      linkLabel: "Open published tracker"
    },
    {
      id: "pencil",
      eyebrow: "Provenance & rights",
      title: "Turning a privately supplied historical object into a reusable public record",
      summary: "Prepared bilingual descriptions, ownership context, inscription translations and source attribution for photographs of a Fascist-era carpenter's pencil, with permission verified through Wikimedia's Volunteer Response Team.",
      methods: ["Provenance description", "Bilingual metadata", "Rights verification", "Historical context"],
      metric: "VRT-verified permission · public structured record",
      href: "https://commons.wikimedia.org/wiki/File:Pencil_Fascist_Tuberculosis_Campaign_Italy_Side_A_Angle.jpg",
      linkLabel: "Open Wikimedia record"
    },
    {
      id: "focus-group",
      eyebrow: "Sensitive research facilitation",
      title: "Co-facilitating remote discussions where participant comfort and team reliability mattered",
      summary: "Co-developed and co-facilitated recorded Zoom focus groups with autistic participants on sensitive sexuality and relationship topics, using structured prompts, respectful pacing, live handoffs and recovery when a facilitator missed steps or needed support. Institutional attribution is withheld pending permission.",
      methods: ["Sensitive-topic moderation", "Neurodiversity-aware communication", "Two-person handoffs", "Remote-session logistics"],
      metric: "2022–2025 collaboration · attribution pending permission",
      href: "/cv-editorial.html",
      linkLabel: "Open relevant CV"
    },
    {
      id: "research-directory",
      eyebrow: "Research data quality",
      title: "Verifying who can participate in research—and under what conditions",
      summary: "Designed the inclusion, source, geography, participation-type and provenance workflow for a public directory of clinical studies, biobanks, registries and donation programs.",
      methods: ["Inclusion criteria", "Entity reconciliation", "Provenance", "Structured metadata"],
      metric: "55+ initiatives · FAIRsharing and Zenodo records",
      href: "https://yourselftoscience.org",
      linkLabel: "Open research directory"
    }
  ],
  timeline: [
    {
      year: "2018 — now",
      title: "Public knowledge and source work",
      body: "Wikipedia, Wikidata and Wikimedia Commons contributions spanning citations, structured data, scientific diagrams and public media records."
    },
    {
      year: "2022 — 2025",
      title: "Community-facing research facilitation",
      body: "Co-developed and co-facilitated recorded Zoom discussions with autistic participants on sensitive sexuality and relationship topics, combining participant-sensitive moderation, technical session operations and reliable two-person handoffs. Institutional attribution is withheld pending permission."
    },
    {
      year: "2023 — now",
      title: "Paid scientific editorial and web operations",
      body: "Primary-literature research, public writing, production support and website operations for Entropy for Life."
    },
    {
      year: "2024 — now",
      title: "Open research infrastructure",
      body: "Founded Yourself to Science, defining verification, metadata and public-participation workflows for more than 55 initiatives."
    },
    {
      year: "2026 — now",
      title: "Structured public AI testing record",
      body: "Gray Swan Proving Ground participation with platform-confirmed aggregate results and a public evidence-limitations page."
    }
  ],
  documents: [
    {
      id: "ai",
      label: "AI systems",
      title: "AI Safety & Adversarial Testing CV",
      body: "For safeguards, model behavior, adversarial QA, trust & safety and evaluation-operations roles.",
      href: "/cv-resume.html"
    },
    {
      id: "editorial",
      label: "Research organizations",
      title: "Editorial & Community Operations CV",
      body: "For assistant editor, evidence-synthesis coordination, research programs and community-engagement roles.",
      href: "/cv-editorial.html"
    },
    {
      id: "integrity",
      label: "Trust & investigations",
      title: "Trust, Safety & Knowledge Integrity CV",
      body: "For content integrity, public-record research, OSINT support, trust & safety and abuse-analysis roles.",
      href: "/cv-integrity.html"
    },
    {
      id: "data",
      label: "Research and data",
      title: "Research Verification & Data Quality CV",
      body: "For scientific evidence, provenance, metadata, research operations and domain-expert AI quality roles.",
      href: "/cv-research.html"
    },
    {
      id: "master",
      label: "Complete archive",
      title: "Master CV & Evidence Record",
      body: "The comprehensive source document for due diligence and future tailored applications—not the default attachment.",
      href: "/cv.html"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_V3;
}
