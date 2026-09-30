const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
const root=path.resolve(__dirname,'../dist');function walk(dir){return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]);}
let count=0;for(const file of walk(root).filter(f=>f.endsWith('.html'))){const text=fs.readFileSync(file,'utf8');for(const match of text.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){const data=JSON.parse(match[1]);assert.ok(data['@context']);count++;}}
assert.ok(count>15);console.log(`${count} valid JSON-LD records parsed.`);
