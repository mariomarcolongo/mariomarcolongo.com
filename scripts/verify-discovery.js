#!/usr/bin/env node
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const P=require('../data/source.js').presence;
const dist=path.resolve(__dirname,'../dist');
const urls=[...fs.readFileSync(path.join(dist,'sitemap.xml'),'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map(x=>x[1]);
assert.equal(new Set(urls).size,urls.length,'Duplicate sitemap URLs');
const pngSize=file=>{const b=fs.readFileSync(file);assert.equal(b.subarray(1,4).toString(),'PNG');return[b.readUInt32BE(16),b.readUInt32BE(20)]};
for(const url of urls){
 const route=new URL(url).pathname;
 assert.ok(!route.endsWith('.html')&&(route==='/'||!route.endsWith('/')),`${url}: inconsistent clean URL`);
 const html=fs.readFileSync(path.join(dist,route==='/'?'index.html':route+'.html'),'utf8');
 const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
 assert.equal(canonical,url,`${route}: canonical/sitemap mismatch`);
 assert.ok(!/<meta name="robots" content="[^"]*noindex/.test(html),`${route}: indexed sitemap page has noindex`);
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,`${route}: one clear H1`);
 assert.ok((html.match(/<title>(.*?)<\/title>/)?.[1]||'').includes(P.name),`${route}: identity missing from title`);
 assert.ok(html.includes(`content="${canonical}"`),`${route}: social URL missing`);
 const image=html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
 assert.ok(image,`${route}: share image missing`);
 assert.equal(new URL(image).origin,P.canonicalUrl);
 assert.deepEqual(pngSize(path.join(dist,new URL(image).pathname)),[1200,630],`${route}: wrong preview dimensions`);
 assert.ok(html.includes('content="summary_large_image"'));
 for(const link of ['/favicon-192x192.png','/favicon.svg','/apple-touch-icon.png','/site.webmanifest'])assert.ok(html.includes(`href="${link}"`),`${route}: ${link}`);
 const graphs=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].flatMap(x=>{const g=JSON.parse(x[1]);return g['@graph']||[g]});
 const person=graphs.find(g=>g['@id']===`${P.canonicalUrl}/#person`);
 assert.equal(person.name,P.name);assert.deepEqual(person.sameAs,[P.github,P.linkedin,P.orcidUrl]);
 const page=graphs.find(g=>g['@id']===`${canonical}#webpage`);
 assert.equal(page.url,canonical);assert.equal(page['@type'],route==='/'||/^\/cv(?:-technical|-ai)?$/.test(route)?'ProfilePage':'WebPage');
}
for(const [name,size] of [['favicon-48x48.png',48],['favicon-192x192.png',192],['favicon-512x512.png',512],['apple-touch-icon.png',180]])assert.deepEqual(pngSize(path.join(dist,name)),[size,size]);
const manifest=JSON.parse(fs.readFileSync(path.join(dist,'site.webmanifest')));assert.equal(manifest.name,`${P.name} — ${P.currentPositioning}`);
const profile=JSON.parse(fs.readFileSync(path.join(dist,'profile.json')));assert.equal(profile.reviewedAt,P.reviewedAt);assert.equal(profile.linkedin,P.linkedin);assert.equal(profile.education[0].degreeAwarded,false);
assert.ok(fs.readFileSync(path.join(dist,'llms.txt'),'utf8').includes(`${P.canonicalUrl}/notandia`));
assert.ok(fs.readFileSync(path.join(dist,'404.html'),'utf8').includes('content="noindex"'));
assert.ok(fs.readFileSync(path.join(dist,'robots.txt'),'utf8').includes(`${P.canonicalUrl}/sitemap.xml`));
console.log(`${urls.length} indexable routes: canonical, identity, schema, social previews, icons and machine-readable records passed.`);
