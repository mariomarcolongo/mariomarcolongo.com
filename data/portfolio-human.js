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
      href: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
    },
    {
      value: "4,317",
      label: "auditable public-knowledge contributions",
      detail: "Wikipedia, Wikidata and Wikimedia Commons · July 2026",
      href: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
    }
  ],

  heroMedia: [
    {
      id: "model-record",
      label: "AI evaluation",
      title: "Gray Swan evaluation record",
      image: "/media/work/gray-swan-summary-2026-07-25.svg",
      alt: "Dated Gray Swan activity summary showing Proving Ground rank 75, top 6 percent and 110 total breaks, with Arena metrics shown separately",
      href: "/security.html"
    },
    {
      id: "entropy",
      label: "Scientific fact-checking",
      title: "59+ published projects supported",
      image: "/media/work/entropy-work-overview.svg",
      alt: "Entropy for Life contribution overview showing more than 55 YouTube video projects, four co-authored articles and the roles contributed across outputs",
      href: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
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
      image: "/media/work/gray-swan-summary-2026-07-25.svg",
      alt: "Dated summary of Mario Marcolongo's Gray Swan Proving Ground and Arena activity, with the two metric sets presented separately",
      imageCaption: "Dated platform summary · #75 · top 6% · 110 Proving Ground breaks",
      tone: "blue"
    },
    {
      id: "scientific-verification",
      number: "02",
      label: "Scientific fact-checking",
      title: "Fact-checking scientific productions before publication.",
      lead: "In a small recurring production team, I verify the evidence behind YouTube videos, documentaries and articles before publication.",
      action: "Fact-checking is the recurring component. Depending on the production, I also contribute to script development, data visualization, slide creation and thumbnail direction or design, and I attribute those roles per item rather than treating every output as identical.",
      result: "At least 59 published projects supported: 55+ YouTube video projects indexed through the contribution playlist, plus four co-authored articles. A separate playlist records selected thumbnail work.",
      boundary: "Final wording, editing and publication remain with the team. The current thumbnail playlist includes work created predominantly or entirely by me and work developed collaboratively with the video editor; direction-only thumbnails are not yet included.",
      href: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
      linkLabel: "Open the YouTube contribution playlist",
      mediaHref: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
      mediaLinkLabel: "Open the 55+ YouTube contribution playlist",
      links: [
        {
          label: "YouTube contribution playlist",
          href: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh"
        },
        {
          label: "Four co-authored articles",
          href: "https://entropyforlife.it/autore/mario-marcolongo/"
        },
        {
          label: "Selected thumbnail-work playlist",
          href: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"
        },
        {
          label: "Official Entropy for Life website",
          href: "https://entropyforlife.it"
        }
      ],
      image: "/media/work/entropy-work-overview.svg",
      alt: "Contribution overview for Mario Marcolongo's Entropy for Life work, separating more than 55 video projects from four co-authored articles and listing the varying production roles",
      imageCaption: "59+ published projects · 55+ video projects · 4 articles · roles attributed per output",
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
      title: "Research, Editorial & Community Operations",
      description: "Scientific fact-checking, editorial coordination, evidence synthesis and participant-facing research operations.",
      href: "/cv-editorial.html",
      recommendedFor: "Editorial and research-operations roles"
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_HUMAN;
}

export default PORTFOLIO_HUMAN;
