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
D.summary = `Research, evidence and AI operations specialist with eight years of auditable public-source and structured-data work, including consumer-genomics privacy research, corporate-source reconciliation, archival recovery of legally sensitive records, source-quality and content-governance review, biomedical evidence synthesis, multilingual scientific localization, paid scientific fact-checking, research-data provenance and adversarial testing of AI systems. ${D.summary}`;

const scientificPillar = D.pillars?.find((item) => item?.category === "SCIENTIFIC VERIFICATION");
if (scientificPillar) {
  scientificPillar.lead = "Eight years of auditable claim, source and structured-evidence work spanning scientific literature, multilingual content quality, consumer-genomics privacy, archival public records and content-governance review.";
  scientificPillar.highlights = [
    { label: "Auditable Contributions", detail: "4,317 publicly inspectable Wikimedia contributions as of July 2026" },
    { label: "Selected Investigations", detail: "Consumer-genomics privacy, archival legal chronology, source-quality review and biomedical taxonomy development" }
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
    "Completed 4,317 auditable contributions across Wikipedia, Wikidata and Wikimedia Commons as of July 2026.",
    "Built and maintained a sourced consumer-genomics privacy record across changing corporate, policy and litigation evidence; recovered archived sources for a separate legally sensitive chronology; audited claim-to-source fit and bibliometrics in a public content-governance process; and synthesized biomedical literature into a structured syndromic-autism taxonomy and prevalence table.",
    "Perform cross-language translation and adaptation across English and Italian Wikipedia while preserving terminology, citations and edition-specific conventions; maintain inspectable revision histories and distinguish source-supported fact, company statement, allegation, hypothesis, inference, collaborative editorial outcome and unresolved uncertainty."
  ];
  masterWiki.resumeBullets = [
    "Completed 4,317 auditable public contributions involving consumer-genomics privacy research, archival source recovery, cross-language adaptation, citation and provenance review, content-governance analysis, biomedical evidence synthesis and structured metadata."
  ];
}

if (P.aiSafety) {
  P.aiSafety.summary = "AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #75 (top 6%) and 110 total breaks on 26 July 2026. Supporting work includes multilingual scientific content quality, consumer-genomics privacy and corporate-source reconciliation, archival source recovery, source-quality review and evidence-bound reporting across legally and scientifically sensitive records.";

  const sourceEvidence = P.aiSafety.evidence?.find((item) => item?.title?.includes("Auditable source-verification"));
  if (sourceEvidence) {
    sourceEvidence.body = "4,317 public Wikimedia contributions, including cross-language adaptation, consumer-genomics privacy and corporate-source reconciliation, archival recovery of a legally sensitive public record, source-quality review in a collaborative content-governance process and structured biomedical evidence synthesis.";
    sourceEvidence.link = integrityPage;
  }
  if (P.aiSafety.evidence?.[2]) {
    P.aiSafety.evidence[2] = {
      title: "Investigation and evidence-bound judgment",
      body: "Attributed public cases demonstrate privacy-policy analysis, corporate-source reconciliation, archive recovery, legal-stage chronology, source-quality auditing, scientific taxonomy design and explicit separation of evidence from inference.",
      link: integrityPage
    };
  }
  replaceSkill(
    P.aiSafety,
    "Research verification",
    "OSINT and research verification",
    "Public-source and bibliographic research, claim decomposition, web-archive recovery, source-provenance analysis, corporate and legal record reconciliation, cross-source corroboration and evidence-bound reporting"
  );
}

