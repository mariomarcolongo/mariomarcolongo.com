# Professional presence implementation

Local implementation of the approved PRESENCE.md blueprint. No push, deployment, account edits or outreach performed.

## Ownership and use

- `data/source.js` → `presence` holds the approved public projection, claim provenance, project copy, education and résumé summaries. Remaining legacy fields support existing historical records, not the new public dossiers.
- `ApplicationCv.astro` selects three views from those shared facts. `/cv` is the concise default; `/cv-technical` and `/cv-ai` are the two alternatives.
- `npm run build` regenerates public text/profile exports, Astro pages, Markdown alternatives, sitemap and tracked root mirrors, and runs factual/routing/structured-data checks.
- `npm run pdf` generates all three public PDFs. It never loads private contact configuration. PDFs are tracked explicitly under `public/` so a build contains working download links.
- `node scripts/generate-cv-pdf.js --region=US` or `--region=EU` creates ignored private application exports. Add `--include-phone` only deliberately. US uses Letter and an Italy/relocation header; EU uses A4 and citizenship. No different biography is maintained.
- `private/mario-marcolongo-factual-master.md` contains private context and source pointers. `private/PROFILE-COPY.md` contains prepared LinkedIn/GitHub copy and manual actions. Existing historical submitted files were not modified.

## Changes from the dated specification

1. **Specification:** awarded credits unknown; Python approval pending. **Observed reality:** student supplied Metropolia transcript text dated 19 September 2026, reporting Python Programming TT00CB02, 3 ECTS, Pass, assessed 15 September. **Problem:** pending/unknown wording became false. **Minimal change:** update shared education, homepage, résumés and machine record; label evidence as student-supplied institutional transcript. **Why:** reflects the new evidence without upgrading non-degree status or asserting professional programming proficiency. Identifiers, birth date and portal links are excluded.
2. **Specification:** case pages normally 600–1,000 words, without padding. **Observed reality:** several supporting cases have less verified material. **Problem:** reaching a word target would repeat limitations or invent detail. **Minimal change:** retain shorter bounded cases; keep the strongest Atlas case and scientific/source evidence detailed. **Why:** preserves inspectability without invented evidence.
3. **Specification:** preserve useful Markdown alternatives. **Observed reality:** legacy emitter substituted a long dossier for homepage/CV content. **Problem:** humans and machines saw different pages. **Minimal change:** convert the actual main HTML for all routes. **Why:** keeps the existing emitter with accurate representation boundaries.

## Verification completed

- Full build, factual/provenance checks, canonical dossier byte comparisons, routing unit checks, legacy Vite interoperability and JSON-LD parsing.
- 27 browser route/viewport combinations (1440, 390, 320 pixels), one main/h1, image loading and overflow. Keyboard skip navigation, theme toggle, reduced motion, no-JavaScript résumé/contact journey and local link/fragment checks.
- 720px viewport checks equivalent desktop reflow at 200%; not a claim of a complete browser-zoom accessibility audit.
- Measured light/dark text and link contrast: lowest tested ratio 6.64:1.
- All three public PDFs: one page each, visually inspected, selectable extracted text in section order, 7–8 working link annotations, no loopback links or supplied private identifiers.
- US private export path exercised without phone; all three fit one page. EU shares the public A4 layout with an isolated output path.
- `git diff --check` and public privacy scan.

Private QA files are under `private/qa/`; they are not build inputs or published artifacts.

## Manual / pending

- Review and apply the prepared LinkedIn/GitHub text manually; no testimonials or referrals are implied by interactions.
- Deployment and production response checks require separate authorization. Local routing tests do not prove Cloudflare response behavior. After deployment, verify canonical/legacy/missing paths, PDF and Markdown MIME/status, `Vary: Accept`, and nonduplicated discovery headers.
- No complete security audit, psychometric validation, independent skills assessment or live test of linked external projects is claimed.

## Approved presentation revision

