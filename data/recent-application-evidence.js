const RECENT_APPLICATION_EVIDENCE = {
  "ai-safety": {
    evidence: {
      0: {
        title: "Research-integrity product operations",
        body: "Created and operate Notandia (formerly MDPI Filter), a browser and Zotero research-integrity tool that lets researchers flag articles from selected publishers and check Crossref/Retraction Watch data for formal notices such as retractions, corrections and expressions of concern. I define the evidence rules, privacy safeguards, ambiguity handling, false-positive boundaries and release tests.",
        link: "/notandia.html"
      }
    }
  },
  "research-quality": {
    evidence: {
      1: {
        title: "Cross-surface research-integrity tooling",
        body: "Notandia helps researchers identify articles from selected publishers and check for formal post-publication notices in the browser, while its Zotero plugin currently focuses on precise MDPI item and reference detection. It uses DOI, domain, metadata, PMID/PMCID and structured PubMed Central evidence, and skips uncertain matches rather than guessing.",
        link: "/notandia.html"
      },
      2: {
        title: "Reproducible ecological data explorer",
        body: "Built a public protein-supply-by-bodyweight explorer combining FAOSTAT, NCD-RisC and World Bank data with visible assumptions, benchmark caveats and shareable views.",
        link: "https://jnton.github.io/protein-by-bodyweight-country/"
      }
    }
  },
  "knowledge-integrity": {
    evidence: {}
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = RECENT_APPLICATION_EVIDENCE;
}
