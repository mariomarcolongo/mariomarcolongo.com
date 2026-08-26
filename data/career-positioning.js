/*
 * Recruiter-facing release overlay.
 *
 * Keeps dated Gray Swan evidence and current Entropy for Life production context
 * aligned across generated dossiers, CVs and verification checks without
 * attributing the brand audience or channel-wide outcomes to Mario personally.
 */
const release = require('./release-data.js');
const { D, H, P } = release;

const {
  ENTROPY_WORK_URL,
  graySwan,
  audience,
  yourselfToScience
} = require('./public-evidence.js');

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

function wikidataReferenceStatement() {
  return `${yourselfToScience.wikidataReferences} unique Wikidata items use yourselftoscience.org as a reference URL (P854)`;
}

D.identity.buildVersion = 'v2026.07.29';
D.identity.grayswanArchiveUrl = graySwan.evidencePath;
D.identity.evaluationAsOf = graySwan.asOf;
D.identity.authorshipStatement =
  'My technical work uses AI-assisted implementation: I define requirements, inspect implementation behavior, test releases, diagnose functional problems, guide iterations, deploy releases and maintain services.';
D.identity.location =
  'Based in Italy · EU/EEA work-authorised · Open to sponsored international relocation and B2B engagements';
D.identity.relocationVisible = D.identity.location;
D.summary =
  `Data and knowledge-quality analyst with eight years of auditable public-source and structured-data work. The public record includes paid scientific fact-checking and editorial production, a maintained research-participation directory and self-directed model-behavior testing. On ${graySwan.asOf}, the Gray Swan Proving Ground profile displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} total breaks. Entropy for Life work covers ${audience.projects} documented published content contributions: ${contributionBreakdown()}. Technical delivery is AI-assisted, with personal responsibility for requirements, verification, deployment and maintenance.`;

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

const technicalPillar = D.pillars?.find((item) => item?.category === 'TECHNICAL DELIVERY');
if (technicalPillar) {
  technicalPillar.desc =
    'Uses coding agents for implementation support while personally defining requirements and workflows, inspecting code structure and behavior, testing releases, diagnosing functional problems, guiding revisions, deploying releases and maintaining services.';
}

const dataQualityPillar = D.pillars?.find((item) => item?.category === 'DATA QUALITY & OPEN SCIENCE');
if (dataQualityPillar) {
  dataQualityPillar.desc =
    `Founded and operate Yourself to Science™, an open-source research-participation directory indexing ${yourselfToScience.resources} resources with documented inclusion, verification, provenance, metadata and licensing workflows. As of ${yourselfToScience.asOf}, ${wikidataReferenceStatement()}.`;
}

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
    caseStudy: '/security',
    profile: D.identity.grayswanUrl,
    evidence: graySwan.evidencePath
  };
}

const masterEntropy = D.experience?.find((item) => item?.org?.includes('Entropy for Life'));
if (masterEntropy) {
  masterEntropy.role = 'Scientific Research, Fact-Checking & Website Maintenance Contractor';
  masterEntropy.links = { workRecord: ENTROPY_WORK_URL };
  masterEntropy.bullets = [
    `Delivered ${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces.`,
    'Own recurring primary-literature research and scientific fact-checking; depending on the assignment, translate evidence into scripts, data analyses, visualizations, presentation slides, on-screen assets and short-form content.',
    'Develop selected thumbnail concepts and visual packaging independently or with the video editor, using click-through rate, watch time, retention and immediate attention capture as explicit design criteria.',
    'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri for scientific-literature research and error detection.'
  ];
  masterEntropy.resumeBullets = [
    `Delivered ${audience.projects} documented published content contributions—${audience.videoProjects} YouTube videos, ${audience.articles} articles and ${audience.shortForm} short-form pieces—through evidence review, content production and publishing.`,
    'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
  ];
}

const masterYourselfToScience = D.experience?.find((item) => item?.org?.includes('Yourself to Science'));
if (masterYourselfToScience) {
  masterYourselfToScience.links = {
    ...(masterYourselfToScience.links || {}),
    stats: yourselfToScience.statsUrl
  };
  if (masterYourselfToScience.bullets?.[0]) {
    masterYourselfToScience.bullets[0] =
      `Founded and operate an open-source research-participation directory indexing ${yourselfToScience.resources} resources; as of ${yourselfToScience.asOf}, ${wikidataReferenceStatement()}.`;
  }
  if (masterYourselfToScience.resumeBullets?.[0]) {
    masterYourselfToScience.resumeBullets[0] =
      `Founded and operate an open-source directory indexing ${yourselfToScience.resources} research-participation resources; ${yourselfToScience.wikidataReferences} unique Wikidata items use the domain as a P854 reference URL.`;
  }
}