Following the user’s review, shortened the homepage and moved detailed qualification/evidence caveats to the case/provenance layer. The homepage now uses consistent project result panels, short linked titles and clearer relocation intent. Warm white/deep green is the initial theme; an explicitly saved dark preference remains respected. No qualifications or US work authorization were upgraded.

All three résumés now describe Python fundamentals and ongoing study directly, with concrete contribution bullets and a concise AI-assistance note. Removed assessment-style negative language and administrative review-date footers. Public PDFs regenerated and visually inspected, one page each; text order, dates, privacy and links checked. Full build and 27 route/viewport checks passed again. Text/link contrast on new panels is at least 6.17:1. This revision improves presentation; recruitment conversion remains unmeasured.

## Visual revision — 20 September 2026

User feedback requested a more distinctive and engaging result. Replaced the green/text-panel homepage treatment with cobalt, warm white, yellow-green and navy; stronger display typography; real project screenshots; a featured Entropy project; and an interactive Atlas problem/cause/fix disclosure. The gallery is shared with `/work`. Relocation copy and verified qualifications remain calibrated. The new stylesheet applies only to screen media, leaving the established PDF print layout unchanged.

Validation: full build and all 27 route/viewport checks passed. The render gate now also opens and closes the Atlas disclosure by keyboard with JavaScript disabled. Inspected desktop/mobile screenshots and the expanded disclosure in the in-app browser. Eight sampled text/background pairs in the new palette measured 6.06:1–12.19:1 contrast. This is a sampled contrast check, not a full accessibility audit. Generated HTML mirrors were rebuilt from source. No deployment or recruitment conversion measurement performed.

## Experience and gallery correction — 20 September 2026

Rebalanced the approved visual direction around paid Entropy work and independent project ownership. Removed the oversized Atlas investigation from the homepage; Atlas remains a linked supporting contribution and a technical-CV entry. Restored explicit Wikipedia/Wikidata/Commons and Padua volunteer experience on the homepage and relevant CVs. Added `/work/wikimedia` with two existing attributable case examples and a diagram explanation; simplified the research-support page while retaining its role-attribution limits and institutional sources. Historical contribution totals were not republished as current metrics. Private projects and personal genomic material remain excluded; Telegram, Notandia, AI evaluation and QCAE remain discoverable through the work index.

The hero gallery shows three existing work artifacts, selected with thumbnails or previous/next buttons. No automatic rotation. Native buttons support keyboard and touch activation; current selection and slide position are announced. All samples remain available without JavaScript. Reduced-motion settings disable transitions. The diagram caption was corrected to describe overlapping genes and clinical phenotypes. No new dependencies were added.

The default CV now selects Entropy, Padua, Wikimedia and Yourself to Science; technical selects Entropy, Notandia, Atlas and Wikimedia; AI selects Gray Swan, Entropy, Padua and Wikimedia. Machine-readable records include the restored experience. All three public PDFs remain one page, with selectable text and 8–9 link annotations; each was rendered and visually inspected. Public checks exclude private transcript identifiers and loopback links.

Validation: full build, routing/privacy/generated-output/JSON-LD checks; 33 route/viewport combinations including the Wikimedia and research-support pages; gallery keyboard navigation, wraparound, no-JavaScript fallback, theme and reduced-motion checks; internal links and reflow. Local only: no push, deployment or account changes. Hiring conversion has not been measured.

## Evidence restoration and identity update — 30 September 2026

Completed the interrupted restoration: ORCID in CV headers, footer and structured identity; detailed Entropy research, fact-checking, script/visual production and website design/build/operations; full `/experience`; eight visualization artifacts/collections spanning Commons, Tableau and Flourish; original Yerba Maté and vegetarian-policy diagrams; broader investigations and project responsibilities. The naturalization graphic retains its source link because its original image was unavailable. See `docs/portfolio-evidence-coverage.md` for website/CV coverage and deliberate omissions.

Updated active GitHub links to `mariomarcolongo` and the local remote to `mariomarcolongo/mariomarcolongo.com`; the renamed repository and updated Pages destinations were verified. Historical application evidence is not rewritten as if it had been observed under the new username.

