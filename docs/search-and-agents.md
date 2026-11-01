# Search and agent readiness

Everything here is generated or checked by the build. `scripts/verify-seo.js` fails the build if any of it breaks.

## What each audience reads

| Reader | Uses |
|---|---|
| Search engines | HTML, JSON-LD, `sitemap.xml` with dates, `robots.txt`, canonical links |
| AI search and assistants | The same HTML, plus `llms.txt`, `llms-full.txt` and `Accept: text/markdown` |
| Agents | `/mcp`, `/a2a`, `/api/*`, `openapi.json`, `.well-known/api-catalog`, `.well-known/ai-catalog.json`, agent card, agent skills, WebMCP |
| Recruiter tools and ATS | One-page PDFs, `resume.json`, `profile.json`, schema.org `Person` |

## Rules

- **Do not publish a capability the site does not have.** No OAuth metadata or `auth.md`, because nothing here needs a sign-in. No Web Bot Auth keys, because the site runs no crawler. The agent-readiness scanner marks those as failed or neutral, and the site still reaches its top level without them.
- **The HTML page is the one that ranks.** Markdown mirrors stay available to agents but send `X-Robots-Tag: noindex` and point to the page as canonical.
- **Link straight to canonical addresses.** No trailing slashes or `.html` in internal links.
- **Keep links out of `<nav>` if agents need them.** The markdown converter strips `<nav>`, so source links use a `div` with `role="group"`.
- **Keep private details out of machine files.** No phone, street address or portrait in `resume.json` or on résumé pages, including their structured data.
- **Update `reviewedAt` when data is rechecked.** It sets sitemap dates, structured data, the home page date and the `security.txt` expiry.
- **Evidence search must find what the résumés claim.** `verify-agent-service.mjs` holds the recruiter vocabulary. Add new skills to it.
- **Bing wants descriptions of 150 to 160 characters.** The build enforces 140 to 160.

## After each release

1. Run `node scripts/submit-indexnow.mjs` so Bing and others recrawl quickly.
2. In Search Console, request indexing for pages whose title or description changed.
