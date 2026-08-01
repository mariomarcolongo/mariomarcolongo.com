const NOTANDIA = Object.freeze({
  name: "Notandia",
  formerName: "MDPI Filter",
  canonicalPath: "/notandia.html",
  canonicalUrl: "https://mariomarcolongo.com/notandia.html",
  browserRepository: "https://github.com/notandia/browser-extension",
  zoteroRepository: "https://github.com/notandia/zotero-plugin",
  legacyOrganization: "https://github.com/mdpi-filter",
  legacyCompatibilityRepository: "https://github.com/mdpi-filter/moved-to-notandia",
  retiredOrganizationUrl: "https://github.com/orgs/mdpi-filter/repositories",
  chromeStore: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
  edgeStore: "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi"
});

function rewriteLegacyLinks(value) {
  if (typeof value === "string") {
    return value
      .replaceAll(NOTANDIA.retiredOrganizationUrl, NOTANDIA.canonicalPath)
      .replaceAll("/mdpi-filter.html", NOTANDIA.canonicalPath);
  }
  if (Array.isArray(value)) return value.map(rewriteLegacyLinks);
  if (value && typeof value === "object") {
    for (const [key, nested] of Object.entries(value)) value[key] = rewriteLegacyLinks(nested);
  }
  return value;
}

function applyNotandiaBranding({ D, H, P } = {}) {
  if (D?.identity) D.identity.notandiaUrl = NOTANDIA.canonicalUrl;
  if (D?.summary && !D.summary.includes("Notandia")) {
    D.summary += " Current open-source product work includes Notandia (formerly MDPI Filter), a continuing browser and Zotero research-integrity tool.";
  }

  const project = D?.projects?.find((item) => item?.id === "mdpi-filter");
  if (project) {
    project.title = "Notandia — formerly MDPI Filter | Browser Extension & Zotero Plugin";
    project.oneLiner = "An independent open-source research-integrity tool combining configurable publisher context, formal post-publication signals and precision-first reference detection across browser and Zotero workflows.";
    project.description = `Created and maintain Notandia, the public continuation and expansion of MDPI Filter. Define product requirements and evidence hierarchies, test cross-browser and Zotero behavior, inspect API and implementation logic, reproduce failures, guide AI-assisted changes, and manage documentation, release verification and deployment. Current browser-source capabilities include user-controlled MDPI and Frontiers profiles, validated custom domain and DOI-prefix profiles, and optional Crossref/Retraction Watch checks for direct and reverse formal update relationships. The Zotero plugin applies precision-first MDPI item and reference detection, including structured PMC evidence and exact citation highlighting. Publisher matches are contextual signals, not quality scores. Existing store identities and compatibility-sensitive identifiers are retained so the same product lineage can continue receiving updates. Current source repositories: ${NOTANDIA.browserRepository} and ${NOTANDIA.zoteroRepository}.`;
    project.role = "Creator & AI-Assisted Technical Product Operator";
    project.tech = [
      "Product Requirements",
      "Functional Testing",
      "Publisher Watchlists",
      "Crossref/Retraction Watch",
      "Zotero",
      "NCBI/Europe PMC",
      "Multi-Browser Release Operations"
    ];
    project.links = {
      website: NOTANDIA.canonicalUrl,
      github: NOTANDIA.browserRepository,
      canonical: NOTANDIA.canonicalUrl,
      browserRepository: NOTANDIA.browserRepository,
      zoteroRepository: NOTANDIA.zoteroRepository,
      chromeStore: NOTANDIA.chromeStore,
      edgeStore: NOTANDIA.edgeStore,
      legacyCompatibility: NOTANDIA.legacyCompatibilityRepository,
      screenshots: project.links?.screenshots || []
    };
    project.highlights = [
      "Configurable Publisher Context: Built-in MDPI and Frontiers profiles plus validated custom domain and DOI-prefix profiles",
      "Explainable Integrity Signals: Optional direct and reverse Crossref/Retraction Watch update checks with provenance and chronology",
      "Precision-First Zotero Workflows: Exact identifier and structured-reference evidence, ambiguity skipping and verified citation highlighting"
    ];
  }

  const hero = H?.heroMedia?.find((item) => item?.id === "mdpi-filter");
  if (hero) {
    hero.title = "Notandia";
    hero.href = NOTANDIA.canonicalPath;
    hero.alt = "Notandia, formerly MDPI Filter, adding publisher and post-publication context to a literature-search workflow";
  }

  if (H?.mdpiFilter) {
    H.mdpiFilter.label = "Current product";
    H.mdpiFilter.title = "Notandia works across browser and Zotero research workflows.";
    H.mdpiFilter.body = "Originally released as MDPI Filter, Notandia now combines configurable publisher context with explainable post-publication integrity checks. Current browser-source work includes user-controlled MDPI and Frontiers profiles and optional Crossref/Retraction Watch checks for formal update relationships; the Zotero plugin applies precision-first MDPI item and reference detection.";
    H.mdpiFilter.href = NOTANDIA.canonicalPath;
    H.mdpiFilter.linkLabel = "Open the Notandia project record";
    H.mdpiFilter.images = (H.mdpiFilter.images || []).map((image) => ({
      ...image,
      alt: String(image.alt || "").replaceAll("MDPI Filter", "Notandia (formerly MDPI Filter)")
    }));
  }

  rewriteLegacyLinks(P);
  return { D, H, P, NOTANDIA };
}

module.exports = { NOTANDIA, applyNotandiaBranding, rewriteLegacyLinks };
