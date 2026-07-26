/*
 * Recruiter-facing release overlay.
 *
 * Keeps dated Gray Swan evidence and current Entropy for Life production context
 * aligned across generated dossiers, CVs and verification checks without
 * attributing the brand audience or channel-wide outcomes to Mario personally.
 */
const release = require('./release-data.js');
const { D, H, P } = release;

const ENTROPY_WORK_URL = 'https://entropyforlife.it/mario-marcolongo-entropy-for-life/';

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
  projects: '80',
  videoProjects: '55',
  articles: 4,
  shortForm: 21,
  selectedThumbnails: '15+',
  workRecordUrl: ENTROPY_WORK_URL,
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

function useOfficialEntropyRecord(profile) {
  const item = findEntropyExperience(profile);
  if (item) item.links = [{ label: 'Official Entropy for Life work record', url: ENTROPY_WORK_URL }];
  return item;
}

function contributionBreakdown() {
  return `${audience.videoProjects} YouTube videos · ${audience.articles} articles · ${audience.shortForm} short-form pieces`;
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
  masterEntropy.links = { workRecord: ENTROPY_WORK_URL };
  masterEntropy.bullets = [
    `Delivered ${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces.`,
    'Own recurring primary-literature research and scientific fact-checking; depending on the assignment, translate evidence into scripts, data analyses, visualizations, presentation slides, on-screen assets and short-form content.',
    'Develop selected thumbnail concepts and visual packaging independently or with the video editor, using click-through rate, watch time, retention and immediate attention capture as explicit design criteria.',
    'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection.'
  ];
  masterEntropy.resumeBullets = [
    `Delivered ${audience.projects} documented published content contributions—${audience.videoProjects} YouTube videos, ${audience.articles} articles and ${audience.shortForm} short-form pieces—through evidence review, content production and publishing operations.`,
    'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing and OVHcloud technical operations.'
  ];
}

const entropyProject = D.projects?.find((item) => item?.id === 'entropy-for-life');
if (entropyProject) {
  entropyProject.title = 'Entropy for Life — Scientific Content Quality & Operations';
  entropyProject.oneLiner = `${audience.projects} documented published content contributions inside a creator brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  entropyProject.description =
    `Conduct recurring primary-literature research and scientific fact-checking across ${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces. Entropy for Life is an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViewsExact} channel views, ${audience.instagramFollowers} Instagram followers and ${audience.tiktokFollowers} TikTok followers as of ${audience.asOf}. Depending on the assignment, also translate evidence into scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnail concepts or production. Designed and built entropyforlife.it in WordPress and operate its responsive design, publishing and OVHcloud technical stack. The audience belongs to the brand, and cross-platform totals are not counts of unique people.`;
  entropyProject.role = 'Scientific Content Quality & Operations Contractor';
  entropyProject.links = { workRecord: ENTROPY_WORK_URL };
  entropyProject.highlights = [
    `Production Scale: ${audience.youtubeViews} YouTube views · ${audience.youtubeSubscribers} subscribers · ${audience.youtubeVideos} published videos`,
    `Documented Work: ${audience.projects} contributions · ${contributionBreakdown()}`,
    'Cross-Functional Scope: Evidence quality, content production, visual packaging and website design and operations'
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
    label: 'documented published content contributions',
    detail: contributionBreakdown(),
    href: ENTROPY_WORK_URL
  };
  H.proofMoments[2] = {
    value: audience.youtubeViews,
    label: 'YouTube channel views in the production environment',
    detail: `${audience.youtubeSubscribers} subscribers · Entropy for Life brand context`,
    href: ENTROPY_WORK_URL
  };
}

const entropyHero = H?.heroMedia?.find((item) => item?.id === 'entropy');
if (entropyHero) {
  entropyHero.title = 'Official Entropy for Life work record';
  entropyHero.href = ENTROPY_WORK_URL;
}

const modelCase = H?.cases?.find((item) => item?.id === 'model-behavior');
if (modelCase) {
  modelCase.result = `#${graySwan.rank} on the Proving Ground, ${graySwan.percentile.toLowerCase()}, with ${graySwan.totalBreaks} platform-displayed total breaks on ${graySwan.asOf}; the Arena profile displayed rank #${graySwan.arenaRank}, ${graySwan.submissions} submissions, ${graySwan.uniqueBreaks} global unique breaks and ${graySwan.points.toLocaleString('en-US')} points.`;
  modelCase.image = graySwan.screenshotPath;
  modelCase.imageCaption = `Full dated profile · #${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.totalBreaks} breaks`;
}

