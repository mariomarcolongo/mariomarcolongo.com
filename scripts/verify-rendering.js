const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');const {startStaticServer}=require('./lib/static-server');const {launchBrowser}=require('./lib/browser');
async function verifyVisualizationGallery(browser, origin) {
 const page=await browser.newPage();
 try {
  await page.setViewport({width:1440,height:1100});
  await page.goto(origin+'/work/scientific-visualizations',{waitUntil:'networkidle0'});
  await page.waitForSelector('.gallery-enhanced');
  const visible=()=>page.$$eval('.visual-card',cards=>cards.filter(card=>!card.hidden).length);
  assert.equal(await visible(),73);
  await page.focus('.visual-platforms [data-platform="Tableau"]');
  await page.keyboard.press('Enter');
  assert.equal(await visible(),16);
  await page.type('#visual-search','shark');
  assert.equal(await visible(),2);
  await page.select('#visual-topic','Public health');
  assert.equal(await visible(),0);
  assert.equal(await page.$eval('#visual-empty',el=>el.hidden),false);
  await page.click('#visual-reset');
  assert.equal(await visible(),73);
  assert.equal(await page.evaluate(()=>document.activeElement.id),'visual-search');
  await page.type('#visual-search','cimex'); // Also searches the original Italian publication title.
  assert.equal(await visible(),1);
  assert.ok((await page.$eval('#visual-result-count',el=>el.textContent)).startsWith('1 of 73'));
  await page.$eval('#visual-search',el=>{el.value='';el.dispatchEvent(new Event('input',{bubbles:true}));});
  await page.click('.visual-platforms [data-platform="Tableau"]');
  await page.select('#visual-topic','Food & nutrition');
  assert.equal(await visible(),3);
  await page.click('.visual-platforms [data-platform="all"]');
  await page.select('#visual-topic','all');
  await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode();}));});
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.screenshot({path:path.resolve('private/qa/scientific-visualizations-desktop.png')});
  await page.$eval('#visualization-library',el=>el.scrollIntoView({behavior:'instant'}));
  await page.screenshot({path:path.resolve('private/qa/scientific-visualizations-gallery-desktop.png')});
  await page.evaluate(()=>document.documentElement.dataset.theme='dark');
  await page.screenshot({path:path.resolve('private/qa/scientific-visualizations-gallery-dark.png')});
  await page.evaluate(()=>document.documentElement.dataset.theme='light');
  await page.setViewport({width:390,height:960});
  await page.$eval('#visualization-library',el=>el.scrollIntoView({behavior:'instant'}));
  await page.screenshot({path:path.resolve('private/qa/scientific-visualizations-gallery-mobile.png')});
  await page.evaluate(()=>window.scrollTo({top:0,behavior:'instant'}));
  await page.screenshot({path:path.resolve('private/qa/scientific-visualizations-mobile.png')});
  await page.setJavaScriptEnabled(false);
  await page.goto(origin+'/work/scientific-visualizations',{waitUntil:'networkidle0'});
  assert.equal(await visible(),73);
  assert.equal(await page.$eval('.gallery-tools',el=>getComputedStyle(el).display),'none');
  assert.ok(await page.$$eval('.visual-card img',images=>images.every(image=>new URL(image.src).origin===location.origin)));
  console.log('Visualization gallery: previews, keyboard filters, combined search/topic filters, empty/reset state and no-JS access passed.');
 } finally {await page.close();}
}
// The evidence ledger filters rendered claims, states an empty result plainly and works without JavaScript.
async function verifyEvidenceLedger(browser, origin) {
 const page=await browser.newPage();
 const claimTotal=require('../data/source').presence.claims.length;
 const visible=()=>page.$$eval('.claim',els=>els.filter(el=>!el.hidden).length);
 try {
  await page.setViewport({width:1440,height:960});
  await page.goto(origin+'/evidence',{waitUntil:'networkidle0'});
  assert.equal(await visible(),claimTotal);
  assert.equal(await page.$eval('#claim-count',el=>el.textContent),`${claimTotal} claims`);
  await page.keyboard.press('/');
  assert.equal(await page.evaluate(()=>document.activeElement.id),'claim-search');
  await page.keyboard.type('python');
  const matches=await visible();
  assert.ok(matches>0&&matches<claimTotal,'Claim search should narrow the ledger');
  assert.ok((await page.$eval('#claim-count',el=>el.textContent)).startsWith(`${matches} of ${claimTotal}`));
  await page.keyboard.type(' zzzz');
  assert.equal(await visible(),0);
  assert.equal(await page.$eval('#claim-empty',el=>el.hidden),false);
  assert.ok((await page.$eval('#claim-empty',el=>el.textContent)).includes('No claim in this ledger matches that'));
  await page.$eval('#claim-search',el=>{el.value='';el.dispatchEvent(new Event('input',{bubbles:true}));});
  assert.equal(await visible(),claimTotal);
  assert.equal(await page.$eval('#claim-empty',el=>el.hidden),true);
  await page.focus('[data-area="paid"]');
  await page.keyboard.press('Enter');
  assert.equal(await page.$eval('[data-area="paid"]',el=>el.getAttribute('aria-pressed')),'true');
  assert.ok(await page.$$eval('.claim',els=>els.filter(el=>!el.hidden).every(el=>el.closest('.claim-group[data-area]').dataset.area==='paid')));
  await page.click('[data-area="all"]');
  assert.equal(await visible(),claimTotal);
  await page.setJavaScriptEnabled(false);
  await page.goto(origin+'/evidence',{waitUntil:'networkidle0'});
  assert.equal(await visible(),claimTotal);
  assert.equal(await page.$eval('.claim-tools',el=>getComputedStyle(el).display),'none');
  assert.equal(await page.$$eval('.claim-limit',els=>els.length),claimTotal);
  console.log('Evidence ledger: keyboard search, area filter, empty state and no-JS access passed.');
 } finally {await page.close();}
}
(async()=>{const out=path.resolve('private/qa');fs.mkdirSync(out,{recursive:true});const server=await startStaticServer(path.resolve('dist'));const browser=await launchBrowser();const report=[];try{if(process.argv.includes('--visualizations-only')){await verifyVisualizationGallery(browser,server.origin);return;}const page=await browser.newPage();for(const width of [1440,768,390,320]){await page.setViewport({width,height:960});for(const route of ['/','/work','/work/entropy','/work/atlas','/work/qcae','/work/telegram','/work/hypermandala','/work/wikimedia','/work/scientific-visualizations','/experience','/research-operations','/cv','/cv-technical','/cv-ai','/investigations','/notandia','/evidence','/evidence/gray-swan-2026-07-24','/evidence/gray-swan-2026-07-25','/evidence/gray-swan-2026-07-29','/evidence/gray-swan-2026-09-30','/evidence/gray-swan-2026-10-13','/evidence/gray-swan-certificates-2026-10-14','/ai-evaluation']){await page.goto(server.origin+route,{waitUntil:'networkidle0'});await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));});const result=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,main:document.querySelectorAll('main').length,h1:document.querySelectorAll('h1').length,brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),h1visible:getComputedStyle(document.querySelector('h1')).opacity!=='0'}));assert.equal(result.overflow,false,`${width} ${route}: overflow`);assert.equal(result.main,1);assert.equal(result.h1,1);assert.equal(result.brokenImages.length,0,`${width} ${route}: ${result.brokenImages}`);assert.ok(result.h1visible);report.push({width,route,...result});if(route==='/'||route==='/cv')await page.screenshot({path:path.join(out,`${route==='/'?'home':'cv'}-${width}.png`),fullPage:true});}}
await verifyVisualizationGallery(browser,server.origin);
await verifyEvidenceLedger(browser,server.origin);
await page.setViewport({width:1440,height:960});await page.goto(server.origin,{waitUntil:'networkidle0'});await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Skip to content');await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>location.hash),'#main-content');await page.evaluate(()=>document.documentElement.dataset.theme='light');await page.click('#themeToggle');assert.equal(await page.evaluate(()=>document.documentElement.dataset.theme),'dark');await page.screenshot({path:path.join(out,'home-dark.png'),fullPage:true});
assert.equal(await page.$$eval('.record-rows li',els=>els.length),6);assert.ok(await page.$$eval('.record-rows a',els=>els.every(el=>el.querySelector('time')&&el.getAttribute('href'))));assert.equal(await page.evaluate(()=>getComputedStyle(document.querySelector('.ruled'),'::after').animationName),'fill');assert.equal(await page.$eval('.button.primary',el=>el.getAttribute('href')),'/cv-ai');
await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);assert.equal(await page.evaluate(()=>getComputedStyle(document.querySelector('a')).transitionDuration),'0s');assert.equal(await page.$eval('.hero h1',el=>getComputedStyle(el).animationName),'none');assert.equal(await page.evaluate(()=>getComputedStyle(document.querySelector('.ruled'),'::after').animationName),'none');assert.equal(await page.$eval('.pen path',el=>getComputedStyle(el).strokeDashoffset),'0px');
await page.goto(server.origin+'/work',{waitUntil:'networkidle0'});await page.click('[data-filter="research"]');assert.equal(await page.$eval('.work-result-count',el=>el.textContent),'4 projects');assert.ok(await page.$$eval('[data-work-kind]',els=>els.filter(el=>!el.hidden).every(el=>el.dataset.workKind==='research')));await page.focus('[data-filter="tools"]');await page.keyboard.press('Enter');assert.equal(await page.$eval('.work-result-count',el=>el.textContent),'4 projects');await page.click('[data-filter="all"]');assert.equal(await page.$$eval('[data-work-kind]',els=>els.filter(el=>!el.hidden).length),8);
await page.setJavaScriptEnabled(false);await page.goto(server.origin+'/work',{waitUntil:'networkidle0'});assert.equal(await page.$$eval('[data-work-kind]',els=>els.filter(el=>!el.hidden).length),8);assert.equal(await page.$eval('.work-filters',el=>getComputedStyle(el).display),'none');await page.goto(server.origin,{waitUntil:'networkidle0'});assert.equal(await page.$$eval('.record-rows li',els=>els.length),6);assert.ok(await page.$eval('.hero h1',el=>getComputedStyle(el).opacity!=='0'));assert.ok(await page.$('a[href="/cv"]'));assert.ok(await page.$('a[href="mailto:me@mariomarcolongo.com"]'));
// Register the navigation wait before clicking, so the title check uses the destination document.
await Promise.all([page.waitForNavigation({waitUntil:'networkidle0'}),page.click('a[href="/cv"]')]);assert.ok((await page.title()).includes('Scientific Research & Fact-Checking'));await page.setJavaScriptEnabled(true);
// Published collections remain usable with JavaScript disabled; images are local.
await page.setJavaScriptEnabled(false);await page.goto(server.origin+'/work/entropy',{waitUntil:'networkidle0'});
assert.equal(await page.$$eval('#video-work .video-card',els=>els.length),57);
assert.equal(await page.$$eval('#thumbnail-work .video-card',els=>els.length),17);
assert.equal(await page.$$eval('#reel-work .reel-card',els=>els.length),21);
assert.ok(await page.$$eval('.published-artifacts img',els=>els.every(el=>new URL(el.src).origin===location.origin)));
await page.focus('#video-work summary');await page.keyboard.press('Enter');assert.ok(await page.$eval('#video-work details',el=>el.open));
await page.focus('#reel-work summary');await page.keyboard.press('Enter');assert.ok(await page.$eval('#reel-work details',el=>el.open));
await page.setJavaScriptEnabled(true);
await page.setViewport({width:720,height:480});await page.goto(server.origin,{waitUntil:'networkidle0'});assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false); // Equivalent reflow viewport for 200% desktop zoom.
// The margin column must never collide with itself on narrow desktops.
for(const width of [860,1024,1099,1280]){await page.setViewport({width,height:800});await page.goto(server.origin,{waitUntil:'networkidle0'});const gap=await page.evaluate(()=>{const text=document.createRange();text.selectNodeContents(document.querySelector('.hero-eyebrow'));return document.querySelector('.hero-facts').getBoundingClientRect().top-text.getBoundingClientRect().bottom;});assert.ok(gap>=8,`${width}: hero margin text collides (${gap}px)`);}
// A keyboard user can reveal the next mobile chart without JavaScript.
await page.setViewport({width:390,height:960});await page.setJavaScriptEnabled(false);await page.goto(server.origin,{waitUntil:'networkidle0'});
await page.focus('.mobile-preview-strip');await page.keyboard.press('ArrowRight');
// Poll from Node: page animation callbacks can be disabled in this no-JS check.
let chartScroll=0;for(let attempt=0;attempt<30&&chartScroll===0;attempt++){chartScroll=await page.$eval('.mobile-preview-strip',el=>el.scrollLeft);if(chartScroll===0)await new Promise(resolve=>setTimeout(resolve,100));}
assert.ok(chartScroll>0,'No-JS keyboard scrolling did not reveal the next chart');
assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false);
await page.setJavaScriptEnabled(true);
for(const route of ['/','/work','/ai-evaluation','/evidence/gray-swan-2026-10-13','/work/wikimedia','/notandia','/work/atlas']){await page.setViewport({width:1440,height:960});await page.goto(server.origin+route,{waitUntil:'networkidle0'});await page.evaluate(async()=>{await Promise.all([...document.images].map(i=>{i.loading='eager';return i.decode().catch(()=>{});}));});const wrong=await page.$$eval('main img',images=>images.filter(i=>{const style=getComputedStyle(i);if(style.objectFit!=='fill'||style.aspectRatio!=='auto')return false;const declared=i.getAttribute('width')/i.getAttribute('height');return i.naturalWidth&&Math.abs(declared-i.naturalWidth/i.naturalHeight)>.03;}).map(i=>i.getAttribute('src')));assert.deepEqual(wrong,[],`${route}: declared image proportions differ from the file`);}
// Check every generated local anchor target and downloadable asset, including fragments.
const routes=['/','/work','/work/entropy','/work/atlas','/work/qcae','/work/hypermandala','/work/wikimedia','/work/scientific-visualizations','/experience','/research-operations','/work/yourself-to-science','/work/telegram','/work/scientific-visualizations','/cv','/cv-technical','/cv-ai','/investigations','/ai-evaluation','/notandia','/evidence','/evidence/gray-swan-2026-09-30','/evidence/gray-swan-2026-10-13','/evidence/gray-swan-certificates-2026-10-14'];
for(const route of routes){await page.goto(server.origin+route);const links=await page.$$eval('a[href]',as=>as.map(a=>a.getAttribute('href')).filter(h=>h.startsWith('/')));for(const href of new Set(links)){const url=new URL(href,server.origin);const res=await fetch(url);assert.equal(res.status,200,`${route} → ${href}`);if(url.hash){const body=await res.text();assert.ok(body.includes(`id="${url.hash.slice(1)}"`),`${href}: missing fragment`);}}}
fs.writeFileSync(path.join(out,'render-results.json'),JSON.stringify({checks:report.length,keyboard:true,theme:true,reducedMotion:true,noJavaScript:true,evidenceLedger:true,publishedCollectionsNoJavaScript:true,mobilePreviewKeyboard:true,reflow200percentEquivalent:true,localLinks:true,results:report},null,2));console.log(`${report.length} route/viewport checks; keyboard, theme, reduced motion, no-JS and local links passed.`);}finally{await browser.close();await server.close();}})().catch(e=>{console.error(e);process.exit(1);});