Verified five merged Atlas PRs through GitHub: #52, #54, #61, source-metadata audit #69 (22 September), and source-locator/provenance #70 (28 September). Rewrote the Atlas case around the newer source-quality work and restored it to selected homepage work. All three CVs include accepted work and listed coauthorship of the September 2026 draft. The supplied author page and contributor-confirmed affiliation permission are represented distinctly from public PR evidence. No publication, peer review, employment, degree or personal authorship of project-wide mathematical results is inferred. A public manuscript link and specific manuscript roles remain unspecified.

Added a supporting Hypermandala case with the public demo and its published preview image, compressed to WebP. Inspected the live dimensional transition and controls. GitHub reports the source repository private; the user is considering making it public. No repository visibility change or private source publication occurred. Hypermandala is included as interactive-visualization evidence, not as an established business or a flagship general-CV achievement.

Repaired loopback-only private CV responses and download routing: phone insertion works without JavaScript and private download links use ignored EU exports. Public HTML/data/PDF artifacts exclude the phone. Added private-preview checks for escaping, clean routes, no-store responses, download isolation and non-CV isolation.

Validation for this revision: full build, routing/interop/factual/generated-output/privacy checks, 32 HTML pages and 33 parsed JSON-LD records; 42 route/viewport checks at 1440/390/320 pixels, keyboard/gallery wraparound, theme, reduced-motion, no-JavaScript and internal links. Three public PDFs and three private EU exports are one page each; inspected all six rendered pages (private QA views redact the contact line), verified selectable text, ORCID links, draft wording, configured phone isolation and absence of loopback URLs/transcript identifiers. Print body remains 10pt; repeated wording and vertical spacing were tightened to avoid orphaned closing lines. Public PDFs are current; any older private US exports are historical and should be regenerated with the documented command before use.

Prepared manual LinkedIn/GitHub copy and private factual notes were updated, without changing accounts or sending messages. A fresh local private preview is available for review. No push or deployment performed; recruitment conversion and production response behavior remain unmeasured.

## UI and interaction revision — 30 September 2026

Rebuilt the screen design around a clear visitor journey: identify the professional focus, explore concrete work, inspect its evidence, then choose a résumé or contact. A navy hero, cool neutral canvas, blue links and restrained lime primary action replace the mixed visual treatments. Shared navigation, case typography, work cards, experience pages, visualization archive and résumé selection now use one screen design system. The three printed résumés retain their established layout and content.

The hero offers three manually selected work areas. Entropy's publication breakdown uses one mark per published piece, with the varying-responsibility boundary retained. Atlas shows the source/evidence/human-review workflow and bounded accepted contributions; Yourself to Science uses the existing directory screenshot. Tab controls support arrows, Home/End and touch. No automatic rotation or continuously running animation was added. Brief panel, chart and section entry animations stop on their own and are disabled for reduced motion. Without JavaScript, all three samples remain visible. The work index has native filter buttons and an announced result count; all work remains visible without JavaScript.

Paid Entropy work, Atlas source work and independent directory ownership lead the selection. Wikimedia's original scientific visualization receives a dedicated homepage section. Padua support, education, broader investigations and the complete experience record remain discoverable; Hypermandala and Notandia sit in a supporting experiments section. No canonical biography, qualifications, project ownership or attribution evidence was upgraded or removed. Public PDFs and private exports were not regenerated in this presentation pass.

Validation: full build; 56 route/viewport checks at 1440, 768, 390 and 320 pixels; keyboard tabs and filters, theme, reduced motion, no-JavaScript content, image loading, local links and overflow. Eleven sampled light/dark text-background pairs meet 4.5:1, with the lowest at 5.56:1; this is not a complete accessibility audit. All three browser print layouts matched screenshots captured before this revision exactly. Private-preview escaping/download/isolation checks passed. Reviewed desktop/mobile screenshots and the source-quality interaction in the in-app browser. No push or deployment performed. Hiring conversion remains unmeasured; this is a design candidate for visitor feedback, not an asserted optimum.

