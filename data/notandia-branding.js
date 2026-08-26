const NOTANDIA = Object.freeze({
  name: "Notandia",
  formerName: "MDPI Filter",
  canonicalPath: "/notandia",
  canonicalUrl: "https://mariomarcolongo.com/notandia",
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
    project.oneLiner = "An independent open-source browser and Zotero tool that helps researchers identify articles from publishers whose editorial and peer-review practices have attracted scrutiny and check for formal notices such as retractions, corrections and expressions of concern.";
    project.description = `Created and maintain Notandia, the public continuation and expansion of MDPI Filter. The browser extension helps users identify articles from publishers whose editorial and peer-review practices have attracted scrutiny—including MDPI and Frontiers—and choose how matching articles should appear, including context, badges, highlights, dimming or hiding. It also uses Crossref/Retraction Watch data to check for formal notices such as retractions, corrections, expressions of concern, withdrawals, duplicate-publication findings and reinstatements. I define product requirements and evidence hierarchies, test cross-browser and Zotero behavior, inspect API and implementation logic, reproduce failures, guide AI-assisted changes, and manage documentation, release verification and deployment. The Zotero plugin currently focuses on precise MDPI item and reference detection, including structured PubMed Central evidence and exact citation highlighting. Publisher-level context is controlled by the user and does not treat every journal or article as equivalent. Existing store identities and compatibility-sensitive identifiers are retained so the same product lineage can continue receiving updates. Current source repositories: ${NOTANDIA.browserRepository} and ${NOTANDIA.zoteroRepository}.`;
    project.role = "Creator & Product Lead";
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
      "Contested-Publisher Context: Built-in MDPI and Frontiers profiles plus validated custom domain and DOI-prefix profiles",
      "Formal Article Notices: Optional Crossref/Retraction Watch checks for retractions, corrections and other documented updates",
      "Precise Zotero Detection: Exact identifier and structured-reference evidence, ambiguity skipping and verified citation highlighting"
    ];
  }

  const hero = H?.heroMedia?.find((item) => item?.id === "mdpi-filter");
  if (hero) {
    hero.title = "Notandia";
    hero.href = NOTANDIA.canonicalPath;
    hero.alt = "Notandia, formerly MDPI Filter, identifying a publisher that has attracted editorial scrutiny and showing post-publication information in a literature-search workflow";
  }

  if (H?.mdpiFilter) {
    H.mdpiFilter.label = "Current product";
    H.mdpiFilter.title = "Notandia works across browser and Zotero research workflows.";
    H.mdpiFilter.body = "Notandia identifies articles from scrutinized publishers such as MDPI and Frontiers, checks Crossref/Retraction Watch for formal notices, and adds precise MDPI reference detection in Zotero. Publisher context is not an article-quality verdict.";
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
