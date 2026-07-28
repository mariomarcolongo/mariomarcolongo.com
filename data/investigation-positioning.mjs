import career from "./career-positioning.js";
import C from "./investigation-cases.js";

const { D, P } = career;

const centralAuth = "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo";
const integrityPage = "/integrity.html";

D.identity.buildVersion = "v2026.07.28";
D.summary = `Research, evidence and AI operations specialist with eight years of auditable public-source and structured-data work, including consumer-genomics privacy research, corporate-source reconciliation, archival recovery of legally sensitive records, source-quality and content-governance review, biomedical evidence synthesis, paid scientific fact-checking, research-data provenance and adversarial testing of AI systems. ${D.summary}`;

const scientificPillar = D.pillars?.find((item) => item?.category === "SCIENTIFIC VERIFICATION");
if (scientificPillar) {
  scientificPillar.lead = "Eight years of auditable claim, source and structured-evidence work spanning scientific literature, consumer-genomics privacy, archival public records and content-governance review.";
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
    "Maintain inspectable revision histories and distinguish source-supported fact, company statement, allegation, hypothesis, inference, collaborative editorial outcome and unresolved uncertainty."
  ];
  masterWiki.resumeBullets = [
    "Completed 4,317 auditable public contributions involving consumer-genomics privacy research, archival source recovery, citation and provenance review, content-governance analysis, biomedical evidence synthesis and structured metadata."
  ];
}

if (P.aiSafety) {
  const sourceEvidence = P.aiSafety.evidence?.find((item) => item?.title?.includes("Auditable source-verification"));
  if (sourceEvidence) {
    sourceEvidence.body = "4,317 public Wikimedia contributions, including consumer-genomics privacy and corporate-source reconciliation, archival recovery of a legally sensitive public record, source-quality review in a contentious moderation process and structured biomedical evidence synthesis.";
    sourceEvidence.link = integrityPage;
  }
  if (P.aiSafety.evidence?.[2]) {
    P.aiSafety.evidence[2] = {
      title: "Investigation and evidence-bound judgment",
      body: "Attributed public cases demonstrate privacy-policy analysis, corporate-source reconciliation, archive recovery, legal-stage chronology, source-quality auditing, scientific taxonomy design and explicit separation of evidence from inference.",
      link: integrityPage
    };
  }
}

if (P.researchQuality) {
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
      "Perform citation checking, provenance review, cross-source reconciliation, taxonomy design and iterative correction across prose, structured data and scientific visualizations."
    ];
  }
  if (P.researchQuality.evidence?.[0]) {
    P.researchQuality.evidence[0] = {
      title: "Biomedical taxonomy and evidence synthesis",
      body: "Built an attributed, literature-sourced syndromic-autism taxonomy and comparative prevalence table; performed follow-up corrections before the material was moved into a dedicated article.",
      link: C.syndromicAutism.links[0].href
    };
  }
}

if (P.integrity) {
  P.integrity.summary = "Knowledge-integrity and open-source research specialist with eight years of auditable public work spanning consumer-genomics privacy, corporate-source reconciliation, archival OSINT, legally sensitive chronology, source-quality and bibliometric review, public content governance, biomedical evidence synthesis, health-information monitoring, structured metadata and adversarial AI evaluation. Public cases are linked to exact diffs or collaborative records and described with explicit legal and evidentiary boundaries.";

  const wiki = P.integrity.experience?.find((item) => item?.organization?.includes("Wikipedia"));
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
      "Synthesize peer-reviewed biomedical evidence into structured taxonomies and tables; maintain revision-level attribution and separate fact, company statement, allegation, inference, hypothesis and community outcome."
    ];
  }

  P.integrity.evidence = [
    {
      title: "Consumer-genomics privacy and corporate-source reconciliation",
      body: "Built and maintained a sourced Nebula Genomics privacy record across historical sequencing relationships, changing location statements, archived privacy policies, third-party-data questions, corporate restructuring and litigation coverage.",
      link: C.nebula.links[0].href
    },
    {
      title: "Archival recovery and content-governance judgment",
      body: "Recovered missing material for a legally sensitive chronology and separately audited source quality, bibliometrics and policy relevance during a contentious public moderation process, without using living-person names as promotional headings.",
      link: integrityPage
    },
    {
      title: "Biomedical evidence synthesis and taxonomy",
      body: "Structured peer-reviewed evidence on syndromic autism into clinical and molecular categories plus a sortable table of causes, loci, prevalence estimates and associated characteristics.",
      link: C.syndromicAutism.links[0].href
    }
  ];
}

export default career;
