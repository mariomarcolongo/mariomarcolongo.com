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
