// Negotiation is limited to generated representations. A fallback HTML body is never relabeled.
const retired = new Set(['/.well-known/oauth-authorization-server','/.well-known/oauth-protected-resource','/.well-known/api-catalog','/.well-known/ard.json','/.well-known/ai-catalog.json','/.well-known/agent-card.json','/.well-known/mcp/server-card.json','/auth.md','/data/source.js']);
const aliases = {'/integrity':'/investigations','/security':'/ai-evaluation','/mdpi-filter':'/notandia','/cv-research':'/cv','/cv-editorial':'/cv','/cv-integrity':'/cv','/resume':'/cv','/cv-resume':'/cv-ai','/cv-giskard':'/cv-ai','/cv-orcid':'/cv','/llms-full.txt':'/cv-llm.txt'};
function notFound(){return new Response('Not found.\n',{status:404,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store','Vary':'Accept'}});}
export async function onRequest(context){
 const {request,next}=context;const url=new URL(request.url);
 const normalized=url.pathname.replace(/\.html$/,'').replace(/\/$/,'')||'/';
 if(retired.has(url.pathname))return notFound();
 if(aliases[normalized])return Response.redirect(new URL(aliases[normalized],url.origin),301);
 const accept=request.headers.get('Accept')||'';
 // Respect q=0 and an explicit HTML preference.
 const representations=accept.split(',').map(x=>{const [type,...params]=x.trim().toLowerCase().split(';');const q=params.find(p=>p.trim().startsWith('q='));return {type,q:q?Number(q.trim().slice(2)):1};});
 const md=representations.find(x=>x.type==='text/markdown');const html=representations.find(x=>x.type==='text/html');
 const wantsMarkdown=md&&md.q>0&&(!html||md.q>html.q);
 if(wantsMarkdown&&!normalized.split('/').pop().includes('.')){
  const target=normalized==='/'?'/index.md':`${normalized}.md`;
  // ASSETS fetch avoids recursively invoking this function.
  const assetRequest=new Request(new URL(target,url.origin),{method:request.method,headers:{Accept:'text/markdown'}});
  const result=context.env?.ASSETS ? await context.env.ASSETS.fetch(assetRequest) : await next(assetRequest);
  const type=result.headers.get('Content-Type')||'';
  if(result.status!==200||!/^(text\/markdown|text\/plain|application\/octet-stream)(;|$)/i.test(type))return notFound();
  const headers=new Headers(result.headers);headers.set('Content-Type','text/markdown; charset=utf-8');headers.set('Vary','Accept');headers.set('Content-Signal','search=yes, ai-input=yes');headers.delete('Link');
  return new Response(result.body,{status:200,headers});
 }
 const result=await next();const headers=new Headers(result.headers);headers.set('Vary','Accept');headers.delete('Link');
 // Prevent a host fallback from impersonating an absent PDF, JSON or Markdown resource.
 if(result.status===200&&headers.get('Content-Type')?.includes('text/html')&&/\.(pdf|json|md|txt)$/i.test(url.pathname))return notFound();
 if(result.status===200&&headers.get('Content-Type')?.includes('text/html'))headers.set('Link','<https://mariomarcolongo.com/llms.txt>; rel="describedby"; type="text/plain"');
 if(result.status===200)headers.set('Content-Signal','search=yes, ai-input=yes');
 return new Response(result.body,{status:result.status,headers});
}
