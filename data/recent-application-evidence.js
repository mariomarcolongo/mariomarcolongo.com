const RECENT_APPLICATION_EVIDENCE = {
  "ai-safety": {
    evidence: {
      0: {
        title: "Research-integrity product operations",
        body: "Defined and verified cross-surface behavior for MDPI Filter across browser targets and Zotero, with exact-evidence matching, false-positive avoidance, privacy controls and reproducible release checks.",
        link: "https://github.com/orgs/mdpi-filter/repositories"
      }
    }
  },
  "research-quality": {
    evidence: {
      1: {
        title: "Cross-surface research-integrity tooling",
        body: "MDPI Filter now spans a multi-browser extension and Zotero plugin, using DOI, domain and identifier evidence while deliberately skipping ambiguous matches.",
        link: "https://github.com/orgs/mdpi-filter/repositories"
      },
      2: {
        title: "Reproducible ecological data explorer",
        body: "Built a public protein-supply-by-bodyweight explorer combining FAOSTAT, NCD-RisC and World Bank data with visible assumptions, benchmark caveats and shareable views.",
        link: "https://jnton.github.io/protein-by-bodyweight-country/"
      }
    }
  },
  "knowledge-integrity": {
    evidence: {
      0: {
        title: "Precision-first research-integrity tooling",
        body: "MDPI Filter applies exact DOI, domain and public-identifier evidence across browser and Zotero workflows, prioritizing false-positive avoidance, local checks and explicit network controls.",
        link: "https://github.com/orgs/mdpi-filter/repositories"
      }
    }
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = RECENT_APPLICATION_EVIDENCE;
}
