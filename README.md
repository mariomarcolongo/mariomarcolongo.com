# Mario Marcolongo — Portfolio & Application CV System

> **AI Evaluation & Research Operations Specialist**  
> Model Behavior · Scientific Evidence · Knowledge Integrity · Open Science & Data Quality

Live website: [mariomarcolongo.com](https://mariomarcolongo.com)

## Purpose

This repository generates Mario Marcolongo's public portfolio, evidence record, work-sample pages, machine-readable dossiers and role-specific application CVs.

The public positioning is intentionally ambitious but evidence-bound. It presents current strengths in exploratory AI evaluation, paid scientific verification, research/product operations and knowledge integrity without claiming independent software-development, penetration-testing or senior red-team-engineering experience that has not yet been demonstrated.

## Career hierarchy

The homepage prioritizes the evidence most relevant to higher-upside roles and to realistic paths toward them:

1. **AI evaluation and model behavior** — exploratory adversarial testing, safeguards support, evaluation operations and evidence-bound reporting.
2. **Scientific AI quality and research data** — primary-source verification, provenance, metadata, domain-expert review and research operations.
3. **Trust, safety and knowledge integrity** — source provenance, public-record investigation, structured-data integrity and OSINT support.
4. **Research, editorial and community operations** — a credible bridge path for evidence-synthesis, editorial-production and participant-facing roles.

Longer-term targets include automated evaluation, AI-safety program or technical operations, evaluation infrastructure and higher-responsibility trust/integrity work. Engineering-heavy roles remain a development target requiring independently understood Python, software-testing and security experience.

## Public routes

- **Portfolio (`/`)** — readable metric-led evidence cards, three principal cases, supporting products and curated data artifacts, an explicit high-autonomy working profile, concise experience and targeted CV selection.
- **AI Evaluation Record (`/security.html`)** — scope, methodology, platform-reported Gray Swan activity, the live participant profile as the primary destination, dated evidence and explicit limitations.
- **Knowledge Integrity Work Samples (`/integrity.html`)** — provenance, health-information monitoring, entity reconciliation and structured-data cases.
- **AI Evaluation & Model Behavior CV (`/cv-resume.html`)** — two-page application document.
- **Scientific AI Quality & Research Data CV (`/cv-research.html`)** — two-page application document.
- **Trust, Safety & Knowledge Integrity CV (`/cv-integrity.html`)** — two-page application document.
- **Research, Editorial & Community Operations CV (`/cv-editorial.html`)** — two-page bridge document.
- **Master CV (`/cv.html`)** — comprehensive evidence archive; not the default application attachment.

All four specialized application CVs are verified as exactly two A4 pages. The master CV is intentionally comprehensive and may be longer.

## Focus-group research attribution

Marta Panzeri gave permission to identify her and the institutional context of the collaboration. The public record therefore names:

- Marta Panzeri;
- the Department of Developmental Psychology and Socialisation (DPSS);
- the University of Padua;
- the related public thesis context.

The description covers Mario's own contribution to remote focus-group facilitation with autistic participants, including structured prompts, participant-sensitive pacing, two-person handoffs, recruitment, literature research, technical preparation and privacy boundaries. It does not disclose participant identities, recordings or confidential session content, and it does not imply institutional endorsement.

The collaboration is retained as named experience and in the relevant CV; it is not given the same homepage prominence as the three principal high-upside evidence cases.

## Evidence architecture

- `data/source.js` — canonical factual dossier and public evidence boundaries.
- `data/application-profiles.js` — role-specific CV selection and wording.
- `data/portfolio-human.js` — homepage hierarchy, evidence cards, explicit link destinations, working-profile language and application routes.
- `src/pages/` — Astro source pages.
- `src/styles/portfolio-v6-overrides.css` — readable evidence-card system and corrected contact contrast layered over the established portfolio layout.
- `scripts/generate-llm-dossiers.js` — canonical machine-readable dossiers.
- `scripts/postbuild.js` — generated root mirrors and post-build outputs.
- `scripts/verify-dist.js` — generated-output, metadata and evidence assertions.
- `scripts/verify-rendering.js` — desktop, tablet, mobile, light/dark and no-JavaScript rendering checks.
- `scripts/lighthouse-static-server.js` — production-like compressed static server used by the Lighthouse gate.

Generated outputs include:

- `llms.txt`
- `llms-full.txt`
- `cv-llm.txt`
- static HTML mirrors for all public routes
- four specialized two-page PDFs
- a comprehensive master-CV PDF
- responsive WebP portfolio previews
- page-specific Open Graph images and favicon assets

## Gray Swan evidence

The live Gray Swan participant profile is the primary external destination. The current dated evidence page preserves the 25 July 2026 screenshot showing Proving Ground rank #75, top 6%, and 110 platform-recorded total breaks, alongside the separate Arena metrics (#370 rank, 27 global unique breaks, 1,090 points and 246 submissions).

A locally retained same-day WACZ capture records the immediately preceding state at 17:09 UTC: the same #75/top-6% position with 109 total breaks, Arena rank #372, 26 unique breaks, 1,080 points and 245 submissions. Its hash and scope are documented without publishing potentially sensitive archive-request data. The independently preserved 24 July snapshot remains available through Perma.cc. All counts are presented as time-stamped platform records, not independent vulnerability reproduction or certification.

## Private phone number in local PDFs

The public repository and website do not contain a personal phone number. To include it in locally generated PDFs, set `CV_PHONE` only in the local environment:

```bash
CV_PHONE="+39 ..." npm run pdf
```

The generator injects the value at render time without writing it into tracked source files or public HTML.

## Verification and release gates

```bash
npm ci
npm run build
npm run verify:render
npm run pdf
```

The build fails closed on stale positioning, unsupported claims, missing generated files, invalid structured data and inconsistent dossier mirrors.

The permanent `Lighthouse 100 audit` workflow is read-only. It builds the repository, runs the complete rendering and PDF suites, serves the production output with compression and cache behavior, and requires exact category scores of 100 for mobile and desktop in:

- Performance
- Accessibility
- Best Practices
- SEO

The workflow archives the complete Lighthouse JSON reports and diagnostic opportunities. Category scores are lab measurements rather than a guarantee that every real-world visit will always reproduce the same timings.

## Public records

- [ORCID 0000-0003-2846-7115](https://orcid.org/0000-0003-2846-7115)
- [Gray Swan Proving Ground profile](https://app.grayswan.ai/arena/user/6a57be70d15e123775a1e9cf)
- [Gray Swan evidence — 25 July 2026](https://mariomarcolongo.com/evidence/gray-swan-profile-2026-07-25.html)
- [Historical Gray Swan capture — 24 July 2026](https://perma.cc/U8TY-PWYA)
- [Wikimedia CentralAuth record](https://commons.wikimedia.org/wiki/Special:CentralAuth/Digressivo)
- [ENA accession PRJEB109744](https://www.ebi.ac.uk/ena/browser/view/PRJEB109744)
- [Yourself to Science](https://yourselftoscience.org)

## Licensing

Licensing differs by component and is documented at the relevant project, dataset or record level. Portfolio source code, datasets, images and editorial content must not be treated as sharing one blanket licence.
