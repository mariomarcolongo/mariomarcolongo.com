const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');const D=require('../data/source.js');const g=require('./lib/dossier-generators.js');
const dist=path.resolve(__dirname,'../dist');
const robots=fs.readFileSync(path.join(dist,'robots.txt'),'utf8');
for(const folder of ['','public/'])assert.equal(fs.readFileSync(path.resolve(__dirname,'..',folder+'robots.txt'),'utf8'),robots,`${folder}robots.txt policy drift`);
assert.ok(!/^\s*Disallow\s*:\s*\S/im.test(robots),'Public crawler access must remain permissive');
const crawlerGroups=robots.split(/\n\s*\n/).filter(group=>/^User-agent:/im.test(group));
for(const agent of ['*','OAI-SearchBot','GPTBot','ChatGPT-User','OAI-AdsBot']){
 const group=crawlerGroups.find(group=>group.split('\n').some(line=>line.trim()===`User-agent: ${agent}`));
 assert.ok(group,`${agent}: crawler policy missing`);
 assert.match(group,/^Allow: \/\s*$/m,`${agent}: full crawl permission missing`);
 for(const signal of ['search','ai-input','ai-train'])assert.match(group,new RegExp(`^Content-Signal:.*\\b${signal}=yes(?:,|\\s|$)`,'m'),`${agent}: ${signal} permission missing`);
}
const headers=fs.readFileSync(path.join(dist,'_headers'),'utf8');
assert.match(headers,/^\/\*\n(?:[ \t].*\n)*?  Content-Signal: search=yes, ai-input=yes, ai-train=yes\s*$/m,'Site-wide content-use header must preserve all permissions');
const snapshot=D.presence.aiEvaluationSnapshot;
assert.equal(snapshot.provingGround.areas.reduce((total,area)=>total+area.breaks,0),snapshot.provingGround.displayedAreaTotal);
assert.equal(require('node:crypto').createHash('sha256').update(fs.readFileSync(path.join(dist,snapshot.originalImage))).digest('hex'),snapshot.originalSha256,'Original evaluation capture changed');
assert.deepEqual(JSON.parse(fs.readFileSync(path.join(dist,'evidence/gray-swan-profile-2026-09-30.json'),'utf8')),snapshot,'Evaluation transcription drift');
for(const [file,expected] of Object.entries({'llms.txt':g.generateLlmsTxt(D),'cv-llm.txt':g.generateCvLlmTxt(D),'llms-full.txt':g.generateLlmsFullTxt(D),'profile.json':JSON.stringify(g.generateProfile(D),null,2)+'\n'}))for(const folder of ['','public/','dist/'])assert.equal(fs.readFileSync(path.resolve(__dirname,'..',folder+file),'utf8'),expected,`${folder}${file} drift`);
for(const [name,min,max] of [['llms.txt',150,300],['cv-llm.txt',700,1200]]){const n=fs.readFileSync(path.join(dist,name),'utf8').trim().split(/\s+/).length;assert.ok(n>=min&&n<=max,`${name}: ${n} words, expected ${min}–${max}`);}
for(const file of ['auth.md','data/source.js','.well-known/api-catalog','.well-known/ard.json','.well-known/ai-catalog.json','.well-known/agent-card.json','.well-known/mcp/server-card.json'])assert.ok(!fs.existsSync(path.join(dist,file)),`Retired resource ${file}`);
function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
const html=walk(dist).filter(f=>f.endsWith('.html'));
for(const file of html){const text=fs.readFileSync(file,'utf8');if(file.includes('/evidence/gray-swan-profile-'))continue;
 assert.equal((text.match(/<main(?:\s|>)/g)||[]).length,1,`${file}: one main`);
 assert.ok(text.includes('id="main-content"'),`${file}: skip target`);
 for(const bad of ['navigator.modelContext','.well-known/agent-card','.well-known/mcp/server-card','eJz39v','data/private.local','EmpiricalFolio'])assert.ok(!text.includes(bad),`${file}: ${bad}`);
}
for(const file of ['index','notandia','mdpi-filter','integrity','cv','cv-resume','cv-research','cv-editorial','cv-integrity','security','cv-technical','cv-ai'])assert.equal(fs.readFileSync(path.join(dist,file+'.html'),'utf8'),fs.readFileSync(path.resolve(__dirname,'../'+file+'.html'),'utf8'),`${file} root drift`);
for(const route of ['cv','cv-technical','cv-ai']){const text=fs.readFileSync(path.join(dist,route+'.html'),'utf8');assert.ok(text.includes('data-ats-layout="single-column"'));assert.ok(!text.includes('Master CV'));assert.ok(text.includes('3 ECTS')&&text.includes('non-degree'));}
console.log(`Verified canonical generation, privacy boundaries and ${html.length} HTML pages.`);
