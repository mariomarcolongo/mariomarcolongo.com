/*
 * Multilingual quality and localization positioning layer.
 *
 * Adds evidence-backed cross-language work without repositioning the profile as
 * a conventional translator. The capability is framed as multilingual content
 * quality: preserving scientific meaning, terminology, citations and audience
 * fit across English-language evidence and Italian public-facing outputs.
 */
const career = require('./career-positioning.js');
const { D, H, P } = career;

const multilingualQuality = Object.freeze({
  primaryDirection: 'English-to-Italian scientific localization',
  scope: 'Source-faithful adaptation, terminology consistency, contextual review and audience fit',
  wikipedia: 'Cross-language translation and adaptation across English and Italian Wikipedia'
});

function findEntropy(profile) {
  return profile?.experience?.find((item) =>
    String(item?.organization || item?.org || '').includes('Entropy for Life')
  );
}

function replaceSkill(profile, currentTitle, nextTitle, detail) {
  const index = profile?.skills?.findIndex(([title]) => title === currentTitle);
  if (index >= 0) profile.skills[index] = [nextTitle, detail];
}

function replaceStringSkill(items, prefix, replacement) {
  if (!Array.isArray(items)) return;
  const index = items.findIndex((item) => String(item).startsWith(prefix));
  if (index >= 0) items[index] = replacement;
}

function insertCapability(summary) {
  const value = String(summary || '');
  if (value.includes('multilingual scientific localization')) return value;
  const target = 'paid scientific fact-checking and editorial production';
  if (value.includes(target)) {
    return value.replace(target, 'paid scientific fact-checking, multilingual scientific localization and editorial production');
  }
  return `${value} Practical experience also includes multilingual scientific localization and cross-language content-quality review.`.trim();
}

D.identity.languages =
  'Italian — native. English — C1 overall (EF SET 68/100), with advanced technical reading, professional writing and practical English-to-Italian scientific localization.';
D.summary = insertCapability(D.summary);

const scientificPillar = D.pillars?.find((item) => item?.category === 'SCIENTIFIC VERIFICATION');
if (scientificPillar) {
  scientificPillar.desc = `${scientificPillar.desc} Work also includes source-faithful English-to-Italian scientific localization and cross-language quality review.`;
}

const masterEntropy = D.experience?.find((item) => item?.org?.includes('Entropy for Life'));
if (masterEntropy) {
  masterEntropy.bullets = [
    `Delivered ${career.audience.projects} documented published content contributions: ${career.audience.videoProjects} YouTube videos, ${career.audience.articles} co-authored articles and ${career.audience.shortForm} short-form pieces.`,
    'Own recurring primary-literature research, scientific fact-checking and English-to-Italian scientific localization, adapting predominantly English-language evidence into accurate Italian scripts, articles, visualizations and short-form material while preserving meaning, terminology and source context.',
    'Develop selected thumbnail concepts and visual packaging independently or with the video editor, using click-through rate, watch time, retention and immediate attention capture as explicit design criteria.',
    'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection.'
  ];
  masterEntropy.resumeBullets = [
    `Delivered ${career.audience.projects} documented published content contributions—${career.audience.videoProjects} YouTube videos, ${career.audience.articles} articles and ${career.audience.shortForm} short-form pieces—through evidence review, English-to-Italian scientific localization, content production and publishing.`,
    'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
  ];
}

const masterWiki = D.experience?.find((item) => item?.role?.includes('Scientific Contributor'));
if (masterWiki) {
  const crossLanguage = 'Complete cross-language translation and adaptation across English and Italian Wikipedia while preserving scientific terminology, citations, links and edition-specific editorial conventions.';
  if (!masterWiki.bullets?.some((item) => item.includes('cross-language translation'))) {
    masterWiki.bullets = [...(masterWiki.bullets || []), crossLanguage];
  }
  if (!masterWiki.resumeBullets?.some((item) => item.includes('cross-language'))) {
    masterWiki.resumeBullets = [
      ...(masterWiki.resumeBullets || []),
      'Perform cross-language Wikipedia translation and adaptation with source, terminology and citation preservation.'
    ];
  }
}

const multilingualMasterSkill =
  'Multilingual Content Quality & Localization: Italian native; English C1 overall (EF SET 68/100); English-to-Italian scientific localization, source-faithful adaptation, terminology consistency, contextual review and cross-language Wikipedia work.';
replaceStringSkill(D.skills, 'Languages:', multilingualMasterSkill);
replaceStringSkill(D.resumeSkills, 'Languages:', multilingualMasterSkill);

