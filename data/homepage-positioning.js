/*
 * Homepage-only presentation model.
 *
 * CV routes deliberately tailor a record to a role. The public homepage must
 * not inherit those mutable route overlays or depend on Astro's build order,
 * so it always starts from fresh source records.
 */
const source = require('./source.js');
const portfolio = require('./portfolio-human.js');
const { applyNotandiaBranding } = require('./notandia-branding.js');
const {
  ENTROPY_WORK_URL,
  audience,
  graySwan,
  yourselfToScience
} = require('./public-evidence.js');

const D = source.createMarioDossier();
const H = portfolio.createPortfolioHuman();

applyNotandiaBranding({ D, H });

H.eyebrow = 'Information retrieval · data & knowledge quality · AI evaluation';
H.headline = 'I make information and AI systems more reliable.';
H.introduction = 'I retrieve and verify information, investigate data and evidence quality, and test model behavior. When the work needs a durable system, I design and run the research workflow behind it.';

H.proofMoments = [
  {
    value: String(graySwan.totalBreaks),
    label: 'platform-displayed Proving Ground breaks',
    detail: `#${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.asOf}`,
    href: '/security'
  },
  {
    value: audience.projects,
    label: 'documented published content contributions',
    detail: `${audience.videoProjects} YouTube videos · ${audience.articles} articles · ${audience.shortForm} short-form pieces`,
    href: ENTROPY_WORK_URL
  },
  {
    value: '4,317',
    label: 'auditable Wikimedia contributions',
    detail: 'Privacy research · archival recovery · source review · biomedical evidence',
    href: '/integrity'
  }
];

const entropyHero = H.heroMedia.find((item) => item.id === 'entropy');
if (entropyHero) {
  entropyHero.title = 'Official Entropy for Life work record';
  entropyHero.href = ENTROPY_WORK_URL;
}

const modelCase = H.cases.find((item) => item.id === 'model-behavior');
if (modelCase) {
  modelCase.result = `#${graySwan.rank} on the Proving Ground, ${graySwan.percentile.toLowerCase()}, with ${graySwan.totalBreaks} platform-displayed total breaks on ${graySwan.asOf}; the Arena profile displayed rank #${graySwan.arenaRank}, ${graySwan.submissions} submissions, ${graySwan.uniqueBreaks} global unique breaks and ${graySwan.points.toLocaleString('en-US')} points.`;
  modelCase.boundary = `The four visible area counters sum to ${graySwan.displayedAreaTotal} while the profile displays ${graySwan.totalBreaks} total breaks. Both are reported without inferring the platform's internal aggregation, and the record is dated evaluation evidence rather than a model-wide conclusion.`;
  modelCase.image = graySwan.screenshotPath;
  modelCase.imageSet = graySwan.screenshotSet;
  modelCase.imageCaption = `Full dated profile · #${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.totalBreaks} breaks`;
}

const entropyCase = H.cases.find((item) => item.id === 'scientific-verification');
if (entropyCase) {
  entropyCase.title = 'Evidence quality, localization and content operations at creator scale.';
  entropyCase.lead = 'Paid contractor supporting an established Italian science-communication brand across evidence review, English-to-Italian scientific localization, content production and website operations.';
  entropyCase.action = 'Own recurring primary-literature research and scientific fact-checking. Depending on the assignment, also develop scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnails. Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing and OVHcloud technical operations.';
  entropyCase.result = `${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces. The official work record also indexes selected thumbnail work, which overlaps with video projects and is not added to the total.`;
  entropyCase.boundary = 'Platform metrics describe the production environment, not a personal audience. Quantified thumbnail lift is stated only when comparable analytics are available.';
  entropyCase.href = ENTROPY_WORK_URL;
  entropyCase.mediaHref = ENTROPY_WORK_URL;
  entropyCase.linkLabel = 'View my official Entropy for Life work record';
  entropyCase.mediaLinkLabel = 'View my official Entropy for Life work record';
  entropyCase.links = [{ label: 'Official work record published by Entropy for Life', href: ENTROPY_WORK_URL }];
}

const researchSystemCase = H.cases.find((item) => item.id === 'research-system');
if (researchSystemCase) {
  researchSystemCase.result = `${yourselfToScience.resources} resources indexed; as of ${yourselfToScience.asOf}, ${yourselfToScience.wikidataReferences} unique Wikidata items use yourselftoscience.org as a reference URL (P854). FAIRsharing, Zenodo and human- and machine-readable interfaces provide additional public records.`;
  researchSystemCase.boundary = 'Technical ownership covers requirements, information architecture, verification, functional testing, deployment diagnosis and ongoing operations; implementation is AI-assisted.';
  researchSystemCase.links = [{ label: 'View project statistics and Wikidata references', href: yourselfToScience.statsUrl }];
}

module.exports = { D, H, audience, graySwan };
