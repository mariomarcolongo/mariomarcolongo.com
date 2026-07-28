import career from "./career-positioning.js";
import C from "./investigation-cases.js";

const { D, P } = career;

const centralAuth = "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo";
const integrityPage = "/integrity.html";

D.identity.buildVersion = "v2026.07.28";
D.summary = `Research, evidence and AI operations specialist with eight years of auditable public-source and structured-data work, including archival recovery of legally sensitive records, source-quality and content-governance review, biomedical evidence synthesis, paid scientific fact-checking, research-data provenance and adversarial testing of AI systems. ${D.summary}`;

const scientificPillar = D.pillars?.find((item) => item?.category === "SCIENTIFIC VERIFICATION");
if (scientificPillar) {
  scientificPillar.lead = "Eight years of auditable claim, source and structured-evidence work spanning scientific literature, archival public records and content-governance review.";
  scientificPillar.highlights = [
    { label: "Auditable Contributions", detail: "4,317 publicly inspectable Wikimedia contributions as of July 2026" },
    { label: "Selected Investigations", detail: "Archival legal chronology, source-quality review and biomedical taxonomy development" }
  ];
}

const masterWiki = D.experience?.find((item) => item?.role?.includes("Scientific Contributor"));
if (masterWiki) {
  masterWiki.links = {
    centralAuth,
    investigations: integrityPage,
    giannino: C.giannino.links[0].href,
    teodorani: C.teodorani.links[0].href,
    syndromicAutism: C.syndromicAutism.links[0].href
  };
  masterWiki.bullets = [
    "Completed 4,317 auditable contributions across Wikipedia, Wikidata and Wikimedia Commons as of July 2026.",
    "Recovered and reconciled archived sources for a legally sensitive RAI chronology; audited claim-to-source fit, bibliometrics and notability in a public content-governance process; and synthesized biomedical literature into a structured syndromic-autism taxonomy and prevalence table.",
    "Maintain inspectable revision histories and distinguish source-supported fact, allegation, inference, collaborative editorial outcome and unresolved uncertainty."
  ];
  masterWiki.resumeBullets = [
    "Completed 4,317 auditable public contributions involving archival source recovery, citation and provenance review, content-governance analysis, biomedical evidence synthesis and structured metadata."
  ];
}

if (P.aiSafety) {
  const sourceEvidence = P.aiSafety.evidence?.find((item) => item?.title?.includes("Auditable source-verification"));
  if (sourceEvidence) {
    sourceEvidence.body = "4,317 public Wikimedia contributions, including archival recovery of a legally sensitive public record, source-quality review in a contentious moderation process and structured biomedical evidence synthesis.";
    sourceEvidence.link = integrityPage;
  }
  if (P.aiSafety.evidence?.[2]) {
    P.aiSafety.evidence[2] = {
      title: "Investigation and evidence-bound judgment",
      body: "Attributed public cases demonstrate archive recovery, legal-stage chronology, source-quality auditing, scientific taxonomy design and explicit separation of evidence from inference.",
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
  P.integrity.summary = "Knowledge-integrity and open-source research specialist with eight years of auditable public work spanning archival OSINT, legally sensitive chronology, source-quality and bibliometric review, public content governance, biomedical evidence synthesis, health-information monitoring, structured metadata and adversarial AI evaluation. Public cases are linked to exact diffs or collaborative discussion records and described with explicit legal and evidentiary boundaries.";

  const wiki = P.integrity.experience?.find((item) => item?.organization?.includes("Wikipedia"));
  if (wiki) {
    wiki.links = [
      { label: "Investigation work samples", url: integrityPage },
      { label: "Oscar Giannino attributed diff", url: C.giannino.links[0].href },
      { label: "Massimo Teodorani deletion record", url: C.teodorani.links[0].href },
      { label: "Syndromic autism principal diff", url: C.syndromicAutism.links[0].href },
      { label: "Public contribution record", url: centralAuth }
    ];
    wiki.bullets = [
      "Recover and reconcile archived or unstable public records, construct dated legal and factual chronologies, and write with precise attribution across changing procedural stages.",
      "Audit claim-to-source fit, source independence, bibliometric evidence and policy relevance using tools and records including web archives, SCImago, Scopus, Web of Science and official academic-threshold documents.",
      "Synthesize peer-reviewed biomedical evidence into structured taxonomies and tables; maintain revision-level attribution and separate fact, allegation, inference, hypothesis and community outcome."
    ];
  }

  P.integrity.evidence = [
    {
      title: "Archival reconstruction of a legally sensitive record",
      body: "Recovered unstable and missing material through archives and URL reconstruction, then reconciled original reporting with criminal, appellate, cassation and civil stages using cautious attribution.",
      link: C.giannino.links[0].href
    },
    {
      title: "Source-quality and content-governance review",
      body: "Checked cited sources against article claims, searched bibliometric databases, compared evidence with official thresholds and documented caveats during a contentious public deletion process.",
      link: C.teodorani.links[0].href
    },
    {
      title: "Biomedical evidence synthesis and taxonomy",
      body: "Structured peer-reviewed evidence on syndromic autism into clinical and molecular categories plus a sortable table of causes, loci, prevalence estimates and associated characteristics.",
      link: C.syndromicAutism.links[0].href
    }
  ];
}

export default career;