## Published-artifact revision — 30 September 2026

Replaced the active publication-count diagram, abstract Atlas workflow and simulated extension preview with genuine published media and rendered interface captures. The opening feature is Mario’s shark-attack map, so the first example shows a personally attributed output rather than a presenter’s portrait. The calmer neutral/cobalt frame lets the work supply its own color. Manual project tabs and brief motion remain; no auto-rotation or autoplay was introduced.

Paid Entropy work leads, with shark attacks and cannabis video previews, AIRC reel examples, original article/website captures and published Tableau/Flourish views. The full case provides 56 video entries, 17 thumbnail entries and 21 reels behind native disclosures. Four AIRC-captioned reels are separated from AIL collaborations; personal data-visualization authorship is contributor-confirmed and does not imply sole authorship of the complete reels. The profile is a broad video collection, not a curated video selection. Older contribution totals remain dated and are not combined with current playlist counts.

Notandia and Yourself to Science now have real interface previews in the main tool section. Captured Notandia’s actual settings from the installed current source in an isolated temporary Chrome profile. A live reference-context attempt was unsuccessful and PubMed subsequently presented a CAPTCHA; no successful end-to-end reference-checking result is claimed. Empty popup captures are not portfolio assets. The existing store listing is not represented as the current interface. Atlas uses the actual merged PR #70 and a linked, narrowly scoped maintainer review. Hypermandala and the protein explorer use their actual live interfaces; Hypermandala source remains private.

Expanded the visualization archive to eleven artifacts/collections with nine genuine previews and a disclosure containing 51 published Flourish links, including alternate views and related stories. Added the seven-view industrial-hemp story with original byline, axes, source and license visible. All prior Wikimedia, Padua, education, source-investigation, Telegram and other experience coverage remains discoverable. New media provenance is documented in `docs/work-media-provenance.md`. Media records are canonical JSON inputs; career facts remain in `data/source.js` → `presence`. Compact dossier wording was tightened to keep the existing 1,200-word gate without removing detailed website evidence.

Validation: full build, factual/routing/interop/generated-output/privacy checks and parsed JSON-LD; 60 route/viewport combinations at 1440, 768, 390 and 320 pixels; image loading, no overflow, local links, keyboard tabs/filters/disclosures and mobile chart scrolling, theme, reduced motion and no-JavaScript collections. All three public résumé print views matched the before screenshots exactly; existing PDFs and private exports were not changed. Private-preview escaping/download/isolation checks passed; the configured phone was absent from the public build. Reviewed desktop/mobile views and actual source captures. No push, deployment or account changes; recruiting conversion remains unmeasured.

## Portfolio balance and current evaluation evidence — 30 September 2026

Reduced repeated Entropy presentation to one substantial homepage case using Mario’s published map. Video thumbnails, AIRC reels, articles, website delivery and the complete visualization archive remain on their case pages. Working independent tools and separate Atlas/Gray Swan evidence cards now precede Entropy. Presenter portraits no longer carry the homepage. Wikimedia, Padua, education and other experience remain discoverable. The opening manual gallery offers refreshed Hypermandala, Notandia and dated model-testing evidence; motion, keyboard controls and no-JavaScript fallback remain.

Verified Hypermandala’s source publicly accessible while logged out, under AGPL-3.0. Refreshed the Sri Yantra screenshot after the creator’s adjustments and replaced stale private-source wording. New form additions and higher-dimensional interpretations remain explicitly experimental and under testing. This portfolio pass did not change Hypermandala or represent its new presets as validated.

Captured the logged-out public Gray Swan profile: Proving Ground #79, top 5%, 127 platform-recorded total breaks; area counters 43/32/35/16 sum to 126. Arena separately reports #462, 31 unique breaks, 1,260 points and 354 submissions. Preserved the unchanged original JPEG and its hash; cropped/compressed derivatives link to the full capture. Added a dated evidence page and canonical snapshot record; JSON transcription is generated from that source. The July screenshot, historical values and 112/113 discrepancy remain unchanged. Updated the AI résumé, case, public structured profile and compact dossiers to the dated September record. No success-rate, paid employment, independent vulnerability verification or security certification is inferred.

