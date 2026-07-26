/*
 * Career-positioning layer for the public portfolio and application CVs.
 *
 * It builds on the dated release record, then adds externally legible context
 * for Entropy for Life: audience scale, content-operations scope and the
 * performance objectives behind thumbnail and visual-packaging work.
 */
const release = require("./release-data.js");

const { D, H, P } = release;

const audience = Object.freeze({
  combinedFollowing: "460K+",
  youtubeSubscribers: "250K+",
  projects: "59+",
  videoProjects: "55+",
  articles: 4,
  scopeNote: "Combined platform following is non-unique and time-sensitive."
});

function findEntropyExperience(profile) {
  return profile?.experience?.find((item) => item?.organization?.includes("Entropy for Life"));
}

function replaceStrength(profile, index, value, label, detail) {
  if (profile?.strengths?.[index]) profile.strengths[index] = { value, label, detail };
}

function addSkill(profile, title, detail) {
  if (!Array.isArray(profile?.skills)) return;
  if (!profile.skills.some(([existing]) => existing === title)) profile.skills.push([title, detail]);
}

const masterEntropy = D.experience?.find((item) => item?.org?.includes("Entropy for Life"));
if (masterEntropy) {
  masterEntropy.role = "Scientific Fact-Checking, Content Operations & Audience Optimization Contractor";
  masterEntropy.links = {
    ...(masterEntropy.links || {}),
    website: "https://entropyforlife.it",
    playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
    authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
    thumbnails: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"
  };
  masterEntropy.bullets = [
    `Supported ${audience.projects} documented published projects for an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined public following across YouTube, Instagram and TikTok.`,
    "Conduct recurring primary-literature research and scientific fact-checking; depending on the assignment, also contribute to script development, data visualization, presentation slides and on-screen assets.",
    "Develop selected thumbnail concepts and visual packaging independently or with the video editor, applying current platform best practices to improve click-through rate and support watch time, retention and immediate attention capture.",
    "Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection."
  ];
  masterEntropy.resumeBullets = [
    `Supported ${audience.projects} published projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined platform following; recurring evidence review plus audience-focused visual packaging, selected thumbnails and web operations.`,
    "Apply current thumbnail and content-packaging practices with CTR, watch time, retention and attention capture as explicit optimization objectives; quantified lift is claimed only where comparable analytics are available."
  ];
}

const entropyProject = D.projects?.find((item) => item?.id === "entropy-for-life");
if (entropyProject) {
  entropyProject.title = "Entropy for Life — Scientific Evidence, Content Operations & Audience Optimization";
  entropyProject.oneLiner = `${audience.projects} published projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined public platform following.`;
  entropyProject.description =
    `Conduct recurring primary-literature research and scientific fact-checking across ${audience.projects} documented published projects: ${audience.videoProjects} YouTube video projects and ${audience.articles} co-authored articles. Entropy for Life is an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined public following across YouTube, Instagram and TikTok. Depending on the assignment, also contribute to scripts, data visualizations, slides, on-screen assets and selected thumbnail concepts or production. Audience packaging is developed with click-through rate, watch time, retention and immediate attention capture as explicit optimization objectives. The audience belongs to the brand, and the combined platform figure is not a count of unique people.`;
  entropyProject.role = "Scientific Fact-Checking, Content Operations & Audience Optimization Contractor";
  entropyProject.highlights = [
    `Audience Context: ${audience.youtubeSubscribers} YouTube subscribers · ${audience.combinedFollowing} combined public platform following`,
    `Published Work: ${audience.projects} projects · ${audience.videoProjects} YouTube projects · ${audience.articles} co-authored articles`,
    "Performance Practice: Thumbnail and visual-packaging decisions informed by CTR, watch time, retention and attention-capture best practices"
  ];
}

