/*
 * Dated public metrics shared by the homepage, dossiers and CV overlays.
 * These facts are intentionally immutable: presentation layers may choose
 * wording, but should not make competing copies of their values.
 */
const ENTROPY_WORK_URL = 'https://entropyforlife.it/mario-marcolongo-entropy-for-life/';

const graySwan = Object.freeze({
  asOf: '29 July 2026',
  rank: 74,
  percentile: 'Top 6%',
  totalBreaks: 113,
  displayedAreaTotal: 112,
  arenaRank: 365,
  uniqueBreaks: 28,
  points: 1120,
  submissions: 255,
  evidencePath: '/evidence/gray-swan-2026-07-29/',
  screenshotPath: '/media/work/gray-swan-profile-2026-07-29-1600.webp',
  screenshotSet: '/media/work/gray-swan-profile-2026-07-29-800.webp 800w, /media/work/gray-swan-profile-2026-07-29-1600.webp 1600w'
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

const yourselfToScience = Object.freeze({
  asOf: '27 July 2026',
  resources: 55,
  wikidataReferences: 37,
  statsUrl: 'https://yourselftoscience.org/stats'
});

module.exports = { ENTROPY_WORK_URL, graySwan, audience, yourselfToScience };
