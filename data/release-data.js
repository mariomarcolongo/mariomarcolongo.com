/*
 * Canonical release layer for the application-ready portfolio.
 *
 * The human-centered portfolio branch predates the latest dated evidence.
 * This module updates the shared in-memory records before Astro and the
 * dossier generators consume them, keeping the website, targeted CVs,
 * master CV and machine-readable outputs aligned.
 */
const D = require("./source.js");
const H = require("./portfolio-human.js");
const P = require("./application-profiles.js");

const GS = Object.freeze({
  asOf: "29 July 2026",
  rank: 74,
  percentile: "Top 6%",
  totalBreaks: 113,
  displayedAreaTotal: 112,
  arenaRank: 365,
  arenaUniqueBreaks: 28,
  arenaPoints: 1120,
  arenaSubmissions: 255,
  evidencePath: "/evidence/gray-swan-2026-07-29/",
  profileUrl: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf"
});

const ENTROPY = Object.freeze({
  totalProjects: "59+",
  videoProjects: "55+",
  articles: 4,
  videosUrl: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
  articlesUrl: "https://entropyforlife.it/autore/mario-marcolongo/",
  thumbnailsUrl: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks",
  websiteUrl: "https://entropyforlife.it",
  inventoryImage: "/media/work/entropy-work-inventory.svg"
});

function findById(items, id) {
  return Array.isArray(items) ? items.find((item) => item?.id === id) : undefined;
}

function findExperience(items, predicate) {
  return Array.isArray(items) ? items.find(predicate) : undefined;
}

function replaceStrength(profile, index, value, label, detail) {
  if (profile?.strengths?.[index]) profile.strengths[index] = { value, label, detail };
}

function updateEntropyExperience(item) {
  if (!item) return;
  item.role = "Scientific Research, Fact-Checking & Website Operations Contractor";
  item.links = {
    website: ENTROPY.websiteUrl,
    playlist: ENTROPY.videosUrl,
    authorPage: ENTROPY.articlesUrl,
    thumbnails: ENTROPY.thumbnailsUrl
  };
  item.bullets = [
    `Delivered ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles.`,
    "Primary-literature research and scientific fact-checking were recurring responsibilities; depending on the assignment, also contributed to script development, data visualization, slide and on-screen assets, and selected thumbnail production or collaboration.",
    "Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO.",
    "Formally acknowledged in Giacomo Moro Mauretto’s Mondadori book Italiani veri for scientific-literature research and error detection."
  ];
  item.resumeBullets = [
    `Delivered ${ENTROPY.totalProjects} published projects—${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles—through primary-literature research, fact-checking and assignment-specific script, visualization, slide and thumbnail work.`,
    "Manage WordPress, hosting, DNS/SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri."
  ];
}

/* Shared master record */
D.identity.buildVersion = "v2026.07.29";
D.identity.grayswanArchiveUrl = GS.evidencePath;
D.identity.evaluationAsOf = GS.asOf;
D.identity.role =
  `Data and knowledge-quality analyst. Gray Swan Proving Ground snapshot: #${GS.rank} (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed total breaks on ${GS.asOf}.`;
D.summary =
  `Data and knowledge-quality analyst with eight years of auditable public-source and structured-data work, paid scientific fact-checking and editorial production, community-facing research facilitation, leadership of an open research-participation directory and sustained adversarial testing of AI systems. On ${GS.asOf}, the Gray Swan Proving Ground profile displayed rank #${GS.rank} (${GS.percentile.toLowerCase()}) and ${GS.totalBreaks} total breaks. Entropy for Life work covers ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles. Technical implementation is described accurately as AI-assisted delivery rather than independent software development.`;

