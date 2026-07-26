/*
 * Recruiter-facing release overlay.
 *
 * Keeps dated Gray Swan evidence and current Entropy for Life production context
 * aligned across generated dossiers, CVs and verification checks without
 * attributing the brand audience or channel-wide outcomes to Mario personally.
 */
const release = require('./release-data.js');
const { D, H, P } = release;

const graySwan = Object.freeze({
  asOf: '26 July 2026',
  rank: 75,
  percentile: 'Top 6%',
  totalBreaks: 110,
  displayedAreaTotal: 109,
  arenaRank: 371,
  uniqueBreaks: 27,
  points: 1090,
  submissions: 246,
  evidencePath: '/evidence/gray-swan-profile-2026-07-26.html',
  screenshotPath: '/media/work/gray-swan-profile-2026-07-26.svg'
});

const audience = Object.freeze({
  asOf: '26 July 2026',
  combinedFollowers: '480K+',
  youtubeSubscribers: '267K',
  youtubeVideos: 592,
  youtubeViews: '36.5M',
  youtubeViewsExact: '36,524,137',
  instagramFollowers: '159K',
  tiktokFollowers: '54K',
  tiktokLikes: '528K',
  projects: '59+',
  videoProjects: '55+',
  articles: 4,
  scopeNote: 'Brand audience; cross-platform follower totals are non-unique and time-sensitive.'
});

function findEntropyExperience(profile) {
  return profile?.experience?.find((item) => item?.organization?.includes('Entropy for Life'));
}

function replaceStrength(profile, index, value, label, detail) {
  if (profile?.strengths?.[index]) profile.strengths[index] = { value, label, detail };
}

function addSkill(profile, title, detail) {
  if (!Array.isArray(profile?.skills)) return;
  if (!profile.skills.some(([existing]) => existing === title)) profile.skills.push([title, detail]);
}

D.identity.buildVersion = 'v2026.07.26';
D.identity.grayswanArchiveUrl = graySwan.evidencePath;
D.identity.evaluationAsOf = graySwan.asOf;
Object.assign(D.redTeamActivity || {}, {
  asOf: graySwan.asOf,
  rankBand: `#${graySwan.rank} · ${graySwan.percentile}`,
  leaderboardRank: graySwan.rank,
  platformReportedBreaks: graySwan.totalBreaks,
  profileReportedBreaks: graySwan.totalBreaks,
  areaBreaksTotal: graySwan.displayedAreaTotal,
  arenaRank: graySwan.arenaRank,
  globalUniqueBreaks: graySwan.uniqueBreaks,
  globalPoints: graySwan.points,
  totalArenaSubmissions: graySwan.submissions
});

const masterGray = D.experience?.find((item) => item?.role?.includes('Model-Behavior'));
if (masterGray) {
  masterGray.bullets = [
    'Conduct self-directed testing of LLM instruction handling, policy boundaries and edge cases across chat, image, agentic tool-use and indirect prompt-injection settings.',
    `Reached #${graySwan.rank} on the Proving Ground (${graySwan.percentile.toLowerCase()}) with ${graySwan.totalBreaks} platform-displayed total breaks on ${graySwan.asOf}; the same profile displayed Arena rank #${graySwan.arenaRank}, ${graySwan.uniqueBreaks} global unique breaks, ${graySwan.points.toLocaleString('en-US')} points and ${graySwan.submissions} submissions.`,
    `Document the visible ${graySwan.displayedAreaTotal}/${graySwan.totalBreaks} discrepancy and separate platform-reported outcomes from independent verification, security certification or model-wide conclusions.`
  ];
  masterGray.resumeBullets = [
    'Conduct self-directed adversarial testing across chat, multimodal, agentic tool-use and indirect prompt-injection settings.',
    `Reached #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) with ${graySwan.totalBreaks} platform-displayed Proving Ground breaks on ${graySwan.asOf}.`
  ];
  masterGray.links = {
    ...(masterGray.links || {}),
    caseStudy: '/security.html',
    profile: D.identity.grayswanUrl,
    evidence: graySwan.evidencePath
  };
}

