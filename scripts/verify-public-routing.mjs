import {readFile} from 'node:fs/promises';import assert from 'node:assert/strict';
const source=await readFile(new URL('../functions/[[path]].js',import.meta.url),'utf8');const {onRequest}=await import(`data:text/javascript,${encodeURIComponent(source)}`);
const request=(path,accept='text/html')=>new Request('https://mariomarcolongo.com'+path,{headers:{Accept:accept}});
const run=(path,accept,type='text/markdown; charset=utf-8',status=200)=>onRequest({request:request(path,accept),env:{ASSETS:{fetch:async()=>new Response(type.startsWith('text/html')?'<html>Fallback</html>':'# Actual markdown',{status,headers:{'Content-Type':type}})}},next:async()=>new Response('<html>Page</html>',{headers:{'Content-Type':'text/html'}})});
for(const p of ['/.well-known/oauth-protected-resource','/.well-known/oauth-authorization-server','/.well-known/ard.json','/.well-known/mcp/server-card.json','/auth.md','/data/source.js']){const r=await run(p);assert.equal(r.status,404);assert.equal(r.headers.get('Cache-Control'),'no-store');}
for(const [from,to] of [['/cv-research','/cv'],['/cv-editorial.html','/cv'],['/cv-resume','/cv-ai'],['/security','/ai-evaluation'],['/integrity','/investigations']]){const r=await run(from);assert.equal(r.status,301);assert.equal(r.headers.get('Location'),'https://mariomarcolongo.com'+to);}
let r=await run('/cv','text/markdown');assert.equal(r.status,200);assert.equal(r.headers.get('Vary'),'Accept');assert.equal(r.headers.get('Content-Signal'),'search=yes, ai-input=yes, ai-train=yes');assert.ok(r.headers.get('Content-Type').startsWith('text/markdown'));
for(const [type,status] of [['text/html',200],['text/plain',404]]){r=await run('/missing','text/markdown',type,status);assert.equal(r.status,404);}
r=await run('/cv','text/markdown;q=0,text/html');assert.ok(r.headers.get('Content-Type').startsWith('text/html'));
for(const p of ['/retired.pdf','/absent.md','/missing.json'])assert.equal((await run(p)).status,404);
r=await run('/');assert.equal(r.headers.get('Content-Signal'),'search=yes, ai-input=yes, ai-train=yes');
console.log('Retired routes, redirects, q-values, MIME boundaries and Vary checks passed.');
