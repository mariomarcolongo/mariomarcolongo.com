import career from "./research-operations-positioning.mjs";

const profile = structuredClone(career.P.researchQuality);
const shared = structuredClone(career.P.shared);

profile.id = "bmj-insights-manager";
profile.documentLabel = "BMJ Insights Manager Application CV";
profile.title = "Publishing Data & Insights Specialist";
profile.subtitle = "Scholarly metadata | data quality | evidence analysis | Tableau visualization | publishing operations";
profile.summary = "Publishing-data, research-operations and evidence-quality specialist with eight years of auditable work across scientific information, structured metadata, publication discovery and public documentation. Design verification and update workflows, reconcile conflicting records, improve data quality and translate complex scientific evidence into documented recommendations for mixed technical and non-technical audiences. Operate research-integrity tooling using DOI, PMID/PMCID, Crossref and Retraction Watch data, and have published more than 70 analytical visualizations through Tableau Public, Flourish and Wikimedia Commons.";

profile.competencies = [
  "Scholarly publishing data and identifiers: DOI, PMID, PMCID, Crossref, Retraction Watch, publication discovery, retractions, corrections, expressions of concern, repositories and structured metadata",
  "Data quality and process ownership: validation rules, provenance, entity reconciliation, taxonomy design, quality assurance, documentation, inclusion criteria and update workflows",
  "Analysis and insight translation: primary-source research, evidence synthesis, complex-data interpretation, actionable recommendations, source-quality assessment and explicit uncertainty",
  "Reporting and visualization: Tableau Public, Flourish, SVG vector graphics, open-data reporting and more than 70 published biomedical, epidemiological and public-health visualizations",
  "Product and operational delivery: requirements definition, prioritization, issue reproduction, cross-system behavior inspection, functional and regression testing, release verification and process improvement",
  "AI-enabled efficiency: AI-assisted implementation and analysis workflows with personal ownership of requirements, evidence checking, testing, iteration and final release decisions",
  "Stakeholder communication: concise technical documentation, scientific explanation, editorial feedback and communication across technical, editorial and non-specialist audiences",
  "Remote project coordination: independent workload planning, small-team production, participant-facing research facilitation, privacy-sensitive procedures and ambiguity management"
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
      "Founded and operate an open-source directory of 55 research-participation resources spanning clinical studies, biobanks, registries, donation programs and other initiatives; 37 unique Wikidata items used the site as a reference URL as of 27 July 2026.",
      "Designed the inclusion and update model, verification workflow, provenance and metadata fields, licensing boundaries, public documentation and machine-readable interfaces including JSON-LD, RDF/VoID and OpenAPI.",
      "Reconcile information across study pages, registries, repositories and public records; document inclusion decisions, investigate inconsistencies, prioritize corrections and test changes before release.",
      "Translate user and project needs into testable requirements, inspect implementation and API behavior, coordinate AI-assisted iteration and retain final quality-assurance and operational decisions."
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
      "Deliver primary-literature research, scientific fact-checking and evidence analysis across 80 documented published contributions: 55 YouTube projects, four co-authored articles and 21 short-form pieces.",
      "Convert complex and sometimes conflicting evidence into scripts, editorial recommendations, correction notes, data analyses, visualizations, presentation slides and clear explanations for non-specialist audiences.",
      "Work within a small recurring remote production team, clarify ambiguous requirements, balance immediate publication needs with evidence quality and maintain documented source boundaries.",
      "Designed and built the project website in WordPress and manage publishing, responsive behavior, hosting, DNS, SSL, technical SEO and routine functional troubleshooting."
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
      "Created and operate browser and Zotero research-integrity tooling that identifies publication and publisher context and checks Crossref/Retraction Watch records for retractions, corrections and expressions of concern.",
      "Define DOI, PMID/PMCID, domain and identifier-resolution rules; document ambiguity and false-positive boundaries; inspect API and implementation outputs and convert evidence requirements into deterministic product behavior.",
      "Prioritize defects and improvements, reproduce failures, review AI-assisted implementation and verify releases across Chrome, Edge, Firefox, Safari and Zotero."
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
      "Published more than 70 empirical biomedical, epidemiological and public-health visualizations through Tableau Public, Flourish and Wikimedia Commons, turning source datasets into accessible charts, maps and interactive views.",
      "Completed 4,317 auditable public contributions as of July 2026, including citation checking, structured-metadata improvement, entity reconciliation and correction of conflicting information.",
      "Created an original vector diagram of overlapping monogenic clinical phenotypes adopted across four Wikipedia language editions and maintain evidence, terminology and attribution across multilingual use."
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
      "Build open analytical views from public biomedical and social datasets, selecting appropriate measures, documenting sources and presenting patterns for non-specialist interpretation.",
      "Use visual structure and explanatory copy to cut through complex evidence while preserving caveats, definitions and uncertainty."
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
      "Maintain public records across ORCID, FAIRsharing, Zenodo, Wikidata, Wikimedia and ENA, with practical attention to persistent identifiers, provenance, licensing and discoverability.",
      "Use publication and repository metadata to connect research outputs, evidence records and machine-readable project documentation."
    ]
  }
];

profile.additionalEvidence = [
  {
    title: "Auditable data-quality and evidence record",
    body: "Eight years of publicly inspectable citation, metadata, visualization and source-reconciliation work across Wikipedia, Wikidata and Wikimedia Commons.",
    link: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
  },
  {
    title: "Sensitive stakeholder and research operations",
    body: "Co-developed and facilitated approximately 4-5 structured remote focus groups, using consent, privacy, accessibility, scripted prompts, timed turn-taking and two-person operational handoffs.",
    link: "/research-operations.html"
  },
  {
    title: "Evidence-synthesis training",
    body: "Completed GALENOS and Cochrane Crowd systematic-review screening training alongside continuing practical primary-literature verification.",
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
