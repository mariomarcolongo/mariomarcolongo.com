import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.researchQuality);
const shared = structuredClone(career.P.shared);

profile.id = "bmj-insights-manager";
profile.documentLabel = "BMJ Insights Manager Application CV";
profile.title = "Publishing Data & Insights Specialist";
profile.subtitle = "Scholarly metadata | data quality | evidence analysis | Tableau visualization | publishing operations";
profile.summary = "Publishing-data and evidence-quality specialist with eight years of auditable work across scientific information, structured metadata and publication discovery. Design verification workflows, reconcile records, translate complex evidence into recommendations, operate tooling using Crossref and Retraction Watch data, and publish analytical visualizations through Tableau Public, Flourish and Wikimedia Commons.";

profile.competencies = [
  "Scholarly publishing data and identifiers: DOI, PMID, PMCID, Crossref, Retraction Watch, retractions, corrections, expressions of concern, repositories and structured metadata",
  "Data quality and process ownership: validation rules, provenance, entity reconciliation, taxonomy, quality assurance, documentation and update workflows",
  "Analysis and insight translation: primary-source research, evidence synthesis, actionable recommendations, source-quality assessment and explicit uncertainty",
  "Reporting and visualization: Tableau Public, Flourish, SVG graphics, open-data reporting and more than 70 analytical visualizations",
  "Operational delivery and AI-enabled efficiency: prioritization, issue reproduction, behavior inspection, functional testing, release verification and personally checked AI-assisted workflows",
  "Stakeholder communication and coordination: technical documentation, editorial feedback, small-team production, independent workload planning and ambiguity management"
];

profile.experience = [
  {
    role: "Founder & Research-Workflow Owner",
    organization: "Yourself to Science™ - Open research infrastructure",
    period: "Aug 2024 - Present",
    links: [
      { label: "Project statistics", url: "https://yourselftoscience.org/stats" },
      { label: "FAIRsharing record", url: "https://doi.org/10.25504/FAIRsharing.d3d487" },
      { label: "Zenodo record", url: "https://doi.org/10.5281/zenodo.15109359" }
    ],
    bullets: [
      "Founded and operate an open-source directory of 55 research-participation resources; 37 unique Wikidata items used the site as a reference URL as of 27 July 2026.",
      "Designed inclusion, verification and update workflows, provenance and metadata fields, licensing boundaries, documentation and machine-readable interfaces including JSON-LD, RDF/VoID and OpenAPI.",
      "Reconcile information across registries, repositories and public records; investigate inconsistencies, prioritize corrections, translate needs into requirements and test changes before release."
    ]
  },
  {
    role: "Scientific Content Quality, Analysis & Publishing Operations Contractor",
    organization: "Entropy for Life - Independent contractor",
    period: "Jun 2023 - Present",
    links: [
      { label: "Official work record", url: "https://entropyforlife.it/mario-marcolongo-entropy-for-life/" },
      { label: "Author page", url: "https://entropyforlife.it/autore/mario-marcolongo/" }
    ],
    bullets: [
      "Deliver primary-literature research, fact-checking and evidence analysis across 80 documented published contributions: 55 YouTube projects, four co-authored articles and 21 short-form pieces.",
      "Convert complex and conflicting evidence into editorial recommendations, corrections, scripts, data analyses, visualizations, slides and clear explanations for non-specialist audiences.",
      "Coordinate within a small remote production team and manage WordPress publishing, hosting, DNS, SSL, technical SEO and functional troubleshooting."
    ]
  },
  {
    role: "Creator & Research-Integrity Product Operator",
    organization: "Notandia (formerly MDPI Filter) - Independent open-source project",
    period: "2024 - Present",
    links: [
      { label: "Project record", url: "/notandia.html" },
      { label: "Browser repository", url: "https://github.com/notandia/browser-extension" },
      { label: "Zotero repository", url: "https://github.com/notandia/zotero-plugin" }
    ],
    bullets: [
      "Operate browser and Zotero tooling that checks Crossref/Retraction Watch records for retractions, corrections and expressions of concern and identifies publication and publisher context.",
      "Define DOI, PMID/PMCID, domain and identifier-resolution rules, document ambiguity and false-positive boundaries, prioritize defects and verify releases across five targets."
    ]
  },
  {
    role: "Scientific Data Visualizer & Structured-Data Editor",
    organization: "Wikimedia Commons, Tableau Public, Flourish, Wikipedia & Wikidata",
    period: "Mar 2018 - Present",
    links: [
      { label: "Tableau portfolio", url: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes" },
      { label: "Flourish portfolio", url: "https://app.flourish.studio/@Digressivo" },
      { label: "Public contribution record", url: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo" }
    ],
    bullets: [
      "Published more than 70 biomedical, epidemiological and public-health visualizations, turning source datasets into accessible charts, maps and interactive views.",
      "Completed 4,317 auditable contributions as of July 2026, including citation checking, metadata improvement, entity reconciliation and correction of conflicting information."
    ]
  }
];

profile.projects = [
  {
    name: "Scientific Data Visualization Portfolio",
    role: "Analyst & Visualization Author",
    period: "2023 - Present",
    links: [
      { label: "Tableau Public", url: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes" },
      { label: "Flourish", url: "https://app.flourish.studio/@Digressivo" }
    ],
    bullets: [
      "Build sourced analytical views from public datasets and explain patterns while preserving definitions, caveats and uncertainty."
    ]
  },
  {
    name: "Scholarly Metadata & Persistent-Identifier Record",
    role: "Open-Research Infrastructure Operator",
    period: "2024 - Present",
    links: [
      { label: "ORCID", url: "https://orcid.org/0000-0003-2846-7115" },
      { label: "FAIRsharing", url: "https://doi.org/10.25504/FAIRsharing.d3d487" },
      { label: "ENA record", url: "https://www.ebi.ac.uk/ena/browser/view/PRJEB109744" }
    ],
    bullets: [
      "Maintain public records across ORCID, FAIRsharing, Zenodo, Wikidata, Wikimedia and ENA with attention to identifiers, provenance, licensing and discoverability."
    ]
  }
];

profile.additionalEvidence = [
  {
    title: "Auditable data-quality record",
    body: "Eight years of publicly inspectable citation, metadata, visualization and source-reconciliation work.",
    link: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
  },
  {
    title: "Sensitive research operations",
    body: "Co-developed and facilitated approximately 4-5 structured remote focus groups using consent, privacy, accessibility and operational handoffs.",
    link: "/research-operations.html"
  },
  {
    title: "Evidence-synthesis training",
    body: "GALENOS and Cochrane Crowd systematic-review screening training plus practical primary-literature verification.",
    link: "https://orcid.org/0000-0003-2846-7115"
  }
];

shared.location = "Italy | Italian/EU citizen | Open to relocating to London for hybrid work | UK work authorization not currently held";
shared.education = [
  "Medicine and Surgery studies - Università degli Studi della Campania Luigi Vanvitelli, 2020-Present (currently inactive)",
  "GALENOS Crowd Evidence Synthesis Training - Cochrane Crowd & GALENOS, 2026",
  "EF SET English Certificate - 68/100, C1 overall, 2024"
];
shared.language = "Italian - native. English - C1 overall (EF SET 68/100), with advanced scientific and technical reading and professional writing.";

export default {
  ...career,
  P: {
    ...career.P,
    bmjInsights: profile,
    bmjShared: shared
  }
};
