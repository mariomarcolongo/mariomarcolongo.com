const INVESTIGATION_CASES = {
  giannino: {
    id: "giannino",
    category: "Archival OSINT & legal chronology",
    title: "Oscar Giannino: reconstructing a legally sensitive public record",
    context: "A missing and fragmented public record concerned reporting by Oscar Giannino and other journalists on an alleged internal RAI organization chart, followed by criminal, appellate, cassation and civil proceedings.",
    work: [
      "Recovered unavailable or unstable source material through web archives, URL matching and reconstruction of likely document paths.",
      "Located an archived copy of the original 2008 newspaper PDF and reconciled it with contemporary reporting, court coverage and later procedural developments.",
      "Built a dated chronology that distinguishes the original allegations, acquittals, appellate reasoning, the Court of Cassation reversal and later civil consequences.",
      "Used attributed and legally cautious wording rather than collapsing conflicting judicial stages into a single conclusion."
    ],
    demonstrates: ["Archival OSINT", "Lost-document recovery", "Legal chronology", "Source reconciliation", "Risk-aware writing"],
    limitations: "The public Wikipedia diff verifies the text, citations and edit attribution. The portfolio describes source-recovery and synthesis work; it does not provide an independent legal opinion or make claims beyond the cited public record.",
    links: [
      { label: "Inspect the attributed Wikipedia diff", href: "https://it.wikipedia.org/w/index.php?title=Oscar_Giannino&diff=prev&oldid=133702639" }
    ]
  },
  teodorani: {
    id: "teodorani",
    category: "Content governance & source-quality review",
    title: "Massimo Teodorani: biographical source-quality and notability review",
    context: "A public Wikipedia biography contained promotional language, weak or mismatched citations, heavy reliance on primary sources and disputed claims about academic, scientific and public significance. The review developed inside a contentious deletion process involving the biographical subject and multiple editors.",
    work: [
      "Opened and checked cited sources against the claims they were used to support, identifying mismatches between article wording and the underlying records.",
      "Searched SCImago, Scopus and Web of Science; compared publication, citation and h-index evidence with official Italian academic-qualification thresholds.",
      "Distinguished research articles from letters to the editor, evaluated source independence and journal context, and examined potentially pseudoscientific claims without treating topic alone as proof of pseudoscience.",
      "Documented uncertainty explicitly, separated hypotheses from established findings, corrected procedural mistakes when identified and maintained an evidence-based position during adversarial and legally sensitive discussion."
    ],
    demonstrates: ["Source-quality auditing", "Bibliometric research", "Content governance", "Policy application", "Adversarial stakeholder handling"],
    limitations: "The linked pages document a public collaborative moderation process, not a personal verdict on the subject's character or scientific work. The deletion outcome reflects community consensus under Wikipedia policy.",
    links: [
      { label: "Inspect the deletion discussion", href: "https://it.wikipedia.org/wiki/Wikipedia:Pagine_da_cancellare/Massimo_Teodorani" },
      { label: "Inspect the associated talk record", href: "https://it.wikipedia.org/wiki/Discussioni_Wikipedia:Pagine_da_cancellare/Massimo_Teodorani" }
    ]
  },
  syndromicAutism: {
    id: "syndromic-autism",
    category: "Biomedical evidence synthesis & taxonomy",
    title: "Syndromic autism: building a structured biomedical evidence section",
    context: "The English Wikipedia autism article lacked a structured explanation of syndromic and non-syndromic autism and a comparative representation of associated genetic conditions.",
    work: [
      "Synthesized peer-reviewed biomedical literature into a sourced explanation of syndromic and non-syndromic autism.",
      "Organized clinically defined, molecularly defined and currently undefined categories using phenotype-first and genotype-first concepts.",
      "Built a sortable table connecting conditions, genetic or chromosomal causes, loci, autism-prevalence estimates, clinical classification and associated characteristics.",
      "Performed follow-up corrections, link resolution and terminology improvements; the material was later moved into a dedicated article."
    ],
    demonstrates: ["Biomedical literature synthesis", "Taxonomy design", "Structured evidence", "Prevalence extraction", "Iterative quality control"],
    limitations: "The revision history verifies the attributed contribution and cited literature. It is encyclopedia editing and evidence synthesis, not original clinical research or medical guidance.",
    links: [
      { label: "Inspect the principal attributed diff", href: "https://en.wikipedia.org/w/index.php?diff=prev&oldid=1159307157" },
      { label: "Inspect the follow-up adjustment", href: "https://en.wikipedia.org/w/index.php?title=Autism&diff=prev&oldid=1159319457" },
      { label: "Open the current dedicated article", href: "https://en.wikipedia.org/wiki/Syndromic_autism" }
    ]
  },
  h5n1: {
    id: "h5n1",
    category: "Rapid health-information monitoring",
    title: "H5N1 situation tracker: dated developments and source reconciliation",
    context: "A public-facing rolling article tracked fast-changing H5N1 developments across human cases, animal outbreaks and public-health reporting.",
    work: [
      "Co-authored the tracker and organized developments chronologically so readers could distinguish current information from earlier reporting.",
      "Compared reports across scientific, public-health and reputable journalistic sources, preserving outbound citations.",
      "Separated confirmed developments from broader pandemic-risk interpretation and updated the article as the evidence changed.",
      "Translated a technically complex and uncertain evidence landscape into concise public communication."
    ],
    demonstrates: ["Live source monitoring", "Chronology", "Cross-source corroboration", "Uncertainty communication"],
    limitations: "This is a public science-communication record, not an intelligence product or an independent epidemiological surveillance system. Source selection and editorial decisions are visible only to the extent documented in the article.",
    links: [
      { label: "Inspect the published tracker", href: "https://entropyforlife.it/2024/10/25/influenza-aviaria-situazione-epidemiologica-aggiornata/" }
    ]
  },
  directory: {
    id: "directory",
    category: "Entity verification & research provenance",
    title: "Yourself to Science: verifying participation opportunities",
    context: "A public directory helps people identify research initiatives that accept genomes, health data, biological samples or other forms of participation.",
    work: [
      "Defined inclusion and exclusion criteria for clinical studies, biobanks, registries, donation programs and related initiatives.",
      "Structured fields for organization, participation type, geographic availability, data or sample type, source URL and licensing context.",
      "Reconciled organizations and initiatives across public websites, Wikidata, FAIRsharing, Zenodo and other primary records.",
      "Created update and provenance workflows so a visible directory entry can be traced to an inspectable source."
    ],
    demonstrates: ["Entity reconciliation", "Inclusion criteria", "Source traceability", "Structured-data quality"],
    limitations: "The directory verifies public participation information at the time of review. It does not independently audit the scientific quality, privacy practices or institutional claims of every listed initiative.",
    links: [
      { label: "Inspect the directory", href: "https://yourselftoscience.org" },
      { label: "Inspect public statistics", href: "https://yourselftoscience.org/stats" }
    ]
  },
  pencil: {
    id: "pencil",
    category: "Supporting provenance & rights example",
    title: "Fascist-era carpenter's pencil: provenance, description and permission",
    context: "Four photographs of a privately held historical carpenter's pencil were supplied directly by the original photographer. The object carries Fascist-era anti-tuberculosis inscriptions and belonged to Aristide Ravaglia, an Italian joiner born in 1890.",
    work: [
      "Prepared concise English and Italian descriptions and captions for the front, reverse and angled views.",
      "Transcribed and translated the inscriptions while preserving the original political and historical context.",
      "Documented ownership context, photographer attribution, source route and reusable licensing information.",
      "Published the records through Wikimedia Commons; the visible file page records permission reviewed by Wikimedia's Volunteer Response Team."
    ],
    demonstrates: ["Source provenance", "Rights and authorship context", "Bilingual metadata", "Historical object documentation"],
    limitations: "The public record verifies the uploaded media, descriptions, author attribution and VRT permission status. Private correspondence and the complete family-history verification process are not published.",
    links: [
      { label: "Inspect the Commons record", href: "https://commons.wikimedia.org/wiki/File:Pencil_Fascist_Tuberculosis_Campaign_Italy_Side_A_Angle.jpg" }
    ]
  }
};

INVESTIGATION_CASES.primary = [
  INVESTIGATION_CASES.giannino,
  INVESTIGATION_CASES.teodorani,
  INVESTIGATION_CASES.syndromicAutism,
  INVESTIGATION_CASES.h5n1,
  INVESTIGATION_CASES.directory
];

INVESTIGATION_CASES.all = [
  ...INVESTIGATION_CASES.primary,
  INVESTIGATION_CASES.pencil
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = INVESTIGATION_CASES;
}