const entropyCase = H?.cases?.find((item) => item?.id === 'scientific-verification');
if (entropyCase) {
  entropyCase.title = 'Evidence quality and content operations at creator scale.';
  entropyCase.lead = 'Paid contractor supporting an established Italian science-communication brand across evidence review, content production and website operations.';
  entropyCase.action = 'Own recurring primary-literature research and scientific fact-checking. Depending on the assignment, also develop scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnails. Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing and OVHcloud technical operations.';
  entropyCase.result = `${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces. The official work record also indexes selected thumbnail work, which overlaps with video projects and is not added to the total.`;
  entropyCase.boundary = 'Platform metrics describe the production environment, not a personal audience. Quantified thumbnail lift is stated only when comparable analytics are available.';
  entropyCase.href = ENTROPY_WORK_URL;
  entropyCase.mediaHref = ENTROPY_WORK_URL;
  entropyCase.linkLabel = 'View my official Entropy for Life work record';
  entropyCase.mediaLinkLabel = 'View my official Entropy for Life work record';
  entropyCase.links = [{ label: 'Official work record published by Entropy for Life', href: ENTROPY_WORK_URL }];
}

if (P.aiSafety) {
  P.aiSafety.summary = `AI evaluation and research-verification specialist with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} total breaks on ${graySwan.asOf}. Brings eight years of auditable claim verification and ${audience.projects} published-content contributions inside a ${audience.youtubeSubscribers}-subscriber, ${audience.youtubeViews}-view science-communication environment.`;
  replaceStrength(P.aiSafety, 2, audience.projects, 'Published content contributions', contributionBreakdown());
  const item = useOfficialEntropyRecord(P.aiSafety);
  if (item) {
    item.role = 'Scientific Content Quality & Operations Contractor';
    item.bullets = [
      `Delivered ${audience.projects} documented published content contributions: ${contributionBreakdown()}.`,
      'Conduct recurring primary-literature review and scientific fact-checking; contribute assignment-specific scripts, data analyses, visualizations, slides/on-screen assets, short-form content and selected thumbnail or visual-packaging work.',
      "Designed and built entropyforlife.it in WordPress; formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
}

if (P.researchQuality) {
  P.researchQuality.summary = `Research-verification and data-quality specialist with eight years of auditable scientific, biomedical and structured-data work. Paid contractor across ${audience.projects} documented Entropy for Life content contributions inside a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views, plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(P.researchQuality, 2, audience.projects, 'Published scientific content contributions', contributionBreakdown());
  const item = useOfficialEntropyRecord(P.researchQuality);
  if (item) {
    item.bullets = [
      `Verify primary literature and conduct bibliographic research across ${audience.projects} documented published contributions: ${contributionBreakdown()}.`,
      'Translate complex evidence into clear editorial recommendations, identify unsupported claims and document uncertainty or disagreement between sources.',
      'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
    ];
  }
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = `Research, editorial and content-operations specialist with paid experience across ${audience.projects} documented Entropy for Life content contributions inside an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views. Work spans primary-source fact-checking, scripts and visual production, short-form content, performance-aware packaging, selected thumbnails, professional writing and web operations.`;
  replaceStrength(P.editorialCommunity, 0, audience.projects, 'Published content contributions', contributionBreakdown());
  addSkill(P.editorialCommunity, 'Performance-aware content packaging', 'Thumbnail concepts, visual hierarchy and attention structure informed by click-through rate, watch time, retention and current platform best practices.');
  const item = useOfficialEntropyRecord(P.editorialCommunity);
  if (item) {
    item.bullets = [
      `Support a small recurring science-communication team across ${audience.projects} documented published contributions: ${contributionBreakdown()}.`,
      'Create or support scripts, data analyses, visualizations, presentation slides, on-screen assets, short-form materials and selected thumbnails, with roles attributed per project.',
      'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing and OVHcloud technical operations.'
    ];
  }
}

if (P.integrity) {
  P.integrity.summary = `Knowledge-integrity and open-source research specialist with eight years of auditable Wikimedia work, paid scientific verification across ${audience.projects} documented Entropy for Life content contributions inside a ${audience.youtubeSubscribers}-subscriber science-communication brand, and self-directed adversarial testing of AI systems. The ${graySwan.asOf} Gray Swan snapshot displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} Proving Ground total breaks.`;
  const item = useOfficialEntropyRecord(P.integrity);
  if (item) {
    item.bullets = [
      `Investigate scientific and health claims across ${audience.projects} documented published contributions using primary-literature searches, source-quality comparison and cross-source corroboration.`,
      'Co-authored and maintained a rolling H5N1 epidemiological update, reconciling fast-changing reports and documenting source dates.',
      'Communicate uncertainty, conflicting evidence and corrections to a public-facing content team without overstating conclusions.'
    ];
  }
}

module.exports = { ...release, D, H, P, audience, graySwan, ENTROPY_WORK_URL };
