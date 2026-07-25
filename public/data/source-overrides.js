/* Application-facing evidence and wording overrides for browser-rendered pages. */
(function applyBrowserOverrides() {
  const D = window.MARIO_DOSSIER;
  if (!D || typeof D !== "object") return;

  const GRAY_SWAN_PROFILE =
    "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf";
  const GRAY_SWAN_EVIDENCE =
    "https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-25.html";
  const GRAY_SWAN_CASE_STUDY = "https://mariomarcolongo.com/security.html";
  const ENTROPY_WEBSITE = "https://entropyforlife.it";
  const ENTROPY_VIDEOS =
    "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh";
  const ENTROPY_ARTICLES =
    "https://entropyforlife.it/autore/mario-marcolongo/";
  const ENTROPY_THUMBNAILS =
    "https://www.youtube.com/playlist?list=PLUXju4zC0Sks";

  function replaceByPrefix(items, prefixes, value) {
    if (!Array.isArray(items)) return;
    const list = Array.isArray(prefixes) ? prefixes : [prefixes];
    const index = items.findIndex(
      (item) =>
        typeof item === "string" &&
        list.some((prefix) => item.startsWith(prefix)),
    );
    if (index >= 0) items[index] = value;
    else items.push(value);
  }

  if (D.identity) {
    D.identity.role =
      "Eight years of verifiable Wikimedia work. A personal genome released to the public domain under an ENA accession. An open-science directory indexing 55+ research initiatives. On Gray Swan AI's Proving Ground, ranked #75 (top 6%) with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot.";
    D.identity.heroSubHtml =
      'Eight years of verifiable Wikimedia work<button class="cite-btn" data-cite="edits" aria-expanded="false" title="Click to inspect source">1</button>. A personal genome<button class="cite-btn" data-cite="ena" aria-expanded="false" title="Click to inspect source">2</button> released to the public domain under an ENA accession. An open-science directory<button class="cite-btn" data-cite="registry" aria-expanded="false" title="Click to inspect platform">3</button> indexing 55+ research initiatives. On Gray Swan AI\'s Proving Ground, ranked <strong>#75 (top 6%)</strong> with <strong>110 platform-recorded challenge breaks</strong> in the 25 July 2026 snapshot. <a href="/evidence/gray-swan-profile-2026-07-25.html" class="evidence-inline-link">Inspect the dated evidence ↗</a>';
    D.identity.languages =
      "Italian (Native / Mother Tongue) · English (C1 overall, EF SET 68/100; advanced technical reading and professional/technical writing)";
  }

  D.summary =
    "Scientific AI evaluation and research data specialist with 8+ years of auditable work verifying biomedical, technical, and structured-data claims. Founder and technical product owner of Yourself to Science™, an open-source directory indexing 55+ research initiatives; defined product requirements, information architecture, research taxonomy, and verification workflows, then used AI-assisted implementation while handling functional validation, debugging, deployment, and maintenance. Ranked #75 (top 6%) on the Gray Swan AI Proving Ground with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot; the Arena profile also displayed rank #370, 27 global unique breaks, 1,090 points, and 246 submissions. Paid contractor for Entropy for Life across 59+ published projects—55+ YouTube video projects and 4 co-authored articles—covering primary-literature research, scientific fact-checking, script development, data visualization, presentation and on-screen assets, selected thumbnails, and website operations.";

  if (Array.isArray(D.pillars)) {
    const editorial = D.pillars.find(
      (item) => item?.category === "EVIDENCE SYNTHESIS & EDITORIAL",
    );
    if (editorial) {
      editorial.desc =
        "Verified 4,300+ public Wikimedia contributions and completed Cochrane Crowd / GALENOS screening training. For Entropy for Life, delivered 59+ published projects: 55+ YouTube video projects and 4 co-authored articles, with primary-literature research, fact-checking, script development, visualization, presentation assets, and selected thumbnails.";
      editorial.highlights = [
        {
          label: "Scientific Editorial Work",
          detail:
            "59+ published projects: 55+ YouTube video projects and 4 co-authored articles",
        },
        ...(Array.isArray(editorial.highlights)
          ? editorial.highlights.slice(1)
          : []),
      ];
    }

    const systems = D.pillars.find(
      (item) =>
        item?.category === "AI SYSTEMS & INFRASTRUCTURE" ||
        item?.title === "AI-Native Engineering & Open Science Data",
    );
    if (systems) {
      systems.category = "AI-ASSISTED PRODUCT DELIVERY & OPEN SCIENCE DATA";
      systems.title = "AI-Assisted Product Delivery & Open Science Data";
      systems.lead =
        "Defining requirements, data models, workflows, validation, deployment, and maintenance for open-science tools and serverless automations.";
      systems.desc =
        "Defined the information architecture, research taxonomy, verification workflows, and public-data model for Yourself to Science™. Used AI-assisted implementation for linked-data interfaces, browser and Telegram tools, and genomics workflows; handled functional testing, debugging, deployment, maintenance, and technical operations.";
      systems.highlights = [
        {
          label: "Product & Data Definition",
          detail:
            "Requirements, taxonomies, verification workflows, public documentation, and machine-readable outputs",
        },
        {
          label: "AI-Assisted Delivery & Operations",
          detail:
            "Codebase navigation, functional testing, debugging, deployment, DNS/SSL, AWS Lambda, and maintenance",
        },
      ];
    }
  }

  if (Array.isArray(D.stats)) {
    const entropyStat = {
      value: "59+ Published Projects",
      label: "Scientific Editorial & Visual Production",
      detail:
        "55+ published YouTube video projects plus 4 co-authored articles for Entropy for Life, including research, fact-checking, script development, visualizations, presentation and on-screen assets, short-form materials, and selected thumbnails.",
    };
    const entropyIndex = D.stats.findIndex(
      (item) =>
        item?.value === "55+ Videos & 4 Articles" ||
        item?.label === "Science Verification & Editorial Acceleration" ||
        item?.label === entropyStat.label,
    );
    if (entropyIndex >= 0) D.stats[entropyIndex] = entropyStat;
    else D.stats.push(entropyStat);

    const grayStat = {
      value: "#75 · Top 6%",
      label: "Gray Swan Proving Ground",
      detail:
        "110 platform-recorded challenge breaks in the 25 July 2026 snapshot; Arena rank #370, 27 global unique breaks, 1,090 points, and 246 submissions. Dated evidence: mariomarcolongo.com/evidence/gray-swan-profile-2026-07-25.html",
    };
    const grayIndex = D.stats.findIndex(
      (item) => item?.label === grayStat.label,
    );
    if (grayIndex >= 0) D.stats[grayIndex] = grayStat;
    else D.stats.unshift(grayStat);

    const order = new Map(
      [
        "Gray Swan Proving Ground",
        "Scientific Editorial & Visual Production",
        "Wikimedia & Knowledge Graph Curation",
        "Empirical Data Visualizations",
        "Web & AI Readiness Architecture",
        "Cloudflare Agent-Ready Audit",
      ].map((label, index) => [label, index]),
    );
    D.stats.sort(
      (a, b) =>
        (order.get(a?.label) ?? order.size) -
        (order.get(b?.label) ?? order.size),
    );
  }

  if (Array.isArray(D.projects)) {
    const yts = D.projects.find((item) => item?.id === "yourself-to-science");
    if (yts) {
      yts.role = "Founder & Technical Product Owner";
      yts.oneLiner =
        "An open-source directory indexing 55+ initiatives where people can contribute biological samples, health data, genomic data, and other personal data to research.";
      yts.description =
        "Defined the product requirements, information architecture, research taxonomy, inclusion criteria, verification workflow, licensing, and public-data model for Yourself to Science™. Used AI-assisted development to implement the directory and its linked-data, API, MCP, and machine-readable interfaces; handled functional validation, iterative debugging, deployment, maintenance, and technical operations.";
      yts.tech = [
        "Product Requirements & Information Architecture",
        "Research Taxonomy & Evidence Verification",
        "AI-Assisted Implementation",
        "Linked Data / JSON-LD / MCP",
        "Functional Testing, Deployment & Maintenance",
      ];
    }

    const entropy = D.projects.find((item) => item?.id === "entropy-for-life");
    if (entropy) {
      entropy.title =
        "Entropy for Life — Scientific Research, Editorial & Website Operations";
      entropy.oneLiner =
        "59+ published projects combining scientific research, fact-checking, script development, visual production, and website operations.";
      entropy.description =
        "Paid contractor for Giacomo Moro Mauretto's Entropy for Life. Delivered primary-literature research, scientific fact-checking, and script development across 55+ published YouTube video projects and 4 co-authored articles. Produced data visualizations, presentation and on-screen assets, short-form materials, and selected thumbnails independently or with video editor Alessandro Lanzoni. Managed OVHCloud hosting, DNS, SSL, WordPress configuration and custom functionality, deployment, maintenance, and technical SEO, using AI-assisted implementation where code changes were required. Formally acknowledged in the Mondadori book Italiani veri.";
      entropy.role =
        "Scientific Research, Fact-Checking & Website Operations Contractor";
      entropy.tech = [
        "Primary-Literature Research",
        "Scientific Fact-Checking",
        "Script Development",
        "Data Visualization & Presentation Assets",
        "WordPress / OVHCloud / Technical SEO",
      ];
      entropy.links = {
        website: ENTROPY_WEBSITE,
        playlist: ENTROPY_VIDEOS,
        authorPage: ENTROPY_ARTICLES,
        youtube: ENTROPY_THUMBNAILS,
      };
      entropy.highlights = [
        "59+ Published Projects: 55+ YouTube video projects and 4 co-authored articles",
        "Research & Editorial Scope: Primary-literature research, fact-checking, script development, and data visualization",
        "Visual Production: Presentation and on-screen assets, short-form materials, and selected thumbnails",
        "Website Operations: Hosting, DNS, SSL, WordPress configuration, deployment, maintenance, and technical SEO",
      ];
    }

    const telegram = D.projects.find((item) => item?.id === "telegram-bot");
    if (telegram) {
      telegram.role = "Creator & Technical Product Owner";
      telegram.description =
        "Defined the interlanguage-link workflow and deployed an AI-assisted serverless implementation on AWS Lambda and API Gateway. Performed functional testing, debugging, deployment automation, dependency maintenance, and production operations for private chats, groups, and inline use.";
    }

    const mdpi = D.projects.find((item) => item?.id === "mdpi-filter");
    if (mdpi) {
      mdpi.role = "Creator & Technical Product Owner";
      mdpi.description =
        "Defined and maintain a browser-extension workflow for highlighting, hiding, or styling MDPI publications across search engines, biomedical databases, and publisher pages. Used AI-assisted implementation, then performed functional testing, debugging, store-release management, maintenance, and security review for Chrome and Edge.";
    }
  }

  if (Array.isArray(D.experience)) {
    const yts = D.experience.find((item) => item?.org === "Yourself to Science™");
    if (yts) {
      yts.role = "Founder & Technical Product Owner";
      yts.bullets = [
        "Founded and manage an open-source directory indexing 55+ research initiatives where people can contribute biological samples, health data, genomic data, or other personal data.",
        "Defined product requirements, information architecture, research taxonomy, inclusion criteria, verification workflows, licensing, and machine-readable outputs.",
        "Used AI-assisted implementation for the website and linked-data/API/MCP interfaces; performed functional testing, iterative debugging, deployment, maintenance, and technical operations.",
      ];
    }

    const gray = D.experience.find(
      (item) => item?.org === "Gray Swan AI Proving Ground",
    );
    if (gray) {
      gray.role = "AI Red-Teaming & Model Behavior Evaluation Practitioner";
      gray.period = "Jul 2026 — Present";
      gray.links = {
        website: GRAY_SWAN_EVIDENCE,
        caseStudy: GRAY_SWAN_CASE_STUDY,
        profile: GRAY_SWAN_PROFILE,
      };
      gray.bullets = [
        "Ranked #75 (top 6%) on the Gray Swan AI Proving Ground with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot; Arena rank #370, 27 global unique breaks, 1,090 points, and 246 submissions.",
        "Area counters displayed 36 Chat, 32 Image, 28 Agent, and 13 Indirect prompt-injection breaks at capture time, demonstrating activity across all four challenge families.",
        "Published dated visual and machine-readable evidence. The previous 24 July snapshot remains separately preserved through Perma.cc and a verified WACZ package.",
        "Formal Gray Swan platform participation began in July 2026; earlier self-directed model testing is not represented as Gray Swan tenure.",
      ];
    }

    const entropy = D.experience.find((item) =>
      item?.org?.startsWith("Entropy for Life"),
    );
    if (entropy) {
      entropy.role =
        "Scientific Research, Fact-Checking & Website Operations Contractor";
      entropy.links = {
        website: ENTROPY_WEBSITE,
        playlist: ENTROPY_VIDEOS,
        authorPage: ENTROPY_ARTICLES,
        youtube: ENTROPY_THUMBNAILS,
      };
      entropy.bullets = [
        "Delivered primary-literature research, scientific fact-checking, and script development across 55+ published YouTube video projects and 4 co-authored articles.",
        "Produced data visualizations, presentation and on-screen assets, short-form materials, and selected YouTube thumbnails independently or with video editor Alessandro Lanzoni.",
        "Managed OVHCloud hosting, DNS, SSL, WordPress configuration and custom functionality, deployment, maintenance, and technical SEO, using AI-assisted implementation where code changes were required.",
        "Formally acknowledged for scientific-literature research and error detection in Giacomo Moro Mauretto's Mondadori book Italiani veri.",
      ];
    }
  }

  if (Array.isArray(D.research)) {
    const genomics = D.research.find((item) =>
      item?.org?.startsWith("European Nucleotide Archive"),
    );
    if (genomics) {
      genomics.role =
        "AI-Assisted Personal Genomics Workflow & Polygenic Risk Scoring (41×)";
      genomics.bullets = [
        "Used Terra.bio to process paired-end FASTQ reads against GRCh38 and produce high-coverage BAM and VCF outputs for a personal, non-clinical research workflow.",
        "Built and ran an AI-assisted local workflow on Apple Silicon, converting VCF data to PLINK2 formats and executing Nextflow pgsc_calc with 1000 Genomes / HGDP ancestry projection.",
        "Used AI-assisted Python scripts to extract VEP-annotated variants and organize polygenic-score, pharmacogenomic, mitochondrial, and HPO/MONDO-linked outputs; manually validated behavior and debugged failures.",
        "Released the FASTQ, BAM, VCF, and derived research outputs to the public domain under ENA PRJEB109744 / BioSample SAMEA121950568.",
      ];
    }
  }

  if (Array.isArray(D.education)) {
    const english = D.education.find((item) =>
      item?.title?.startsWith("EF SET English Certificate"),
    );
    if (english) {
      english.title = "EF SET English Certificate — 68/100 (C1 Overall)";
      english.detail =
        "EF Standard English Test (EF SET); advanced technical reading and professional/technical writing · https://cert.efset.org/jHk84h";
    }
  }

  replaceByPrefix(
    D.skills,
    [
      "AI Red-Teaming & Adversarial Evaluation:",
      "AI Red-Teaming & Model Behavior Evaluation:",
    ],
    `AI Red-Teaming & Model Behavior Evaluation: Gray Swan Proving Ground rank #75 (top 6%) with 110 platform-recorded challenge breaks in the 25 July 2026 snapshot; Arena rank #370, 27 global unique breaks, 1,090 points, and 246 submissions. Evidence: ${GRAY_SWAN_EVIDENCE}`,
  );
  replaceByPrefix(
    D.skills,
    ["Web Engineering & Architecture:", "AI-Assisted Web Product Delivery:"],
    "AI-Assisted Web Product Delivery & Technical Operations: Product requirements, information architecture, research taxonomies, practical codebase navigation, functional testing, iterative debugging, deployment, maintenance, WordPress configuration/customization, HTML/CSS, DNS/SSL, OVHCloud, AWS Lambda, API Gateway, GitHub Actions, and AI-assisted implementation.",
  );
  replaceByPrefix(
    D.skills,
    "Languages:",
    "Languages: Italian (Mother tongue / Native) · English (C1 overall, EF SET 68/100; advanced technical reading and professional/technical writing) · French (Basic A2/A1) · Spanish (Basic A2/A1)",
  );

  function patchRenderedPage() {
    const labels = new Map([
      [ENTROPY_WEBSITE, "Official Website ↗"],
      [ENTROPY_VIDEOS, "55+ YouTube Projects ↗"],
      [ENTROPY_ARTICLES, "4 Co-Authored Articles ↗"],
      [ENTROPY_THUMBNAILS, "Selected Thumbnails ↗"],
      [GRAY_SWAN_EVIDENCE, "Dated Evidence ↗"],
      [GRAY_SWAN_PROFILE, "Live Profile ↗"],
      [GRAY_SWAN_CASE_STUDY, "Case Study ↗"],
    ]);

    document.querySelectorAll("a[href]").forEach((anchor) => {
      const text = anchor.textContent.trim().toLowerCase();
      if (
        text === "fact-checking scientific scripts before publication." ||
        text === "fact-checking scientific scripts before publication"
      ) {
        anchor.href = ENTROPY_VIDEOS;
      }
      const label = labels.get(anchor.href);
      if (label) anchor.textContent = label;
    });

    const languageMeta = document.getElementById("heroLanguages");
    if (languageMeta) languageMeta.textContent = "Italian (Native) & English (C1 Overall)";

    const proofRows = Array.from(document.querySelectorAll(".proof-row"));
    const registryRow = proofRows.find(
      (row) =>
        row.querySelector(".proof-tag")?.textContent.trim() ===
        "Open Research Registry",
    );
    const registryText = registryRow?.querySelector(".proof-text");
    if (registryText && registryText.textContent.includes("Founder & architect")) {
      registryText.innerHTML =
        'Founder and technical product owner of <b>Yourself to Science™</b> (yourselftoscience.org), an open citizen-science directory indexing 55+ research studies and contribution opportunities—cited across 37 Wikidata entities (P854).<button class="cite-btn" data-cite="registry" aria-expanded="false" title="Click to inspect verification source">3</button>';
    }

    const grayRow = proofRows.find(
      (row) => row.querySelector(".proof-tag")?.textContent.trim() === "AI Red-Teaming",
    );
    const grayText = grayRow?.querySelector(".proof-text");
    if (grayText && !grayText.textContent.includes("#75 (top 6%)")) {
      grayText.innerHTML =
        'Ranked <b>#75 (top 6%)</b> on Gray Swan AI\'s Proving Ground with <b>110 platform-recorded challenge breaks</b> in the 25 July 2026 snapshot across Chat, Image, Agent, and Indirect prompt-injection challenges. The same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points, and 246 submissions.<button class="cite-btn" data-cite="grayswan" aria-expanded="false" title="Click to inspect dated evidence">5</button>';
    }

    try {
      if (typeof CITATIONS !== "undefined") {
        if (CITATIONS.registry) {
          CITATIONS.registry.text =
            "Founder and technical product owner of Yourself to Science™—an open citizen-science directory indexing 55+ research initiatives, cited across 37 Wikidata entities (P854).";
        }
        if (CITATIONS.grayswan) {
          CITATIONS.grayswan.text =
            "Dated 25 July 2026 screenshot: Proving Ground rank #75 (top 6%) with 110 total breaks; Arena rank #370 with 27 global unique breaks, 1,090 points, and 246 submissions. Area counters: 36 Chat, 32 Image, 28 Agent, and 13 Indirect.";
          CITATIONS.grayswan.href = GRAY_SWAN_EVIDENCE;
          CITATIONS.grayswan.label = "Dated Gray Swan Evidence ↗";
        }
      }
    } catch (error) {
      console.warn("Unable to update citation metadata", error);
    }
  }

  function runPatches() {
    patchRenderedPage();
    window.setTimeout(patchRenderedPage, 0);
    window.setTimeout(patchRenderedPage, 50);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runPatches);
  } else {
    runPatches();
  }
})();
