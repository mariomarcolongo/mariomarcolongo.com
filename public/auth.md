# Agent Access and Content-Use Policy

**Domain:** `mariomarcolongo.com`  
**Owner:** Mario Marcolongo (`me@mariomarcolongo.com`)  
**Status:** Public static portfolio and machine-readable professional dossier

## Public access

The public pages and discovery resources on this domain can be read without authentication, account registration, API keys or bearer tokens.

Primary machine-readable resources:

- `/llms.txt` — concise site and professional overview
- `/llms-full.txt` — comprehensive evidence dossier
- `/cv-llm.txt` — machine-readable curriculum vitae
- `/data/source.js` — effective structured public dossier
- `/.well-known/api-catalog` — public API and discovery linkset
- `/.well-known/agent-card.json` — Agent-to-Agent discovery card
- `/.well-known/mcp/server-card.json` — MCP server card

This is a static site. It does **not** expose token-issuance, OAuth registration, credential-exchange or protected-resource endpoints. References to authentication in discovery metadata describe compatibility information only and do not create a functioning authorization service.

## Content-use signals

The origin sends this response header on static resources:

```http
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

The intended interpretation is:

- **search=yes** — indexing, links and short search-result excerpts are permitted.
- **ai-input=yes** — query-time retrieval, grounding and other immediate AI input uses are permitted.
- **ai-train=no** — use for training or fine-tuning AI models is not granted through this signal.

The same policy is summarized in `/robots.txt`. Content Signals express content-use preferences; they are not authentication mechanisms or technical access controls.

## Licensing and attribution

Individual datasets, codebases, media files and written materials retain the licences stated in their respective repositories, records or pages. Open access to a URL does not replace those project-specific licence terms.

When a source or licence requires attribution, preserve the named author, project title, source URL and applicable licence notice.

## Automated access

Reasonable automated retrieval for search, accessibility, verification, citation, research assistance and query-time grounding is permitted. Clients should:

- identify themselves accurately where practical;
- respect HTTP status codes and cache headers;
- avoid unnecessary repeated requests;
- preserve source links and evidence boundaries;
- avoid presenting platform-reported metrics as independent certification.

## Contact

Questions about access, reuse, attribution or corrections can be sent to `me@mariomarcolongo.com`.