const aiPillar = D.pillars?.[0];
if (aiPillar) {
  aiPillar.desc =
    `The dated Gray Swan profile snapshot shows #${GS.rank} on the Proving Ground (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed total breaks on ${GS.asOf}. The four visible area counters sum to ${GS.displayedAreaTotal}; both values are reported without inferring the platform’s aggregation rules.`;
  aiPillar.highlights = [
    { label: "Dated Proving Ground Result", detail: `#${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.totalBreaks} total breaks · ${GS.asOf}` },
    { label: "Testing Surfaces", detail: "Chat, multimodal/image, agentic tool-use and indirect prompt injection" }
  ];
}
const sciencePillar = D.pillars?.find((item) => item?.category === "SCIENTIFIC VERIFICATION");
if (sciencePillar) {
  sciencePillar.desc =
    `Completed 4,317 auditable Wikimedia contributions and evidence-screening training. For Entropy for Life, delivered ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles, with recurring primary-literature research and fact-checking plus assignment-specific script, visualization, slide and thumbnail work.`;
  sciencePillar.highlights = [
    { label: "Auditable Contributions", detail: "4,317 publicly inspectable Wikimedia contributions as of July 2026" },
    { label: "Paid Scientific Editorial Work", detail: `${ENTROPY.totalProjects} projects: ${ENTROPY.videoProjects} YouTube projects and ${ENTROPY.articles} articles` }
  ];
}

if (Array.isArray(D.stats)) {
  D.stats[0] = { value: String(GS.totalBreaks), label: "Platform-Displayed Proving Ground Breaks", detail: `#${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.asOf}` };
  D.stats[1] = { value: String(GS.arenaSubmissions), label: "Arena Submissions Shown", detail: `${GS.arenaUniqueBreaks} global unique breaks · ${GS.arenaPoints.toLocaleString("en-US")} points · Arena rank #${GS.arenaRank}` };
  D.stats[3] = { value: `${ENTROPY.videoProjects} YouTube & ${ENTROPY.articles} Articles`, label: "Paid Scientific Editorial Production", detail: `${ENTROPY.totalProjects} documented published projects for Entropy for Life` };
}

const aiProject = findById(D.projects, "ai-red-teaming");
if (aiProject) {
  aiProject.oneLiner =
    "Dated public record of self-directed model-behavior evaluation across chat, multimodal, agentic tool-use and indirect prompt-injection challenges.";
  aiProject.description =
    `Self-directed model-behavior evaluation conducted through the Gray Swan Proving Ground. The ${GS.asOf} profile snapshot displays rank #${GS.rank}, ${GS.percentile.toLowerCase()}, and ${GS.totalBreaks} total breaks. The same snapshot shows ${GS.arenaSubmissions} Arena submissions, ${GS.arenaUniqueBreaks} global unique breaks, ${GS.arenaPoints.toLocaleString("en-US")} points and Arena rank #${GS.arenaRank}. Aggregate counts are presented with explicit evidence limitations; complete prompts, outputs, model versions and adjudication materials are not reproduced.`;
  aiProject.links = { caseStudy: "/security", profile: GS.profileUrl, evidence: GS.evidencePath };
  aiProject.highlights = [
    `Current Snapshot: #${GS.rank}, ${GS.percentile.toLowerCase()} and ${GS.totalBreaks} platform-displayed Proving Ground breaks`,
    `Arena Activity: ${GS.arenaSubmissions} submissions, ${GS.arenaUniqueBreaks} global unique breaks and ${GS.arenaPoints.toLocaleString("en-US")} points`,
    `Evidence Boundary: The visible area counters sum to ${GS.displayedAreaTotal}; the platform displays ${GS.totalBreaks} total breaks`
  ];
}