if (P.aiSafety) {
  P.aiSafety.summary =
    `AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #75 (top 6%) and 110 total breaks on 25 July 2026. Brings eight years of auditable claim verification and ${audience.projects} published-project experience inside a science-communication operation reaching ${audience.youtubeSubscribers} YouTube subscribers, alongside structured research workflows and evidence-bound reporting.`;
  const item = findEntropyExperience(P.aiSafety);
  if (item) {
    item.role = "Scientific Fact-Checking & Content Operations Contractor";
    item.bullets = [
      `Supported ${audience.projects} documented projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined platform following.`,
      "Conduct recurring primary-literature review and scientific fact-checking; contribute assignment-specific scripts, data visualizations, slides/on-screen assets and selected thumbnail or visual-packaging work optimized around CTR, watch time, retention and attention capture.",
      "Formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
}

if (P.researchQuality) {
  P.researchQuality.summary =
    `Research-verification and data-quality specialist with eight years of auditable scientific, biomedical and structured-data work. Paid contractor across ${audience.projects} documented Entropy for Life projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(P.researchQuality, 2, audience.projects, "Published scientific projects", `${audience.videoProjects} YouTube projects · ${audience.articles} articles · ${audience.youtubeSubscribers} YouTube audience`);
  const item = findEntropyExperience(P.researchQuality);
  if (item) {
    item.role = "Scientific Research, Fact-Checking & Content Operations Contractor";
    item.bullets = [
      `Verify primary literature across ${audience.projects} documented projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers.`,
      "Translate complex evidence into editorial recommendations; depending on the assignment, also contribute scripts, data visualizations, slides, on-screen assets and selected audience-facing visual packaging.",
      "Manage hosting, DNS, SSL, WordPress configuration, technical SEO and functional site changes."
    ];
  }
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary =
    `Research, editorial and content-operations specialist with paid experience across ${audience.projects} documented Entropy for Life projects for an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined public platform following. Work spans primary-source fact-checking, scripts and visual production, audience packaging, selected thumbnails, professional writing and web operations.`;
  replaceStrength(P.editorialCommunity, 0, audience.combinedFollowing, "Combined public platform following", `${audience.youtubeSubscribers} YouTube subscribers · brand audience, non-unique`);
  const item = findEntropyExperience(P.editorialCommunity);
  if (item) {
    item.role = "Scientific Fact-Checking, Content Operations & Audience Optimization Contractor";
    item.bullets = [
      `Support ${audience.projects} documented published projects for an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.combinedFollowing} combined public platform following.`,
      "Research primary literature, check claims and communicate corrections; depending on the project, also develop scripts, visualizations, slides, on-screen assets and selected thumbnail concepts or production.",
      "Apply current platform best practices to visual packaging with click-through rate, watch time, retention and immediate attention capture as explicit optimization objectives; manage WordPress, hosting, DNS/SSL, technical SEO and troubleshooting."
    ];
  }
  addSkill(
    P.editorialCommunity,
    "Audience packaging & performance optimization",
    "Thumbnail concepts, visual hierarchy and attention structure informed by click-through rate, watch time, retention and current platform best practices."
  );
}

if (P.integrity) {
  P.integrity.summary =
    `Knowledge-integrity and open-source research specialist with eight years of auditable Wikimedia work, paid scientific verification across ${audience.projects} Entropy for Life projects for a brand with ${audience.youtubeSubscribers} YouTube subscribers, and self-directed adversarial testing of AI systems. The 25 July 2026 Gray Swan snapshot displayed rank #75 (top 6%) and 110 Proving Ground total breaks.`;
  const item = findEntropyExperience(P.integrity);
  if (item) {
    item.role = "Scientific Fact-Checking & Content Operations Contractor";
    item.bullets = [
      `Perform public-facing scientific verification across ${audience.projects} documented projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers.`,
      "Separate source evidence from editorial interpretation and contribute assignment-specific scripts, visualizations and audience packaging without overstating causal performance effects.",
      "Manage the supporting website and technical publishing workflow."
    ];
  }
}

module.exports = { ...release, D, H, P, audience };
