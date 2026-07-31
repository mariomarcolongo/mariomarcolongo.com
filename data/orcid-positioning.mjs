import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.researchQuality);
const shared = structuredClone(career.P.shared);

profile.id = "orcid-member-support";
profile.documentLabel = "ORCID Application CV";
profile.title = "Scholarly Infrastructure & API Operations Specialist";
profile.subtitle = "Research workflows · API troubleshooting · metadata quality · remote stakeholder communication";
profile.summary = "Open-research infrastructure and technical-operations specialist with eight years of auditable work across scholarly information, structured metadata, publication discovery and public documentation. Founded and operate Yourself to Science, a directory of 55 research-participation resources with FAIRsharing, Zenodo and machine-readable interfaces. Maintain API-connected research tools and an AWS service through issue reproduction, request/response inspection, release testing and behavior documentation. Explain complex scientific and technical material to non-specialist audiences and facilitate structured remote sessions.";
profile.strengthsTitle = "Role-relevant evidence";
profile.evidenceTitle = "Supporting evidence";
profile.fitTitle = "Role-aligned strengths";
profile.fit = [
  "Translate stakeholder questions into reproducible technical issues and testable behavior",
  "Explain APIs and scholarly workflows to technical and non-technical audiences",
  "Document support cases, release behavior and escalation-ready handoffs",
  "Identify data-quality, integration and operational-process improvements"
];
profile.strengths = [
  { value: "8 years", label: "Scholarly information and metadata work", detail: "Public source, citation and structured-data record" },
  { value: "55", label: "Research resources indexed", detail: "FAIRsharing · Zenodo · verification workflows" },
  { value: "5", label: "Released research-tool targets", detail: "Chrome · Edge · Firefox · Safari · Zotero" },
  { value: "80", label: "Published scientific content contributions", detail: "Technical explanation · evidence review · localization" }
];
profile.experience = [
  {
    role: "Founder & Research-Workflow Owner",
    organization: "Yourself to Science™ · Open research infrastructure",
    period: "Aug 2024 — Present",
    links: [
      { label: "Project statistics", url: "https://yourselftoscience.org/stats" },
      { label: "FAIRsharing record", url: "https://doi.org/10.25504/FAIRsharing.d3d487" },
      { label: "Zenodo record", url: "https://doi.org/10.5281/zenodo.15109359" }
    ],
    bullets: [
      "Founded and operate an open-source directory of 55 research-participation resources; maintain public FAIRsharing and Zenodo records.",
      "Define inclusion and update workflows, provenance and metadata fields, licensing boundaries, public documentation and machine-readable interfaces including JSON-LD, RDF/VoID and OpenAPI.",
      "Investigate issues, specify expected behavior, inspect API and implementation outputs, test releases, diagnose deployments and document decisions for users and maintainers."
    ]
  },
  {
    role: "Open-Source Research Tooling & API Operations Owner",
    organization: "Notandia (formerly MDPI Filter) · English Wikipedia Link Converter",
    period: "2024 — Present",
    links: [
      { label: "Notandia project record", url: "/notandia.html" },
      { label: "Link Converter repository", url: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot" }
    ],
    bullets: [
      "Define and verify browser and Zotero workflows for Google Scholar, PubMed, Europe PMC and publisher pages using DOI, PMID/PMCID, domain and identifier evidence.",
      "Operate an AWS service using HTTP webhooks and REST APIs, Lambda, SQS and DynamoDB; inspect status codes, requests, responses, monitoring, retries, dead-letter handling and rate limits.",
      "Reproduce failures, write issue and release documentation, prioritize fixes, test changes and coordinate AI-assisted implementation while retaining final verification and release decisions."
    ]
  },
  {
    role: "Scientific Content Quality, Localization & Web Operations Contractor",
    organization: "Entropy for Life · Independent contractor",
    period: "Jun 2023 — Present",
    links: [
      { label: "Official work record", url: "https://entropyforlife.it/mario-marcolongo-entropy-for-life/" },
      { label: "Website", url: "https://entropyforlife.it" }
    ],
    bullets: [
      "Research, verify and localize predominantly English-language scientific evidence across 80 documented published contributions, translating complex material into clear Italian scripts, articles, visual explanations and correction notes.",
      "Explain technical and scientific concepts to non-specialist audiences while preserving terminology, source context, uncertainty and disagreements between sources.",
      "Manage WordPress publishing, OVHcloud hosting, DNS, SSL, technical SEO and routine functional troubleshooting in a small remote team."
    ]
  }
];
profile.evidence = [
  {
    title: "Scholarly identifier and metadata ecosystem",
    body: "Public ORCID, FAIRsharing, Zenodo, Wikidata, Wikimedia and ENA records demonstrate practical work with persistent identifiers, provenance, open repositories, structured metadata and licensing boundaries.",
    link: "https://orcid.org/0000-0003-2846-7115"
  },
  {
    title: "Remote facilitation and live stakeholder communication",
    body: "Lead or co-facilitated approximately 4–5 recorded Zoom focus groups, typically lasting 1–2 hours, using structured prompts, consent and privacy procedures, captions or written-chat options and two-person handoffs.",
    link: "/research-operations.html"
  },
  {
    title: "Auditable API and service-troubleshooting record",
    body: "The public Wikipedia-link service documents HTTP webhooks, external API calls, queue-based processing, deduplication, monitoring, retries, dead-letter handling, rate limits and security controls.",
    link: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
  }
];
profile.skills = [
  ["Scholarly infrastructure and workflows", "Research-participation directories, publication discovery, repositories, Zotero, FAIRsharing, Zenodo, Wikidata, Wikimedia, ENA, persistent identifiers, provenance and open-science documentation"],
  ["API standards and troubleshooting", "Hands-on: HTTP, REST, JSON, OpenAPI, webhooks, request/response inspection, status and error analysis, logs, rate limits, retries and functional testing. Basic familiarity: XML and RDF/VoID. Git/GitHub, AWS Lambda, SQS and DynamoDB"],
  ["Metadata and identifiers", "DOI, PMID, PMCID, ORCID iD, Wikidata identifiers, structured metadata, entity reconciliation, taxonomy, validation rules and data-quality checks"],
  ["Technical communication and support", "Issue documentation, email-based explanations, live Zoom facilitation, user-facing guidance, training-oriented materials, escalation-ready handoffs and communication with mixed technical and non-technical audiences"],
  ["Remote operations and languages", "Independent prioritization, asynchronous documentation, remote team coordination, Italian native, English C1 overall and availability during European business hours"]
];

shared.location = "Italy · Italian/EU citizen · Authorized to work in Spain · Available to relocate before start · European business hours";
shared.education = [
  "GALENOS Crowd Evidence Synthesis Training — Cochrane Crowd & GALENOS, 2026",
  "EF SET English Certificate — 68/100, C1 overall, 2024",
  "Career Essentials in Generative AI — Microsoft & LinkedIn, 2024"
];

export default {
  ...career,
  P: {
    ...career.P,
    orcidMemberSupport: profile,
    orcidShared: shared
  }
};