const INVESTIGATION_CASES = {
  nebula: {
    id: "nebula-genomics",
    category: "Consumer-genomics privacy & corporate-source reconciliation",
    title: "Nebula Genomics: tracing privacy, corporate and legal claims over time",
    context: "A personal-genomics company's public record changed across a sequencing partnership, sequencing-location statements, privacy-policy language, third-party data questions, corporate restructuring and federal litigation.",
    work: [
      "Built and maintained a sourced privacy section using independent reporting, peer-reviewed genomic-risk analysis, archived company pages, privacy policies, SEC filings and litigation coverage.",
      "Reconciled the historical BGI sequencing relationship with later company statements about European sequencing, preserving dates rather than presenting different operating periods as simultaneous facts.",
      "Reconstructed the 2021 acquisition through ProPhase Precision Medicine and the separate formation and launch of DNA Complete in 2024, comparing company announcements, a 2025 SEC registration statement and an annual report.",
      "Created separate Wikidata records for ProPhase Labs and DNA Complete in October 2025, adding dated parent relationships and source references. Kept DNA Complete distinct from Nebula and represented their sequencing relationship separately from corporate ownership.",
      "Expanded the third-party-data analysis using a peer-reviewed risk paper and an archived privacy policy, while distinguishing documented policy language from hypotheses about downstream data use.",
      "Added later litigation developments, removed duplicative or promotional citations and maintained neutral sourcing during a contentious public editorial process—including requesting evidence for unsupported criticism."
    ],
    demonstrates: ["Corporate-source reconciliation", "Corporate entity mapping", "SEC filing research", "Referenced structured data", "Privacy-policy analysis", "Archived web research", "Litigation tracking", "Content-governance judgment"],
    limitations: "The linked records verify attributable edits and public sources. The corporate relationships describe the historical disclosures reviewed in 2022 and 2025. The case does not independently conclude that Nebula sold genetic data, violated the law or that any participating editor was affiliated with the company. Lawsuit allegations remain allegations, and the procedural record must be updated as the case changes.",
    links: [
      { label: "Inspect the current collaborative privacy section", href: "https://en.wikipedia.org/wiki/Nebula_Genomics#Privacy_concerns" },
      { label: "Inspect the 2024 third-party-data diff", href: "https://en.wikipedia.org/w/index.php?diff=prev&oldid=1232715097" },
      { label: "Inspect the 2025 corporate-record diff", href: "https://en.wikipedia.org/w/index.php?diff=prev&oldid=1322371890" },
      { label: "Inspect the 2022 acquisition diff", href: "https://en.wikipedia.org/w/index.php?diff=1072662056&oldid=1072570463" },
      { label: "Inspect my ProPhase Labs structured record", href: "https://www.wikidata.org/w/index.php?oldid=2422680546" },
      { label: "Inspect my DNA Complete entity and relationship record", href: "https://www.wikidata.org/w/index.php?oldid=2422565854" },
      { label: "Inspect the 2025 litigation diff", href: "https://en.wikipedia.org/w/index.php?diff=prev&oldid=1322390519" },
      { label: "Compare the October 2025 SEC registration statement", href: "https://www.sec.gov/Archives/edgar/data/868278/000149315225018819/forms-1.htm" },
      { label: "Inspect attributed page-edit history", href: "https://sigma.toolforge.org/usersearch.py?name=Digressivo&page=Nebula+Genomics&server=enwiki&max=" }
    ]
  },
  giannino: {
    id: "archival-legal-record",
    category: "Archival OSINT & legal chronology",
    title: "Archival reconstruction of a legally sensitive public record",
    context: "A missing and fragmented public record concerned a journalist's reporting on an alleged internal organization chart, followed by criminal, appellate, cassation and civil proceedings.",
    work: [
      "Recovered unavailable or unstable source material through web archives, URL matching and reconstruction of likely document paths.",
      "Located an archived copy of the original 2008 newspaper PDF and reconciled it with contemporary reporting, court coverage and later procedural developments.",
      "Built a dated chronology that distinguishes the original allegations, acquittals, appellate reasoning, the Court of Cassation reversal and later civil consequences.",
      "Used attributed and legally cautious wording rather than collapsing conflicting judicial stages into a single conclusion."
    ],
    demonstrates: ["Archival OSINT", "Lost-document recovery", "Legal chronology", "Source reconciliation", "Risk-aware writing"],
    limitations: "The public Wikipedia diff verifies the text, citations and edit attribution. The portfolio describes source-recovery and synthesis work; it does not provide an independent legal opinion or make claims beyond the cited public record.",
    links: [
      { label: "Inspect the attributed archival-record diff", href: "https://it.wikipedia.org/w/index.php?title=Oscar_Giannino&diff=prev&oldid=133702639" }
    ]
  },
  teodorani: {
    id: "biographical-source-review",
    category: "Content governance & source-quality review",
    title: "Biographical source-quality and notability review",
    context: "A public biography contained promotional language, weak or mismatched citations, heavy reliance on primary sources and disputed claims about academic, scientific and public significance. The review developed inside a contentious deletion process involving the biographical subject and multiple editors.",
    work: [
      "Opened and checked cited sources against the claims they were used to support, identifying mismatches between article wording and the underlying records.",
      "Searched SCImago, Scopus and Web of Science; compared publication, citation and h-index evidence with official Italian academic-qualification thresholds.",
      "Distinguished research articles from letters to the editor, evaluated source independence and journal context, and examined potentially pseudoscientific claims without treating topic alone as proof of pseudoscience.",
      "Documented uncertainty explicitly, separated hypotheses from established findings, corrected procedural mistakes when identified and maintained an evidence-based position during adversarial and legally sensitive discussion."
    ],
    demonstrates: ["Source-quality auditing", "Bibliometric research", "Content governance", "Policy application", "Adversarial stakeholder handling"],
    limitations: "The linked pages document a public collaborative moderation process, not a personal verdict on the subject's character or scientific work. The deletion outcome reflects community consensus under Wikipedia policy.",
    links: [
      { label: "Inspect the public deletion discussion", href: "https://it.wikipedia.org/wiki/Wikipedia:Pagine_da_cancellare/Massimo_Teodorani" },
      { label: "Inspect the associated discussion record", href: "https://it.wikipedia.org/wiki/Discussioni_Wikipedia:Pagine_da_cancellare/Massimo_Teodorani" }
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
  freedomCities: {
    id: "freedom-cities",
    category: "Policy research & contested-source synthesis",
    title: "Freedom Cities: creating a neutral English-language policy article",
    context: "An emerging US political and urban-development proposal was documented across campaign material, academic analysis, think-tank plans, draft legislation and independent reporting, without an existing English Wikipedia article that brought the evidence together.",
    work: [
      "Researched, structured and created an 18,351-byte English Wikipedia article, then moved it from userspace into mainspace on 16 August 2025.",
      "Synthesized the original proposal, technological and social vision, supporting organizations, legal pathways, regulatory exemptions, infrastructure feasibility, governance concerns and ideological analysis.",
      "Balanced primary advocacy material with academic research and independent reporting, attributing contested interpretations and separating proposal details from criticism.",
      "Continued categorization and maintenance after publication; the current collaborative article is assessed as B-Class by several WikiProjects."
    ],
    demonstrates: ["Policy research", "Neutral explanatory writing", "Contested-source synthesis", "Information architecture", "Citation management"],
    limitations: "Wikipedia is collaborative and the current article includes later edits by other contributors. The exact creation revision verifies the initial 18,351-byte contribution. B-Class is a WikiProject assessment, not academic peer review, independent publication approval or endorsement of the proposal.",
    links: [
      { label: "Read my authored version — 16 August 2025", href: "https://en.wikipedia.org/w/index.php?title=Freedom_Cities&oldid=1306265602" },
      { label: "Open the current article", href: "https://en.wikipedia.org/wiki/Freedom_Cities" },
      { label: "Inspect the complete revision history", href: "https://en.wikipedia.org/w/index.php?title=Freedom_Cities&action=history" },
      { label: "Inspect the initial creation record", href: "https://en.wikipedia.org/w/index.php?oldid=1306119107&title=Freedom_Cities" },
      { label: "Inspect WikiProject assessments", href: "https://en.wikipedia.org/wiki/Talk:Freedom_Cities" }
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
    demonstrates: ["Entity reconciliation", "Inclusion criteria", "Source traceability", "Structured-data quality", "Wikimedia and Wikidata: auditable source and metadata work"],
    limitations: "The directory verifies public participation information at the time of review. It does not independently audit the scientific quality, privacy practices or institutional claims of every listed initiative.",
    links: [
      { label: "Inspect the directory", href: "https://yourselftoscience.org" },
      { label: "Inspect public statistics", href: "https://yourselftoscience.org/stats" }
    ]
  },
  danielaBortoletto: {
    id: "daniela-bortoletto",
    category: "Scientific localization & source enrichment",
    title: "Daniela Bortoletto: developing an Italian particle-physics biography",
    context: "An English biography of the Italian particle physicist Daniela Bortoletto was translated and adapted for Italian readers, then expanded and prepared for publication through terminology, sourcing and structure work.",
    work: [
      "Created an 8,721-byte Italian draft through Content Translation on 30 August 2021.",
      "Reworked the article structure, corrected specialist terminology and added or repaired sources covering Oxford, CERN, detector development and the discoveries of the top quark and Higgs boson.",
      "Consulted the Italian Wikipedia physics and biography projects about notability, then moved the completed draft into mainspace on 26 February 2022.",
      "Continued post-publication corrections, categorization, authority control and link maintenance."
    ],
    demonstrates: ["Scientific localization", "Physics terminology", "Source enrichment", "Cross-language adaptation", "Iterative editorial quality"],
    limitations: "The article began as a translation and is now collaborative. The history verifies the attributed creation and later revisions; this is not original particle-physics research or an independently commissioned biography.",
    links: [
      { label: "Read my published contribution — 26 February 2022", href: "https://it.wikipedia.org/w/index.php?title=Daniela_Bortoletto&oldid=125925148" },
      { label: "Open the current collaborative article", href: "https://it.wikipedia.org/wiki/Daniela_Bortoletto" },
      { label: "Compare the English source version", href: "https://en.wikipedia.org/w/index.php?oldid=1031453192" },
      { label: "Inspect the initial sandbox import", href: "https://it.wikipedia.org/w/index.php?oldid=122759395" },
      { label: "Inspect the complete revision history", href: "https://it.wikipedia.org/w/index.php?title=Daniela_Bortoletto&action=history" }
    ]
  },
  shadowLibrary: {
    id: "shadow-library",
    category: "Technical-policy translation & terminology",
    title: "Biblioteca ombra: translating research-access infrastructure",
    context: "The English article on shadow libraries was adapted into Italian across scholarly communication, copyright, open access and distributed technical infrastructure.",
    work: [
      "Created a 9,713-byte Italian article through Content Translation on 26 July 2023 and moved the completed draft into mainspace the same day.",
      "Adapted terminology spanning academic publishing, copyright, open access, databases, BitTorrent, the dark web and IPFS.",
      "Removed unsupported source-language templates, repaired citations and links, added Italian sources and refined legal and technical terminology after publication.",
      "Maintained the article through subsequent terminology and source corrections."
    ],
    demonstrates: ["Technical localization", "Scholarly-communication research", "Legal-risk framing", "Terminology adaptation", "Citation repair"],
    limitations: "The article is a translated and collaborative encyclopedia entry, not original legal analysis. Its present maintenance notices and broad legal claims mean the attributable creation history is a stronger work sample than the current page alone.",
    links: [
      { label: "Read my revised contribution — 5 August 2023", href: "https://it.wikipedia.org/w/index.php?title=Biblioteca_ombra&oldid=134825889" },
      { label: "Open the current collaborative article", href: "https://it.wikipedia.org/wiki/Biblioteca_ombra" },
      { label: "Compare the English source version", href: "https://en.wikipedia.org/w/index.php?oldid=1163630620" },
      { label: "Inspect the initial sandbox import", href: "https://it.wikipedia.org/w/index.php?oldid=134644711" },
      { label: "Inspect the complete revision history", href: "https://it.wikipedia.org/w/index.php?title=Biblioteca_ombra&action=history" }
    ]
  },
  wikidataTerminology: {
    id: "wikidata-terminology",
    title: "Wikidata: bilingual terminology and descriptions",
    context: "My volunteer Wikidata work includes English and Italian terminology and descriptions for technical and biomedical records. These examples show the text contributed through my Digressivo account and the revisions that establish attribution.",
    examples: [
      {
        id: "wikidata-search-history",
        title: "Search history: technical terminology",
        sourceLabel: "Existing English description",
        sourceText: "log of past queries made by a user in an information system",
        addedLabel: "Italian description I added",
        addedText: "registro delle query di ricerca passate di un utente",
        contribution: "Added an Italian description, label and synonyms so the software concept can be identified and understood in Italian.",
        links: [
          { label: "Inspect my Italian-description edit", href: "https://www.wikidata.org/w/index.php?diff=2381824821" },
          { label: "Inspect my Italian-label edit", href: "https://www.wikidata.org/w/index.php?diff=2381821997" },
          { label: "Inspect the first Italian-synonym edit", href: "https://www.wikidata.org/w/index.php?diff=2381822000" },
          { label: "Inspect the additional Italian synonym", href: "https://www.wikidata.org/w/index.php?diff=2381822054" }
        ]
      },
      {
        id: "wikidata-syndromic-autism",
        title: "Syndromic autism: biomedical terminology",
        sourceLabel: "Existing English label",
        sourceText: "syndromic autism",
        addedLabel: "Italian label I added",
        addedText: "autismo sindromico",
        contribution: "Added the Italian name to a record with an existing English label, aligning the biomedical terminology across languages.",
        links: [
          { label: "Compare the record before and after my Italian-label edit", href: "https://www.wikidata.org/w/index.php?diff=2300124758&oldid=2300123595" }
        ]
      },
      {
        id: "wikidata-clinical-registry",
        title: "Clinical-trial volunteer registry: bilingual descriptions",
        sourceLabel: "English description I wrote",
        sourceText: "clinical trials volunteer registry by the Centro Ricerche Cliniche di Verona",
        addedLabel: "Italian description I added",
        addedText: "registro dei volontari per studi clinici del Centro Ricerche Cliniche di Verona",
        contribution: "Wrote corresponding English and Italian descriptions identifying the registry and its research centre.",
        links: [
          { label: "Inspect my Italian-description edit", href: "https://www.wikidata.org/w/index.php?diff=2470316295" },
          { label: "Read the preceding English-description revision", href: "https://www.wikidata.org/w/index.php?oldid=2470316190" }
        ]
      }
    ],
    limitations: "These are attributable volunteer terminology and metadata contributions to a collaborative public knowledge base. They complement the source-verification work in my Yourself to Science directory.",
    links: [
      { label: "Inspect my Wikidata contributions", href: "https://www.wikidata.org/wiki/Special:Contributions/Digressivo" }
    ]
  },
  wikidataBibliography: {
    id: "wikidata-bibliography",
    category: "Bibliographic research & structured metadata",
    title: "Wikidata: organising a book and its critical literature",
    context: "In July and August 2025, I organised bibliographic records around Against Intellectual Monopoly, linking the book to five reviews and critical discussions.",
    work: [
      "Created the book record and four review or discussion records, adding publication metadata, source URLs and identifiers including DOIs and an SSRN record.",
      "Added links from reviews to the book and from the book to sources discussing it, including an existing article record."
    ],
    demonstrates: ["Bibliographic research", "Source selection", "Publication metadata", "Identifier checking", "Structured-data relationships"],
    limitations: "These are attributable contributions to a collaborative bibliography. The linked material includes reviews and critical discussions with different publication statuses; current records may include later edits.",
    links: [
      { label: "Inspect my book and bibliography revision", href: "https://www.wikidata.org/w/index.php?oldid=2382147159" },
      { label: "Inspect my critical-review record", href: "https://www.wikidata.org/w/index.php?oldid=2381931712" },
      { label: "Inspect my link to an existing critical discussion", href: "https://www.wikidata.org/w/index.php?diff=2398091717" },
      { label: "Inspect my critical-analysis review relationship", href: "https://www.wikidata.org/w/index.php?diff=2398091105" }
    ]
  },
  pencil: {
    id: "pencil",
    category: "Additional provenance & rights example",
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
  INVESTIGATION_CASES.nebula,
  INVESTIGATION_CASES.freedomCities,
  INVESTIGATION_CASES.syndromicAutism,
  INVESTIGATION_CASES.directory,
  INVESTIGATION_CASES.giannino,
  INVESTIGATION_CASES.teodorani,
  INVESTIGATION_CASES.h5n1
];

INVESTIGATION_CASES.supporting = [
  INVESTIGATION_CASES.danielaBortoletto,
  INVESTIGATION_CASES.shadowLibrary,
  INVESTIGATION_CASES.wikidataBibliography,
  INVESTIGATION_CASES.pencil
];

INVESTIGATION_CASES.all = [
  ...INVESTIGATION_CASES.primary,
  ...INVESTIGATION_CASES.supporting
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = INVESTIGATION_CASES;
}
