const fs=require('node:fs');const path=require('node:path');
const root=path.resolve(__dirname,'..');const dist=path.join(root,'dist');
const routes=['/','/work','/work/entropy','/work/atlas','/work/yourself-to-science','/work/scientific-visualizations','/work/telegram','/investigations','/ai-evaluation','/notandia','/research-operations','/cv','/cv-technical','/cv-ai','/evidence','/evidence/gray-swan-2026-07-29/'];
for(const route of routes){const file=route==='/'?'index.html':route.replace(/^\//,'').replace(/\/$/,'')+'.html';if(!fs.existsSync(path.join(dist,file)))throw Error(`Missing canonical page: ${file}`);}
for(const name of ['index','notandia','mdpi-filter','integrity','cv','cv-resume','cv-research','cv-editorial','cv-integrity','security','cv-technical','cv-ai'])fs.copyFileSync(path.join(dist,name+'.html'),path.join(root,name+'.html'));
const sitemap='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+routes.map(route=>`<url><loc>https://mariomarcolongo.com${route}</loc></url>`).join('\n')+'\n</urlset>\n';
for(const folder of ['public','dist'])fs.writeFileSync(path.join(root,folder,'sitemap.xml'),sitemap);
console.log('Canonical routes, sitemap and generated root mirrors updated.');
