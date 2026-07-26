const ENTROPY_WORK_URL = "https://entropyforlife.it/mario-marcolongo-entropy-for-life/";

const PORTFOLIO_HUMAN = {
  eyebrow: "AI evaluation · scientific fact-checking",
  headline: "I test AI systems and verify scientific claims.",
  introduction: "My primary work is AI model-behavior evaluation and scientific fact-checking. I also build and operate research-information tools when a recurring verification problem needs a practical system.",

  proofMoments: [
    {
      value: "110",
      label: "platform-recorded Proving Ground breaks",
      detail: "#75 · top 6% · 25 July 2026",
      href: "/security.html"
    },
    {
      value: "59+",
      label: "published scientific outputs supported",
      detail: "55+ YouTube video projects · 4 co-authored articles",
      href: ENTROPY_WORK_URL
    },
    {
      value: "460K+",
      label: "combined public platform following",
      detail: "Entropy for Life brand audience · 250K+ YouTube subscribers · non-unique",
      href: ENTROPY_WORK_URL
    }
  ],

  heroMedia: [
    {
      id: "model-record",
      label: "AI evaluation",
      title: "Gray Swan Arena profile",
      image: "/media/work/model-behavior-profile.jpg",
      alt: "Screenshot of Mario Marcolongo's Gray Swan Arena and Proving Ground profile showing the dated public ranking and activity record",
      href: "/security.html"
    },
    {
      id: "entropy",
      label: "Scientific fact-checking",
      title: "Published science communication work",
      image: "/media/work/entropy-h5n1.png",
      alt: "Published Entropy for Life science communication output supported through research, fact-checking and production work",
      href: ENTROPY_WORK_URL
    },
    {
      id: "research-directory",
      label: "Research information",
      title: "Yourself to Science",
      image: "/media/work/yourself-to-science-800.webp",
      imageSet: "/media/work/yourself-to-science-400.webp 400w, /media/work/yourself-to-science-800.webp 800w",
      alt: "Screenshot of the Yourself to Science research-participation directory",
      href: "https://yourselftoscience.org/"
    },
    {
      id: "mdpi-filter",
      label: "Research tooling",
      title: "MDPI Filter",
      image: "/media/work/mdpi-filter-1-800.webp",
      imageSet: "/media/work/mdpi-filter-1-400.webp 400w, /media/work/mdpi-filter-1-800.webp 800w",
      alt: "Screenshot of MDPI Filter identifying an MDPI publication in a literature-search workflow",
      href: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
    }
  ],

  scopes: [
    {
      number: "01",
      label: "Primary",
      title: "AI model-behavior evaluation",
      body: "Adversarial and edge-case testing across chat, multimodal inputs, tool use and indirect prompt injection."
    },
    {
      number: "02",
      label: "Primary",
      title: "Scientific fact-checking",
      body: "Primary-literature review for scripts, articles and public scientific communication."
    },
    {
      number: "03",
      label: "Supporting",
      title: "Research information systems",
      body: "Structured records, provenance rules and maintained tools for recurring research-information problems."
    }
  ],

  cases: [
    {
      id: "model-behavior",
      number: "01",
      label: "AI evaluation",
      title: "Finding model failures across four evaluation surfaces.",
      lead: "I tested chat, image, agent and indirect prompt-injection behavior and preserved dated public evidence that keeps Proving Ground and Arena metrics separate.",
      action: "I vary the interaction path, preserve reproduction notes and distinguish direct observations from platform labels, independent verification and model-wide conclusions.",
      result: "#75 on the Proving Ground leaderboard, top 6%, with 110 platform-recorded total breaks on 25 July 2026; the same screenshot shows Arena rank #370, 27 global unique breaks, 1,090 points and 246 submissions.",
      boundary: "This supports model-evaluation and adversarial-QA work. It is not presented as penetration testing or senior red-team engineering.",
      href: "/security.html",
      linkLabel: "Open the evaluation record",
      image: "/media/work/model-behavior-profile.jpg",
      alt: "Screenshot of the dated Gray Swan Arena profile showing Proving Ground rank, percentile, breaks and separate Arena activity metrics",
      imageCaption: "Original Gray Swan profile screenshot · dated public platform record",
      tone: "blue"
    },
    {
      id: "scientific-verification",
      number: "02",
      label: "Scientific fact-checking",
      title: "Fact-checking and producing scientific content before publication.",
      lead: "Entropy for Life is an Italian science-communication brand with 250K+ YouTube subscribers and 460K+ combined public following across YouTube, Instagram and TikTok.",
      action: "Primary-literature research and scientific fact-checking are recurring. Depending on the assignment, I also contribute to script development, data visualization, slide and on-screen assets, and selected thumbnail concepts or production. Audience packaging is optimized around click-through rate, watch time, retention and immediate attention capture.",
      result: "At least 59 documented published projects supported: 55+ YouTube video projects and four co-authored articles, consolidated in an official work record published by Entropy for Life.",
      boundary: "The audience belongs to Entropy for Life, not to me, and the combined platform total is not a count of unique people. Quantified CTR or watch-time lift should only be claimed when comparable channel analytics can be published.",
      href: ENTROPY_WORK_URL,
      linkLabel: "View my official Entropy for Life portfolio",
      mediaHref: ENTROPY_WORK_URL,
      mediaLinkLabel: "View my official Entropy for Life portfolio",
      links: [
        {
          label: "Official work record published by Entropy for Life",
          href: ENTROPY_WORK_URL
        }
      ],
      image: "/media/work/entropy-h5n1.png",
      alt: "Published Entropy for Life science communication output supported through research, fact-checking and production work",
      imageCaption: "Official work record, audience scale and documented contributions",
      tone: "red"
    },
    {
      id: "research-system",
      number: "03",
      label: "Supporting research system",
      title: "Building a maintained directory of research opportunities.",
      lead: "Yourself to Science turns scattered institutional opportunities into a public catalogue with explicit inclusion and update rules.",
      action: "I defined the inclusion criteria, verification fields, provenance model, licensing boundaries, update workflow and public-data requirements, then coordinated AI-assisted implementation and ongoing operation.",
      result: "More than 55 opportunities indexed, with FAIRsharing and Zenodo records and human- and machine-readable interfaces.",
      boundary: "My contribution covers requirements, information architecture, verification, functional testing, deployment diagnosis and operations—not unaided software development.",
      href: "https://yourselftoscience.org/",
      linkLabel: "Explore Yourself to Science",
      image: "/media/work/yourself-to-science-800.webp",
      imageSet: "/media/work/yourself-to-science-400.webp 400w, /media/work/yourself-to-science-800.webp 800w",
      alt: "Screenshot of the Yourself to Science research-participation directory",
      imageCaption: "Live public product · catalogue, provenance and machine-readable records",
      tone: "green"
    }
  ],

  mdpiFilter: {
    label: "Current product",
    title: "MDPI Filter now works in the browser and as a Zotero plugin.",
    body: "The current product identifies MDPI references across literature-search and reference-management workflows while avoiding ambiguous title-based matches. The broader rebrand and expansion to retractions, comments and other research-integrity signals are future work, not shipped functionality.",
    meta: "Chrome · Edge · Firefox · Safari source · Zotero 7–9",
    href: "https://github.com/orgs/mdpi-filter/repositories",
    linkLabel: "Open the product repositories",
    storeHref: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
    storeLabel: "Open the Chrome Web Store listing",
    images: [
      {
        src: "/media/work/mdpi-filter-1-800.webp",
        srcset: "/media/work/mdpi-filter-1-400.webp 400w, /media/work/mdpi-filter-1-800.webp 800w",
        alt: "MDPI Filter highlighting a publication in a literature-search result"
      },
      {
        src: "/media/work/mdpi-filter-2-800.webp",
        srcset: "/media/work/mdpi-filter-2-400.webp 400w, /media/work/mdpi-filter-2-800.webp 800w",
        alt: "MDPI Filter extension interface and filtering controls"
      }
    ]
  },

  featuredArtifact: {
    label: "Scientific visualization",
    title: "A diagram that became a reusable public reference.",
    body: "I designed this vector diagram to show overlap among monogenic conditions associated with autism, dystonia, epilepsy and schizophrenia. The Wikimedia record exposes the source file, authorship, revision history and reuse across four Wikipedia language editions.",
    image: "/media/work/wikimedia-clinical-overlap.svg",
    alt: "Euler diagram of overlapping clinical phenotypes in genes associated with autism spectrum disorder, dystonia, epilepsy and schizophrenia",
    href: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg",
    linkLabel: "Open the Wikimedia source record"
  },

  visualArtifacts: [
    {
      label: "Public-health visualization",
      title: "Mortality patterns",
      image: "/media/work/tableau-mortality-800.webp",
      imageSet: "/media/work/tableau-mortality-400.webp 400w, /media/work/tableau-mortality-800.webp 800w",
      alt: "Screenshot of a public-health mortality data visualization",
      href: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
    },
    {
      label: "Global cancer data",
      title: "Oesophageal cancer incidence",
      image: "/media/work/flourish-oesophageal-cancer.svg",
      alt: "Global visualization of oesophageal cancer incidence",
      href: "https://app.flourish.studio/@Digressivo"
    }
  ],

  moreWork: [
    {
      title: "Protein by bodyweight by country",
      href: "https://jnton.github.io/protein-by-bodyweight-country/"
    },
    {
      title: "English Wikipedia Link Converter",
      href: "https://t.me/ToEnWikipediaBot"
    },
    {
      title: "Emergent Humanity",
      href: "https://jnton.github.io/emergent-humanity/"
    }
  ],

  workingStyle: {
    label: "Working preferences",
    title: "Clear goals, direct feedback and responsibility for the result.",
    body: "I work best when the objective and decision rights are explicit, feedback is direct and I can follow a problem through investigation, documentation, release and maintenance."
  },

  workingPrinciples: [
    {
      title: "Separate observation from interpretation",
      body: "State what was directly observed before drawing a broader conclusion."
    },
    {
      title: "Make assumptions visible",
      body: "Document the definitions, exclusions and judgments that affect the result."
    },
    {
      title: "Plan for maintenance",
      body: "Treat updates, provenance and operational recovery as part of the work."
    }
  ],

  applicationDocuments: [
    {
      title: "AI Evaluation & Model Behavior",
      description: "Model-behavior testing, adversarial QA, evaluation operations and evidence-bound reporting.",
      href: "/cv-resume.html",
      recommendedFor: "Recommended for AI evaluation and safeguards roles"
    },
    {
      title: "Scientific AI Quality & Research Data",
      description: "Scientific evidence review, research-data quality, provenance, metadata and research operations.",
      href: "/cv-research.html",
      recommendedFor: "Scientific AI and research-data roles"
    },
    {
      title: "Trust, Safety & Knowledge Integrity",
      description: "Source provenance, public-record research, content integrity and investigation support.",
      href: "/cv-integrity.html",
      recommendedFor: "Integrity and investigation roles"
    },
    {
      title: "Research, Editorial & Content Operations",
      description: "Scientific fact-checking, editorial coordination, audience packaging, evidence synthesis and content operations.",
      href: "/cv-editorial.html",
      recommendedFor: "Editorial, content-operations and audience-quality roles"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}
