// functions/[[path]].js
export async function onRequest(context) {
    const { request, next } = context;
    const url = new URL(request.url);
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
    if (wantsMarkdown) {
        let path = url.pathname === "/" ? "/index.md" : url.pathname.replace(".html", ".md");
        
        // Fetch the file using the Pages internal fetch
        const response = await fetch(new Request(new URL(path, url.origin), request));
        
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
        headers.append("Link", '<https://mariomarcolongo.com/.well-known/api-catalog>; rel="api-catalog"');
        headers.append("Link", '<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"');
        headers.append("Link", '<https://mariomarcolongo.com/llms-full.txt>; rel="describedby"; type="text/plain"');
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
