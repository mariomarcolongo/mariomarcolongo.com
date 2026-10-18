import {readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root=new URL('../',import.meta.url);
// This ownership token is deliberately served as a public file; it is not an account API key.
const config=JSON.parse(readFileSync(new URL('data/indexnow.json',root),'utf8'));
export function createSubmission(sitemap,settings=config){
 if(!/^[a-zA-Z0-9-]{8,128}$/.test(settings.key))throw Error('Invalid IndexNow ownership key');
 const location=new URL(settings.keyLocation);
 if(location.protocol!=='https:'||location.host!==settings.host||location.username||location.password)throw Error('Invalid key-file origin');
 const urls=[...new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]))];
 if(!urls.length||urls.length>10000)throw Error('Invalid URL batch size');
 for(const value of urls){const url=new URL(value);if(url.protocol!=='https:'||url.host!==settings.host||url.username||url.password||url.search||url.hash)throw Error('Only canonical public URLs from this host can be submitted');}
 return {...settings,urlList:urls};
}
export async function submit({dryRun=false,changedOnly=false}={}){
 if(changedOnly){
  const changed=execFileSync('git',['diff-tree','--no-commit-id','--name-only','-r','HEAD'],{cwd:fileURLToPath(root),encoding:'utf8'});
  // Shared data/layout/style changes can affect every page of this small portfolio.
  if(!changed.split('\n').some(file=>/^(src\/|data\/source\.js|data\/.*\.json|public\/|scripts\/(postbuild|generate-llm|lib\/dossier))/.test(file))){console.log('No public-content changes; IndexNow skipped.');return;}
 }
 const sitemap=readFileSync(new URL('dist/sitemap.xml',root),'utf8');
 const payload=createSubmission(sitemap);
 const keyFile=readFileSync(new URL('public/'+new URL(config.keyLocation).pathname.slice(1),root),'utf8').trim();
 if(keyFile!==config.key)throw Error('Local ownership file does not match');
 if(dryRun){console.log(`Validated ${payload.urlList.length} canonical URLs and local ownership file; no submission sent.`);return;}
 const liveKey=await fetch(config.keyLocation,{signal:AbortSignal.timeout(15000),cache:'no-store'});
 if(!liveKey.ok||(await liveKey.text()).trim()!==config.key)throw Error('Ownership file is not live; no submission sent');
 const response=await fetch('https://api.indexnow.org/indexnow',{method:'POST',headers:{'Content-Type':'application/json; charset=utf-8'},body:JSON.stringify(payload),signal:AbortSignal.timeout(15000)});
 if(![200,202].includes(response.status))throw Error(`IndexNow submission failed: HTTP ${response.status}`);
 console.log(`IndexNow HTTP ${response.status}: ${payload.urlList.length} URL notifications received${response.status===202?'; key validation pending':''}. This does not confirm indexing or ranking.`);
}
if(process.argv[1]&&resolve(process.argv[1])===fileURLToPath(import.meta.url))submit({dryRun:process.argv.includes('--dry-run'),changedOnly:process.argv.includes('--changed-only')}).catch(error=>{console.error(error.message);process.exitCode=1});
