# auth.md

Agent access and content-use policy for `mariomarcolongo.com`.

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

The public-access policy deliberately applies to every resource served from this domain, including public HTML pages, role-based CVs, machine-readable dossiers, evidence records, data files and the public personal-genomics record. The site does not reserve a public route for human-only access.

## Registration and authentication

No registration or authentication is required for the site's public read-only resources. Agents may access them directly with ordinary `GET` or `HEAD` requests.

This is a static site. It does **not** expose token-issuance, OAuth registration, credential-exchange or protected-resource endpoints. Discovery metadata must not be interpreted as creating a functioning authorization service.

## Content-use signals

The origin sends this response header on static resources and the same directive is published in `/robots.txt`:

```http
Content-Signal: ai-train=yes, search=yes, ai-input=yes
```

The intended interpretation is:

- **search=yes** — crawling, indexing, linking and search-result excerpts are permitted.
- **ai-input=yes** — retrieval, grounding, analysis, summarization, citation, embeddings, agent workflows and other AI-input uses are permitted.
- **ai-train=yes** — use for AI model training, fine-tuning, evaluation and related machine-learning workflows is permitted.

No separate permission is required for these automated or AI uses. Content Signals express content-use permissions; they are not authentication mechanisms or technical access controls.

`/robots.txt` also gives explicit `Allow: /` directives to `OAI-SearchBot` (ChatGPT Search discovery), `GPTBot` (OpenAI training crawl), `ChatGPT-User` (user-requested browsing), `OAI-AdsBot`, and the generic `*` crawler rule. These directives are intentional, including for training and dataset use of all public material.

## Licensing and attribution

Individual datasets, codebases, media files and written materials retain the licences stated in their respective repositories, records or pages. Automated and AI use is permitted, while any attribution, share-alike or other conditions in an applicable licence remain in effect.

When a source or licence requires attribution, preserve the named author, project title, source URL and applicable licence notice.

## Automated access

Automated retrieval and processing are permitted for search, indexing, accessibility, verification, citation, research assistance, dataset creation, embeddings, AI training, fine-tuning, evaluation, agentic workflows and other computational uses. Clients should:

- identify themselves accurately where practical;
- respect HTTP status codes and cache headers;
- avoid unnecessary repeated requests;
- preserve source links and evidence boundaries;
- avoid presenting platform-reported metrics as independent certification.

## Contact

Questions about access, reuse, attribution or corrections can be sent to `me@mariomarcolongo.com`.