const entropyProject = D.projects?.find((item) => item?.id === 'entropy-for-life');
if (entropyProject) {
  entropyProject.title = 'Entropy for Life — Scientific Content Quality, Localization & Website Maintenance';
  entropyProject.description =
    `Conduct recurring primary-literature research, scientific fact-checking and English-to-Italian scientific localization across ${career.audience.projects} documented published content contributions: ${career.audience.videoProjects} YouTube videos, ${career.audience.articles} co-authored articles and ${career.audience.shortForm} short-form pieces. Predominantly English-language evidence is adapted into accurate Italian scripts, articles, visualizations and short-form content with attention to terminology, source meaning, cultural context and audience comprehension. Entropy for Life is an Italian science-communication brand with ${career.audience.youtubeSubscribers} YouTube subscribers and ${career.audience.youtubeViewsExact} channel views as of ${career.audience.asOf}. Depending on the assignment, work also includes data analysis, slides, on-screen assets, short-form content and selected thumbnail concepts or production. Designed and built entropyforlife.it in WordPress and operate its responsive design, publishing and OVHcloud technical stack. Platform metrics describe the production environment, not a personal audience.`;
  entropyProject.tech = [
    'Scientific Evidence Review', 'English-to-Italian Localization', 'Terminology & Content Quality',
    'Script Development', 'Data Visualization', 'Presentation Assets', 'WordPress', 'Website Delivery'
  ];
  entropyProject.highlights = [
    `Production Scale: ${career.audience.youtubeViews} YouTube views · ${career.audience.youtubeSubscribers} subscribers · ${career.audience.youtubeVideos} published videos`,
    `Documented Work: ${career.audience.projects} contributions · ${career.audience.videoProjects} YouTube videos · ${career.audience.articles} articles · ${career.audience.shortForm} short-form pieces`,
    'Multilingual Quality: English-language scientific evidence localized for Italian audiences with terminology, meaning and source context preserved'
  ];
}

const entropyCase = H?.cases?.find((item) => item?.id === 'scientific-verification');
if (entropyCase) {
  entropyCase.title = 'Evidence quality, localization and content production at creator scale.';
  entropyCase.lead = 'Paid contractor supporting an established Italian science-communication brand across evidence review, English-to-Italian scientific localization, content production and website maintenance.';
  entropyCase.action = 'Own recurring primary-literature research, scientific fact-checking and source-faithful English-to-Italian localization. Adapt evidence into Italian scripts, articles, data analyses, visualizations, slides, on-screen assets and short-form content while preserving meaning, terminology and source context; also support selected thumbnails and operate entropyforlife.it.';
}

if (P.shared) {
  P.shared.language =
    'Italian — native. English — C1 overall (EF SET 68/100); advanced technical reading and professional writing, with practical English-to-Italian scientific localization and cross-language content-quality work.';
}

if (P.aiSafety) {
  const item = findEntropy(P.aiSafety);
  if (item) {
    item.bullets = [
      `Delivered ${career.audience.projects} documented published content contributions: ${career.audience.videoProjects} YouTube videos · ${career.audience.articles} articles · ${career.audience.shortForm} short-form pieces.`,
      'Conduct recurring primary-literature review, scientific fact-checking and English-to-Italian localization; adapt evidence into Italian scripts, visualizations and short-form content while preserving terminology, meaning and source context.',
      "Designed and built entropyforlife.it in WordPress; formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
  replaceSkill(
    P.aiSafety,
    'Communication',
    'Multilingual quality and communication',
    'Italian-native and English-C1 content review, English-to-Italian scientific localization, terminology consistency, source-faithful adaptation and clear evidence limitations for technical and non-technical audiences'
  );
}

if (P.researchQuality) {
  const item = findEntropy(P.researchQuality);
  if (item) {
    item.bullets = [
      `Verify primary literature and conduct bibliographic research across ${career.audience.projects} documented published contributions: ${career.audience.videoProjects} YouTube videos · ${career.audience.articles} articles · ${career.audience.shortForm} short-form pieces.`,
      'Localize predominantly English-language scientific evidence for Italian audiences, preserving factual meaning, terminology, citations and uncertainty while adapting explanatory structure and level of detail.',
      'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
    ];
  }
  replaceSkill(
    P.researchQuality,
    'Communication',
    'Multilingual scientific communication',
    'English-to-Italian scientific localization, source-faithful adaptation, terminology consistency, contextual review, technical writing and explanations for mixed audiences'
  );
}

if (P.editorialCommunity) {
  if (P.editorialCommunity.fit?.[0]) {
    P.editorialCommunity.fit[0] = 'Editorial-production support and public-source research with multilingual scientific localization';
  }
  const item = findEntropy(P.editorialCommunity);
  if (item) {
    item.bullets = [
      `Support a small recurring science-communication team across ${career.audience.projects} documented published contributions: ${career.audience.videoProjects} YouTube videos · ${career.audience.articles} articles · ${career.audience.shortForm} short-form pieces.`,
      'Research, fact-check and localize predominantly English-language scientific evidence into accurate Italian scripts, articles, data visualizations, slides, on-screen assets and short-form materials, adapting terminology and explanatory structure for the audience.',
      'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
    ];
  }
  replaceSkill(
    P.editorialCommunity,
    'Digital communications',
    'Localization and digital communications',
    'English-to-Italian scientific localization, terminology and contextual review, professional writing, WordPress publishing, website maintenance, technical SEO and content presentation'
  );
}

if (P.integrity) {
  replaceSkill(
    P.integrity,
    'Source verification & integrity',
    'Source verification & multilingual quality',
    'Claim decomposition, citation checking, cross-language translation and adaptation, terminology consistency, entity reconciliation, structured metadata, rights context and reporting that separates evidence from inference'
  );
}

module.exports = { ...career, D, H, P, multilingualQuality };
