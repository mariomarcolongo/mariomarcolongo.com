# Mario Marcolongo — Portfolio & Application CVs

Public website: [mariomarcolongo.com](https://mariomarcolongo.com). Repository: [mariomarcolongo/mariomarcolongo.com](https://github.com/mariomarcolongo/mariomarcolongo.com).

The portfolio presents research and technical operations through paid scientific work, source investigations, data visualization, independent tools and accepted open-source contributions. Individual work, project-wide results and qualifications remain distinct.

## Current routes

- `/`: selected work, experience, education and international availability.
- `/experience`: fuller responsibilities across paid, volunteer and independent work.
- `/work`: project index, including Entropy for Life, the AI Safety Formalization Atlas, Yourself to Science, Notandia and Hypermandala.
- `/work/scientific-visualizations`: Wikimedia Commons, Tableau and Flourish artifacts and collections.
- `/investigations`: attributed source investigations.
- `/evidence`: claim provenance, source ownership and dated observations.
- `/cv`, `/cv-technical`, `/cv-ai`: three selective application résumés with downloadable PDFs.
- `/profile.json`, `/cv-llm.txt`, `/llms.txt`: generated public records. Historical routes redirect to current equivalents.

## Source ownership

`data/source.js` → `presence` is the canonical public fact and copy record. `src/` owns the current pages and presentation. The remaining legacy data supports historical records; it is not a second public biography.

`npm run build` generates public dossiers, Astro output, Markdown alternatives, sitemap and tracked root HTML mirrors, and verifies facts, routing, interop and structured data. Edit canonical sources first; do not hand-edit generated pages or dossiers.

```sh
npm install
npm run build
npm run pdf
npm run verify:render
```

PDF generation uses a local browser and loopback server. `npm run pdf` generates the three public PDFs without loading private contact configuration.

## Local private CVs

Set `CV_PHONE` or use ignored `data/private.local.js`. Never add private contact data to tracked source. Generate ignored regional exports deliberately:

```sh
node scripts/generate-cv-pdf.js --region=EU --include-phone
node scripts/verify-private-preview.js
npm run preview
```

The private preview binds to `127.0.0.1`, inserts the configured phone only in CV responses and routes their downloads to ignored EU PDFs. It does not write the phone into `dist/`. Use `PRIVATE_PREVIEW_PORT` if the default port is occupied. `npm run preview:public` serves the public output instead.

`--region=US` generates ignored Letter-format application exports; relocation openness does not establish US work authorization.

See [IMPLEMENTATION.md](IMPLEMENTATION.md) for implementation decisions and dated validation. Local checks do not prove production behavior or hiring conversion. Pushes, deployments and changes to other project repositories are separate actions.
