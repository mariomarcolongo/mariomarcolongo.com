import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.researchQuality);
const shared = structuredClone(career.P.shared);

profile.id = "bmj-insights-manager";
profile.documentLabel = "BMJ Insights Manager Application CV";
profile.title = "Publishing Data & Insights Specialist";
profile.subtitle = "Scholarly metadata · data quality · evidence analysis · Tableau visualization · publishing operations";
profile.summary = "Publishing-data and evidence-quality specialist with eight years of auditable work across scientific information, structured metadata and publication discovery. Design verification workflows, reconcile records, translate complex evidence into documented recommendations, operate research-integrity tooling using Crossref and Retraction Watch data, and publish analytical visualizations through Tableau Public, Flourish and Wikimedia Commons.";
profile.strengthsTitle = "Role-relevant evidence";
profile.evidenceTitle = "Publishing data evidence";
profile.fitTitle = "Role-aligned strengths";

profile.strengths = [
  { value: "8 years", label: "Auditable data-quality work", detail: "Citations · metadata · provenance · reconciliation" },
  { value: "55", label: "Research resources indexed", detail: "Verification and update workflows" },
  { value: "80", label: "Published content contributions", detail: "Evidence analysis · editorial recommendations" },
  { value: "70+", label: "Analytical visualizations", detail: "Tableau Public · Flourish · Wikimedia" }
];

profile.experience = [
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
      "Operate browser and Zotero tooling that checks Crossref and Retraction Watch records for retractions, corrections and expressions of concern and identifies publication and publisher context.",
      "Define DOI, PMID/PMCID, domain and identifier-resolution rules; document ambiguity, provenance and false-positive boundaries; inspect data and implementation outputs.",
      "Prioritize defects and improvements, reproduce failures, review AI-assisted implementation and verify releases across Chrome, Edge, Firefox, Safari and Zotero."
    ]
  },
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
      "Founded and operate an open-source directory of 55 research-participation resources; 37 unique Wikidata items used the site as a reference URL as of 27 July 2026.",
      "Designed inclusion, verification and update workflows, provenance and metadata fields, licensing boundaries, documentation and machine-readable interfaces.",
      "Reconcile information across registries, repositories and public records; investigate inconsistencies, prioritize corrections and test changes before release."
    ]
  },
  {
    role: "Scientific Content Quality, Analysis & Publishing Operations Contractor",
    organization: "Entropy for Life · Independent contractor",
    period: "Jun 2023 — Present",
    links: [
      { label: "Official work record", url: "https://entropyforlife.it/mario-marcolongo-entropy-for-life/" },
      { label: "Author page", url: "https://entropyforlife.it/autore/mario-marcolongo/" }
    ],
    bullets: [
      "Deliver primary-literature research, fact-checking and evidence analysis across 80 documented published contributions: 55 YouTube projects, four co-authored articles and 21 short-form pieces.",
      "Convert complex and conflicting evidence into editorial recommendations, corrections, scripts, data analyses, visualizations, slides and explanations for non-specialist audiences.",
      "Coordinate within a small remote production team and manage WordPress publishing, hosting, DNS, SSL, technical SEO and functional troubleshooting."
    ]
  }
];

profile.evidence = [
  {
    title: "Tableau and open-data visualization",
    body: "Published more than 70 biomedical, epidemiological and public-health visualizations, translating source datasets into accessible charts, maps and interactive views.",
    link: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
  },
  {
    title: "Auditable metadata and source-quality record",
    body: "Completed 4,317 public Wikimedia contributions as of July 2026, including citation checking, metadata improvement, entity reconciliation and correction of conflicting information.",
    link: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
  },
  {
    title: "Scholarly identifiers and repository records",
    body: "Maintain public records across ORCID, FAIRsharing, Zenodo, Wikidata, Wikimedia and ENA with practical attention to identifiers, provenance, licensing and discoverability.",
    link: "https://orcid.org/0000-0003-2846-7115"
  }
];

profile.skills = [
  ["Publishing data and metadata", "DOI, PMID, PMCID, Crossref, Retraction Watch, publication-status notices, persistent identifiers, repositories and structured metadata"],
  ["Data quality and process ownership", "Validation rules, provenance, entity reconciliation, taxonomy, quality assurance, documentation, inclusion criteria and update workflows"],
  ["Analysis and reporting", "Primary-source research, evidence synthesis, source-quality assessment, actionable recommendations, Tableau Public, Flourish and explicit uncertainty"],
  ["Technical and AI-enabled operations", "Requirements definition, prioritization, issue reproduction, API and behavior inspection, functional testing, release verification and personally checked AI-assisted workflows"],
  ["Stakeholder communication", "Scientific explanation, editorial feedback, technical documentation, small-team coordination and communication across technical and non-specialist audiences"]
];

profile.fit = [
  "Publishing-data quality and insights support",
  "Scholarly metadata and product operations",
  "Research-integrity and publication-status analysis",
  "Evidence reporting and dashboard support"
];

shared.location = "Italy · Italian/EU citizen · Open to relocating to London for hybrid work · UK work authorization not currently held";
shared.education = [
  "Medicine and Surgery studies — Università degli Studi della Campania Luigi Vanvitelli, 2020–Present (currently inactive)",
  "GALENOS Crowd Evidence Synthesis Training — Cochrane Crowd & GALENOS, 2026",
  "EF SET English Certificate — 68/100, C1 overall, 2024"
];
shared.language = "Italian — native. English — C1 overall (EF SET 68/100), with advanced scientific and technical reading and professional writing.";

export default {
  ...career,
  P: {
    ...career.P,
    bmjInsights: profile,
    bmjShared: shared
  }
};
