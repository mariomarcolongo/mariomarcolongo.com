#!/usr/bin/env node
// Canonical owner of favicon, manifest and share-card assets. Run after identity changes.
const fs = require('node:fs');
const path = require('node:path');
const { launchBrowser } = require('./lib/browser');
const P = require('../data/source.js').presence;
const M = require('../data/work-media.json');
const root = path.resolve(__dirname, '..');
const pub = path.join(root, 'public');
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function card({label, title, text, image, caption}) {
 const media = fs.readFileSync(path.join(pub, image));
 return `<!doctype html><html lang="en"><meta charset="utf-8"><style>
 *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f4f5f7;color:#1c2736;font-family:Arial,sans-serif;padding:52px;display:grid;grid-template-columns:620px 428px;gap:48px}
 .label{color:#536174;font-size:20px;line-height:1.4;margin:0 0 26px}h1{font-size:64px;line-height:1.03;letter-spacing:-2.5px;margin:0 0 27px}p{font-size:27px;line-height:1.4;margin:0}.brand{display:flex;align-items:center;gap:14px;font-size:20px;font-weight:bold;margin-bottom:44px}.brand img{width:38px;height:38px}.url{font-size:20px;color:#2452c6;margin-top:30px}
 .artifact{align-self:center;background:#fff;border:1px solid #d7dee6;border-radius:14px;overflow:hidden}.artifact>img{width:100%;height:315px;object-fit:contain;background:#10141a;display:block}.artifact p{font-size:18px;color:#536174;padding:20px;line-height:1.45}
 </style><body><div><div class="brand"><img alt="" src="data:image/svg+xml;base64,${fs.readFileSync(path.join(pub,'favicon.svg')).toString('base64')}">${esc(P.name)}</div><p class="label">${esc(label)}</p><h1>${esc(title)}</h1><p>${esc(text)}</p><p class="url">mariomarcolongo.com</p></div><div class="artifact"><img alt="" src="data:image/${image.endsWith('.webp')?'webp':'png'};base64,${media.toString('base64')}"><p>${esc(caption)}</p></div></body></html>`;
}

function ico(png) {
 const h=Buffer.alloc(6);h.writeUInt16LE(1,2);h.writeUInt16LE(1,4);
 const e=Buffer.alloc(16);e.writeUInt8(32,0);e.writeUInt8(32,1);e.writeUInt16LE(1,4);e.writeUInt16LE(32,6);e.writeUInt32LE(png.length,8);e.writeUInt32LE(22,12);
 return Buffer.concat([h,e,png]);
}

async function main() {
 fs.mkdirSync(path.join(pub,'og'),{recursive:true});
 const browser=await launchBrowser();
 try {
  const page=await browser.newPage();
  const svg=fs.readFileSync(path.join(pub,'favicon.svg'),'utf8');
  for(const size of [32,48,180,192,512]) {
   await page.setViewport({width:size,height:size,deviceScaleFactor:1});
   await page.setContent(`<style>body{margin:0;width:${size}px;height:${size}px}svg{display:block;width:100%;height:100%}</style>${svg}`,{waitUntil:'load'});
   const png=Buffer.from(await page.screenshot({type:'png',omitBackground:true}));
   fs.writeFileSync(path.join(pub,size===32?'favicon.ico':size===180?'apple-touch-icon.png':`favicon-${size}x${size}.png`),size===32?ico(png):png);
  }
  const cards={
   home:{label:'Information integrity & technical operations',title:P.headline,text:'Source investigations, AI evaluation and paid scientific and website work.',image:M.screenshots['entropy-map'].image,caption:'Published Tableau map: data collection and visualization for Entropy for Life.'},
   cv:{label:'Application résumés',title:'Experience you can inspect.',text:'Research operations · Technical support · AI evaluation',image:M.screenshots.notandia.image,caption:'One-page résumés. Published work and source records.'},
   'ai-evaluation':{label:'Independent model testing',title:'AI evaluation record',text:'Dated platform results, original captures and explicit evidence limits.',image:P.aiEvaluationSnapshot.detailImage,caption:`Gray Swan public profile · ${P.aiEvaluationSnapshot.displayDate}`},
   investigations:{label:'Source investigation & data quality',title:'Check the claim. Follow the source.',text:'Citation reconciliation, structured metadata and public investigation records.',image:M.screenshots.atlas.image,caption:'Accepted source-locator and provenance contribution.'}
  };
  await page.setViewport({width:1200,height:630,deviceScaleFactor:1});
  for(const [name,config] of Object.entries(cards)) {
   await page.setContent(card(config),{waitUntil:'load'});
   await page.screenshot({path:path.join(pub,'og',`${name}.png`),type:'png'});
  }
  fs.writeFileSync(path.join(pub,'site.webmanifest'),JSON.stringify({name:`${P.name} — ${P.currentPositioning}`,short_name:'Mario M.',description:P.description,start_url:'/',scope:'/',icons:[192,512].map(size=>({src:`/favicon-${size}x${size}.png`,sizes:`${size}x${size}`,type:'image/png'})),theme_color:'#f4f5f7',background_color:'#f4f5f7',display:'standalone'},null,2)+'\n');
 } finally { await browser.close(); }
 console.log('Generated consistent icons, manifest and four current social preview cards.');
}
main().catch(e=>{console.error(e);process.exit(1)});