const masterEntropy = D.experience?.find((item) => item?.org?.includes('Entropy for Life'));
if (masterEntropy) {
  masterEntropy.role = 'Scientific Content Quality & Operations Contractor';
  masterEntropy.links = {
    ...(masterEntropy.links || {}),
    website: 'https://entropyforlife.it',
    playlist: 'https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh',
    authorPage: 'https://entropyforlife.it/autore/mario-marcolongo/',
    thumbnails: 'https://www.youtube.com/playlist?list=PLUXju4zC0Sks'
  };
  masterEntropy.bullets = [
    `Supported ${audience.projects} documented published projects within an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`,
    'Own recurring primary-literature research and scientific fact-checking; depending on the assignment, translate evidence into scripts, data visualizations, presentation slides and on-screen assets.',
    'Develop selected thumbnail concepts and visual packaging independently or with the video editor, using click-through rate, watch time, retention and immediate attention capture as explicit design criteria.',
    'Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection.'
  ];
  masterEntropy.resumeBullets = [
    `Supported ${audience.projects} published projects in a ${audience.youtubeSubscribers}-subscriber, ${audience.youtubeViews}-view YouTube production environment through evidence review, content production and publishing operations.`,
    'Apply current thumbnail and visual-packaging practices with CTR, watch time, retention and attention capture as explicit design objectives; quantified lift is claimed only where comparable analytics are available.'
  ];
}

const entropyProject = D.projects?.find((item) => item?.id === 'entropy-for-life');
if (entropyProject) {
  entropyProject.title = 'Entropy for Life — Scientific Content Quality & Operations';
  entropyProject.oneLiner = `${audience.projects} published projects supported inside a creator brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  entropyProject.description =
    `Conduct recurring primary-literature research and scientific fact-checking across ${audience.projects} documented published projects: ${audience.videoProjects} YouTube video projects and ${audience.articles} co-authored articles. Entropy for Life is an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViewsExact} channel views, ${audience.instagramFollowers} Instagram followers and ${audience.tiktokFollowers} TikTok followers as of ${audience.asOf}. Depending on the assignment, also translate evidence into scripts, data visualizations, slides and on-screen assets, develop selected thumbnail concepts or production, and operate the supporting website stack. Visual packaging is developed with click-through rate, watch time, retention and immediate attention capture as explicit design objectives. The audience belongs to the brand, and cross-platform totals are not counts of unique people.`;
  entropyProject.role = 'Scientific Content Quality & Operations Contractor';
  entropyProject.highlights = [
    `Production Scale: ${audience.youtubeViews} YouTube views · ${audience.youtubeSubscribers} subscribers · ${audience.youtubeVideos} published videos`,
    `Documented Work: ${audience.projects} projects · ${audience.videoProjects} YouTube projects · ${audience.articles} co-authored articles`,
    'Cross-Functional Scope: Evidence quality, content production, performance-aware visual packaging and publishing operations'
  ];
}

if (Array.isArray(H?.proofMoments)) {
  H.proofMoments[0] = {
    value: String(graySwan.totalBreaks),
    label: 'platform-displayed Proving Ground breaks',
    detail: `#${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.asOf}`,
    href: '/security.html'
  };
  H.proofMoments[1] = {
    value: audience.projects,
    label: 'documented published projects',
    detail: `${audience.videoProjects} YouTube projects · ${audience.articles} articles`,
    href: 'https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh'
  };
  H.proofMoments[2] = {
    value: audience.youtubeViews,
    label: 'YouTube channel views in the production environment',
    detail: `${audience.youtubeSubscribers} subscribers · Entropy for Life brand context`,
    href: 'https://www.youtube.com/@entropyforlife'
  };
}

