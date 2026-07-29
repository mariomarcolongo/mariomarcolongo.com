import career from "./multilingual-positioning.js";
import C from "./investigation-cases.js";

const { D, P } = career;

const centralAuth = "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo";
const integrityPage = "/integrity.html";

function replaceSkill(profile, currentTitle, nextTitle, detail) {
  const index = profile?.skills?.findIndex(([title]) => title === currentTitle);
  if (index >= 0) profile.skills[index] = [nextTitle, detail];
}

function cloneExperience(item) {
  if (!item) return null;
  return {
    ...item,
    links: Array.isArray(item.links) ? item.links.map((link) => ({ ...link })) : [],
    bullets: Array.isArray(item.bullets) ? [...item.bullets] : []
  };
}

D.identity.buildVersion = "v2026.07.29";
D.summary = `Research, evidence and AI operations specialist with eight years of auditable public-source and structured-data work, including consumer-genomics privacy research, corporate-source reconciliation, archival recovery of legally sensitive records, creation of a sourced English-language policy article, source-quality and content-governance review, biomedical evidence synthesis, multilingual scientific localization, paid scientific fact-checking, research-data provenance and adversarial testing of AI systems. ${D.summary}`;

const scientificPillar = D.pillars?.find((item) => item?.category === "SCIENTIFIC VERIFICATION");
if (scientificPillar) {
  scientificPillar.lead = "Eight years of auditable claim, source and structured-evidence work spanning scientific literature, multilingual content quality, policy research, consumer-genomics privacy, archival public records and content-governance review.";
  scientificPillar.highlights = [
    { label: "Auditable Contributions", detail: "4,317 publicly inspectable Wikimedia contributions as of July 2026" },
    { label: "Selected Investigations", detail: "Policy-article creation, consumer-genomics privacy, archival legal chronology, source-quality review and biomedical taxonomy development" }
  ];
}

const masterWiki = D.experience?.find((item) => item?.role?.includes("Scientific Contributor"));
if (masterWiki) {
  masterWiki.links = {
    centralAuth,
    investigations: integrityPage,
    consumerPrivacy: C.nebula.links[0].href,
    archivalRecord: C.giannino.links[0].href,
    sourceQualityReview: C.teodorani.links[0].href,
    syndromicAutism: C.syndromicAutism.links[0].href
  };
  masterWiki.bullets = [
    "Completed 4,317 auditable contributions across Wikipedia, Wikidata and Wikimedia Commons; researched, structured and created the 18,351-byte English Wikipedia article Freedom Cities from campaign, academic, legal, institutional and journalistic sources.",
    "Built a sourced consumer-genomics privacy record, recovered archived material for a legally sensitive chronology, audited claim-to-source fit and bibliometrics, and synthesized biomedical literature into a syndromic-autism taxonomy and prevalence table.",
    "Perform cross-language adaptation while preserving terminology, citations and edition-specific conventions; distinguish source-supported fact, company statement, allegation, hypothesis, inference, collaborative outcome and unresolved uncertainty."
  ];
  masterWiki.resumeBullets = [
    "Completed 4,317 auditable public contributions, including creation of an 18,351-byte English policy article and work involving consumer-genomics privacy research, archival source recovery, cross-language adaptation, citation and provenance review, content-governance analysis, biomedical evidence synthesis and structured metadata."
  ];
}

if (P.aiSafety) {
  P.aiSafety.summary = "AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #74 (top 6%) and 113 total breaks on 29 July 2026. Supporting work includes multilingual scientific content quality, creation of a sourced English-language policy article, consumer-genomics privacy and corporate-source reconciliation, archival source recovery, source-quality review and evidence-bound reporting across legally and scientifically sensitive records.";

  const sourceEvidence = P.aiSafety.evidence?.find((item) => item?.title?.includes("Auditable source-verification"));
  if (sourceEvidence) {
    sourceEvidence.body = "4,317 public Wikimedia contributions, including creation of an 18,351-byte English policy article, cross-language adaptation, consumer-genomics privacy and corporate-source reconciliation, archival recovery of a legally sensitive public record, source-quality review in a collaborative content-governance process and structured biomedical evidence synthesis.";
    sourceEvidence.link = integrityPage;
  }
  if (P.aiSafety.evidence?.[2]) {
    P.aiSafety.evidence[2] = {
      title: "Investigation and evidence-bound judgment",
      body: "Attributed public cases demonstrate contested-source policy synthesis, privacy-policy analysis, corporate-source reconciliation, archive recovery, legal-stage chronology, source-quality auditing, scientific taxonomy design and explicit separation of evidence from inference.",
      link: integrityPage
    };
  }
  replaceSkill(
    P.aiSafety,
    "Research verification",
    "OSINT and research verification",
    "Public-source and bibliographic research, claim decomposition, web-archive recovery, source-provenance analysis, corporate, policy and legal record reconciliation, cross-source corroboration and evidence-bound reporting"
  );
}

