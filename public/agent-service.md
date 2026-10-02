# Mario Marcolongo — public evidence service

Retrieve the same professional records and evidence used by this portfolio. The service is public and read-only; no sign-in is required. It does not generate answers, evaluate candidates, submit applications, send messages or access private files.

## HTTP API

- Profile, education, attribution and dated claims: `GET https://mariomarcolongo.com/api/profile`
- Evidence search: `GET https://mariomarcolongo.com/api/evidence?q=Atlas&limit=5`
- All résumé links: `GET https://mariomarcolongo.com/api/resumes`
- Technical résumé links: `GET https://mariomarcolongo.com/api/resumes?focus=technical`

Résumé focus values are `default`, `technical` and `aiEvaluation`. Search is literal keyword overlap, not semantic matching or an assessment of competence. Query length is limited to 200 characters; results to 20. No match is not proof that experience is absent. Queries are URL parameters and may appear in hosting access logs; use public professional topics only.

## MCP connection

Streamable HTTP endpoint: **https://mariomarcolongo.com/mcp**

Supported versions: `2025-11-25`, `2025-06-18`, `2025-03-26`. No API key, OAuth, session or model subscription is needed. The server returns JSON responses and does not offer an SSE stream. POST messages must accept both `application/json` and `text/event-stream`; include the negotiated `MCP-Protocol-Version` header on subsequent requests. Requests are limited to 16 KiB. Browser-origin requests must originate from the same site; server-to-server clients can omit Origin.

Tools:

- `get_profile`: public professional profile, including education and evidence limits.
- `search_evidence`: `{ "query": "Atlas", "limit": 5 }` returns relevant public records, linked claims, sources and limitations.
- `get_resumes`: optionally `{ "focus": "technical" }`; returns existing public PDFs and pages.

Resources: `portfolio://profile`, `portfolio://evidence`, `portfolio://resumes`.

Discovery: [MCP server card](https://mariomarcolongo.com/mcp/server-card) (experimental MCP extension) and [organization index](https://mariomarcolongo.com/.well-known/agent-index.json) (publisher-defined JSON). DNS-AID remains an experimental draft. Neither discovery document advertises A2A or authentication services.

## Interpretation

These are owner-maintained records, not independent certification. Preserve each claim’s source ownership, dates and limitations. Organizational audience figures are not Mario’s personally attributable reach. Draft-paper authorship is not publication; Open UAS path enrollment is not an awarded degree. AI-assisted implementation is disclosed in the underlying profile.

Responses derive from the public profile generated from `data/source.js`. No external websites are fetched during a query. No conversations, user accounts or query history are stored by the application; ordinary hosting infrastructure may retain request logs. Code: [public repository](https://github.com/mariomarcolongo/mariomarcolongo.com).