if (P.researchQuality) {
  P.researchQuality.summary = "Research-verification and data-quality specialist with eight years of auditable scientific, biomedical, public-source and structured-data work. Experience spans multilingual scientific localization, consumer-genomics privacy, archived corporate and legal records, scientific literature, source-quality analysis, paid fact-checking and ownership of an open research-participation directory with documented verification and metadata workflows.";

  const wiki = P.researchQuality.experience?.find((item) => item?.organization?.includes("Wikipedia"));
  if (wiki) {
    wiki.links = [
      { label: "Public contribution record", url: centralAuth },
      { label: "Investigation work samples", url: integrityPage },
      { label: "Syndromic autism principal diff", url: C.syndromicAutism.links[0].href }
    ];
    wiki.bullets = [
      "Completed 4,317 auditable contributions across public knowledge and structured-data projects as of July 2026.",
      "Synthesized peer-reviewed biomedical literature into a structured syndromic-autism section and sortable table connecting conditions, genetic causes, loci, prevalence estimates, classification and clinical characteristics.",
      "Perform citation checking, cross-language translation and adaptation, archival and provenance review, corporate and public-record reconciliation, taxonomy design and iterative correction across prose, structured data and scientific visualizations."
    ];
  }
  if (P.researchQuality.evidence?.[0]) {
    P.researchQuality.evidence[0] = {
      title: "Biomedical taxonomy and evidence synthesis",
      body: "Built an attributed, literature-sourced syndromic-autism taxonomy and comparative prevalence table; performed follow-up corrections before the material was moved into a dedicated article.",
      link: C.syndromicAutism.links[0].href
    };
  }
  replaceSkill(
    P.researchQuality,
    "Evidence verification",
    "Evidence verification and OSINT",
    "Primary-source and bibliographic research, web archives, public and corporate records, evidence screening, claim decomposition, source-quality assessment, provenance analysis and cross-source corroboration"
  );
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = "Research, editorial and community-operations specialist with paid scientific content and English-to-Italian localization experience inside an established science-communication brand with 267K YouTube subscribers and 36.5M channel views, plus long-running public-source and structured-data work, professional writing and web operations. Work includes primary-literature verification, source-faithful localization, archival source recovery, claim-to-source review, public-health monitoring, sensitive research facilitation and end-to-end ownership of public verification workflows; audience metrics describe the production environment, not a personal audience.";

  if (P.editorialCommunity.strengths?.[2]) {
    P.editorialCommunity.strengths[2] = {
      value: "4,317",
      label: "Auditable public contributions",
      detail: "Privacy research · archives · source-quality review"
    };
  }

  if (P.editorialCommunity.evidence?.[1]) {
    P.editorialCommunity.evidence[1] = {
      title: "Public-source investigation and archival verification",
      body: "Built and maintained a consumer-genomics privacy record, recovered unavailable documents through web archives and URL reconstruction, and audited claim-to-source fit and bibliometric evidence in collaborative public content governance.",
      link: integrityPage
    };
  }

  replaceSkill(
    P.editorialCommunity,
    "Editorial operations",
    "Editorial operations, localization and OSINT",
    "Evidence research, English-to-Italian scientific localization, archival source recovery, claim checking, source documentation, public-record reconciliation, editorial feedback, content preparation and production troubleshooting"
  );
}

if (P.integrity) {
  P.integrity.title = "Investigations & Knowledge Integrity Analyst";
  P.integrity.subtitle = "OSINT · risk and evidence assessment · sensitive research · analytical reporting · data quality";
  P.integrity.summary = "Investigations and knowledge-integrity analyst with eight years of auditable public work spanning consumer-genomics privacy, corporate-source reconciliation, archival OSINT, legally sensitive chronology, multilingual content quality, source-quality and bibliometric review, public content governance, biomedical evidence synthesis, health-information monitoring, structured metadata and adversarial AI evaluation. Public cases are linked to exact diffs or collaborative records and described with explicit legal and evidentiary boundaries.";
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
      value: "110",
      label: "Proving Ground breaks",
      detail: "#75 · top 6% · supporting adversarial evidence"
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
      { label: "Consumer-genomics privacy record", url: C.nebula.links[0].href },
      { label: "Archival-record reconstruction", url: C.giannino.links[0].href },
      { label: "Source-quality review record", url: C.teodorani.links[0].href },
      { label: "Syndromic autism principal diff", url: C.syndromicAutism.links[0].href },
      { label: "Public contribution record", url: centralAuth }
    ];
    wiki.bullets = [
      "Build and maintain sourced consumer-genomics privacy records across changing company statements, archived policies, corporate filings, peer-reviewed risk analysis and litigation coverage while distinguishing allegations from established facts.",
      "Recover and reconcile archived or unstable public records, construct dated legal and factual chronologies, and audit claim-to-source fit, source independence, bibliometric evidence and policy relevance using web archives, SCImago, Scopus, Web of Science and official threshold documents.",
      "Synthesize peer-reviewed biomedical evidence into structured taxonomies and tables; perform cross-language translation and adaptation while preserving terminology, citations and revision-level attribution; separate fact, company statement, allegation, inference, hypothesis and community outcome."
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
      "Test chat, image, agentic tool-use and indirect prompt-injection scenarios; #75 on the Proving Ground (top 6%) with 110 platform-displayed breaks on 26 July 2026. Supporting analytical evidence, not emergency-response experience."
    ];
  }

  P.integrity.experience = [wiki, entropy, focusGroup, gray].filter(Boolean);
  P.integrity.evidence = [
    {
      title: "Consumer-genomics privacy and corporate-source reconciliation",
      body: "Built and maintained a sourced Nebula Genomics privacy record across historical sequencing relationships, changing location statements, archived privacy policies, third-party-data questions, corporate restructuring and litigation coverage.",
      link: C.nebula.links[0].href
    },
    {
      title: "Archival recovery and content-governance judgment",
      body: "Recovered missing material for a legally sensitive chronology and separately audited source quality, bibliometrics and policy relevance during a collaborative public content-governance process, without using living-person names as promotional headings.",
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
    "Ambiguous-case investigation, content-risk research, evidence documentation, taxonomy development and escalation-ready reporting"
  );
}

export default career;
