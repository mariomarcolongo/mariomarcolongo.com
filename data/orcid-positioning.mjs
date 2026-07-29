import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.researchQuality);
const shared = structuredClone(career.P.shared);

profile.id = "orcid-member-support";
profile.documentLabel = "ORCID Application CV";
profile.title = "Scholarly Infrastructure & Technical Support Specialist";
profile.subtitle = "API troubleshooting · research workflows · metadata quality · stakeholder support";
profile.summary = "Scholarly-infrastructure and technical-operations specialist experienced in operating open-research services, troubleshooting API-connected workflows, documenting system behavior and explaining technical concepts to mixed audiences. Founded and maintain Yourself to Science, with FAIRsharing and Zenodo records, structured metadata and machine-readable interfaces; also own requirements, functional testing and release operations for cross-platform research tooling and an AWS-based Wikipedia API service.";
profile.fit = [
  "Member integration and API support",
  "Scholarly infrastructure implementation and workflow guidance",
  "Technical documentation, training and stakeholder communication",
  "Research metadata and open-science operations"
];
profile.strengths = [
  { value: "55", label: "Research resources indexed", detail: "FAIRsharing · Zenodo · public verification workflows" },
  { value: "5", label: "Released research-tool targets", detail: "Chrome · Edge · Firefox · Safari · Zotero" },
  { value: "80", label: "Published scientific content contributions", detail: "Evidence review · localization · explanatory production" },
  { value: "4,317", label: "Auditable public contributions", detail: "Claims · citations · metadata · structured knowledge" }
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
      "Founded and operate an open-source directory indexing 55 research-participation resources; 37 unique Wikidata items use yourselftoscience.org as a reference URL (P854).",
      "Defined inclusion and update workflows, provenance and metadata fields, licensing boundaries, public documentation and machine-readable interfaces: JSON-LD, RDF/VoID and OpenAPI.",
      "Investigate issues, specify expected behavior, inspect code and API outputs, test releases and diagnose deployments while coordinating AI-assisted implementation."
    ]
  },
  {
    role: "Research Tooling & API Operations Owner",
    organization: "Notandia (formerly MDPI Filter) · English Wikipedia Link Converter · Independent open-source projects",
    period: "2024 — Present",
    links: [
      { label: "Canonical Notandia project record", url: "/notandia.html" },
      { label: "Wikipedia API service repository", url: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot" }
    ],
    bullets: [
      "Define and verify Notandia behavior across five released browser and Zotero targets for Google Scholar, PubMed, Europe PMC and article references, using DOI, domain and identifier evidence; the product was originally released as MDPI Filter.",
      "Operate an AWS service processing Wikipedia links through HTTP webhooks and REST APIs, with Lambda, SQS, DynamoDB, monitoring, retries, dead-letter handling and rate limits.",
      "Reproduce failures, inspect request and response behavior, document issues and releases, guide AI-assisted changes and turn user needs into testable behavior."
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
      "Research, verify and localize predominantly English-language scientific evidence across 80 documented published contributions, turning complex material into clear Italian scripts, articles, visual explanations and correction notes.",
      "Communicate technical and scientific concepts to non-specialist audiences while preserving terminology, source context, uncertainty and disagreements between sources.",
      "Designed and built entropyforlife.it in WordPress and manage publishing, OVHcloud hosting, DNS, SSL, technical SEO and day-to-day functional troubleshooting in a small remote team."
    ]
  }
];
profile.evidence = [
  {
    title: "Open research identity and metadata record",
    body: "Public ORCID, FAIRsharing, Zenodo, Wikidata, Wikimedia and ENA records demonstrate practical work with persistent identifiers, provenance, structured metadata, open licensing and scholarly-information quality.",
    link: "https://orcid.org/0000-0003-2846-7115"
  },
  {
    title: "Remote facilitation and live stakeholder communication",
    body: "Co-developed and facilitated approximately 4–5 recorded Zoom focus groups with autistic participants, using structured prompts, consent and privacy procedures, accessibility options and two-person handoffs.",
    link: "/research-operations.html"
  },
  {
    title: "Auditable technical operations architecture",
    body: "The public Wikipedia-link service documents HTTP webhook handling, external API calls, queue-based processing, deduplication, monitoring, retry and recovery behavior, and security controls.",
    link: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
  }
];
profile.skills = [
  ["Scholarly infrastructure and workflows", "Research-participation directories, publication discovery, FAIRsharing, Zenodo, Wikidata, Wikimedia, ENA, persistent identifiers, repositories, provenance and open-science documentation"],
  ["API troubleshooting and technical operations", "HTTP, REST, JSON, webhooks, OpenAPI, request/response inspection, status and error analysis, issue reproduction, functional testing, Git/GitHub, AWS Lambda, SQS and DynamoDB"],
  ["Metadata and data quality", "Structured metadata, entity reconciliation, taxonomy and validation rules, identifier-based matching, provenance review, licensing boundaries and quality-control workflows"],
  ["Technical communication and stakeholder support", "Clear explanations for technical and non-technical audiences, email and issue documentation, live video facilitation, troubleshooting notes, training-oriented materials and escalation-ready handoffs"],
  ["Remote collaboration and languages", "Independent prioritization and follow-through in distributed work; Italian native and English C1 overall, with advanced technical reading and professional writing"]
];

shared.location = "Italy · Italian/EU citizen · Available to relocate to Spain before start · European business hours";
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
