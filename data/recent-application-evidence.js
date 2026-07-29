const RECENT_APPLICATION_EVIDENCE = {
  "ai-safety": {
    evidence: {
      0: {
        title: "Research-integrity product operations",
        body: "Defined and verified cross-surface behavior for Notandia (formerly MDPI Filter) across browser targets and Zotero, with exact-evidence matching, false-positive avoidance, privacy controls and reproducible release checks.",
        link: "/mdpi-filter.html"
      }
    }
  },
  "research-quality": {
    evidence: {
      1: {
        title: "Cross-surface research-integrity tooling",
        body: "Notandia, the continuation of MDPI Filter, spans a multi-browser extension and Zotero plugin, using DOI, domain and identifier evidence while deliberately skipping ambiguous matches.",
        link: "/mdpi-filter.html"
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