Validation: full build and factual/routing/interop/generated-output checks, 33 HTML pages and 35 JSON-LD records; 68 route/viewport checks at 1440/768/390/320, images, overflow, keyboard, theme, reduced motion, no-JavaScript collections and local links. Repaired the verifier’s no-JS wait by polling native scroll state from Node rather than relying on page animation callbacks. Public and ignored private EU AI résumé exports are each one page; inspected both rendered pages and verified selectable updated scores, contact isolation and canonical PDF links. Private-preview escaping/download/isolation checks and final public artifact privacy scan passed. Added a bounded `--variant` PDF-export option to update only the affected résumé. No push, deployment, account edits or repository-visibility changes were performed by this pass; hiring conversion remains unmeasured.


## 24 October 2026 — Carry the tailored CV's evidence standard into public materials

The three public CVs now use dated roles, concrete responsibilities, practical methods and inline evidence links. Paid October media-workflow configuration and client training are distinct from the wider Entropy collaboration. Technical evidence covers troubleshooting, localisation, regression checks and Xcode/iOS Simulator use, without presenting this as physical-device testing or commercial Copilot Studio delivery. Metropolia remains ahead of Microsoft; the AI and technical variants select current study, while the research variant and full experience retain the earlier medicine coursework. Public PDFs remain one page with the existing font sizes.

Portfolio cases now link the Notandia, Telegram and QCAE terminology glossaries. A supporting QCAE page explains the interface, keyboard behaviour, local scoring, exports and language-version provenance. Padua attribution names Marta Panzeri and DPSS; Entropy's work arrangement is primarily remote with occasional studio work in Bassano del Grappa. The homepage and main project order preserve the broader research, information-integrity, AI and technical routes.

Project sections are exported through the canonical public profile and included in descriptive evidence searches. Queries for Xcode, glossary and client training now find their corresponding cases. This adds discoverable evidence without changing the service's read-only permissions.

Validation: full build, routing/factual/privacy/generated-output checks, 36 HTML pages and 40 parsed JSON-LD records; all three public PDFs one page (412/357/412 words), 19 canonical links each, education order and public-contact isolation checked; all final PDF pages visually inspected. Comprehensive rendering passed 84 route/viewport combinations, keyboard, theme, reduced motion, no-JavaScript access and local links. After the final copy changes, another 24 CV/localisation route/viewport checks passed at 1440/768/390/320 pixels, with desktop/mobile inspection of the new QCAE case.

A private LinkedIn review draft is based on a live profile read: retain the already-current headline/About and focus on localisation/testing details, the Notandia Featured destination, the bot's current repository, self-paced study wording and Padua context. Paid Experience descriptions did not load and remain conditional. No live LinkedIn edits, résumé uploads or messages were made; website deployment remains a separate review step.


## 24 October 2026 — Consulting and technical-delivery positioning

The technical CV is now titled **AI Workflows & Technical Delivery**, retaining its established route and PDF filename. Its summary and Entropy bullet order lead with reusable workflows, operating instructions, output review and client training. Scientific research, source investigations, software quality and a separate tailored QA application remain relevant evidence. This change does not add commercial enterprise-platform experience or measured financial outcomes.

The homepage leads to services while preserving a prominent résumé route. Services specify useful deliverables, review points and handover, and contact guidance asks for the problem, users, desired outcome, timeline and indicative budget. Website work is presented as delivery and workflow improvement. Broad audience, remote/relocation openness and email-first calls by appointment are retained. Public profile/LLM route labels are generated consistently.

Private strategy documents supersede support-first job targeting and fixed application quotas with screening for contact volume, shifts, substantive responsibility and effective compensation. LinkedIn About, Services text and job recommendations were updated and saved: scoped consulting, implementation, evaluation, research and software QA. Recruiter-only visibility and existing service categories were retained. No messages, posts or CV uploads were made.