const entropyProject = findById(D.projects, "entropy-for-life");
if (entropyProject) {
  entropyProject.title = "Entropy for Life — Scientific Editorial Production & Web Operations";
  entropyProject.oneLiner =
    `${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles.`;
  entropyProject.description =
    `Conduct primary-literature research and scientific fact-checking across ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles. Most video assignments combine research, fact-checking and script development; selected assignments focus on fact-checking and/or visualization. Depending on the project, also create data visualizations, presentation slides, on-screen assets and selected thumbnails independently or in collaboration with video editor Alessandro Lanzoni. Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO.`;
  entropyProject.role = "Scientific Research, Fact-Checking & Website Operations Contractor";
  entropyProject.tech = [
    "Primary-Source Research", "Scientific Fact-Checking", "Script Development",
    "Data Visualization", "Presentation Assets", "Thumbnail Production",
    "WordPress", "DNS/SSL", "Technical SEO"
  ];
  entropyProject.links = {
    videos: ENTROPY.videosUrl,
    articles: ENTROPY.articlesUrl,
    thumbnails: ENTROPY.thumbnailsUrl,
    website: ENTROPY.websiteUrl
  };
  entropyProject.highlights = [
    `${ENTROPY.totalProjects} Documented Published Projects: ${ENTROPY.videoProjects} YouTube projects and ${ENTROPY.articles} articles`,
    "Recurring Scope: Primary-literature research and scientific fact-checking",
    "Assignment-Specific Scope: Scripts, visualizations, slides, on-screen assets and selected thumbnails"
  ];
}

Object.assign(D.redTeamActivity, {
  asOf: GS.asOf,
  rankBand: `#${GS.rank} · ${GS.percentile}`,
  leaderboardRank: GS.rank,
  confirmedBreaks: GS.totalBreaks,
  profileReportedBreaks: GS.totalBreaks,
  displayedAreaBreaks: GS.displayedAreaTotal,
  submissions: GS.arenaSubmissions,
  totalArenaSubmissions: GS.arenaSubmissions,
  arenaRank: GS.arenaRank,
  arenaUniqueBreaks: GS.arenaUniqueBreaks,
  arenaPoints: GS.arenaPoints,
  areas: [
    { name: "Chat", breaks: 39, available: 552, percent: 7 },
    { name: "Image", breaks: 32, available: 387, percent: 8 },
    { name: "Agent", breaks: 28, available: 593, percent: 5 },
    { name: "Indirect", breaks: 13, available: 547, percent: 2 }
  ],
  historicalWaveSnapshot: {
    asOf: "24 July 2026",
    reconciledBreaks: 105,
    profileAggregate: 106,
    provingGroundSubmissions: 232,
    totalArenaSubmissions: 242
  }
});

const grayExperience = findExperience(D.experience, (item) => item?.role?.includes("Model-Behavior"));
if (grayExperience) {
  grayExperience.org = "Independent practice · Gray Swan Proving Ground participant";
  grayExperience.period = "Jul 2026 — Present";
  grayExperience.links = { caseStudy: "/security", profile: GS.profileUrl, evidence: GS.evidencePath };
  grayExperience.bullets = [
    "Conduct self-directed testing of LLM instruction handling, policy boundaries and edge cases across chat, image, agentic tool-use and indirect prompt-injection settings.",
    `Reached #${GS.rank} on the Proving Ground (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed total breaks in the ${GS.asOf} snapshot; the Arena profile also displayed ${GS.arenaUniqueBreaks} global unique breaks, ${GS.arenaPoints.toLocaleString("en-US")} points and ${GS.arenaSubmissions} submissions.`,
    `Report the visible ${GS.displayedAreaTotal}/${GS.totalBreaks} area-total discrepancy explicitly and separate platform-reported outcomes from independent verification, security certification or model-wide conclusions.`
  ];
  grayExperience.resumeBullets = [
    "Conduct self-directed adversarial testing across chat, multimodal, agentic tool-use and indirect prompt-injection settings.",
    `Reached #${GS.rank} (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed Proving Ground breaks in the ${GS.asOf} snapshot.`
  ];
}
updateEntropyExperience(findExperience(D.experience, (item) => item?.org?.includes("Entropy for Life")));

/* Human-facing homepage */
H.proofMoments[0] = {
  value: String(GS.totalBreaks),
  label: "platform-displayed Proving Ground breaks",
  detail: `#${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.asOf}`,
  href: "/security"
};
H.proofMoments[1] = {
  value: ENTROPY.totalProjects,
  label: "documented published projects",
  detail: `${ENTROPY.videoProjects} YouTube video projects · ${ENTROPY.articles} articles`,
  href: ENTROPY.videosUrl
};

