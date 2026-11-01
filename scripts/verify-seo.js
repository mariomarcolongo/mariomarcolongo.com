#!/usr/bin/env node
// Search and agent readiness of the built site. Anything here failing means a crawler or agent gets a worse answer.
const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');const crypto=require('node:crypto');
const P=require('../data/source.js').presence;
const dist=path.resolve(__dirname,'../dist');const read=file=>fs.readFileSync(path.join(dist,file),'utf8');
const origin=P.canonicalUrl;const decode=text=>text.replaceAll('&amp;','&').replaceAll('&#39;',"'").replaceAll('&quot;','"');
const sitemap=read('sitemap.xml');const entries=[...sitemap.matchAll(/<url><loc>(.*?)<\/loc><lastmod>(\d{4}-\d{2}-\d{2})<\/lastmod><\/url>/g)].map(m=>({url:m[1],lastmod:m[2]}));
assert.equal(entries.length,(sitemap.match(/<url>/g)||[]).length,'Every sitemap entry needs a lastmod date');
const fileFor=url=>{const route=new URL(url).pathname;return route==='/'?'index.html':`${route.slice(1)}.html`;};
const pages=entries.map(entry=>({...entry,file:fileFor(entry.url),html:read(fileFor(entry.url))}));
const walk=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);
const allHtml=walk(dist).filter(f=>f.endsWith('.html'));
// Every indexable page is in the sitemap, and nothing else is.
const indexable=allHtml.filter(f=>!/name="robots" content="noindex/.test(fs.readFileSync(f,'utf8'))).map(f=>path.relative(dist,f)).filter(f=>f!=='404.html').sort();
assert.deepEqual([...pages.map(p=>p.file)].sort(),indexable,'Sitemap and indexable pages differ');
const titles=new Map(),descriptions=new Map();
for(const page of pages){
 const {html,file,url}=page;
 const title=decode(html.match(/<title>(.*?)<\/title>/s)?.[1]||'');const description=decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1]||'');
 assert.ok(title.length>=20&&title.length<=70,`${file}: title length ${title.length}`);
 assert.ok(description.length>=140&&description.length<=160,`${file}: description length ${description.length}`);
 assert.ok(!titles.has(title),`${file}: duplicate title`);titles.set(title,file);
 assert.ok(!descriptions.has(description),`${file}: duplicate description with ${descriptions.get(description)}`);descriptions.set(description,file);
 assert.ok(html.includes('<html lang="en"'),`${file}: language`);
 assert.match(html,/<meta name="viewport"/,`${file}: viewport`);
 assert.match(html,/<meta name="robots" content="index, follow, max-image-preview:large/,`${file}: robots preview rules`);
 assert.match(html,/<meta name="author" content="Mario Marcolongo"/,`${file}: author`);
 for(const property of ['og:title','og:description','og:image','og:url','og:type'])assert.ok(html.includes(`property="${property}"`),`${file}: ${property}`);
 assert.ok(html.includes(`href="${file==='index.html'?'/index.md':`/${file.replace(/\.html$/,'.md')}`}"`),`${file}: markdown alternate`);
 assert.ok(fs.existsSync(path.join(dist,file.replace(/\.html$/,'.md'))),`${file}: markdown mirror missing`);
 for(const image of html.matchAll(/<img\b[^>]*>/g))assert.match(image[0],/\balt="/,`${file}: image without alt`);
 // Internal links go straight to the canonical address.
 const main=html.slice(html.indexOf('<body'));
 for(const [,href] of main.matchAll(/<a\b[^>]*href="((?:https:\/\/mariomarcolongo\.com)?\/[^"#?]*)/g)){const route=href.replace(origin,'');assert.ok(route==='/'||(!route.endsWith('/')&&!route.endsWith('.html')),`${file}: ${href} takes a redirect`);}
 // Structured data must parse, carry the facts agents look for, and contain no empty values.
 const blocks=[...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
 assert.ok(blocks.length>0,`${file}: structured data`);
 const graph=blocks.flatMap(m=>{const data=JSON.parse(m[1]);assert.ok(!m[1].includes('undefined'),`${file}: undefined in JSON-LD`);return data['@graph']||[data];});
 const person=graph.find(g=>g['@type']==='Person');
 for(const field of ['name','givenName','familyName','url','jobTitle','description','email','nationality','address','knowsLanguage','knowsAbout','memberOf','sameAs','identifier','hasCredential'])assert.ok(person[field],`${file}: Person.${field}`);
 assert.equal(Boolean(person.image),!file.startsWith('cv'),`${file}: the portrait belongs off résumé pages only`);
 assert.ok(graph.some(g=>g['@type']==='WebSite'),`${file}: WebSite`);
 const webpage=graph.find(g=>g['@id']===`${url}#webpage`);assert.ok(webpage?.dateModified,`${file}: dateModified`);
 if(webpage['@type']==='ProfilePage'){assert.ok(webpage.dateCreated&&webpage.mainEntity,`${file}: ProfilePage fields`);}
 if(url!==`${origin}/`){const crumbs=graph.find(g=>g['@type']==='BreadcrumbList');assert.ok(crumbs?.itemListElement.length>=2,`${file}: breadcrumb`);assert.equal(crumbs.itemListElement.at(-1).item,url,`${file}: breadcrumb target`);}
 // Agents read the markdown mirror, so it must keep every link the page shows in its main content.
 const body=html.slice(html.indexOf('<main'),html.indexOf('</main>'));const mirror=read(file.replace(/\.html$/,'.md')).replaceAll('\\','');
 const stripped=body.replace(/<nav[\s\S]*?<\/nav>/g,'').replace(/<details[\s\S]*?<\/details>/g,'');
 for(const [,href] of stripped.matchAll(/<a\b[^>]*href="(https?:\/\/[^"]+)"/g))assert.ok(mirror.includes(decode(href)),`${file}: markdown lost ${href}`);
}
// Crawler policy: nothing blocks search or AI systems, and the sitemap is declared.
const robots=read('robots.txt');
for(const agent of ['OAI-SearchBot','GPTBot','ChatGPT-User','ClaudeBot','Claude-SearchBot','Claude-User','PerplexityBot','Perplexity-User','Google-Extended','*'])assert.ok(robots.includes(`User-agent: ${agent}\n`),`robots.txt: ${agent}`);
assert.ok(!/^Disallow:\s*\S/im.test(robots));assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
// llms.txt follows the published format, and every link in it resolves to a built file.
const llms=read('llms.txt');assert.match(llms,/^# .+\n\n> .+/,'llms.txt: H1 then blockquote');assert.ok(llms.includes('## Optional'));
const links=[...llms.matchAll(/\]\((https:\/\/mariomarcolongo\.com[^)#]*)/g)].map(m=>new URL(m[1]).pathname);assert.ok(links.length>=15,'llms.txt: too few links');
for(const route of links){const candidates=[route.slice(1),`${route.slice(1)}.html`,route==='/'?'index.html':''].filter(Boolean);assert.ok(candidates.some(c=>fs.existsSync(path.join(dist,c))),`llms.txt: ${route}`);}
assert.ok(!/^- \w[^[]*: https?:/m.test(llms),'llms.txt: links must use [name](url)');
assert.ok(read('llms-full.txt').length>20000,'llms-full.txt must be the full record');
for(const file of ['llms-full.txt','cv-llm.txt'])assert.ok(!/https?:\/\/\S+[.,;](\s|$)/m.test(read(file)),`${file}: punctuation attached to a URL`);
// Machine-readable files parse, stay consistent and keep private details out.
const resume=JSON.parse(read('resume.json'));assert.equal(resume.basics.name,P.name);assert.ok(resume.work.length&&resume.education.length&&resume.skills.length&&resume.languages.length);assert.equal(resume.basics.image,undefined,'No portrait on a résumé');assert.equal(resume.basics.phone,undefined);assert.equal(resume.basics.location.address,undefined);assert.ok(resume.education.every(e=>e.studyType==='Studies, no degree awarded'),'No degree may be implied');
const openapi=JSON.parse(read('openapi.json'));assert.ok(openapi.openapi.startsWith('3.1'));assert.deepEqual(Object.keys(openapi.paths).sort(),['/api/evidence','/api/profile','/api/resumes']);
const catalog=JSON.parse(read('.well-known/api-catalog'));assert.equal(catalog.linkset[0]['service-desc'][0].href,`${origin}/openapi.json`);
const ai=JSON.parse(read('.well-known/ai-catalog.json'));assert.ok(ai.specVersion&&ai.host.displayName&&ai.entries.length===3);for(const entry of ai.entries){assert.match(entry.identifier,/^urn:air:mariomarcolongo\.com:/);assert.ok(entry.url&&entry.representativeQueries.length>=2&&entry.representativeQueries.length<=5);assert.ok(fs.existsSync(path.join(dist,new URL(entry.url).pathname)),entry.url);}
const skills=JSON.parse(read('.well-known/agent-skills/index.json'));for(const skill of skills.skills){const file=read(new URL(skill.url).pathname.slice(1));assert.equal(skill.digest,`sha256:${crypto.createHash('sha256').update(file).digest('hex')}`,'Skill digest drift');assert.match(file,/^---\nname: /);}
const security=read('.well-known/security.txt');assert.match(security,/^Contact: mailto:/m);const expires=new Date(security.match(/^Expires: (.+)$/m)[1]);assert.ok(expires>new Date(),'security.txt has expired: rerun the build after updating reviewedAt');
const card=JSON.parse(read('.well-known/agent-card.json'));assert.equal(card.supportedInterfaces[0].url,`${origin}/a2a`);for(const field of ['name','description','version','capabilities','defaultInputModes','defaultOutputModes','skills'])assert.ok(card[field],`agent card: ${field}`);assert.match(card.description,/no language model/i,'The agent card must say what the agent is');
// This site has no sign-in, so it publishes no sign-in metadata, and it runs no crawler, so it publishes no signing keys.
for(const file of ['.well-known/oauth-authorization-server','.well-known/oauth-protected-resource','.well-known/http-message-signatures-directory','auth.md'])assert.ok(!fs.existsSync(path.join(dist,file)),`${file} would claim a capability this site does not have`);
console.log(`${pages.length} pages: titles, descriptions, canonical links, structured data, markdown mirrors, crawler policy and agent files passed.`);