Validation: full build and generated-output/privacy/routing checks; the technical PDF remains one page, visually inspected, with 19 canonical links. All three public PDFs retain one-page counts, education order and canonical URLs. Targeted desktop/mobile and no-JavaScript navigation checks cover the changed homepage and all CV routes.

25 October 2026: Added the publicly verified “Atlassian Credentialed in JSM Fundamentals with AI” certificate, earned 24 October 2026 and active through 24 October 2027. The canonical profile, credential cards, structured data and machine-readable dossier use the issued title, public verifier and certificate category. Assessment descriptions distinguish the Atlassian fundamentals exam from the Microsoft hands-on lab. The certificate appears in the technical CV; the research and AI CV PDFs remain unchanged.

Validation: full build and agent-discovery checks passed; 84 route/viewport checks and local verification of 11 routes and 87 exact assets passed. The revised technical PDF remains one page with 20 links, and its layout was visually inspected. A separate review confirmed the title, dates, verification code, scope and absence of private account identifiers from the public change.

The remote rendering check exposed a navigation race in the existing no-JavaScript CV-link test. The check now waits for the clicked link's document navigation before reading its title; no assertion was removed or relaxed.


## Wikimedia corporate research and bibliography — 26 October 2026

Expanded the existing Nebula case with acquisition and company-formation chronology, separate ProPhase Labs and DNA Complete records, and the distinction between ownership and sequencing-service relationships. Attributed Wikipedia and Wikidata revisions and the SEC filing remain accessible through the source links and an expandable list. Historical source work is distinguished from a current corporate-status audit; the evidence note dates the fresh Nebula review separately from the older cases.

Added a compact Wikidata bibliography example linking Against Intellectual Monopoly to five reviews and critical discussions. The copy describes created records, publication identifiers, source references and relationships while preserving contribution attribution and differing publication statuses. The existing CV statements already cover source review and structured metadata; this addition supplies concrete portfolio evidence.

Validation: the full configured build sequence passed, including stale-copy, public routing, Vite interop, generated dossiers, agent discovery/service, Astro, generated-output/privacy, structured-data and output-provenance checks. After the final copy edit, regenerated Astro output and repeated the generated-output, structured-data and output checks. Targeted browser verification passed eight route/viewport combinations for /work/wikimedia and /investigations at 1440, 768, 390 and 320 pixels, plus keyboard-operated source disclosures, no-JavaScript access, local links, duplicate IDs, overflow and page errors. Inspected desktop and mobile captures. An independent review verified contribution attribution and retained bibliography relationships. Local only; no commit, push or deployment.


## One positioning for software QA, AI evaluation and research — 31 October 2026

Public materials now follow one thread: testing software, AI systems and claims. `currentPositioning`, the hero, the page title and the résumé titles use Software QA, AI Evaluation and Research. The three PDFs are renamed to match, with 301 redirects from the old names, and carry an author field. Services move directly below the hero, add software and localisation QA, and drop data visualisation as a listed service; the portfolio pages are unchanged. Header lines state native Italian, and the site links to the Malt profile.

Validation: the full configured build, 84 route/viewport and interaction checks, and three regenerated one-page PDFs with their links intact.

## Biomedical diagram publication reuse — 26 October 2026

Added the verified reuse of Mario's Commons biomedical diagram in Michele Di Salvo's 2024 Palgrave Macmillan / Springer Nature chapter. The public claim separates original authorship and licence from chapter metadata and links both primary records. The Wikimedia case, visualisation gallery and default research CV now expose that evidence through a shared diagram-reuse anchor. The technical and AI CV PDFs are unchanged.

Validation: the full configured build, 84 route/viewport and interaction checks, gallery filtering and no-JavaScript access, mobile-overflow and Notandia-continuity checks, discovery checks, IndexNow dry run and local verification of 11 release routes and 87 exact assets passed. The regenerated research CV remains one page with 21 links; an independent review confirmed its text, source anchors, generated-profile consistency and public/private boundaries. Publication uses the repository's separate PR and native Cloudflare release checks.
