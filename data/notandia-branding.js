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
  const project = D?.projects?.find((item) => item?.id === "mdpi-filter");
  if (project) {
    project.title = "Notandia — formerly MDPI Filter | Browser Extension & Zotero Plugin";
    project.oneLiner = "An independent open-source research tool for explainable publisher context, publication detection and post-publication integrity signals across browser and Zotero workflows.";
    project.description = "Created and maintain Notandia, the public-facing continuation of MDPI Filter. Defined product requirements, identifier- and domain-based matching behavior, false-positive boundaries and cross-surface workflows; test browser and Zotero releases, inspect API and implementation behavior, reproduce issues, guide AI-assisted changes, and manage documentation, deployment and maintenance. Existing store identities and compatibility-sensitive identifiers are retained so the same product lineage can continue receiving updates.";
    project.role = "Creator & AI-Assisted Technical Product Operator";
    project.tech = ["Product Requirements", "Functional Testing", "Manifest V3", "Zotero", "NCBI E-utilities", "Crossref", "Browser Extension Operations"];
    project.links = {
      canonical: NOTANDIA.canonicalPath,
      browserRepository: NOTANDIA.browserRepository,
      zoteroRepository: NOTANDIA.zoteroRepository,
      chromeStore: NOTANDIA.chromeStore,
      edgeStore: NOTANDIA.edgeStore,
      legacyCompatibility: NOTANDIA.legacyCompatibilityRepository,
      screenshots: project.links?.screenshots || []
    };
    project.highlights = [
      "Continuous Product Lineage: Originally released as MDPI Filter and rebranded as Notandia while retaining compatibility-sensitive identities",
      "Cross-Surface Coverage: Google, Google Scholar, PubMed, Europe PMC, publisher pages and Zotero workflows",
      "Technical Ownership: Requirements, behavior inspection, false-positive testing, release deployment and maintenance"
    ];
  }

  const hero = H?.heroMedia?.find((item) => item?.id === "mdpi-filter");
  if (hero) {
    hero.title = "Notandia";
    hero.href = NOTANDIA.canonicalPath;
    hero.alt = "Notandia, formerly MDPI Filter, identifying a publication in a literature-search workflow";
  }

  if (H?.mdpiFilter) {
    H.mdpiFilter.label = "Current product";
    H.mdpiFilter.title = "Notandia works across browser and Zotero research workflows.";
    H.mdpiFilter.body = "Originally released as MDPI Filter, Notandia preserves the existing publication-detection functionality and compatible store identities while expanding toward explainable publisher context and post-publication research-integrity signals.";
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
