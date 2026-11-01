# Design system

The site is a ruled page. A red margin line runs down every page. Claims sit to the right of it; dates, status and sources sit to the left. The colour comes from the dot in the logo.

## Rules

- **One screen stylesheet, one print stylesheet.** `src/styles/site.css` is wrapped in `@media screen`. `src/styles/print.css` is wrapped in `@media print` and holds fixed values, so a dark theme cannot reach a printed résumé.
- **Three voices.** Serif (`--serif`) states a claim. Sans (`--sans`) explains it. Monospace (`--mono`) keeps the record: dates, status, identifiers, source links.
- **System typefaces only.** No font files, so no font download and no layout shift.
- **`.ruled` is the page grid.** Direct `section` children become rows on a subgrid. A leading `h2`, `.meta` or `.band-label` moves into the margin and stays sticky; everything else sits in the main column. New pages get this by using `PageHead` and plain sections.
- **Limits stay beside claims.** `ClaimLedger` renders `presence.claims`. A new claim appears there automatically, and the build fails if its `engagementType` has no evidence area.
- **Red is for marks, not links.** `--mark` is for text-size marks, `--mark-line` for lines and bars. Links stay ink with a thin underline.
- **No tick marks on claims.** A tick implies independent verification, which the evidence page says publication does not provide.

## Motion

Motion is decoration. Nothing may depend on it.

- Reduced-motion visitors get none of it, and no-JavaScript visitors lose nothing.
- Never animate from invisible. `rise` starts at readable opacity, because animations can be paused by offscreen or background rendering. Scroll-linked motion moves only, because it runs in reverse above the viewport and accessibility tools measure text mid-animation.
- Scroll timelines stay in the `--read-timeline` and `--enter-timeline` variables. The CSS minifier folds a literal `animation-timeline` into the `animation` shorthand, and browsers then reject the whole declaration.
- The margin line tracks reading progress with `animation-timeline`. Browsers without it show a static red line.

## Checks

- `npm run build`, then `npm run verify:render`.
- Look at the pages too. Passing tests have missed layout faults and a silently dropped animation.
- Printed résumés must not change: compare print output before and after any CSS work.