const modelCase = H?.cases?.find((item) => item?.id === 'model-behavior');
if (modelCase) {
  modelCase.result = `#${graySwan.rank} on the Proving Ground, ${graySwan.percentile.toLowerCase()}, with ${graySwan.totalBreaks} platform-displayed total breaks on ${graySwan.asOf}; the Arena profile displayed rank #${graySwan.arenaRank}, ${graySwan.submissions} submissions, ${graySwan.uniqueBreaks} global unique breaks and ${graySwan.points.toLocaleString('en-US')} points.`;
  modelCase.image = graySwan.screenshotPath;
  modelCase.imageCaption = `Full dated profile · #${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.totalBreaks} breaks`;
}

const entropyCase = H?.cases?.find((item) => item?.id === 'scientific-verification');
if (entropyCase) {
  entropyCase.title = 'Scientific evidence and content operations at creator scale.';
  entropyCase.lead = `Paid contractor supporting Entropy for Life, an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  entropyCase.action = 'Own primary-literature research and scientific fact-checking across documented productions. Depending on the assignment, translate evidence into scripts, data visualizations, slides and on-screen assets; develop selected thumbnails and performance-aware visual packaging; and manage WordPress, hosting, DNS/SSL and technical SEO.';
  entropyCase.result = `${audience.projects} documented projects supported: ${audience.videoProjects} YouTube video projects and ${audience.articles} co-authored articles, with a cross-functional remit spanning evidence quality, content production and publishing operations.`;
  entropyCase.boundary = 'Audience and channel metrics describe the production environment, not a personal audience or a causal performance claim. Quantified thumbnail lift is stated only when comparable analytics are available.';
}

if (P.aiSafety) {
  P.aiSafety.summary = `AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} total breaks on ${graySwan.asOf}. Brings eight years of auditable claim verification and ${audience.projects} published-project experience inside a ${audience.youtubeSubscribers}-subscriber, ${audience.youtubeViews}-view science-communication environment.`;
  const item = findEntropyExperience(P.aiSafety);
  if (item) {
    item.role = 'Scientific Content Quality & Operations Contractor';
    item.bullets = [
      `Supported ${audience.projects} documented projects within a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} views.`,
      'Conduct recurring primary-literature review and scientific fact-checking; contribute assignment-specific scripts, data visualizations, slides/on-screen assets and selected performance-aware thumbnail or visual-packaging work.',
      "Formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
}

if (P.researchQuality) {
  P.researchQuality.summary = `Research-verification and data-quality specialist with eight years of auditable scientific, biomedical and structured-data work. Paid contractor across ${audience.projects} documented Entropy for Life projects inside a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views, plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(P.researchQuality, 2, audience.projects, 'Published scientific projects', `${audience.videoProjects} YouTube projects · ${audience.articles} articles · ${audience.youtubeSubscribers} YouTube subscribers`);
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = `Research, editorial and content-operations specialist with paid experience across ${audience.projects} documented Entropy for Life projects inside an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views. Work spans primary-source fact-checking, scripts and visual production, performance-aware packaging, selected thumbnails, professional writing and web operations.`;
  replaceStrength(P.editorialCommunity, 0, audience.youtubeViews, 'YouTube channel views', `${audience.youtubeSubscribers} subscribers · established creator-brand context`);
  addSkill(P.editorialCommunity, 'Performance-aware content packaging', 'Thumbnail concepts, visual hierarchy and attention structure informed by click-through rate, watch time, retention and current platform best practices.');
}

if (P.integrity) {
  P.integrity.summary = `Knowledge-integrity and open-source research specialist with eight years of auditable Wikimedia work, paid scientific verification across ${audience.projects} Entropy for Life projects inside a ${audience.youtubeSubscribers}-subscriber science-communication brand, and self-directed adversarial testing of AI systems. The ${graySwan.asOf} Gray Swan snapshot displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} Proving Ground total breaks.`;
}

module.exports = { ...release, D, H, P, audience, graySwan };