const grayHero = findById(H.heroMedia, "model-record");
if (grayHero) {
  grayHero.title = `#${GS.rank} · ${GS.percentile} · ${GS.totalBreaks} breaks`;
  grayHero.image = "/media/work/gray-swan-profile-2026-07-29-1600.webp";
  grayHero.imageSet = "/media/work/gray-swan-profile-2026-07-29-800.webp 800w, /media/work/gray-swan-profile-2026-07-29-1600.webp 1600w";
  grayHero.alt =
    `Dated Gray Swan evaluation summary showing Proving Ground rank ${GS.rank}, ${GS.percentile.toLowerCase()}, ${GS.totalBreaks} total breaks and separate Arena activity metrics`;
  grayHero.href = "/security";
}
const entropyHero = findById(H.heroMedia, "entropy");
if (entropyHero) {
  entropyHero.title = `${ENTROPY.totalProjects} published projects`;
  entropyHero.image = ENTROPY.inventoryImage;
  entropyHero.alt =
    `Entropy for Life work inventory showing ${ENTROPY.videoProjects} YouTube projects and ${ENTROPY.articles} co-authored articles`;
  entropyHero.href = ENTROPY.videosUrl;
}

const modelCase = findById(H.cases, "model-behavior");
if (modelCase) {
  modelCase.lead =
    `Across four public evaluation surfaces, I test chat, image, agent and indirect prompt-injection behavior and preserve dated evidence of the platform-reported result.`;
  modelCase.result =
    `#${GS.rank} on the Proving Ground, ${GS.percentile.toLowerCase()}, with ${GS.totalBreaks} platform-displayed total breaks on ${GS.asOf}; the Arena profile displayed ${GS.arenaSubmissions} submissions, ${GS.arenaUniqueBreaks} global unique breaks and ${GS.arenaPoints.toLocaleString("en-US")} points.`;
  modelCase.boundary =
    `The four visible area counters sum to ${GS.displayedAreaTotal} while the profile displays ${GS.totalBreaks} total breaks. Both are reported without inferring the platform’s internal aggregation. This supports evaluation and adversarial-QA applications, not penetration-testing or senior red-team engineering claims.`;
  modelCase.href = "/security";
  modelCase.image = "/media/work/gray-swan-profile-2026-07-29-1600.webp";
  modelCase.imageSet = "/media/work/gray-swan-profile-2026-07-29-800.webp 800w, /media/work/gray-swan-profile-2026-07-29-1600.webp 1600w";
  modelCase.alt =
    `Dated Gray Swan evaluation summary showing Proving Ground rank ${GS.rank}, ${GS.percentile.toLowerCase()}, ${GS.totalBreaks} total breaks and separate Arena metrics`;
  modelCase.imageCaption = `Dated platform summary · #${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.asOf}`;
}

const entropyCase = findById(H.cases, "scientific-verification");
if (entropyCase) {
  entropyCase.title = "Fact-checking and producing scientific content before publication.";
  entropyCase.lead =
    "In a small recurring production team, I verify primary literature behind YouTube videos, documentaries and articles and contribute additional production work when the assignment requires it.";
  entropyCase.result =
    `${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects indexed in the contribution playlist and ${ENTROPY.articles} co-authored articles. A separate playlist records selected thumbnail work.`;
  entropyCase.boundary =
    "Primary-literature research and fact-checking are recurring. Script development, data visualization, slide and on-screen assets, and thumbnail production vary by project and are attributed per item. The future consolidated Entropy work page is not linked until it is complete and approved.";
  entropyCase.href = ENTROPY.videosUrl;
  entropyCase.mediaHref = ENTROPY.videosUrl;
  entropyCase.linkLabel = "Open the YouTube contribution playlist";
  entropyCase.mediaLinkLabel = "Open the documented YouTube work inventory";
  entropyCase.links = [
    { label: `${ENTROPY.videoProjects} YouTube projects`, href: ENTROPY.videosUrl },
    { label: `${ENTROPY.articles} co-authored articles`, href: ENTROPY.articlesUrl },
    { label: "Selected thumbnail-work playlist", href: ENTROPY.thumbnailsUrl },
    { label: "Official Entropy for Life website", href: ENTROPY.websiteUrl }
  ];
  entropyCase.image = ENTROPY.inventoryImage;
  entropyCase.alt =
    `Documented Entropy for Life work inventory: ${ENTROPY.totalProjects} projects, including ${ENTROPY.videoProjects} YouTube projects and ${ENTROPY.articles} articles`;
  entropyCase.imageCaption = "Documented work inventory · direct evidence links below";
}