if (P.researchQuality) {
  P.researchQuality.summary = "Research-verification and data-quality specialist with eight years of auditable scientific, biomedical, policy, public-source and structured-data work. Experience spans multilingual scientific localization, creation of a sourced English-language policy article, consumer-genomics privacy, archived corporate and legal records, scientific literature, source-quality analysis, paid fact-checking and ownership of an open research-participation directory with documented verification and metadata workflows.";

  const wiki = P.researchQuality.experience?.find((item) => item?.organization?.includes("Wikipedia"));
  if (wiki) {
    wiki.links = [
      { label: "Public contribution record", url: centralAuth },
      { label: "Investigation work samples", url: integrityPage },
      { label: "Freedom Cities creation revision", url: C.freedomCities.links[0].href },
      { label: "Syndromic autism principal diff", url: C.syndromicAutism.links[0].href }
    ];
    wiki.bullets = [
      "Completed 4,317 auditable contributions across public knowledge and structured-data projects as of July 2026.",
      "Researched, structured and created an 18,351-byte English Wikipedia policy article by reconciling academic analysis, campaign material, draft legislation, think-tank plans and independent reporting; separately synthesized peer-reviewed biomedical literature into a structured syndromic-autism section and sortable comparative table.",
      "Perform citation checking, cross-language translation and adaptation, archival and provenance review, corporate and public-record reconciliation, policy-source analysis, taxonomy design and iterative correction across prose, structured data and scientific visualizations."
    ];
  }
  if (P.researchQuality.evidence?.[0]) {
    P.researchQuality.evidence[0] = {
      title: "Policy and biomedical evidence synthesis",
      body: "Created an attributed 18,351-byte English policy article from academic, legal, institutional and journalistic sources; separately built a literature-sourced syndromic-autism taxonomy and comparative prevalence table.",
      link: integrityPage
    };
  }
  replaceSkill(
    P.researchQuality,
    "Evidence verification",
    "Evidence verification and OSINT",
    "Primary-source and bibliographic research, web archives, public, policy and corporate records, evidence screening, claim decomposition, source-quality assessment, provenance analysis and cross-source corroboration"
  );
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = "Research, editorial and community-operations specialist with paid scientific content and English-to-Italian localization experience inside an established science-communication brand, plus long-running public-source and structured-data work. Work includes primary-literature verification, creation of a sourced 18,351-byte English policy article, archival recovery, claim review, public-health monitoring, sensitive research facilitation and public verification workflows; audience metrics describe the production environment, not a personal audience.";

  if (P.editorialCommunity.strengths?.[2]) {
    P.editorialCommunity.strengths[2] = {
      value: "4,317",
      label: "Auditable public contributions",
      detail: "Policy synthesis · privacy research · archives · source review"
    };
  }

  if (P.editorialCommunity.evidence?.[1]) {
    P.editorialCommunity.evidence[1] = {
      title: "Public-source investigation and archival verification",
      body: "Created an 18,351-byte English Wikipedia article from academic, legal and journalistic sources; separately maintained a consumer-genomics privacy record and recovered unavailable public documents.",
      link: integrityPage
    };
  }

  replaceSkill(
    P.editorialCommunity,
    "Editorial operations",
    "Editorial operations, localization and OSINT",
    "Evidence research, long-form explanatory writing, English-to-Italian scientific localization, archival source recovery, claim checking, source documentation, public and policy-record reconciliation, editorial feedback, content preparation and production troubleshooting"
  );
}