const researchDirectoryStat = D.stats?.find((item) => item?.label?.includes('Research Initiatives'));
if (researchDirectoryStat) {
  researchDirectoryStat.value = String(yourselfToScience.resources);
  researchDirectoryStat.label = 'Research Resources Indexed';
  researchDirectoryStat.detail = `${yourselfToScience.wikidataReferences} unique Wikidata items use the domain as a P854 reference URL`;
}

const aiWorkflowSkill = D.skills?.findIndex((item) => item.startsWith('AI-Assisted Implementation:'));
if (aiWorkflowSkill >= 0) {
  D.skills[aiWorkflowSkill] =
    'AI-Assisted Implementation: Uses coding agents for implementation support while personally defining requirements, inspecting structure and behavior, testing results, guiding revisions, deploying releases and maintaining services.';
}

const yourselfToScienceProject = D.projects?.find((item) => item?.id === 'yourself-to-science');
if (yourselfToScienceProject) {
  yourselfToScienceProject.oneLiner =
    `An open-source directory indexing ${yourselfToScience.resources} research-participation resources, with ${yourselfToScience.wikidataReferences} unique Wikidata items using the domain as a reference URL.`;
  yourselfToScienceProject.description =
    `Founded, designed and operate an open-source research-participation directory indexing ${yourselfToScience.resources} resources. As of ${yourselfToScience.asOf}, ${wikidataReferenceStatement()}. Defined the inclusion model, verification workflow, provenance fields, licensing structure and machine-readable metadata requirements, including JSON-LD, RDF Turtle/VoID, OpenAPI and an MCP interface. Technical implementation is AI-assisted and personally verified through requirements, code reading, functional testing and maintenance.`;
  yourselfToScienceProject.links = {
    ...(yourselfToScienceProject.links || {}),
    stats: yourselfToScience.statsUrl
  };
  yourselfToScienceProject.highlights = [
    `${yourselfToScience.resources} Research Resources: Clinical studies, biobanks, donation programs, registries and other opportunities catalogued`,
    'Verification Workflow: Inclusion, provenance, metadata and licensing requirements documented',
    `${yourselfToScience.wikidataReferences} Wikidata References: Unique items using yourselftoscience.org as a P854 reference URL`
  ];
}

const entropyProject = D.projects?.find((item) => item?.id === 'entropy-for-life');
if (entropyProject) {
  entropyProject.title = 'Entropy for Life — Scientific Research, Fact-Checking & Website Maintenance';
  entropyProject.oneLiner = `${audience.projects} documented published content contributions inside a creator brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views.`;
  entropyProject.description =
    `Conduct recurring primary-literature research and scientific fact-checking across ${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces. Entropy for Life is an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers, ${audience.youtubeViewsExact} channel views, ${audience.instagramFollowers} Instagram followers and ${audience.tiktokFollowers} TikTok followers as of ${audience.asOf}. Depending on the assignment, also translate evidence into scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnail concepts or production. Designed and built entropyforlife.it in WordPress and operate its responsive design, publishing and OVHcloud technical stack. The audience belongs to the brand, and cross-platform totals are not counts of unique people.`;
  entropyProject.role = 'Scientific Research, Fact-Checking & Website Maintenance Contractor';
  entropyProject.links = { workRecord: ENTROPY_WORK_URL };
  entropyProject.highlights = [
    `Production Scale: ${audience.youtubeViews} YouTube views · ${audience.youtubeSubscribers} subscribers · ${audience.youtubeVideos} published videos`,
    `Documented Work: ${audience.projects} contributions · ${contributionBreakdown()}`,
    'Work performed: Evidence review, content production, visual packaging and website design and maintenance'
  ];
}

const mdpiProject = D.projects?.find((item) => item?.id === 'mdpi-filter');
if (mdpiProject?.highlights?.length) {
  mdpiProject.highlights = mdpiProject.highlights.map((item) =>
    item.startsWith('Implementation Boundary:')
      ? 'Technical responsibilities: Requirements, behavior inspection, functional testing, release deployment and maintenance'
      : item
  );
}

