/**
 * SINGLE SOURCE OF TRUTH (SSOT) — Mario Marcolongo
 *
 * Public portfolio, master CV, application CVs and machine-readable dossiers
 * are generated from this source-backed record.
 */

function createMarioDossier() {
  return {
  // Approved public projection. Legacy fields below support historical records only.
  presence: {
  "schemaVersion": 1,
  "name": "Mario Marcolongo",
  "canonicalUrl": "https://mariomarcolongo.com",
  "reviewedAt": "2026-09-12",
  "email": "me@mariomarcolongo.com",
  "github": "https://github.com/jnton",
  "linkedin": "https://www.linkedin.com/in/mario-marcolongo",
  "currentPositioning": "Research & Technical Operations",
  "location": "Based in Italy · EU citizen · Seeking opportunities abroad",
  "citizenship": [
    "Italy"
  ],
  "usWorkAuthorization": "not_established",
  "developmentDirection": [
    "Technical implementation",
    "Data quality",
    "Systems diagnosis"
  ],
  "headline": "Find the source. Fix the problem.",
  "description": "Scientific fact-checking, source investigation and practical technical work, with published contributions, accepted open-source changes and inspectable evidence.",
  "subheadline": "I investigate scientific claims, reconcile conflicting sources and troubleshoot practical workflows. Since 2023, I’ve combined paid science work with website operations, alongside sustained Wikimedia contributions and independent projects.",
  "contact": "I’m looking for research operations, technical support and implementation opportunities outside Italy. Have a role where careful investigation leads to a practical result? Let’s talk.",
  "availability": "Open to relocation and international remote work. I can work in the EU as an Italian citizen; opportunities elsewhere depend on the role’s hiring and work-authorization arrangements.",
  "authorship": "I use AI tools extensively for implementation. My contributions include defining problems and requirements, inspecting behavior, testing, diagnosing failures and maintaining the resulting tools. Each case identifies external review and remaining validation limits.",
  "machineSummary": "Mario Marcolongo works on scientific information quality, research operations and practical technical problems. His evidence includes paid science communication work, public source investigations and accepted open source contributions. Based in Italy, he is an Italian citizen studying IT through Metropolia Open UAS and developing independent Python, SQL and quantitative skills.",
  "resumeRoutes": {
    "default": "/cv",
    "technical": "/cv-technical",
    "aiEvaluation": "/cv-ai"
  },
  "education": [
    {
      "institution": "Metropolia University of Applied Sciences",
      "title": "Open UAS Information Technology path studies",
      "period": "Aug 2026–Present",
      "startDate": "2026-08",
      "endDate": null,
      "status": "open_uas_path_enrolled",
      "description": "English-taught, online Open UAS path studies (non-degree). Python Programming: 3 ECTS, Pass, assessed 15 Sep 2026.",
      "programExtentECTS": 120,
      "creditsAwarded": 3,
      "degreeAwarded": false,
      "expectedDegreeCompletion": null,
      "sourceUrl": "https://www.metropolia.fi/en/study-at-metropolia/open-university/path-studies/it-online",
      "attainments": [
        {
          "name": "Python Programming",
          "code": "TT00CB02",
          "creditsECTS": 3,
          "grade": "Pass",
          "assessedAt": "2026-09-15",
          "sourceType": "user_supplied_institutional_transcript",
          "transcriptDate": "2026-09-19",
          "observedAt": "2026-09-19",
          "sourceUrl": null
        }
      ],
      "lastReviewedAt": "2026-09-19"
    },
    {
      "institution": "University of Campania Luigi Vanvitelli",
      "title": "Medicine studies, degree not completed",
      "period": "2020–2023",
      "startDate": "2020",
      "endDate": "2023",
      "status": "degree_not_completed",
      "degreeAwarded": false,
      "sourceUrl": null
    }
  ],
  "languages": {
    "text": "Italian native · English: EF SET C1 overall, 68/100 (Mar 2024)",
    "sourceUrl": "https://cert.efset.org/jHk84h",
    "issuedAt": "2024-03-26",
    "scores": {
      "overall": 68,
      "reading": 75,
      "listening": 81,
      "writing": 59,
      "speaking": 55
    }
  },
  "claims": [
    {
      "id": "entropy-published-work",
      "text": "Contributed research, fact-checking and production support to 80 documented published pieces: 55 videos, 4 articles and 21 short-form pieces.",
      "sourceUrl": "https://entropyforlife.it/mario-marcolongo-entropy-for-life/",
      "sourceOwner": "client_organization",
      "evidenceType": "organizational_work_record",
      "engagementType": "paid_contractor",
      "limitation": "The attribution record is on a site I help manage. Responsibilities varied by assignment; the organization’s audience is not my personally attributable reach.",
      "startDate": "2023-06",
      "endDate": null,
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "atlas-pr-52-accepted",
      "text": "Contributed merged PR #52: migration validation portability.",
      "sourceUrl": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/52",
      "sourceOwner": "upstream_project",
      "evidenceType": "external_acceptance",
      "engagementType": "open_source_contribution",
      "limitation": "Acceptance covers the submitted change; it does not establish authorship of the wider research or independent engineering proficiency.",
      "startDate": "2026-09-03",
      "endDate": "2026-09-03",
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "atlas-pr-54-accepted",
      "text": "Contributed merged PR #54: portable repository instruction adapters.",
      "sourceUrl": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/54",
      "sourceOwner": "upstream_project",
      "evidenceType": "external_acceptance",
      "engagementType": "open_source_contribution",
      "limitation": "Acceptance covers the submitted change; it does not establish authorship of the wider research or independent engineering proficiency.",
      "startDate": "2026-09-03",
      "endDate": "2026-09-03",
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "atlas-pr-61-accepted",
      "text": "Contributed merged PR #61: repository instruction organization.",
      "sourceUrl": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/61",
      "sourceOwner": "upstream_project",
      "evidenceType": "external_acceptance",
      "engagementType": "open_source_contribution",
      "limitation": "Acceptance covers the submitted change; it does not establish authorship of the wider research or independent engineering proficiency.",
      "startDate": "2026-09-06",
      "endDate": "2026-09-06",
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "yourself-to-science-directory",
      "text": "Maintained a directory containing 55 research-participation resources in the dated review.",
      "sourceUrl": "https://github.com/yourselftoscience/yourselftoscience.org",
      "sourceOwner": "project_maintainer",
      "evidenceType": "public_artifact",
      "engagementType": "independent_project",
      "limitation": "37 Wikidata items referenced the project URL in the dated check; these are not 37 users or independent citations. A deposited DOI is not peer review.",
      "startDate": null,
      "endDate": null,
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "gray-swan-july-29",
      "text": "Dated Proving Ground record: rank #74, top 6%, on 29 July 2026.",
      "sourceUrl": "https://mariomarcolongo.com/evidence/gray-swan-2026-07-29/",
      "sourceOwner": "platform_record_captured_by_account_holder",
      "evidenceType": "dated_platform_snapshot",
      "engagementType": "independent_evaluation",
      "limitation": "The displayed total is 113; four visible area counters sum to 112. Arena figures are separate. This is not a current ranking or paid engagement.",
      "startDate": "2026-07-29",
      "endDate": "2026-07-29",
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "notandia-source-release",
      "text": "Developed and maintained an AI-assisted browser tool for research-result workflows; case study distinguishes released store versions from capabilities currently in source.",
      "sourceUrl": "https://github.com/notandia/browser-extension",
      "sourceOwner": "project_maintainer",
      "evidenceType": "public_source_and_store_records",
      "engagementType": "independent_project",
      "limitation": "The inspected legacy store record showed version 0.0.2 (June 2025), 11 users and one rating. Expanded source capabilities are not asserted to ship in every store.",
      "startDate": null,
      "endDate": null,
      "observedAt": "2026-09-12",
      "lastReviewedAt": "2026-09-12",
      "visibility": "public"
    },
    {
      "id": "metropolia-python-3ects",
      "text": "Python Programming (TT00CB02): 3 ECTS, Pass, assessed 15 September 2026.",
      "engagementType": "open_uas_study",
      "startDate": null,
      "endDate": "2026-09-15",
      "observedAt": "2026-09-19",
      "lastReviewedAt": "2026-09-19",
      "sourceUrl": null,
      "sourceOwner": "Metropolia University of Applied Sciences",
      "evidenceType": "user_supplied_institutional_transcript",
      "limitation": "Based on transcript text supplied by the student, dated 19 September 2026. The private transcript is not published. This is one completed course in a non-degree Open UAS pathway, not an awarded degree or proof of professional programming proficiency.",
      "visibility": "public"
    }
  ],
  "projects": [
    {
      "id": "entropy",
      "name": "Entropy for Life",
      "hook": "Scientific evidence behind published work",
      "route": "/work/entropy",
      "status": "Paid contractor · Jun 2023–Present",
      "text": "Research, fact-checking and production support for 80 published science pieces, alongside website operations.",
      "claimIds": [
        "entropy-published-work"
      ],
      "image": "/media/work/entropy-h5n1.png",
      "alt": "Published Entropy for Life science content about H5N1",
      "links": [
        {
          "label": "Organizational work record",
          "url": "https://entropyforlife.it/mario-marcolongo-entropy-for-life/"
        },
        {
          "label": "Published science content",
          "url": "https://entropyforlife.it/"
        }
      ],
      "sections": [
        {
          "heading": "Problem",
          "text": "Published science content has to communicate clearly while remaining faithful to the underlying evidence. Sources differ in design, scope and certainty; a useful script or article must preserve those distinctions without asking the audience to read every paper. My contribution sits inside that production process, alongside the creator’s editorial decisions and other contributors’ work."
        },
        {
          "heading": "My contribution",
          "text": "I have contributed paid research, scientific fact-checking and production support since June 2023. Responsibilities varied by assignment: retrieving scientific sources, checking claims against the source material and supporting English-to-Italian localization where relevant. Publishing and technical website operations became part of my responsibilities in September 2023. This is a contractor relationship, not a claim to have created every component of the channel or its output."
        },
        {
          "heading": "Result",
          "text": "The dated organizational work record attributes contributions to 80 published pieces: 55 videos, four articles and 21 short-form pieces. Eleven thumbnail contributions overlap with that work and are not eleven additional published pieces. The record connects the contribution to public outputs rather than using the organization’s audience as a personal performance metric. No quantified increase in accuracy, reach or production speed is asserted."
        },
        {
          "heading": "How to inspect the work",
          "text": "Start with the organizational work record, which links the published pieces. Choose a piece and distinguish its public credits and source material from the broader description of my role here. The record supports attribution to real outputs; it does not assign identical responsibilities to me on every item. The H5N1 image is an example of the published science content, not a stand-alone scientific finding or an image offered as proof of sole authorship."
        },
        {
          "heading": "Evidence ownership and limits",
          "text": "The attribution page belongs to Entropy for Life, on a website I help manage. It is an organizational work record, not wholly independent verification of each underlying scientific claim. The client’s editorial voice, audience and overall production are not personally attributable achievements. A specific reference would require the person’s permission; no private correspondence is presented as a public endorsement."
        },
        {
          "heading": "What this demonstrates",
          "text": "The work supports scientific source retrieval, fact-checking, source-faithful communication and delivery within an ongoing paid relationship. Website operations add practical publishing experience. The evidence is strongest when a reviewer follows the output and asks about the particular assignment. It does not establish a medical qualification, original clinical research or independent software-engineering proficiency."
        }
      ],
      "highlight": {
        "value": "80",
        "label": "published pieces",
        "detail": "55 videos · 4 articles · 21 short-form pieces",
        "caption": "Attributed contributions · reviewed Sep 2026"
      }
    },
    {
      "id": "atlas",
      "name": "AI Safety Formalization Atlas",
      "hook": "Diagnosing repository tooling problems",
      "route": "/work/atlas",
      "status": "Open-source contributor · Sep 2026",
      "text": "Diagnosed a macOS validation failure and contributed accepted changes to repository tooling and instructions.",
      "claimIds": [
        "atlas-pr-52-accepted",
        "atlas-pr-54-accepted",
        "atlas-pr-61-accepted"
      ],
      "links": [
        {
          "label": "Accepted PR #52",
          "url": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/52"
        },
        {
          "label": "Accepted PR #54",
          "url": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/54"
        },
        {
          "label": "Accepted PR #61",
          "url": "https://github.com/mbrcic/ai-safety-formalization-atlas/pull/61"
        }
      ],
      "sections": [
        {
          "heading": "Problem",
          "text": "A validation workflow should distinguish defects in the submitted work from defects in the checking environment. During repository work on the AI Safety Formalization Atlas, macOS compatibility exposed an assumption inside the workflow itself. Quiet mode could fail before the intended checks ran. That made an apparently simple validation failure a question about how the command was being invoked."
        },
        {
          "heading": "My contribution",
          "text": "PR #52 addressed migration validation portability. I worked through the observable failure and a narrow, reviewable change using AI-assisted implementation. The Bash 3.2 issue concerned empty-array expansion under set -u; the quiet recursive invocation was changed to keep the argument array nonempty. The same contribution activated the CI virtual environment explicitly, checked actual directory-entry case for Lean targets and excluded Finder metadata. These are tooling and repository-hygiene changes."
        },
        {
          "heading": "Checks and result",
          "text": "The PR description records the quiet gate invocation, focused compatibility and coverage tests with 27 passing tests, type checking and whitespace checks. Those are the checks reported for that contribution; this portfolio build does not rerun them or turn their result into an assurance about every environment. The upstream maintainer merged PR #52 on 3 September 2026. The public diff and review are the evidence of what changed and what was accepted."
        },
        {
          "heading": "The other accepted contributions",
          "text": "PR #54 added portable instruction adapters around the existing repository instructions. Its public record includes a review correction to an import reference and a limitation: the full gate stopped because the local Python lacked PyYAML. PR #61 reorganized repository instructions into task-scoped policy files and a small routing entry point. Its acceptance occurred on 6 September 2026. These contributions concern how repository guidance is found and used, not new safety theorems."
        },
        {
          "heading": "Scope and authorship",
          "text": "I am an open-source contributor to the Atlas. I do not claim authorship of the project, its formalizations or the underlying research. The accepted portability change did not modify a Lean theorem, proof or toolchain. Public maintainer acceptance is a meaningful external signal about a bounded contribution. It is not a substitute for an independent assessment of my programming proficiency or an independent review of the project’s scientific conclusions."
        },
        {
          "heading": "How to verify",
          "text": "Open PR #52 and inspect Files changed alongside its description. The Bash change is useful to compare with the visible symptom: a validation command stopping at its own invocation. Then read the separate records for #54 and #61 rather than treating three merged PRs as three instances of the same work. Their dates and validation boundaries remain attached to the individual changes."
        },
        {
          "heading": "What I bring to a similar problem",
          "text": "This case shows a practical approach to troubleshooting: observe the failing behavior, inspect the environment assumption, narrow the change and leave a public review trail. My contribution includes defining the problem, inspecting behavior, testing and diagnosing failures while using AI tools extensively for implementation. The next stronger evidence would be repeated delivery or an independently assessed task; it is not claimed here as an achievement already completed."
        }
      ],
      "highlight": {
        "value": "3",
        "label": "merged contributions",
        "detail": "Portability · instruction adapters · documentation",
        "caption": "Upstream acceptance · September 2026"
      }
    },
    {
      "id": "yourself-to-science",
      "name": "Yourself to Science",
      "hook": "Organizing research opportunities with provenance",
      "route": "/work/yourself-to-science",
      "status": "Founder · Independent maintained project",
      "text": "I founded and maintain a directory that helps people find research-participation opportunities and follow their original sources.",
      "claimIds": [
        "yourself-to-science-directory"
      ],
      "image": "/media/work/yourself-to-science-800.webp",
      "alt": "Yourself to Science research-participation directory",
      "links": [
        {
          "label": "Open directory",
          "url": "https://yourselftoscience.org"
        },
        {
          "label": "Source and inclusion records",
          "url": "https://github.com/yourselftoscience/yourselftoscience.org"
        }
      ],
      "sections": [
        {
          "heading": "Problem",
          "text": "Research-participation opportunities are spread across institutions and project websites. A directory is useful only if readers can identify the opportunity, find its original source and understand what an entry represents. Organizing links is therefore also a provenance and maintenance task: an entry needs a defensible inclusion decision, not just an appealing description."
        },
        {
          "heading": "My contribution",
          "text": "I maintain Yourself to Science as an independent research-participation directory. My work includes defining the resource structure, organizing entries and linking source records. Technical implementation is AI-assisted. My contribution is to the requirements, information organization, behavior review and maintenance of the resource; it is not a claim to conduct the studies listed or to represent the institutions behind them."
        },
        {
          "heading": "Result",
          "text": "The dated review found 55 resources. A separate check found 37 Wikidata items that referenced the project URL. The two counts answer different questions: the first describes directory scope and the second a form of reference use. Neither establishes 37 active users, 37 independent scholarly citations or participation in 55 studies. Counts describe the inspected state and are not presented as live counters."
        },
        {
          "heading": "How to inspect it",
          "text": "Open the directory and follow an entry to the original research source. The project repository provides the structure and source history used to maintain the resource. A reviewer can compare the public presentation with those records and inspect changes over time. For any individual opportunity, the originating institution’s current eligibility, consent and participation information governs; a directory entry does not replace those materials."
        },
        {
          "heading": "Publication and validation limits",
          "text": "A publicly deposited DOI provides a persistent record. It does not establish peer review of the directory or scientific validation of its design. Wikidata references establish the referenced URL’s appearance in structured records, with their own provenance. They do not independently verify every statement on the website. No verified user count, revenue figure or effect on recruitment is claimed."
        },
        {
          "heading": "What this demonstrates",
          "text": "The relevant work is information organization with inspectable sources, practical requirements and continued maintenance. The useful hiring question is whether the entries and changes are clear enough for someone else to review. The directory is presented as one independent project, separate from paid Entropy work and accepted Atlas contributions, so its evidence is not mistaken for employment or institutional endorsement."
        }
      ],
      "highlight": {
        "value": "55",
        "label": "research resources",
        "detail": "Documented inclusion decisions and source records",
        "caption": "Directory snapshot · September 2026"
      }
    },
    {
      "id": "investigations",
      "name": "Source investigations",
      "hook": "From conflicting records to a defensible conclusion",
      "route": "/investigations",
      "status": "Public-source contributions",
      "text": "Selected cases showing what I checked, which evidence changed the conclusion and what remains uncertain.",
      "claimIds": [],
      "links": [],
      "sections": []
    },
    {
      "id": "ai-evaluation",
      "name": "Gray Swan",
      "hook": "A dated record of model-behavior testing",
      "route": "/ai-evaluation",
      "status": "Independent evaluation · July 2026 snapshot",
      "text": "Independent adversarial-evaluation activity, with the July 2026 platform record and clear limits on what the metrics establish.",
      "claimIds": [
        "gray-swan-july-29"
      ],
      "links": [
        {
          "label": "Dated evidence",
          "url": "https://mariomarcolongo.com/evidence/gray-swan-2026-07-29/"
        }
      ],
      "sections": [
        {
          "heading": "Activity",
          "text": "I carried out independent adversarial/model-behavior evaluation through Gray Swan. This is independent platform activity, not employment at Gray Swan or a claim to be a research scientist. The public record supports a dated account of testing activity; it does not replace a reproducible evaluation method, a professional reference or an independent engineering assessment."
        },
        {
          "heading": "Dated result",
          "text": "On 29 July 2026, the captured Proving Ground profile displayed rank #74, top 6%, and 113 total breaks. The four visible area counters sum to 112. That discrepancy remains visible rather than being silently reconciled. The separate Arena profile displayed rank #365, 28 global unique breaks, 1,120 points and 255 submissions. These are separate platform metrics, not additive totals."
        },
        {
          "heading": "Evidence",
          "text": "The evidence page contains the original account-holder screenshot, a preserved manifest and a structured record. The platform is the source of the displayed numbers; I captured the record. Follow the original image to inspect the labels and the date. A link to the live profile is provided there, but the live state can change and should not be confused with the July snapshot."
        },
        {
          "heading": "What is not established",
          "text": "Aggregate counts do not reveal every tested model, prompt, output, adjudication decision or denominator. They do not demonstrate that each counted result represents an independently verified security failure. The public page does not provide a complete reproduction package or private challenge material. It also does not establish paid evaluation work, current ranking or general competence in penetration testing."
        },
        {
          "heading": "Contribution and next evidence",
          "text": "The relevant contribution is hands-on model-behavior testing and evidence documentation within the demonstrated surfaces. My broader technical implementations are AI-assisted. A shareable method and rubric case could strengthen the record if it were completed and permitted to publish; it is not listed as an existing achievement. For current evaluation-support roles, use the specialist résumé and inspect the dated record alongside the scientific source work and accepted Atlas contributions."
        }
      ]
    },
    {
      "id": "notandia",
      "name": "Notandia",
      "hook": "A practical tool for research-result workflows",
      "route": "/notandia",
      "status": "Independent project · AI-assisted implementation",
      "text": "An AI-assisted browser tool with released versions and source development documented separately.",
      "claimIds": [
        "notandia-source-release"
      ],
      "links": [
        {
          "label": "Canonical browser source",
          "url": "https://github.com/notandia/browser-extension"
        },
        {
          "label": "Chrome store record",
          "url": "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp"
        },
        {
          "label": "Edge store record",
          "url": "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi"
        }
      ],
      "sections": [
        {
          "heading": "Problem",
          "text": "Research-result workflows can make it difficult to distinguish a publisher-level signal from an article-specific notice. A tool must explain that difference and give the reader control. A publisher’s inclusion in a watchlist does not by itself establish that a particular paper is unreliable, retracted or scientifically incorrect."
        },
        {
          "heading": "My contribution",
          "text": "Notandia continues the earlier MDPI Filter project. I defined product requirements and research-result behavior, inspected implementation and tested AI-assisted changes. Current browser source and the Zotero source are maintained separately. My contribution includes diagnosing behavior and maintaining documentation; this is an independent project, not an institutional research-integrity service or an independent assessment of programming proficiency."
        },
        {
          "heading": "Released record versus source development",
          "text": "The inspected legacy store record showed MDPI Filter version 0.0.2 from June 2025, with 11 users and one rating. Those are dated store values, not current combined usage. The canonical browser source contains the expanded Notandia work. Source development is not proof that every capability has shipped in Chrome and Edge. Store listings and repository release records must be compared before choosing a version."
        },
        {
          "heading": "Evidence and interpretation",
          "text": "Use the canonical browser repository to inspect the current source and release notes. Follow the separate store links to check what is actually distributed there. The expanded source includes publisher context and formal-notice workflows, but a notice’s type and source matter: a correction is not synonymous with a retraction, and either still requires reading its scope. This portfolio does not certify complete detection or make a paper-level verdict."
        },
        {
          "heading": "Availability",
          "text": "Chrome: legacy listing retained for continuity; inspected version 0.0.2, June 2025. Edge: separate listing, whose installed version must be checked independently. Browser source: canonical Notandia repository, development tracked independently of store availability. Zotero: separate source repository with its own scope. No cross-store feature-parity claim is made."
        },
        {
          "heading": "What this demonstrates",
          "text": "The inspectable work concerns requirements, information-quality distinctions, functional testing and release troubleshooting. The useful output is a tool whose behavior and limits can be examined. A successful deployment alone does not prove scientific accuracy or production readiness; reviewers should use the relevant release record and a reproducible example for the version they are assessing."
        }
      ]
    },
    {
      "id": "scientific-visualizations",
      "name": "Scientific visualizations",
      "hook": "Making a relationship easier to inspect",
      "route": "/work/scientific-visualizations",
      "status": "Public diagrams and data views",
      "text": "Selected diagrams and data views with source material, assumptions and documented reuse where available.",
      "claimIds": [],
      "image": "/media/work/wikimedia-clinical-overlap.svg",
      "alt": "Diagram of overlapping genes associated with clinical phenotypes",
      "links": [
        {
          "label": "Wikimedia contributions",
          "url": "https://commons.wikimedia.org/wiki/Special:Contributions/Digressivo"
        },
        {
          "label": "Tableau data views",
          "url": "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
        }
      ],
      "sections": [
        {
          "heading": "Problem",
          "text": "A scientific relationship can be difficult to inspect in prose alone. A diagram or data view can expose definitions, groupings and assumptions, provided the viewer can trace what each mark means. The goal is to make a source-backed relationship legible, not to make the visual itself look like independent evidence."
        },
        {
          "heading": "Overlapping genes and clinical phenotypes",
          "text": "The diagram shows genes associated with overlapping clinical phenotypes, using intersecting regions to make shared associations visible. It is a sourced visual explanation; the original Wikimedia file and its references provide the scientific context."
        },
        {
          "heading": "Data views",
          "text": "The Tableau profile links published epidemiological and public-health views. Each view should be read with its dataset, units and transformation assumptions. Protein-supply work describes food supply, not observed individual protein intake. A national aggregate cannot be silently converted into a personal nutritional conclusion. The original data and view context are the appropriate place to inspect the measure."
        },
        {
          "heading": "My contribution",
          "text": "I organized scientific material and created visual explanations and data views. The useful evidence is the actual artifact, its source trail and documented attributable changes. A reuse record, where present at the original file, supports that specific reuse; it is not a blanket statement about the impact of all my visualizations. No audience or clinical outcome is inferred from a download or publication."
        },
        {
          "heading": "How to inspect",
          "text": "Start with the diagram and its public contribution trail, or open a data view and examine its labels and original dataset. Check whether the displayed relationship is a definition, an estimate or a transformation. The project remains supporting evidence of source communication and data presentation, separate from paid scientific production and accepted repository contributions."
        }
      ]
    },
    {
      "id": "telegram",
      "name": "Telegram and cloud automation",
      "hook": "A documented link-conversion workflow",
      "route": "/work/telegram",
      "status": "Independent project · AI-assisted implementation",
      "text": "A practical Telegram workflow with inspected cloud architecture and explicit operating limits.",
      "links": [
        {
          "label": "Source and operating instructions",
          "url": "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
        }
      ],
      "claimIds": [],
      "sections": [
        {
          "heading": "Problem and contribution",
          "text": "The bot converts English Wikipedia links in Telegram workflows. I defined requirements, inspected behavior, tested workflows and diagnosed deployment problems using AI-assisted implementation. The repository is the source for current reproduction and configuration details."
        },
        {
          "heading": "Inspected architecture",
          "text": "The inspected architecture uses an AWS Lambda function URL with SQS, DynamoDB, EventBridge and SNS. The architecture describes the reviewed source; this portfolio release does not independently prove that the hosted bot is currently operating or rerun its cloud deployment."
        },
        {
          "heading": "Evidence and limits",
          "text": "Source history and operating instructions support inspection of the implementation. Private, group and inline behavior should be tested against the version being assessed. No uptime guarantee, independently assessed AWS proficiency or production-readiness certification is claimed."
        }
      ]
    }
  ],
  "cv": {
    "default": {
      "title": "Research & Technical Operations",
      "filename": "Mario-Marcolongo-Research-Technical-Operations.pdf",
      "summary": "Research and technical-operations contributor combining paid scientific fact-checking and website operations with sustained Wikimedia source work and volunteer research support. I investigate inconsistencies, organize evidence and help turn findings into usable outputs."
    },
    "technical": {
      "title": "Technical Operations | Troubleshooting & Data Quality",
      "filename": "Mario-Marcolongo-Technical-Operations.pdf",
      "summary": "Technical-operations candidate with experience maintaining websites, testing AI-assisted tools and diagnosing workflow failures. My record combines paid publishing operations, structured-data contributions and accepted repository changes. Developing Python, SQL and systems foundations through structured study."
    },
    "aiEvaluation": {
      "title": "AI Evaluation & Research Support",
      "filename": "Mario-Marcolongo-AI-Evaluation-Research-Support.pdf",
      "summary": "Independent AI evaluator with a dated Gray Swan competition record and paid scientific fact-checking experience. I investigate model behavior, reconcile sources and document evidence, drawing on sustained Wikimedia work and practical research support."
    }
  },
  "cvBullets": {
    "entropy": [
      "Contributed research, fact-checking and production support to 80 documented published pieces: 55 videos, 4 articles and 21 short-form pieces.",
      "Retrieved and checked scientific sources and supported source-faithful English-to-Italian localization; responsibilities varied by assignment.",
      "Managed publishing and technical website operations alongside scientific content work."
    ],
    "atlas": [
      "Contributed three merged pull requests covering macOS validation portability and repository instruction organization.",
      "Diagnosed a Bash 3.2 compatibility failure and contributed a fix accepted by the upstream maintainer."
    ],
    "yts": [
      "Founded and maintain a directory of 55 research-participation resources, with documented inclusion decisions and linked sources.",
      "Organized resource information and maintained the AI-assisted website."
    ],
    "gray": [
      "Ranked #74, top 6%, in the Gray Swan Proving Ground snapshot of 29 July 2026.",
      "Conducted adversarial model-behavior testing and documented the dated platform results."
    ],
    "notandia": [
      "Developed and maintained an AI-assisted browser tool for research-result workflows.",
      "Defined requirements, tested behavior and diagnosed release issues; documented store releases separately from source development."
    ],
    "wikimedia": [
      "Review citations, reconcile conflicting sources and improve structured metadata across Wikipedia, Wikidata and Wikimedia Commons.",
      "Create sourced scientific explanations and diagrams, with attributable edits and public artifacts."
    ],
    "padua": [
      "Co-facilitated remote focus groups and supported recruitment, bibliographic research and accessible participation procedures."
    ]
  },
  "cvSkills": {
    "foundation": "Python fundamentals — Python Programming, 3 ECTS, Pass (Sep 2026).",
    "currentStudy": "Continuing study in Python, SQL, systems and quantitative foundations."
  },
  "experience": [
    {
      "name": "Entropy for Life",
      "period": "Jun 2023–Present · Paid contractor",
      "text": "Scientific literature research, fact-checking and production support, alongside publishing and website operations.",
      "route": "/work/entropy"
    },
    {
      "name": "Wikipedia, Wikidata & Wikimedia Commons",
      "period": "Since 2018 · Public contributions",
      "text": "Citation review, source reconciliation, structured-data editing and scientific visualizations.",
      "route": "/work/wikimedia"
    },
    {
      "name": "University of Padua research project",
      "period": "2022–2025 · Volunteer collaboration",
      "text": "Focus-group facilitation, participant recruitment and accessible research procedures, working with a supervisor and fellow facilitator.",
      "route": "/research-operations"
    },
    {
      "name": "Yourself to Science",
      "period": "Since 2024 · Founder, independent project",
      "text": "Research-participation directory: resource selection, information organization and ongoing website maintenance.",
      "route": "/work/yourself-to-science"
    }
  ]
},
  identity: {
    name: "Mario Marcolongo",
    buildVersion: "v2026.07.29",
    enaAccession: "PRJEB109744",
    enaUrl: "https://www.ebi.ac.uk/ena/browser/view/PRJEB109744",
    centralAuth: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo",
    grayswanId: "6a57be70d15e123775a1e9cf",
    grayswanUrl: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf",
    grayswanArchiveUrl: "/evidence/gray-swan-2026-07-29/",
    evaluationAsOf: "29 July 2026",
    professionalHeadline: "Data Quality & Information Retrieval | AI Evaluation & Adversarial Testing | Scientific Fact-Checking & Evidence Synthesis",
    secondaryTitle: "Information Retrieval · Evidence Synthesis · AI Evaluation",
    headline: "I make information and AI systems more reliable.",
    authorshipStatement: "I use AI-assisted implementation extensively. I define requirements and workflows, inspect code structure and behavior, test implementations, diagnose functional problems, guide iterative changes, deploy releases, and maintain services. I do not present myself as an independent software developer.",
    role: "Work spanning information retrieval, data quality, AI evaluation, scientific fact-checking and knowledge integrity.",
    heroStatement: "Making information and AI systems more reliable through retrieval, verification, data-quality review and model testing.",
    location: "Based in Italy · EU/EEA work-authorised · Open to sponsored international relocation and B2B engagements",
    relocation: "EU/EEA work-authorised; Switzerland: EU/EFTA employment route once an offer is secured; open to employer-sponsored work authorisation elsewhere. International B2B engagements are available where the contracting arrangement is compliant.",
    relocationVisible: "Based in Italy · EU/EEA work-authorised · Open to sponsored international relocation and B2B engagements",
    languages: "Italian (Native / Mother Tongue) · English (C1 overall, EF SET 68/100; advanced technical reading and professional/technical writing)",
    email: "me@mariomarcolongo.com",
    orcid: "0000-0003-2846-7115",
    orcidUrl: "https://orcid.org/0000-0003-2846-7115",
    domain: "https://mariomarcolongo.com",
    linkedin: "https://www.linkedin.com/in/mario-marcolongo",
    github: "https://github.com/jnton",
    portfolioRepo: "https://github.com/jnton/mariomarcolongo",
    agentReadyUrl: "https://isitagentready.com/mariomarcolongo.com?checks=robotsTxt%2Csitemap%2ClinkHeaders%2CdnsAid%2CmarkdownNegotiation%2CrobotsTxtAiRules%2CcontentSignals%2CwebBotAuth%2CapiCatalog%2CoauthDiscovery%2CoauthProtectedResource%2CauthMd%2CmcpServerCard%2Ca2aAgentCard%2CagentSkills%2CwebMcp%2Cx402%2Cmpp%2Cucp%2Cacp",
    sameAs: [
      "https://github.com/jnton",
      "https://orcid.org/0000-0003-2846-7115",
      "https://www.linkedin.com/in/mario-marcolongo",
      "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo",
      "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf",
      "https://public.tableau.com/app/profile/mario.marcolongo/vizzes"
    ],
    subjectOf: [
      {
        "@type": "WebPage",
        "@id": "https://mariomarcolongo.com/security#webpage"
      }
    ],
    contactObfuscated: ["me", "mariomarcolongo", "com"]
  },

  summary: "My work spans information retrieval, data quality, scientific verification and AI evaluation, with eight years of auditable public-source and structured-data work. Experience includes paid scientific fact-checking and writing, community-facing research facilitation, leadership of an open research-participation directory and sustained AI model testing. The profile supports four application lanes: data quality and research analysis; AI evaluation and model behavior; source quality, trust and investigations; and research, editorial and community coordination. Public claims distinguish evidence from inference, while technical work is described accurately as AI-assisted delivery rather than independent software development.",

  pillars: [
    {
      category: "AI EVALUATION & ADVERSARIAL TESTING",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      title: "Model Behavior & Adversarial Testing",
      lead: "Structured, self-directed probing of LLM and multimodal-system behavior across chat, image, tool-use and indirect prompt-injection challenges.",
      desc: "The dated Gray Swan profile shows Proving Ground rank #74 (top 6%) with 113 platform-recorded total breaks on 29 July 2026. The same screenshot shows Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions. The record documents sustained hands-on evaluation activity across four testing surfaces.",
      highlights: [
        { label: "Leaderboard-Counted Activity", detail: "#74 · top 6% · 113 platform-recorded breaks on 29 July 2026" },
        { label: "Testing Surfaces", detail: "Chat, multimodal/image, agentic tool-use and indirect prompt injection" }
      ]
    },
    {
      category: "SCIENTIFIC VERIFICATION",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><path d="M11 8v6"></path><path d="M8 11h6"></path></svg>`,
      title: "Evidence Synthesis & Primary-Source Fact-Checking",
      lead: "Eight years of auditable claim and source work, with paid biomedical literature verification and systematic-review screening training.",
      desc: "Completed 4,317 auditable Wikimedia contributions across English Wikipedia, Wikidata, Italian Wikipedia and Wikimedia Commons. Paid scientific fact-checker and writer for Entropy for Life, verifying primary literature for more than 55 videos and documentaries and four articles. Completed Cochrane Crowd and GALENOS evidence-screening training.",
      highlights: [
        { label: "Auditable Contributions", detail: "4,317 publicly inspectable Wikimedia contributions as of July 2026" },
        { label: "Paid Scientific Verification", detail: "Primary literature checked for 55+ videos and documentaries and four articles" }
      ]
    },
    {
      category: "DATA QUALITY & PROVENANCE",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
      title: "Information Retrieval, Data Quality & Provenance",
      lead: "Retrieving, verifying and reconciling information across scientific sources, structured records and public research systems.",
      desc: "Founded and operate Yourself to Science™, an open-source research-participation directory indexing more than 55 initiatives, with documented inclusion, verification, provenance, metadata and licensing workflows. Public records include FAIRsharing, Zenodo, Wikidata and ENA entries.",
      highlights: [
        { label: "Research Directory", detail: "55+ clinical studies, biobanks, registries and donation programs indexed" },
        { label: "Public Records", detail: "FAIRsharing, Zenodo, Wikimedia, Wikidata and ENA evidence" }
      ]
    },
    {
      category: "TECHNICAL DELIVERY",
      icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
      title: "Requirements, Testing & Technical Delivery",
      lead: "Defining requirements, inspecting code structure and behavior, testing implementations, diagnosing functional problems and operating deployed services.",
      desc: "Uses coding agents for implementation support while personally defining requirements and workflows, reading code structure, testing behavior, identifying functional issues, coordinating revisions, deploying releases and maintaining services. This is not presented as independent software development.",
      highlights: [
        { label: "Technical delivery", detail: "Requirements, code reading, functional testing, deployment and maintenance" },
        { label: "Delivery Model", detail: "AI-assisted implementation with personal responsibility for verification, release checks and maintenance" }
      ]
    }
  ],

  stats: [
    { value: "113", label: "Platform-Recorded Proving Ground Breaks", detail: "#74 · top 6% · 29 July 2026" },
    { value: "255", label: "Arena Submissions", detail: "Arena rank #365 · 28 global unique breaks · 1,120 points" },
    { value: "55+", label: "Research Initiatives Indexed", detail: "Clinical studies, biobanks, donation programs, registries and other research initiatives" },
    { value: "55+ Videos & 4 Articles", label: "Paid Scientific Verification", detail: "Primary-source research and fact-checking for Entropy for Life" },
    { value: "4,317", label: "Auditable Wikimedia Contributions", detail: "Public contributions across Wikipedia, Wikidata and Wikimedia Commons as of July 2026" }
  ],

  projects: [
    {
      id: "ai-red-teaming",
      title: "Model Behavior & Adversarial Evaluation",
      oneLiner: "Public aggregate record of self-directed model-behavior evaluation across chat, multimodal, agentic tool-use and indirect prompt-injection challenges.",
      description: "Self-directed model-behavior evaluation conducted through the Gray Swan Proving Ground. The dated 29 July 2026 screenshot shows Proving Ground rank #74, top 6%, with 113 platform-recorded total breaks; the same profile shows Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions. Aggregate counts and selected public labels are presented with explicit evidence limitations; complete prompts, outputs, model versions and adjudication materials are not reproduced.",
      role: "Independent AI Evaluator",
      tech: ["Adversarial Evaluation", "Prompt Injection", "Agentic Tool-Use", "Multimodal Safety", "Evidence Limits & Reporting"],
      links: {
        caseStudy: "/security",
        profile: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf"
      },
      highlights: [
        "113 Platform-Recorded Proving Ground Breaks: #74 and top 6% on the dated 29 July 2026 snapshot",
        "Arena Profile Context: #365 rank, 28 global unique breaks, 1,120 points and 255 submissions",
        "Evidence limits: Metrics are scoped to the dated Gray Swan Proving Ground and Arena record"
      ]
    },
    {
      id: "yourself-to-science",
      title: "Yourself to Science™ | Open Research-Participation Directory",
      oneLiner: "An open-source directory indexing more than 55 clinical studies, biobanks, donation programs, registries and other research initiatives.",
      description: "Founded, designed and operate an open-source research-participation directory indexing more than 55 initiatives. Defined the inclusion model, verification workflow, provenance fields, licensing structure and machine-readable metadata requirements, including JSON-LD, RDF Turtle/VoID, OpenAPI and an MCP interface. Technical implementation is AI-assisted and personally verified through requirements, code reading, functional testing and maintenance.",
      role: "Founder & Project Lead",
      tech: ["Research Verification", "Metadata & Provenance", "JSON-LD", "FAIRsharing", "Zenodo", "OpenAPI", "MCP"],
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org",
        doi: "https://doi.org/10.5281/zenodo.15109359",
        fairsharing: "https://doi.org/10.25504/FAIRsharing.d3d487"
      },
      highlights: [
        "55+ Research Initiatives: Clinical studies, biobanks, donation programs and registries catalogued",
        "Verification Workflow: Inclusion, provenance, metadata and licensing requirements documented",
        "Open Records: FAIRsharing and Zenodo registrations with machine-readable interfaces"
      ]
    },
    {
      id: "entropy-for-life",
      title: "Entropy for Life — Science Writing, Fact-Checking & Website Management",
      oneLiner: "Paid science writing, fact-checking, script-development, visual-production and website-management work across 59+ published projects.",
      description: "Paid contractor for Entropy for Life across 59+ publicly indexed projects: 55+ published YouTube video projects and four co-authored articles. Most video assignments combine primary-literature research, scientific fact-checking and script development; selected assignments focus on fact-checking and/or data visualization. Also produce data visualizations, presentation slides, on-screen assets, short-form materials and selected thumbnails independently or with video editor Alessandro Lanzoni. Additional Instagram and TikTok work is not yet fully indexed. Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO. Formally acknowledged in Giacomo Moro Mauretto’s Mondadori book Italiani veri.",
      role: "Science Writer & Fact-Checker / Website Manager (WordPress)",
      tech: ["Primary-Literature Research", "Scientific Fact-Checking", "Script Development", "Data Visualization & Presentation Design", "WordPress", "DNS/SSL", "Technical SEO"],
      links: {
        website: "https://entropyforlife.it",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
        thumbnails: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"
      },
      highlights: [
        "55+ Published YouTube Projects: Primary literature researched, checked and developed into scripts",
        "Four Co-Authored Articles: Scientific writing and evidence verification",
        "Visual production & website management: Slides, on-screen assets, selected thumbnails, hosting, DNS/SSL, WordPress and technical SEO"
      ]
    },
    {
      id: "mdpi-filter",
      title: "MDPI Filter | Browser Extension",
      oneLiner: "An open-source browser extension that helps researchers identify and manage MDPI publications across search and citation workflows.",
      description: "Conceived product requirements and specified DOM-targeting behavior for a browser extension that highlights or hides MDPI publications across Google, Google Scholar, PubMed and Europe PMC and identifies citations on publisher pages. Coordinated AI-assisted implementation, inspected behavior, tested releases and maintained public store deployments.",
      role: "Creator & Product Lead",
      tech: ["Product Requirements", "Functional Testing", "Manifest V3", "NCBI E-utilities", "Browser Extension Maintenance"],
      links: {
        chromeStore: "https://chromewebstore.google.com/detail/mdpi-filter/comknkeimaaadpiopddjoknflbmjeccp",
        edgeStore: "https://microsoftedge.microsoft.com/addons/detail/mdpi-filter/efonlkldplkaeekpiajloajjmkappjgi",
        github: "https://github.com/orgs/mdpi-filter/repositories",
        screenshots: [
          "https://lh3.googleusercontent.com/1KKa3LqvJ6ayP9Kh6_jmAWXzL3naOfPnnKtWb8vjd25XMn1ELMNFDxGjgtvShNmDhWG4x_uuynunm9lVD7wQ3hAI=s1280-w1280-h800",
          "https://lh3.googleusercontent.com/PFwTjvBGc7yEyomiAhZYB60HVcqcIRJaWjRndm8CukDwCOikYyErU9tBqOzMUhF-HTXv4wGyKNbsjvIjNyU0NpSO=s1280-w1280-h800"
        ]
      },
      highlights: [
        "Multi-Surface Filtering: Google Scholar, PubMed, Europe PMC and publisher pages",
        "Product scope: Requirements, behavioral testing and release maintenance",
        "Implementation Boundary: AI-assisted implementation rather than independent software development"
      ]
    },
    {
      id: "telegram-bot",
      title: "English Wikipedia Link Converter | Telegram Bot",
      oneLiner: "An open-source Telegram bot that converts non-English Wikipedia links to their English equivalents.",
      description: "Specified the behavior and deployment requirements for a Telegram bot running on AWS Lambda function URL with SQS, DynamoDB, EventBridge and SNS. Used AI-assisted implementation, tested private, group and inline workflows, diagnosed deployment problems and maintained GitHub Actions releases.",
      role: "Creator & Project Lead",
      tech: ["Requirements", "Functional Testing", "AWS Lambda", "Lambda function URL", "GitHub Actions", "Serverless Deployment & Maintenance"],
      links: {
        bot: "https://t.me/ToEnWikipediaBot",
        github: "https://github.com/jnton/english-wikipedia-link-converter-telegram-bot"
      },
      highlights: [
        "Serverless Deployment: AWS Lambda function URL with SQS, DynamoDB, EventBridge and SNS",
        "Behavioral Coverage: Private chats, groups and inline usage",
        "Testing & release maintenance: Deployment diagnosis and release maintenance"
      ]
    },
    {
      id: "emergent-humanity",
      title: "Emergent Humanity | Interactive Network Narrative",
      oneLiner: "A 16-chapter interactive narrative and browser simulation modeling humanity as an emergent network entity.",
      description: "Developed the concept, narrative structure, interaction requirements and behavioral specifications for an evolving browser-based network simulation. Implementation was produced through AI-assisted workflows and personally tested and iterated.",
      role: "Creator & Project Lead",
      tech: ["Concept Design", "Interactive Narration", "Requirements", "Behavioral Testing", "Network Visualization"],
      links: {
        website: "https://jnton.github.io/emergent-humanity/",
        github: "https://github.com/jnton/emergent-humanity"
      },
      highlights: [
        "Sixteen Interactive Chapters: Essay narration combined with live simulation",
        "Conceptual Model: Signal, noise, echo chambers and collective memory",
        "Delivery Boundary: AI-assisted implementation with personal requirements and testing"
      ]
    }
  ],

  visualizations: [
    {
      id: "euler",
      title: "Brain Disorder Gene Overlap",
      caption: "Original vector Euler diagram illustrating shared monogenic mutations across autism spectrum disorder, epilepsy, dystonia and schizophrenia. Published under CC BY-SA 4.0 and adopted across four Wikipedia language editions.",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/69/Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_%28ASD%29%2C_dystonia%2C_epilepsy_and_schizophrenia.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Overlapping_clinical_phenotypes_in_genes_associated_with_monogenic_forms_of_autism_spectrum_disorder_(ASD),_dystonia,_epilepsy_and_schizophrenia.svg"
    },
    {
      id: "yerba",
      title: "Carcinogen Levels in Yerba Maté",
      caption: "Benzo(a)pyrene contamination measured across commercial brands and sampling years, synthesized from published HPLC and GC-MS toxicology literature.",
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Benzo%28a%29pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006%2C_2008%2C_and_2010_-_Column_Chart.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Benzo(a)pyrene_Concentration_in_Processed_Yerba_Mat%C3%A9_Leaves_Sampled_in_2006,_2008,_and_2010_-_Column_Chart.svg"
    },
    {
      id: "vegetarian",
      title: "Global Vegetarian Diet Policies",
      caption: "Comparative policy mapping of national food-based dietary guidelines regarding vegetarian and plant-based nutrition.",
      src: "https://upload.wikimedia.org/wikipedia/commons/4/45/Countries_%28States_and_Subnational_Regions%29_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Countries_(States_and_Subnational_Regions)_and_Their_Positions_on_Vegetarian_Diets_in_Food-Based_Dietary_Guidelines.svg"
    },
    {
      id: "naturalization",
      title: "Global Naturalization Residence Requirements",
      caption: "Programmatically generated world choropleth map illustrating statutory residence requirements for citizenship across more than 190 countries.",
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Naturalization_Residence_Requirements_by_Country_%28Years_of_Residence%29.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Naturalization_Residence_Requirements_by_Country_(Years_of_Residence).svg"
    },
    {
      id: "oesophageal",
      title: "Global Oesophageal Cancer Incidence (IARC 2022)",
      caption: "Age-standardized global incidence rate per 100,000 synthesized from Globocan 2022 and International Agency for Research on Cancer data.",
      src: "https://upload.wikimedia.org/wikipedia/commons/5/53/Oesophageal_Cancer%2C_Age-Standardized_Rate_%28World%29_per_100.000_of_Incidence_Cases%2C_Both_sexes%2C_Worldwide_in_2022.svg",
      fileUrl: "https://commons.wikimedia.org/wiki/File:Oesophageal_Cancer,_Age-Standardized_Rate_(World)_per_100.000_of_Incidence_Cases,_Both_sexes,_Worldwide_in_2022.svg"
    }
  ],

  wikimedia: {
    total: "4,317",
    breakdown: [
      { platform: "English Wikipedia", edits: "1,592" },
      { platform: "Wikidata", edits: "1,249" },
      { platform: "Italian Wikipedia", edits: "752" },
      { platform: "Wikimedia Commons", edits: "684" },
      { platform: "Other Wikimedia Projects", edits: "40" }
    ],
    portfolioLinks: {
      tableau: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
      flourish: "https://app.flourish.studio/@Digressivo"
    }
  },

  redTeamActivity: {
    platform: "Gray Swan AI Proving Ground",
    asOf: "29 July 2026",
    rankBand: "#74 · Top 6%",
    leaderboardRank: 74,
    platformReportedBreaks: 113,
    areaBreaks: { chat: 39, image: 32, agent: 28, indirect: 13 },
    areaBreaksTotal: 112,
    arenaRank: 365,
    globalUniqueBreaks: 28,
    globalPoints: 1120,
    submissions: 255,
    totalArenaSubmissions: 255,
    previousChats: 953,
    confirmedBreaks: 105,
    profileReportedBreaks: 113,
    publicLabels: ["damage-property", "toxic-plant", "package-theft-image"],
    waves: [
      { wave: 1, breaks: 14, available: 67 },
      { wave: 2, breaks: 10, available: 72 },
      { wave: 3, breaks: 10, available: 72 },
      { wave: 4, breaks: 2, available: 46 },
      { wave: 5, breaks: 6, available: 72 },
      { wave: 6, breaks: 10, available: 72 },
      { wave: 7, breaks: 2, available: 64 },
      { wave: 8, breaks: 0, available: 67 },
      { wave: 9, breaks: 0, available: 67 },
      { wave: 10, breaks: 3, available: 67 },
      { wave: 11, breaks: 2, available: 67 },
      { wave: 12, breaks: 3, available: 67 },
      { wave: 13, breaks: 0, available: 67 },
      { wave: 14, breaks: 0, available: 67 },
      { wave: 15, breaks: 8, available: 67 },
      { wave: 16, breaks: 3, available: 67 },
      { wave: 17, breaks: 14, available: 75 },
      { wave: 18, breaks: 0, available: 75 },
      { wave: 19, breaks: 0, available: 56 },
      { wave: 20, breaks: 0, available: 56 },
      { wave: 21, breaks: 0, available: 56 },
      { wave: 22, breaks: 6, available: 56 },
      { wave: 23, breaks: 3, available: 57 },
      { wave: 24, breaks: 2, available: 56 },
      { wave: 25, breaks: 3, available: 55 },
      { wave: 26, breaks: 4, available: 56 }
    ]
  },

  experience: [
    {
      role: "Founder & Project Lead",
      org: "Yourself to Science™",
      tag: "Independent project",
      period: "Aug 2024 — Present",
      links: {
        website: "https://yourselftoscience.org",
        github: "https://github.com/yourselftoscience/yourselftoscience.org"
      },
      bullets: [
        "Founded and operate an open-source research-participation directory indexing more than 55 clinical studies, biobanks, donation programs, registries and other initiatives.",
        "Defined the inclusion model, verification workflow, provenance fields, licensing structure and machine-readable metadata requirements.",
        "Use AI-assisted implementation while personally defining requirements, inspecting code structure and behavior, testing releases and maintaining the service."
      ],
      resumeBullets: [
        "Founded and operate an open-source research-participation directory indexing more than 55 initiatives, with documented verification, provenance and metadata workflows.",
        "Coordinate AI-assisted technical implementation through requirements definition, code reading, functional testing, release deployment and maintenance."
      ]
    },
    {
      role: "Independent AI Evaluator",
      org: "Independent practice · Gray Swan Proving Ground participant",
      tag: "Independent practice",
      period: "Jul 2026 — Present",
      links: {
        caseStudy: "/security",
        profile: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf",
        website: "https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf"
      },
      bullets: [
        "Conduct self-directed testing of LLM instruction handling, policy boundaries and edge cases across chat, image, agentic tool-use and indirect prompt-injection settings.",
        "Reached #74 on the Proving Ground leaderboard (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same profile showed Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions.",
        "Document platform-reported outcomes with dated scope and reproduction context rather than extending the leaderboard result into unsupported model-wide claims."
      ],
      resumeBullets: [
        "Conduct self-directed adversarial testing across chat, multimodal, agentic tool-use and indirect prompt-injection settings.",
        "Reached #74 on the Proving Ground leaderboard (top 6%) with 113 platform-recorded total breaks on 29 July 2026; the same profile showed Arena rank #365, 28 global unique breaks, 1,120 points and 255 submissions."
      ]
    },
    {
      role: "Science Writer & Fact-Checker / Website Manager (WordPress)",
      org: "Entropy for Life — Italy",
      tag: "Independent contractor",
      period: "Jun 2023 — Present",
      links: {
        website: "https://entropyforlife.it",
        playlist: "https://www.youtube.com/playlist?list=PLMJaM7iJky4pKj6voGlUNHBnGdTj9rJNh",
        authorPage: "https://entropyforlife.it/autore/mario-marcolongo/",
        thumbnails: "https://www.youtube.com/playlist?list=PLUXju4zC0Sks"
      },
      bullets: [
        "Deliver primary-literature research, scientific fact-checking and script development across 55+ published YouTube video projects and four co-authored articles; most video assignments combine all three functions, while selected work focuses on fact-checking and/or data visualization.",
        "Produce data visualizations, presentation slides and on-screen assets, short-form materials and selected thumbnails independently or with video editor Alessandro Lanzoni; additional Instagram and TikTok work is not yet fully indexed.",
        "Manage OVHCloud hosting, DNS, SSL, WordPress configuration, layout and functionality changes, and technical SEO as website maintenance rather than conventional independent software development.",
        "Formally acknowledged in Giacomo Moro Mauretto’s Mondadori book Italiani veri for scientific-literature research and error detection."
      ],
      resumeBullets: [
        "Deliver primary-literature research, scientific fact-checking and script development across 55+ published YouTube video projects and four co-authored articles; most video assignments combine all three functions, while selected work focuses on fact-checking and/or data visualization.",
        "Identify unsupported claims and source-quality problems; manage WordPress, hosting, DNS/SSL and technical SEO; formally acknowledged in the Mondadori book Italiani veri."
      ]
    },
    {
      role: "Volunteer Research Assistant & Focus-Group Co-Facilitator",
      org: "Department of Developmental Psychology and Socialisation (DPSS), University of Padua",
      tag: "Volunteer research collaboration supervised by Marta Panzeri",
      period: "Nov 2022 — 2025",
      links: {
        supervisor: "https://dpss.unipd.it/en/node/239",
        department: "https://www.unipd.it/en/dpss",
        thesisContext: "https://thesis.unipd.it/handle/20.500.12608/51396"
      },
      bullets: [
        "Served as lead or co-facilitator across approximately 4–5 recorded Zoom focus-group sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.",
        "Co-developed the protocol, including pseudonymous naming, explicit recorded consent, optional captions and written-chat participation, timed turn-taking, scripted prompts, recording boundaries and two-person facilitation handoffs.",
        "Supported participant recruitment, bibliographic research and technical preparation; contributed to structuring participant experience and accessibility considerations and coordinated with Marta Panzeri, researchers and a second volunteer facilitator.",
        "Public attribution to Marta Panzeri and the Department of Developmental Psychology and Socialisation is included with permission; no participant information or confidential session content is disclosed."
      ],
      resumeBullets: [
        "Led or co-facilitated approximately 4–5 recorded remote sessions, typically lasting 1–2 hours, with autistic participants discussing sensitive sexuality and relationship topics.",
        "Co-developed accessible consent and participation procedures, scripted prompts, timed turns, recording boundaries and two-person facilitation handoffs; supported recruitment and bibliographic research."
      ]
    },
    {
      role: "Scientific Contributor & Structured-Data Editor",
      org: "Wikipedia, Wikidata & Wikimedia Commons",
      tag: "Public contribution record",
      period: "Mar 2018 — Present",
      links: {
        website: "https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo"
      },
      bullets: [
        "Completed 4,317 auditable contributions across Wikimedia projects as of July 2026.",
        "Check citations, reconcile conflicting sources, improve structured metadata and create scientific visualizations adopted across four Wikipedia language editions."
      ],
      resumeBullets: [
        "Completed 4,317 auditable public contributions involving citation review, source reconciliation, structured metadata and scientific visualizations."
      ]
    }
  ],

  research: [
    {
      role: "Personal Genomics Workflow & Open-Data Record (41×)",
      org: "European Nucleotide Archive — PRJEB109744 / SAMEA121950568",
      tag: "Personal open-data project",
      period: "Jan 2026",
      links: {
        website: "https://www.ebi.ac.uk/ena/browser/view/PRJEB109744",
        github: "https://github.com/jnton/git-nome"
      },
      bullets: [
        "Donated personal 41× whole-genome sequencing raw paired-end FASTQ reads to the public domain under ENA BioSample SAMEA121950568.",
        "Defined analytical requirements and used Terra.bio cloud workflows to produce GRCh38 BAM alignments and VCF variant-call files.",
        "Specified requirements for and iteratively validated a downstream workflow using Plink2 and Nextflow pgsc_calc with ancestry projection.",
        "Used AI-assisted Python scripts for VEP-annotated VCF extraction, multi-trait polygenic-score summaries and variant filtering; inspected outputs and iterated requirements rather than independently developing the code."
      ],
      resumeBullets: [
        "Released personal 41× WGS reads and derived files under CC0 through ENA PRJEB109744; defined and validated Terra.bio, Plink2 and pgsc_calc workflow requirements.",
        "Used AI-assisted Python extraction scripts and personally inspected outputs, edge cases and workflow behavior."
      ]
    },
    {
      role: "Scientific Data Visualization & Evidence Synthesis",
      org: "Wikimedia Commons, Tableau Public & Flourish",
      tag: "Independent project",
      period: "2023 — Present",
      links: {
        tableau: "https://public.tableau.com/app/profile/mario.marcolongo/vizzes",
        flourish: "https://app.flourish.studio/@Digressivo"
      },
      bullets: [
        "Published more than 70 empirical public-health, epidemiological and biomedical visualizations across Wikimedia Commons, Tableau Public and Flourish.",
        "Created an original vector Euler diagram of overlapping monogenic clinical phenotypes adopted across four Wikipedia language editions.",
        "Synthesized primary datasets into open-access charts, maps and vector evidence records."
      ],
      resumeBullets: [
        "Published 70+ biomedical, epidemiological and public-health visualizations and synthesized primary datasets into open vector evidence records."
      ]
    }
  ],

  education: [
    {
      title: "Information Technology — Open UAS Path Studies (120 ECTS)",
      institution: "Metropolia University of Applied Sciences",
      period: "Aug 2026 — Present",
      status: "Bachelor's-level ICT path studies · After completing 120 ECTS, eligible to apply to the BEng IT programme (admission not yet granted) · Curriculum: software development, SQL and relational databases, Unix/Linux, data structures and algorithms, CCNA networking, cloud computing, cybersecurity, ethical hacking, engineering mathematics and applied AI",
      programUrl: "https://www.metropolia.fi/en/study-at-metropolia/open-university/path-studies/it-online"
    },
    {
      title: "EF SET English Certificate 68/100 (C1 overall)",
      institution: "EF Standard English Test",
      period: "Mar 2024",
      credentialUrl: "https://cert.efset.org/jHk84h"
    },
    {
      title: "Career Essentials in Generative AI",
      institution: "Microsoft and LinkedIn",
      period: "Mar 2024",
      credentialUrl: "https://www.linkedin.com/learning/certificates/c4f1f59578e3ac2567787e262e3b2ec55debf96bbbced4d34d5edaa821d9e6d9"
    },
    {
      title: "GALENOS Crowd Evidence Synthesis Training",
      institution: "Cochrane Crowd & GALENOS",
      period: "May 2026",
      status: "Systematic-review screening training"
    }
  ],

  skills: [
    "Information Retrieval & Verification: Primary-source and bibliographic search, claim tracing, source discovery, query refinement, source-quality assessment and cross-source corroboration.",
    "Data Quality & Provenance: Structured metadata, entity reconciliation, validation rules, documentation, taxonomy design and public-record verification.",
    "AI Evaluation & Adversarial Testing: Exploratory model-behavior testing, prompt and jailbreak analysis, multi-turn behavior, multimodal inputs, agentic tool-use and indirect prompt injection.",
    "Scientific Verification & Evidence Synthesis: Primary-source fact-checking, bibliographic research, claim decomposition, evidence screening, source-quality assessment and cross-source corroboration.",
    "Data Visualization: SVG vector diagrams, Tableau Public, Flourish and open-data publication.",
    "Evaluation Planning & Reporting: Test planning, evidence capture, reproducibility notes, taxonomy thinking, issue classification, reporting that separates evidence from inference and mitigation-retesting concepts.",
    "Technical Delivery: Requirements definition, codebase reading and behavior inspection, functional testing, issue diagnosis, deployment and service maintenance.",
    "AI-Assisted Implementation: Uses coding agents for implementation support while personally inspecting structure and behavior, testing results and coordinating revisions; not independent software development.",
    "Open Science & Structured Data: Wikimedia, Wikidata, FAIRsharing, Zenodo, ENA records, JSON-LD, RDF Turtle/VoID, OpenAPI and MCP interfaces.",
    "Web & Cloud Delivery: WordPress, HTML/CSS modification, Git/GitHub, JSON, REST APIs, AWS Lambda, Cloudflare Pages, DNS/SSL and CI/CD maintenance.",
    "Languages: Italian — native. English — C1 overall (EF SET 68/100), with advanced technical reading and professional/technical writing."
  ],

  resumeSkills: [
    "Information Retrieval & Verification: Primary-source and bibliographic search, claim tracing, source discovery, query refinement and cross-source corroboration.",
    "Data Quality & Provenance: Structured metadata, entity reconciliation, validation rules, documentation and public-record verification.",
    "AI Evaluation & Adversarial Testing: Exploratory model-behavior testing, prompt and jailbreak analysis, multi-turn behavior, multimodal inputs, agentic tool-use and indirect prompt injection.",
    "Scientific Verification & Evidence Synthesis: Primary-source fact-checking, bibliographic research, claim decomposition, evidence screening and cross-source corroboration.",
    "Data Visualization: SVG vector diagrams, Tableau Public, Flourish and open-data publication.",
    "Technical Delivery: Requirements definition, codebase reading and behavior inspection, functional testing, issue diagnosis, deployment and AI-assisted implementation.",
    "Languages: Italian — native. English — C1 overall (EF SET 68/100), with advanced technical reading and professional/technical writing."
  ]
  };
}

const MARIO_DOSSIER = createMarioDossier();
Object.defineProperty(MARIO_DOSSIER, "create", {
  value: createMarioDossier,
  enumerable: false
});
Object.defineProperty(MARIO_DOSSIER, "createMarioDossier", {
  value: createMarioDossier,
  enumerable: false
});

const computedBreaks = MARIO_DOSSIER.redTeamActivity.waves.reduce(
  (total, wave) => total + wave.breaks,
  0
);

if (computedBreaks !== MARIO_DOSSIER.redTeamActivity.confirmedBreaks) {
  throw new Error(
    `Gray Swan total mismatch: expected ${MARIO_DOSSIER.redTeamActivity.confirmedBreaks}, calculated ${computedBreaks}`
  );
}

if (typeof window !== "undefined") {
  window.MARIO_DOSSIER = MARIO_DOSSIER;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MARIO_DOSSIER;
}