/* Specialized application CVs */
const ai = P.aiSafety;
if (ai) {
  ai.summary =
    `AI evaluation and research-verification analyst with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #${GS.rank} (${GS.percentile.toLowerCase()}) and ${GS.totalBreaks} total breaks on ${GS.asOf}. Brings eight years of auditable claim verification, ${ENTROPY.totalProjects} documented Entropy for Life projects, structured research processes and reporting that separates evidence from inference.`;
  replaceStrength(ai, 0, String(GS.totalBreaks), "Platform-displayed Proving Ground breaks", `#${GS.rank} · ${GS.percentile.toLowerCase()} · ${GS.asOf}`);
  replaceStrength(ai, 1, String(GS.arenaSubmissions), "Arena submissions shown", `${GS.arenaUniqueBreaks} global unique breaks · ${GS.arenaPoints.toLocaleString("en-US")} points`);
  replaceStrength(ai, 2, ENTROPY.totalProjects, "Scientific projects supported", `${ENTROPY.videoProjects} YouTube projects · ${ENTROPY.articles} articles`);
  const gsExp = ai.experience?.[0];
  if (gsExp) {
    gsExp.period = "Jul 2026 — Present";
    gsExp.links = [
      { label: "Evaluation record", url: "/security" },
      { label: "Dated evidence", url: GS.evidencePath },
      { label: "Public profile", url: GS.profileUrl }
    ];
    gsExp.bullets = [
      "Conduct self-directed testing of LLM instruction handling, policy boundaries and edge cases across chat, image, agentic tool-use and indirect prompt-injection settings.",
      `Reached #${GS.rank} on the Proving Ground (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed total breaks in the ${GS.asOf} snapshot.`,
      `Document the visible ${GS.displayedAreaTotal}/${GS.totalBreaks} discrepancy and separate platform-reported outcomes from independent verification, model-wide conclusions or security certification.`
    ];
  }
  const entExp = ai.experience?.find((item) => item?.organization?.includes("Entropy for Life"));
  if (entExp) {
    entExp.role = "Scientific Research, Fact-Checking & Website Operations Contractor";
    entExp.links = [
      { label: `${ENTROPY.videoProjects} YouTube projects`, url: ENTROPY.videosUrl },
      { label: `${ENTROPY.articles} articles`, url: ENTROPY.articlesUrl },
      { label: "Selected thumbnails", url: ENTROPY.thumbnailsUrl }
    ];
    entExp.bullets = [
      `Delivered ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles.`,
      "Conduct recurring primary-literature research and scientific fact-checking; contribute assignment-specific script development, visualization, slides, on-screen assets and selected thumbnails.",
      "Formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
}

const research = P.researchQuality;
if (research) {
  research.summary =
    `Research-verification and data-quality specialist with eight years of auditable scientific, biomedical and structured-data work. Paid Entropy for Life contractor across ${ENTROPY.totalProjects} documented published projects—${ENTROPY.videoProjects} YouTube projects and ${ENTROPY.articles} co-authored articles—plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(research, 2, ENTROPY.totalProjects, "Published scientific projects", `${ENTROPY.videoProjects} YouTube projects · ${ENTROPY.articles} articles`);
  const entExp = research.experience?.find((item) => item?.organization?.includes("Entropy for Life"));
  if (entExp) {
    entExp.role = "Scientific Research, Fact-Checking & Website Operations Contractor";
    entExp.links = [
      { label: `${ENTROPY.videoProjects} YouTube projects`, url: ENTROPY.videosUrl },
      { label: `${ENTROPY.articles} articles`, url: ENTROPY.articlesUrl },
      { label: "Official website", url: ENTROPY.websiteUrl }
    ];
    entExp.bullets = [
      `Verify primary literature and conduct bibliographic research across ${ENTROPY.totalProjects} documented projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles.`,
      "Translate complex evidence into editorial recommendations; depending on the assignment, also contribute scripts, data visualizations, slides and on-screen assets.",
      "Manage hosting, DNS, SSL, WordPress configuration, technical SEO and functional site changes."
    ];
  }
}

const editorial = P.editorialCommunity;
if (editorial) {
  editorial.summary =
    `Research, editorial and community coordinator with paid experience across ${ENTROPY.totalProjects} documented Entropy for Life projects—${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles—covering primary-source fact-checking, script and visual production, professional writing and website delivery. Co-developed and facilitated approximately 4–5 structured remote focus-group sessions with autistic participants under Marta Panzeri at the University of Padua DPSS.`;
  replaceStrength(editorial, 0, ENTROPY.totalProjects, "Documented published projects", `${ENTROPY.videoProjects} YouTube projects · ${ENTROPY.articles} articles`);
  const entExp = editorial.experience?.find((item) => item?.organization?.includes("Entropy for Life"));
  if (entExp) {
    entExp.role = "Scientific Research, Fact-Checking & Website Operations Contractor";
    entExp.links = [
      { label: `${ENTROPY.videoProjects} YouTube projects`, url: ENTROPY.videosUrl },
      { label: `${ENTROPY.articles} articles`, url: ENTROPY.articlesUrl },
      { label: "Selected thumbnails", url: ENTROPY.thumbnailsUrl }
    ];
    entExp.bullets = [
      `Support a small recurring science-communication team across ${ENTROPY.totalProjects} documented published projects: ${ENTROPY.videoProjects} YouTube video projects and ${ENTROPY.articles} co-authored articles.`,
      "Research primary literature, check claims and communicate corrections; depending on the project, also develop scripts, visualizations, slides, on-screen assets and selected thumbnails.",
      "Manage the project website, hosting, DNS, SSL, WordPress configuration, technical SEO and day-to-day troubleshooting."
    ];
  }
}

const integrity = P.integrity;
if (integrity) {
  integrity.summary =
    `Trust, safety and source-quality analyst with eight years of auditable Wikimedia work, paid scientific verification across ${ENTROPY.totalProjects} documented Entropy for Life projects, and self-directed adversarial testing of AI systems. The ${GS.asOf} Gray Swan snapshot displayed rank #${GS.rank} (${GS.percentile.toLowerCase()}) and ${GS.totalBreaks} Proving Ground total breaks.`;
  replaceStrength(integrity, 2, String(GS.totalBreaks), "Platform-displayed Proving Ground breaks", `#${GS.rank} · ${GS.percentile.toLowerCase()} · four evaluation surfaces`);
  replaceStrength(integrity, 3, ENTROPY.totalProjects, "Scientific projects checked", `${ENTROPY.videoProjects} YouTube projects · ${ENTROPY.articles} articles`);
  const gsExp = integrity.experience?.find((item) => item?.role?.includes("Model-Behavior"));
  if (gsExp) {
    gsExp.period = "Jul 2026 — Present";
    gsExp.links = [
      { label: "Evaluation record", url: "/security" },
      { label: "Dated evidence", url: GS.evidencePath },
      { label: "Public profile", url: GS.profileUrl }
    ];
    gsExp.bullets = [
      "Test instruction hierarchy, policy boundaries, indirect prompt injection and agentic tool-use behavior across repeated adversarial scenarios.",
      `Reached #${GS.rank} on the Proving Ground (${GS.percentile.toLowerCase()}) with ${GS.totalBreaks} platform-displayed total breaks in the ${GS.asOf} snapshot.`,
      "Apply threat-oriented thinking and evidence capture to ambiguous behavior without claiming application-security or penetration-testing expertise."
    ];
  }
}

module.exports = { D, H, P, GS, ENTROPY };
