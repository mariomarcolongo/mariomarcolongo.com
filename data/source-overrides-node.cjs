/*
 * Application-ready evidence overrides.
 *
 * This preload mutates the existing MARIO_DOSSIER object in Node's module
 * cache before the dossier generators import data/source.js. It keeps the
 * public site, CV exports, and machine-readable files aligned with the dated
 * evidence snapshot while the older monolithic source file is being retired.
 */

const D = require("./source.js");

const GRAY_SWAN_PROFILE =
  "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf";
const GRAY_SWAN_EVIDENCE =
  "https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-24.html";
const GRAY_SWAN_CASE_STUDY = "https://mariomarcolongo.com/security.html";
const ENTROPY_VIDEOS =
  "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh";
const ENTROPY_ARTICLES =
  "https://entropyforlife.it/autore/mario-marcolongo/";
const ENTROPY_THUMBNAILS =
  "https://www.youtube.com/playlist?list=PLUXju4zC0Sks";

function replaceByPrefix(items, prefix, value) {
  if (!Array.isArray(items)) return;
  const index = items.findIndex(
    (item) => typeof item === "string" && item.startsWith(prefix),
  );
  if (index >= 0) items[index] = value;
  else items.unshift(value);
}

function applyEvidenceOverrides(dossier) {
  if (!dossier || typeof dossier !== "object") return dossier;

  if (dossier.identity) {
    dossier.identity.role =
      "Eight years of verifiable Wikimedia work holding up under scrutiny. A personal genome released to the public domain under an ENA accession. An open-science directory indexing 55+ research initiatives. On Gray Swan AI's Proving Ground, ranked #77 (top 7%) with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot across chat, image, agentic tool-use, and indirect prompt-injection challenges.";
    dossier.identity.heroSubHtml =
      'Eight years of verifiable Wikimedia work<button class="cite-btn" data-cite="edits" aria-expanded="false" title="Click to inspect source">1</button> holding up under scrutiny. A personal genome<button class="cite-btn" data-cite="ena" aria-expanded="false" title="Click to inspect source">2</button> released to the public domain under an ENA accession. An open-science directory<button class="cite-btn" data-cite="registry" aria-expanded="false" title="Click to inspect platform">3</button> indexing 55+ research initiatives. On Gray Swan AI\'s Proving Ground, ranked <strong>#77 (top 7%)</strong> with <strong>106 platform-recorded challenge breaks</strong> in the archived 24 July 2026 snapshot. <a href="/evidence/gray-swan-profile-2026-07-24.html" class="evidence-inline-link">Inspect the dated evidence ↗</a>';
  }

  dossier.summary =
    "Scientific AI evaluation and research data specialist with 8+ years of auditable work verifying biomedical, technical, and structured-data claims across public knowledge bases. Founder and lead builder of Yourself to Science™, an open-source directory indexing 55+ clinical studies, biobanks, donation programs, registries, and other research initiatives. Ranked #77 (top 7%) on the Gray Swan AI Proving Ground with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot; the public Arena profile also reported 24 global unique breaks, 1,050 points, and 242 submissions. Paid contractor for Entropy for Life across 59+ documented editorial projects—55+ published YouTube video projects and 4 co-authored articles—performing primary-literature research, scientific fact-checking, script development, data visualization, presentation-slide and on-screen asset creation, and selected thumbnail production. Additional Instagram and TikTok work is not yet fully indexed in the public portfolio. Formally acknowledged in Giacomo Moro Mauretto's Mondadori book Italiani veri and previously contributed to standardized psychological focus-group research at the University of Padua.";

  if (Array.isArray(dossier.pillars)) {
    const editorial = dossier.pillars.find(
      (pillar) => pillar && pillar.category === "EVIDENCE SYNTHESIS & EDITORIAL",
    );
    if (editorial) {
      editorial.desc =
        "Verified 4,300+ public Wikimedia contributions and completed formal Cochrane Crowd / GALENOS screening training. For Entropy for Life, delivered 59+ documented editorial projects: 55+ published YouTube video projects and 4 co-authored articles. Most video assignments combined primary-literature research, fact-checking, and script development; selected assignments focused on fact-checking and/or data visualization.";
      if (Array.isArray(editorial.highlights) && editorial.highlights[0]) {
        editorial.highlights[0] = {
          label: "Scientific Editorial Work",
          detail:
            "59+ documented projects: 55+ YouTube video projects and 4 co-authored articles, with research, fact-checking, script development, visualization, and presentation assets",
        };
      }
    }
  }

  if (Array.isArray(dossier.stats)) {
    const oldEntropyIndex = dossier.stats.findIndex(
      (stat) =>
        stat &&
        (stat.value === "55+ Videos & 4 Articles" ||
          stat.label === "Science Verification & Editorial Acceleration" ||
          stat.label === "Scientific Editorial & Visual Production"),
    );
    const entropyStat = {
      value: "59+ Documented Projects",
      label: "Scientific Editorial & Visual Production",
      detail:
        "55+ published YouTube video projects plus 4 co-authored articles for Entropy for Life; additional Instagram/TikTok work is not yet fully indexed. Contributions included literature research, fact-checking, script development, data visualizations, presentation slides, Reels assets, and selected thumbnails.",
    };
    if (oldEntropyIndex >= 0) dossier.stats[oldEntropyIndex] = entropyStat;
    else dossier.stats.push(entropyStat);

    const graySwanStat = {
      value: "#77 · Top 7%",
      label: "Gray Swan Proving Ground",
      detail:
        "106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot; the public Arena profile also reported 24 global unique breaks, 1,050 points, and 242 submissions. Dated evidence: https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-24.html",
    };
    const existingGraySwan = dossier.stats.findIndex(
      (stat) => stat && stat.label === "Gray Swan Proving Ground",
    );
    if (existingGraySwan >= 0) dossier.stats[existingGraySwan] = graySwanStat;
    else dossier.stats.unshift(graySwanStat);
  }

  if (Array.isArray(dossier.projects)) {
    const entropy = dossier.projects.find(
      (project) => project && project.id === "entropy-for-life",
    );
    if (entropy) {
      entropy.title =
        "Entropy for Life — Scientific Research, Editorial & Web Platform";
      entropy.oneLiner =
        "Research verification, script development, visual production, and technical web ownership for a 480,000+ science-communication community.";
      entropy.description =
        "Paid contractor for Giacomo Moro Mauretto's Entropy for Life. Delivered primary-literature research, scientific fact-checking, and script development across 55+ published YouTube video projects and 4 co-authored articles. Most video assignments combined all three functions; selected projects were limited to fact-checking and/or data visualization. Produced data visualizations, presentation slides and on-screen assets, short-form/Reels materials, and selected thumbnails independently or in collaboration with video editor Alessandro Lanzoni. Additional Instagram/TikTok work is not yet fully indexed. Sole web developer for the official WordPress platform, managing OVHCloud hosting, DNS, SSL, custom functionality, and technical SEO. Formally acknowledged in the Mondadori book Italiani veri.";
      entropy.role =
        "Scientific Research, Fact-Checking & Technical Web Contractor";
      entropy.tech = [
        "Primary-Literature Research",
        "Scientific Fact-Checking",
        "Script Development",
        "Data Visualization & Presentation Design",
        "WordPress / OVHCloud / Technical SEO",
      ];
      entropy.links = {
        website: "https://entropyforlife.it",
        playlist: ENTROPY_VIDEOS,
        authorPage: ENTROPY_ARTICLES,
        youtube: ENTROPY_THUMBNAILS,
      };
      entropy.highlights = [
        "59+ Documented Editorial Projects: 55+ published YouTube video projects and 4 co-authored articles; additional Instagram/TikTok contributions are not yet fully indexed",
        "Scoped Production Work: Most video assignments combined literature research, fact-checking, and script development; selected assignments focused on fact-checking and/or data visualization",
        "Visual & Technical Delivery: Created presentation slides, on-screen assets, Reels, and selected thumbnails independently or with Alessandro Lanzoni; owned the official WordPress/OVHCloud platform",
        "Mondadori Book Acknowledgment: Formally recognized for scientific-literature research and error detection in Italiani veri",
      ];
    }
  }

  if (Array.isArray(dossier.experience)) {
    const graySwan = dossier.experience.find(
      (experience) =>
        experience && experience.org === "Gray Swan AI Proving Ground",
    );
    if (graySwan) {
      graySwan.role =
        "AI Red-Teaming & Model Behavior Evaluation Practitioner";
      graySwan.period = "Jul 2026 — Present";
      graySwan.links = {
        website: GRAY_SWAN_EVIDENCE,
        caseStudy: GRAY_SWAN_CASE_STUDY,
        profile: GRAY_SWAN_PROFILE,
      };
      graySwan.bullets = [
        "Ranked #77 (top 7%) on the Gray Swan AI Proving Ground with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot; the public Arena profile also reported 24 global unique breaks, 1,050 points, and 242 submissions.",
        "Public area counters displayed 36 Chat, 32 Image, 26 Agent, and 11 Indirect prompt-injection breaks at capture time, demonstrating cross-modality evaluation rather than a single prompt category.",
        "Preserved the profile as an ArchiveWeb.page WACZ and a public Perma.cc capture, with SHA-256 hashes and package-verification metadata documented in a dated evidence manifest.",
        "Formal Gray Swan platform participation began in July 2026; earlier activity consisted of self-directed model-behavior testing and is not represented as Gray Swan tenure.",
      ];
    }

    const entropyExperience = dossier.experience.find(
      (experience) =>
        experience &&
        typeof experience.org === "string" &&
        experience.org.startsWith("Entropy for Life"),
    );
    if (entropyExperience) {
      entropyExperience.role =
        "Scientific Research, Fact-Checking & Technical Web Contractor";
      entropyExperience.links = {
        website: "https://entropyforlife.it",
        playlist: ENTROPY_VIDEOS,
        authorPage: ENTROPY_ARTICLES,
        youtube: ENTROPY_THUMBNAILS,
      };
      entropyExperience.bullets = [
        "Delivered primary-literature research, scientific fact-checking, and script development across 55+ published YouTube video projects and 4 co-authored articles; most assignments combined all three functions, while selected projects focused only on fact-checking and/or data visualization.",
        "Produced data visualizations, presentation slides and on-screen assets, short-form/Reels materials, and selected YouTube thumbnails independently or in collaboration with video editor Alessandro Lanzoni; additional Instagram/TikTok work remains not yet fully indexed in the public portfolio.",
        "Formally acknowledged for scientific-literature research and error detection on the final page of Giacomo Moro Mauretto's Mondadori book Italiani veri. Storia evolutiva e genetica del nostro Paese.",
        "Sole web developer for the official website, managing the OVHCloud lifecycle (hosting, DNS, SSL), custom WordPress layout/functionality, and technical SEO.",
      ];
    }
  }

  replaceByPrefix(
    dossier.skills,
    "AI Red-Teaming & Adversarial Evaluation:",
    `AI Red-Teaming & Model Behavior Evaluation: Gray Swan Proving Ground rank #77 (top 7%) with 106 platform-recorded challenge breaks in the archived 24 July 2026 snapshot; the public Arena profile also reported 24 global unique breaks, 1,050 points, and 242 submissions. Evidence: ${GRAY_SWAN_EVIDENCE}`,
  );

  return dossier;
}

applyEvidenceOverrides(D);

module.exports = D;