if (Array.isArray(H?.proofMoments)) {
  H.proofMoments[0] = {
    value: String(graySwan.totalBreaks),
    label: 'platform-displayed Proving Ground breaks',
    detail: `#${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.asOf}`,
    href: '/security'
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
  modelCase.boundary = `The four visible area counters sum to ${graySwan.displayedAreaTotal} while the profile displays ${graySwan.totalBreaks} total breaks. Both are reported without inferring the platform's internal aggregation, and the record is presented as dated evaluation evidence rather than a model-wide conclusion.`;
  modelCase.image = graySwan.screenshotPath;
  modelCase.imageSet = graySwan.screenshotSet;
  modelCase.imageCaption = `Full dated profile · #${graySwan.rank} · ${graySwan.percentile.toLowerCase()} · ${graySwan.totalBreaks} breaks`;
}

const entropyCase = H?.cases?.find((item) => item?.id === 'scientific-verification');
if (entropyCase) {
  entropyCase.title = 'Fact-checking and producing scientific content before publication.';
  entropyCase.lead = 'Paid contractor supporting an established Italian science-communication brand through evidence review, content production and website delivery.';
  entropyCase.action = 'Conduct recurring primary-literature research and scientific fact-checking. Depending on the assignment, also develop scripts, data analyses, visualizations, slides, on-screen assets, short-form content and selected thumbnails. Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, hosting, DNS, SSL and technical SEO.';
  entropyCase.result = `${audience.projects} documented published content contributions: ${audience.videoProjects} YouTube videos, ${audience.articles} co-authored articles and ${audience.shortForm} short-form pieces. The official work record also indexes selected thumbnail work, which overlaps with video projects and is not added to the total.`;
  entropyCase.boundary = 'Platform metrics describe the production environment, not a personal audience. Quantified thumbnail lift is stated only when comparable analytics are available.';
  entropyCase.href = ENTROPY_WORK_URL;
  entropyCase.mediaHref = ENTROPY_WORK_URL;
  entropyCase.linkLabel = 'View my official Entropy for Life work record';
  entropyCase.mediaLinkLabel = 'View my official Entropy for Life work record';
  entropyCase.links = [{ label: 'Official work record published by Entropy for Life', href: ENTROPY_WORK_URL }];
}

const researchSystemCase = H?.cases?.find((item) => item?.id === 'research-system');
if (researchSystemCase) {
  researchSystemCase.result =
    `${yourselfToScience.resources} resources indexed; as of ${yourselfToScience.asOf}, ${wikidataReferenceStatement()}. FAIRsharing, Zenodo and human- and machine-readable interfaces provide additional public records.`;
  researchSystemCase.boundary =
    'My technical responsibilities cover requirements, information architecture, verification, functional testing, deployment diagnosis and ongoing maintenance; implementation is AI-assisted.';
  researchSystemCase.links = [
    { label: 'View project statistics and Wikidata references', href: yourselfToScience.statsUrl }
  ];
}

if (P.shared) {
  P.shared.location =
    'Italy · EU/EEA work-authorised · Open to sponsored international relocation and B2B engagements';
  if (Array.isArray(P.shared.education)) {
    P.shared.education = P.shared.education.filter((item) => !item.includes('Medicine and Surgery'));
  }
}

if (P.aiSafety) {
  // Keep the first page readable at normal print size. The founder record
  // remains on page two alongside supporting evidence instead of forcing
  // three dense experience entries above a fixed footer.
  P.aiSafety.firstPageExperienceCount = 2;
  P.aiSafety.summary = `AI evaluation and research-verification analyst with self-directed model-behavior testing across chat, image, agentic tool-use and indirect prompt-injection challenges. The Gray Swan Proving Ground profile displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} total breaks on ${graySwan.asOf}. Brings eight years of auditable claim verification and ${audience.projects} published-content contributions inside a ${audience.youtubeSubscribers}-subscriber, ${audience.youtubeViews}-view science-communication environment.`;
  replaceStrength(P.aiSafety, 2, audience.projects, 'Published content contributions', contributionBreakdown());
  const item = useOfficialEntropyRecord(P.aiSafety);
  if (item) {
    item.role = 'Scientific Research, Fact-Checking & Website Maintenance Contractor';
    item.bullets = [
      `Delivered ${audience.projects} documented published content contributions: ${contributionBreakdown()}.`,
      'Conduct recurring primary-literature review and scientific fact-checking; contribute assignment-specific scripts, data analyses, visualizations, slides/on-screen assets, short-form content and selected thumbnail or visual-packaging work.',
      "Designed and built entropyforlife.it in WordPress; formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri for scientific-literature research and error detection."
    ];
  }
  const y2s = P.aiSafety.experience?.find((experience) => experience?.organization?.includes('Yourself to Science'));
  if (y2s?.bullets?.[2]) {
    y2s.bullets[2] =
      'Define requirements, inspect code structure and behavior, test implementations and guide AI-assisted technical iteration through deployment and maintenance.';
  }
}

if (P.researchQuality) {
  P.researchQuality.firstPageExperienceCount = 2;
  P.researchQuality.summary = `Research-verification and data-quality analyst with eight years of auditable scientific, biomedical and structured-data work. Paid contractor across ${audience.projects} documented Entropy for Life content contributions inside a science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views, plus founder of an open research-participation directory with documented verification and metadata workflows.`;
  replaceStrength(
    P.researchQuality,
    1,
    String(yourselfToScience.resources),
    'Research resources indexed',
    `${yourselfToScience.wikidataReferences} unique Wikidata items use the domain as a P854 reference URL`
  );
  replaceStrength(P.researchQuality, 2, audience.projects, 'Published scientific content contributions', contributionBreakdown());
  const item = useOfficialEntropyRecord(P.researchQuality);
  if (item) {
    item.bullets = [
      `Verify primary literature and conduct bibliographic research across ${audience.projects} documented published contributions: ${contributionBreakdown()}.`,
      'Translate complex evidence into clear editorial recommendations, identify unsupported claims and document uncertainty or disagreement between sources.',
      'Designed and built entropyforlife.it in WordPress and manage responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
    ];
  }
  const y2s = P.researchQuality.experience?.find((experience) => experience?.organization?.includes('Yourself to Science'));
  if (y2s) {
    y2s.links = [
      ...(y2s.links || []),
      { label: 'Project statistics', url: yourselfToScience.statsUrl }
    ];
    if (y2s.bullets?.[0]) {
      y2s.bullets[0] =
        `Founded and operate an open-source directory indexing ${yourselfToScience.resources} research-participation resources; as of ${yourselfToScience.asOf}, ${wikidataReferenceStatement()}.`;
    }
  }
}

if (P.editorialCommunity) {
  P.editorialCommunity.summary = `Research, editorial and community coordinator with paid experience across ${audience.projects} documented Entropy for Life content contributions inside an Italian science-communication brand with ${audience.youtubeSubscribers} YouTube subscribers and ${audience.youtubeViews} channel views. Work spans primary-source fact-checking, scripts and visual production, short-form content, performance-aware packaging, selected thumbnails, professional writing and website delivery.`;
  replaceStrength(P.editorialCommunity, 0, audience.projects, 'Published content contributions', contributionBreakdown());
  addSkill(P.editorialCommunity, 'Performance-aware content packaging', 'Thumbnail concepts, visual hierarchy and attention structure informed by click-through rate, watch time, retention and current platform best practices.');
  const item = useOfficialEntropyRecord(P.editorialCommunity);
  if (item) {
    item.bullets = [
      `Support a small recurring science-communication team across ${audience.projects} documented published contributions: ${contributionBreakdown()}.`,
      'Create or support scripts, data analyses, visualizations, presentation slides, on-screen assets, short-form materials and selected thumbnails, with roles attributed per project.',
      'Designed and built entropyforlife.it in WordPress and manage its responsive design, publishing, OVHcloud hosting, DNS, SSL and technical SEO.'
    ];
  }
}

if (P.integrity) {
  P.integrity.firstPageExperienceCount = 2;
  P.integrity.summary = `Trust, safety and source-quality analyst with eight years of auditable Wikimedia work, paid scientific verification across ${audience.projects} documented Entropy for Life content contributions inside a ${audience.youtubeSubscribers}-subscriber science-communication brand, and self-directed adversarial testing of AI systems. The ${graySwan.asOf} Gray Swan snapshot displayed rank #${graySwan.rank} (${graySwan.percentile.toLowerCase()}) and ${graySwan.totalBreaks} Proving Ground total breaks.`;
  const item = useOfficialEntropyRecord(P.integrity);
  if (item) {
    item.bullets = [
      `Investigate scientific and health claims across ${audience.projects} documented published contributions using primary-literature searches, source-quality comparison and cross-source corroboration.`,
      'Co-authored and maintained a rolling H5N1 epidemiological update, reconciling fast-changing reports and documenting source dates.',
      'Communicate uncertainty, conflicting evidence and corrections to a public-facing content team without overstating conclusions.'
    ];
  }
  const gray = P.integrity.experience?.find((experience) => experience?.role?.includes('Model-Behavior'));
  if (gray?.bullets?.[2]) {
    gray.bullets[2] =
      'Apply threat-oriented reasoning and structured evidence capture to ambiguous AI-system behavior.';
  }
  const directoryEvidence = P.integrity.evidence?.find((evidence) => evidence?.title?.includes('Open research-directory'));
  if (directoryEvidence) {
    directoryEvidence.body =
      `Defined inclusion, provenance and entity-reconciliation workflows for ${yourselfToScience.resources} resources; ${yourselfToScience.wikidataReferences} unique Wikidata items use the domain as a P854 reference URL.`;
    directoryEvidence.link = yourselfToScience.statsUrl;
  }
}

module.exports = { ...release, D, H, P, audience, graySwan, yourselfToScience, ENTROPY_WORK_URL };
