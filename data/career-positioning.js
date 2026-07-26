/*
 * Recruiter-facing release overlay.
 *
 * Keeps dated Gray Swan evidence and current Entropy for Life audience context
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
  masterEntropy.role = 'Scientific Fact-Checking, Content Operations & Audience Optimization Contractor';
  masterEntropy.links = {
    ...(masterEntropy.links || {}),
    website: 'https://entropyforlife.it',
    playlist: 'https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh',
    authorPage: 'https://entropyforlife.it/autore/mario-marcolongo/',
    thumbnails: 'https://www.youtube.com/playlist?list=PLUXju4zC0Sks'
  };
  masterEntropy.bullets = [
    `Supported ${audience.projects} documented published projects for an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViews} channel views and ${audience.combinedFollowers} combined followers across YouTube, Instagram and TikTok.`,
    'Conduct recurring primary-literature research and scientific fact-checking; depending on the assignment, also contribute to scripts, data visualizations, presentation slides and on-screen assets.',
    'Develop selected thumbnail concepts and visual packaging independently or with the video editor, using click-through rate, watch time, retention and immediate attention capture as explicit design criteria.',
    'Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection.'
  ];
  masterEntropy.resumeBullets = [
    `Supported ${audience.projects} published projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViews} channel views and ${audience.combinedFollowers} combined platform followers; recurring evidence review plus audience-focused visual packaging, selected thumbnails and web operations.`,
    'Apply current thumbnail and content-packaging practices with CTR, watch time, retention and attention capture as explicit optimization objectives; quantified lift is claimed only where comparable analytics are available.'
  ];
}

const entropyProject = D.projects?.find((item) => item?.id === 'entropy-for-life');
if (entropyProject) {
  entropyProject.title = 'Entropy for Life — Scientific Evidence, Content Operations & Audience Optimization';
  entropyProject.oneLiner = `${audience.projects} published projects inside a creator brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  entropyProject.description =
    `Conduct recurring primary-literature research and scientific fact-checking across ${audience.projects} documented published projects: ${audience.videoProjects} YouTube video projects and ${audience.articles} co-authored articles. Entropy for Life is an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViewsExact} channel views, ${audience.instagramFollowers} Instagram followers and ${audience.tiktokFollowers} TikTok followers as of ${audience.asOf}. Depending on the assignment, also contribute to scripts, data visualizations, slides, on-screen assets and selected thumbnail concepts or production. Audience packaging is developed with click-through rate, watch time, retention and immediate attention capture as explicit optimization objectives. The audience belongs to the brand, and cross-platform totals are not counts of unique people.`;
  entropyProject.role = 'Scientific Fact-Checking, Content Operations & Audience Optimization Contractor';
  entropyProject.highlights = [
    `Brand Scale: ${audience.youtubeSubscribers} YouTube subscribers · ${audience.youtubeViews} views · ${audience.combinedFollowers} combined platform followers`,
    `Published Work: ${audience.projects} projects · ${audience.videoProjects} YouTube projects · ${audience.articles} co-authored articles`,
    'Performance Practice: Thumbnail and visual-packaging decisions informed by CTR, watch time, retention and attention-capture best practices'
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
    value: audience.combinedFollowers,
    label: 'combined public platform following',
    detail: `${audience.youtubeSubscribers} YouTube subscribers · ${audience.youtubeViews} channel views · non-unique`,
    href: 'https://entropyforlife.it'
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
  entropyCase.title = 'Turning scientific evidence into content built to earn attention.';
  entropyCase.lead = `Paid scientific fact-checking and content operations for an Italian creator brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViews} channel views and ${audience.combinedFollowers} combined platform followers.`;
  entropyCase.action = 'Research primary literature, verify claims and translate evidence into scripts and production assets. On selected projects, create or co-develop thumbnails and visual packaging using CTR, watch time, retention and immediate attention capture as design criteria; also operate the supporting website and technical publishing stack.';
  entropyCase.result = `${audience.projects} documented published projects supported: ${audience.videoProjects} YouTube video projects and ${audience.articles} co-authored articles.`;
  entropyCase.boundary = 'The audience and channel totals belong to Entropy for Life. They establish the scale of the production environment, not personal ownership or a causal claim that this work generated the full audience. Quantified performance lift is claimed only where comparable analytics are available.';
}

if (P.aiSafety) {
  P.aiSafety.summary = `AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} total breaks on ${graySwan.asOf}. Brings eight years of auditable claim verification and ${audience.projects} published-project experience inside a science-communication operation reaching ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  const item = findEntropyExperience(P.aiSafety);
  if (item) {
    item.role = 'Scientific Fact-Checking & Content Operations Contractor';
    item.bullets = [
      `Supported ${audience.projects} documented projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViews} views and ${audience.combinedFollowers} combined platform followers.`,
      'Conduct recurring primary-literature review and scientific fact-checking; contribute assignment-specific scripts, data visualizations, slides/on-screen assets and selected thumbnail or visual-packaging work optimized around CTR, watch time, retention and attention capture.',
      "Formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
}

if (P.researchQuality) {
  P.researchQuality.summary = `Research-verification and data-quality specialist with eight years of auditable scientific, biomedical and structured-data work. Paid contractor across ${audience.projects} documented Entropy for Life projects for a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views, plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(P.researchQuality, 2, audience.projects, 'Published scientific projects', `${audience.videoProjects} YouTube projects · ${audience.articles} articles · ${audience.youtubeSubscribers} YouTube subscribers`);
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = `Research, editorial and content-operations specialist with paid experience across ${audience.projects} documented Entropy for Life projects for an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViews} channel views and ${audience.combinedFollowers} combined platform followers. Work spans primary-source fact-checking, scripts and visual production, audience packaging, selected thumbnails, professional writing and web operations.`;
  replaceStrength(P.editorialCommunity, 0, audience.youtubeViews, 'YouTube channel views', `${audience.youtubeSubscribers} subscribers · ${audience.combinedFollowers} combined brand followers`);
  addSkill(P.editorialCommunity, 'Audience packaging & performance optimization', 'Thumbnail concepts, visual hierarchy and attention structure informed by click-through rate, watch time, retention and current platform best practices.');
}

if (P.integrity) {
  P.integrity.summary = `Knowledge-integrity and open-source research specialist with eight years of auditable Wikimedia work, paid scientific verification across ${audience.projects} Entropy for Life projects for a brand with ${audience.youtubeSubscribers} YouTube subscribers, and self-directed adversarial testing of AI systems. The ${graySwan.asOf} Gray Swan snapshot displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} Proving Ground total breaks.`;
}

module.exports = { ...release, D, H, P, audience, graySwan };