if (P.integrity) {
  P.integrity.title = "Investigations & Knowledge Integrity Analyst";
  P.integrity.subtitle = "OSINT · risk and evidence assessment · sensitive research · analytical reporting · data quality";
  P.integrity.summary = "Investigations and knowledge-integrity analyst with eight years of auditable public work across contested-source policy synthesis, consumer-genomics privacy, archival OSINT, source-quality review, biomedical evidence synthesis, health-information monitoring, structured metadata and adversarial AI evaluation. Public cases link to exact diffs and state explicit evidence boundaries.";
  P.integrity.fit = [
    "Investigations and content-integrity operations",
    "OSINT research and source-provenance analysis",
    "Trust & Safety-adjacent analysis, risk documentation and escalation support"
  ];

  if (P.integrity.strengths?.[2]) {
    P.integrity.strengths[2] = {
      value: "80",
      label: "Published content contributions",
      detail: "Scientific and health-information verification"
    };
  }
  if (P.integrity.strengths?.[3]) {
    P.integrity.strengths[3] = {
      value: "113",
      label: "Proving Ground breaks",
      detail: "#74 · top 6% · supporting adversarial evidence"
    };
  }

  const wiki = P.integrity.experience?.find((item) => item?.organization?.includes("Wikipedia"));
  const entropy = P.integrity.experience?.find((item) => item?.organization?.includes("Entropy for Life"));
  const gray = P.integrity.experience?.find((item) => item?.role?.includes("Model-Behavior"));
  const focusGroupSource = P.editorialCommunity?.experience?.find((item) => item?.role?.includes("Focus-Group"));
  const focusGroup = cloneExperience(focusGroupSource);

  if (wiki) {
    wiki.links = [
      { label: "Investigation work samples", url: integrityPage },
      { label: "Freedom Cities creation revision", url: C.freedomCities.links[0].href },
      { label: "Consumer-genomics privacy record", url: C.nebula.links[0].href },
      { label: "Archival-record reconstruction", url: C.giannino.links[0].href },
      { label: "Source-quality review record", url: C.teodorani.links[0].href },
      { label: "Syndromic autism principal diff", url: C.syndromicAutism.links[0].href },
      { label: "Public contribution record", url: centralAuth }
    ];
    wiki.bullets = [
      "Created the 18,351-byte English Wikipedia article Freedom Cities by reconciling academic analysis, campaign material, draft legislation, think-tank plans and independent reporting into a neutral account of a contested proposal.",
      "Maintain consumer-genomics privacy records and recover archived corporate and legal sources, distinguishing allegations from established facts and constructing dated chronologies.",
      "Audit claim-to-source fit and bibliometrics; synthesize biomedical evidence into structured taxonomies; preserve terminology, citations and attribution across languages."
    ];
  }

  if (entropy) {
    entropy.bullets = [
      "Investigate scientific and health claims across 80 documented published contributions using primary-literature searches, source-quality comparison and cross-source corroboration.",
      "Co-authored and maintain a rolling H5N1 epidemiological update, reconciling fast-changing reports, documenting source dates and separating confirmed developments from uncertainty.",
      "Localize predominantly English-language scientific evidence into clear Italian corrections and analytical summaries while preserving meaning, terminology, source context and uncertainty."
    ];
  }

  if (focusGroup) {
    focusGroup.role = "Sensitive Research Operations Contributor";
    focusGroup.bullets = [
      "Co-developed and facilitated approximately 4–5 recorded remote focus groups with autistic participants discussing sensitive sexuality and relationship topics.",
      "Supported recruitment, consent, participant privacy, pseudonymous naming, recording boundaries, structured prompts, accessibility options and two-person facilitation handoffs."
    ];
  }

  if (gray) {
    gray.bullets = [
      "Test chat, image, agentic tool-use and indirect prompt-injection scenarios; #74 on the Proving Ground (top 6%) with 113 platform-displayed breaks on 29 July 2026. Supporting analytical evidence, not emergency-response experience."
    ];
  }

  P.integrity.experience = [wiki, entropy, focusGroup, gray].filter(Boolean);
  P.integrity.evidence = [
    {
      title: "Contested-source policy synthesis and article creation",
      body: "Created an 18,351-byte English Wikipedia article on Freedom Cities from academic, campaign, legal, institutional and journalistic sources while separating proposal details, advocacy and criticism.",
      link: C.freedomCities.links[0].href
    },
    {
      title: "Privacy, corporate records and archival recovery",
      body: "Maintained a sourced consumer-genomics privacy record and recovered missing material for a separate legally sensitive chronology, preserving dates and evidence boundaries.",
      link: integrityPage
    },
    {
      title: "Biomedical evidence synthesis and taxonomy",
      body: "Structured peer-reviewed evidence on syndromic autism into clinical and molecular categories plus a sortable table of causes, loci, prevalence estimates and associated characteristics.",
      link: C.syndromicAutism.links[0].href
    }
  ];

  replaceSkill(
    P.integrity,
    "Trust & safety analysis",
    "Trust & Safety-adjacent analysis",
    "Ambiguous-case investigation, content-risk research, contested-source synthesis, evidence documentation, taxonomy development and escalation-ready reporting"
  );
}

export default career;
