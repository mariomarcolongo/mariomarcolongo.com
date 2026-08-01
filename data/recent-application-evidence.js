const RECENT_APPLICATION_EVIDENCE = {
  "ai-safety": {
    evidence: {
      0: {
        title: "Research-integrity product operations",
        body: "Created and operate Notandia (formerly MDPI Filter) across multi-browser and Zotero workflows. Current browser-source work combines configurable MDPI and Frontiers profiles with optional Crossref/Retraction Watch checks for formal update relationships; product testing emphasizes evidence provenance, privacy controls, ambiguity handling, false-positive avoidance and reproducible releases.",
        link: "/notandia.html"
      }
    }
  },
  "research-quality": {
    evidence: {
      1: {
        title: "Cross-surface research-integrity tooling",
        body: "Notandia combines configurable publisher context and explainable Crossref/Retraction Watch signals in the browser with precision-first MDPI item and reference detection in Zotero, using DOI, domain, metadata, PMID/PMCID and structured PMC evidence while deliberately skipping ambiguous matches.",
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
