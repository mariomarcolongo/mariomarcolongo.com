// functions/[[path]].js
const UNSUPPORTED_OAUTH_METADATA_PATHS = new Set([
    "/.well-known/oauth-authorization-server",
    "/.well-known/oauth-protected-resource"
]);

function markdownVariantPath(pathname) {
    if (pathname === "/") return "/index.md";
    if (pathname.endsWith(".html")) return `${pathname.slice(0, -5)}.md`;
    if (pathname.startsWith("/.well-known/")) return null;

    const normalizedPath = pathname.replace(/\/+$/, "");
    const leaf = normalizedPath.split("/").pop() || "";
    if (!normalizedPath || leaf.includes(".")) return null;

    return `${normalizedPath}.md`;
}

export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);

    // This is a public static site, not an OAuth issuer or protected resource.
    // Handle these retired metadata paths before the cache/fallback path so a
    // cached homepage cannot be misrepresented as OAuth JSON metadata.
    if (UNSUPPORTED_OAUTH_METADATA_PATHS.has(url.pathname)) {
        return new Response("Not found.\n", {
            status: 404,
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Cache-Control": "no-store",
                "X-Worker-Active": "true"
            }
        });
    }

    const accept = (request.headers.get("Accept") || "").toLowerCase();
    const wantsMarkdown = accept.includes("text/markdown");
    const canCacheHtml = request.method === "GET" && !wantsMarkdown && url.search === "";

    // This portfolio is public and static, but this catch-all Function adds
    // discovery headers to every response. Without an explicit cache, that
    // turns otherwise cacheable HTML into a dynamic response on each visit.
    // Cache only the negotiated HTML variant: Markdown remains separately
    // negotiated by the Accept header below, and requests with a query string
    // are never shared through this cache.
    const cache = caches.default;
    if (canCacheHtml) {
        const cached = await cache.match(request);
        if (cached) return cached;
    }

    // 1. Markdown Negotiation
    const markdownPath = wantsMarkdown ? markdownVariantPath(url.pathname) : null;
    if (markdownPath) {
        
        // Fetch the file using the Pages internal fetch
        const response = await fetch(new Request(new URL(markdownPath, url.origin), request));
        
        if (response.status === 200) {
            return new Response(response.body, {
                headers: {
                    "Content-Type": "text/markdown; charset=utf-8",
                    "X-Worker-Active": "true"
                }
            });
        }
    }

    // 2. Default Fallback
    const response = await next();
    const headers = new Headers(response.headers);
    
    // Inject Discovery Links
    if (headers.get("Content-Type")?.includes("text/html")) {
        const alternateMarkdownPath = markdownVariantPath(url.pathname);
        headers.append("Link", '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"');
        headers.append("Link", '<https://mariomarcolongo.com/.well-known/ard.json>; rel="ard"; type="application/json"');
        headers.append("Link", '<https://mariomarcolongo.com/.well-known/ai-catalog.json>; rel="ai-catalog"; type="application/json"');
        headers.append("Link", '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"');
        headers.append("Link", '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"');
        if (alternateMarkdownPath) {
            headers.append("Link", `<https://mariomarcolongo.com${alternateMarkdownPath}>; rel="alternate"; type="text/markdown"`);
        }
    }
    
    headers.set("X-Worker-Active", "true");

    if (canCacheHtml && response.status === 200 && headers.get("Content-Type")?.includes("text/html")) {
        // A short browser TTL keeps releases responsive; s-maxage gives each
        // Cloudflare edge location enough time to amortize the Function and
        // static-asset work for anonymous public visitors.
        headers.set("Cache-Control", "public, max-age=300, s-maxage=3600");
        const cacheableResponse = new Response(response.body, { status: response.status, headers });
        context.waitUntil(cache.put(request, cacheableResponse.clone()));
        return cacheableResponse;
    }

    return new Response(response.body, { status: response.status, headers });
}
