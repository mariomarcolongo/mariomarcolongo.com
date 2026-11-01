// Public, read-only retrieval. No model calls, external fetches, sessions or writes.
const MODERN_PROTOCOL = '2026-07-28';
export const LEGACY_PROTOCOLS = ['2025-11-25', '2025-06-18', '2025-03-26'];
export const PROTOCOLS = [MODERN_PROTOCOL, ...LEGACY_PROTOCOLS];
const VERSION_KEY = 'io.modelcontextprotocol/protocolVersion';
const SERVER_INFO_KEY = 'io.modelcontextprotocol/serverInfo';
const INSTRUCTIONS = 'Public, read-only records about Mario Marcolongo. Use search_evidence for specific claims and get_resumes for résumé links. Keep each claim’s date, source owner and limits. These are owner-maintained records, not an independent assessment.';
export const SERVER = {name:'com.mariomarcolongo/portfolio-evidence', version:'1.0.0', title:'Mario Marcolongo — public evidence', websiteUrl:'https://mariomarcolongo.com'};
const MAX_BODY = 16384;
const A2A_VERSION = '1.0';
const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const emptySchema = {type:'object', properties:{}, additionalProperties:false};
export const TOOLS = [
  {name:'get_profile', description:'Retrieve Mario Marcolongo’s public professional profile, dated education, attribution and limitations.', inputSchema:emptySchema},
  {name:'search_evidence', description:'Keyword-search public projects, claims, work and education. Returns sources and limitations; not a competency assessment.', inputSchema:{type:'object', properties:{query:{type:'string',minLength:1,maxLength:200},limit:{type:'integer',minimum:1,maximum:20}},required:['query'],additionalProperties:false}},
  {name:'get_resumes', description:'Get the existing public résumé links, optionally filtered to a role family. Does not generate or modify a résumé.', inputSchema:{type:'object', properties:{focus:{type:'string',enum:['default','technical','aiEvaluation']}},additionalProperties:false}}
].map(tool => ({...tool, annotations:{readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:false}}));

function json(data, status=200, extra={}) {
  return new Response(JSON.stringify(data), {status, headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Content-Signal':'search=yes, ai-input=yes, ai-train=yes',...extra}});
}
function rpcError(id, code, message, status=200, data) {return json({jsonrpc:'2.0',id,error:{code,message,...(data?{data}:{})}},status);}
// Mcp-Name may carry a Base64 sentinel when the name is not plain ASCII.
const headerValue = value => {
  const encoded = /^=\?base64\?(.*)\?=$/.exec(value || '');
  return encoded ? new TextDecoder().decode(Uint8Array.from(atob(encoded[1]), char => char.charCodeAt(0))) : value;
};
const complete = (data, cacheable=false) => ({resultType:'complete', ...data, _meta:{[SERVER_INFO_KEY]:{name:SERVER.name,version:SERVER.version}}, ...(cacheable?{ttlMs:300000,cacheScope:'public'}:{})});
function invalid(message) {throw new Error(message);}
function checkArgs(args, allowed) {
  if(!object(args)||Object.keys(args).some(key=>!allowed.includes(key))) invalid('Invalid arguments.');
}
const normalize = text => text.normalize('NFKC').toLowerCase();
// Plain-language equivalents for how recruiters search. Each maps to words the records really use.
const SYNONYMS = {localization:['localisation'],localisation:['localization'],freelance:['contracts','contractor'],freelancer:['contracts','contractor'],contract:['contracts','contractor'],osint:['investigations','sources'],medical:['medicine','biomedical'],medicine:['biomedical'],bilingual:['italian'],multilingual:['italian'],pentesting:['adversarial'],redteam:['red'],moderation:['integrity'],verification:['fact','checking']};
const forms = token => [token, token.endsWith('s') ? token.slice(0,-1) : `${token}s`, ...(SYNONYMS[token] || [])];
const stopwords = new Set(['a','an','and','the','to','of','for','in','on','with','what','which','show','find','mario','marcolongo','experience','is','are','does','do','has','have','had','he','his','him','who','how','can','any','about','this','that','there','me','tell','please','give','get','list','know','knows']);
export function createPortfolioService(profile) {
  const origin = new URL(profile.canonicalUrl).origin;
  const link = route => new URL(route, origin).href;
  const scope = 'Owner-maintained public records, not an independent assessment. Retain source ownership, dates and limitations; absence of a match is not proof of absence of experience.';
  const claims = profile.claims.filter(claim=>claim.visibility==='public');
  const resumes = profile.resumeDocuments.map(document=>({...document,pageUrl:link(document.route),pdfUrl:link('/'+document.filename)}));
  const records = [
    ...claims.map(claim=>({kind:'claim',id:claim.id,title:claim.text,record:claim,sourceUrl:claim.sourceUrl,recordUrl:link('/evidence')})),
    ...profile.projects.map(project=>({kind:'project',id:project.id,title:project.name,record:project,evidence:claims.filter(claim=>project.claimIds.includes(claim.id)),recordUrl:link(project.route)})),
    ...profile.experience.map((work,index)=>({kind:'experience',id:`experience-${index}`,title:work.name,record:work,recordUrl:link(work.route)})),
    ...(profile.credentials||[]).map(c=>({kind:'credential',id:c.id,title:c.title,record:c,sourceUrl:c.url,recordUrl:link('/experience#credentials')})),
    ...profile.education.map((study,index)=>({kind:'education',id:`education-${index}`,title:study.title,record:study,sourceUrl:study.sourceUrl,recordUrl:link('/experience')})),
    ...profile.visualArtifacts.map((artifact,index)=>({kind:'visualization',id:`visualization-${index}`,title:artifact.title,record:artifact,sourceUrl:artifact.url,recordUrl:link('/work/scientific-visualizations')})),
    ...(profile.services||[]).map(service=>({kind:'service',id:service.id,title:service.name,record:service,recordUrl:link(service.evidencePath)})),
    ...resumes.map(document=>({kind:'resume',id:document.focus,title:document.title,record:{...document,text:[document.summary,document.skills].filter(Boolean).join(' ')},recordUrl:link(document.route)})),
    {kind:'profile',id:'skills',title:'Skills and topics',record:{text:[...(profile.knowsAbout||[]),profile.currentStudy].filter(Boolean).join('. ')},recordUrl:link('/experience')},
    {kind:'profile',id:'availability',title:'Availability, location and languages',record:{text:[profile.availability,profile.location?.country,...(profile.citizenship||[]),profile.languages?.text].filter(Boolean).join('. ')},recordUrl:link('/#contact')}
  ];
  // Match descriptive text only; do not score arbitrary URL strings or object keys.
  const texts = records.map(item=>normalize([item.title,item.record.institution,item.record.text,item.record.description,item.record.status,item.record.period,...(item.record.details||[]),...(item.record.sections||[]).flatMap(section=>[section.heading,section.text]),item.record.limitation].filter(Boolean).join(' ')));
  const words = texts.map(text=>new Set(text.match(/[\p{L}\p{N}]+/gu)||[]));
  const envelope = data => ({schemaVersion:1,profileReviewedAt:profile.reviewedAt,sourceUrl:link('/profile.json'),scope,...data});
  function search(query, limit=10) {
    if(typeof query!=='string'||!query.trim()||query.length>200||!Number.isInteger(limit)||limit<1||limit>20) invalid('query must be 1–200 characters; limit must be an integer from 1 to 20.');
    const tokens = [...new Set(normalize(query).match(/[\p{L}\p{N}]+/gu)||[])].filter(term=>!stopwords.has(term));
    const matches = records.map((record,index)=>({record,score:tokens.reduce((score,token)=>score+(forms(token).some(form=>words[index].has(form))?1:0),0)})).filter(item=>item.score>0).sort((a,b)=>b.score-a.score);
    return envelope({query,searchMethod:'keyword_overlap_with_plurals_and_synonyms',totalMatches:matches.length,results:matches.slice(0,limit).map(item=>item.record)});
  }
  function getResumes(focus) {
    if(focus!==undefined&&!['default','technical','aiEvaluation'].includes(focus)) invalid('Unknown résumé focus.');
    return envelope({resumes:resumes.filter(item=>focus===undefined||item.focus===focus)});
  }
  function call(name,args={}) {
    if(name==='get_profile') {checkArgs(args,[]);return envelope({profile});}
    if(name==='search_evidence') {checkArgs(args,['query','limit']);return search(args.query,args.limit);}
    if(name==='get_resumes') {checkArgs(args,['focus']);return getResumes(args.focus);}
    invalid('Unknown tool.');
  }
  const resourceValues = {
    'portfolio://profile':envelope({profile}),
    'portfolio://evidence':envelope({claims}),
    'portfolio://resumes':getResumes()
  };
  const resourceNames = {'portfolio://profile':'Public professional profile','portfolio://evidence':'Dated claims, source ownership and limitations','portfolio://resumes':'Public résumé links'};
  const resources = Object.keys(resourceValues).map(uri=>({uri,name:resourceNames[uri],mimeType:'application/json'}));
  function modern(message,id,params,request,headerVersion,declared,unsupported) {
    const mismatch=text=>rpcError(id,-32020,`Header mismatch: ${text}`,400);
    if(headerVersion===null) return mismatch('MCP-Protocol-Version header is required.');
    if(declared!==headerVersion) return mismatch('MCP-Protocol-Version does not match the request metadata.');
    if(declared!==MODERN_PROTOCOL) return unsupported(declared);
    if(request.headers.get('Mcp-Method')!==message.method) return mismatch('Mcp-Method does not match the request method.');
    if(['tools/call','resources/read'].includes(message.method)) {
      let named;
      try{named=headerValue(request.headers.get('Mcp-Name'));}catch{return mismatch('Mcp-Name is not valid Base64.');}
      if(named!==(message.method==='tools/call'?params.name:params.uri)) return mismatch('Mcp-Name does not match the request body.');
    }
    let result;
    switch(message.method) {
      case 'server/discover': result=complete({supportedVersions:PROTOCOLS,capabilities:{tools:{},resources:{}},instructions:INSTRUCTIONS},true);break;
      case 'tools/list': result=complete({tools:TOOLS},true);break;
      case 'tools/call':
        try {const data=call(params.name,params.arguments);result=complete({content:[{type:'text',text:JSON.stringify(data)}],structuredContent:data});}
        catch(error) {return rpcError(id,-32602,error.message);}break;
      case 'resources/list': result=complete({resources},true);break;
      case 'resources/templates/list': result=complete({resourceTemplates:[]},true);break;
      case 'resources/read':
        if(!Object.hasOwn(resourceValues,params.uri)) return rpcError(id,-32602,'Resource not found.');
        result=complete({contents:[{uri:params.uri,mimeType:'application/json',text:JSON.stringify(resourceValues[params.uri])}]},true);break;
      default:return rpcError(id,-32601,'Method not found.',404);
    }
    return json({jsonrpc:'2.0',id,result});
  }
  async function mcp(request) {
    const suppliedOrigin=request.headers.get('Origin');
    if(suppliedOrigin!==null&&suppliedOrigin!==new URL(request.url).origin) return json({error:'Origin not allowed.'},403);
    if(request.method!=='POST') return json({error:'Use POST for MCP messages; this stateless server does not offer an SSE stream.'},405,{Allow:'POST'});
    if(request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase()!=='application/json') return json({error:'Content-Type must be application/json.'},415);
    const accept=request.headers.get('Accept')||'';
    const accepted=accept.split(',').map(value=>value.trim().toLowerCase());
    for(const type of ['application/json','text/event-stream']) if(!accepted.some(value=>value.split(';')[0]===type&&!/;\s*q=0(?:\.0*)?(?:;|$)/.test(value))) return json({error:'Accept must include application/json and text/event-stream.'},406);
    if(Number(request.headers.get('Content-Length'))>MAX_BODY) return json({error:'Request too large.'},413);
    const reader=request.body?.getReader();if(!reader) return rpcError(null,-32700,'Missing JSON body.',400);
    const chunks=[];let length=0;
    while(true) {const {value,done}=await reader.read();if(done)break;length+=value.byteLength;if(length>MAX_BODY){await reader.cancel();return json({error:'Request too large.'},413);}chunks.push(value);}
    const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
    let message;try{message=JSON.parse(new TextDecoder().decode(bytes));}catch{return rpcError(null,-32700,'Invalid JSON.',400);}
    if(!object(message)||message.jsonrpc!=='2.0'||typeof message.method!=='string'||('id' in message&&!(typeof message.id==='string'||(typeof message.id==='number'&&Number.isFinite(message.id))))) return rpcError(null,-32600,'Invalid single JSON-RPC request.',400);
    const notification=!('id' in message);
    if(notification) {
      if(['notifications/initialized','notifications/cancelled'].includes(message.method)) return new Response(null,{status:202,headers:{'Cache-Control':'no-store'}});
      return json({error:'Unsupported notification.'},400);
    }
    const id=message.id;const params=message.params??{};
    if(!object(params)) return rpcError(id,-32602,'Parameters must be an object.');
    const headerVersion=request.headers.get('MCP-Protocol-Version');
    const declared=object(params._meta)?params._meta[VERSION_KEY]:undefined;
    const unsupported=requested=>rpcError(id,-32022,'Unsupported protocol version',400,{supported:PROTOCOLS,requested});
    if(headerVersion!==null&&!PROTOCOLS.includes(headerVersion)) return unsupported(headerVersion);
    // Per-request metadata selects the current revision; anything else keeps the older handshake semantics.
    if(declared!==undefined||headerVersion===MODERN_PROTOCOL) return modern(message,id,params,request,headerVersion,declared,unsupported);
    let result;
    switch(message.method) {
      case 'initialize':
        if(typeof params.protocolVersion!=='string'||!object(params.capabilities)||!object(params.clientInfo)||typeof params.clientInfo.name!=='string'||typeof params.clientInfo.version!=='string') return rpcError(id,-32602,'Invalid initialize parameters.');
        result={protocolVersion:LEGACY_PROTOCOLS.includes(params.protocolVersion)?params.protocolVersion:LEGACY_PROTOCOLS[0],capabilities:{tools:{},resources:{}},serverInfo:SERVER};break;
      case 'ping': result={};break;
      case 'tools/list': result={tools:TOOLS};break;
      case 'tools/call':
        try {const data=call(params.name,params.arguments);result={content:[{type:'text',text:JSON.stringify(data)}],structuredContent:data};}
        catch(error) {return rpcError(id,-32602,error.message);}break;
      case 'resources/list': result={resources};break;
      case 'resources/read':
        if(!Object.hasOwn(resourceValues,params.uri)) return rpcError(id,-32002,'Resource not found.');
        result={contents:[{uri:params.uri,mimeType:'application/json',text:JSON.stringify(resourceValues[params.uri])}]};break;
      default:return rpcError(id,-32601,'Method not found.');
    }
    return json({jsonrpc:'2.0',id,result});
  }
  // A2A: answers a text question from the same records. No model, no tasks, nothing stored.
  async function a2a(request) {
    if(request.method!=='POST') return json({error:'Use POST for A2A messages.'},405,{Allow:'POST'});
    if(request.headers.get('Content-Type')?.split(';')[0].trim().toLowerCase()!=='application/json') return json({error:'Content-Type must be application/json.'},415);
    if(Number(request.headers.get('Content-Length'))>MAX_BODY) return json({error:'Request too large.'},413);
    const body=await request.text();
    if(body.length>MAX_BODY) return json({error:'Request too large.'},413);
    let message;try{message=JSON.parse(body);}catch{return rpcError(null,-32700,'Invalid JSON.',400);}
    if(!object(message)||message.jsonrpc!=='2.0'||typeof message.method!=='string') return rpcError(object(message)?message.id??null:null,-32600,'Invalid request.',400);
    const id=message.id??null;
    const version=request.headers.get('A2A-Version')||new URL(request.url).searchParams.get('A2A-Version');
    if(version!==A2A_VERSION) return rpcError(id,-32009,'Unsupported A2A version.',200,{supported:[A2A_VERSION],requested:version||'0.3'});
    if(message.method==='SendStreamingMessage') return rpcError(id,-32004,'Streaming is not supported.');
    if(message.method!=='SendMessage') return rpcError(id,-32601,'Method not found.');
    const parts=message.params?.message?.parts;
    const query=(Array.isArray(parts)?parts:[]).map(part=>typeof part?.text==='string'?part.text:'').join(' ').trim().slice(0,200);
    if(!query) return rpcError(id,-32602,'Send a text part with search terms.');
    const found=search(query,5);
    const lines=found.results.map(item=>`- ${item.title}: ${item.recordUrl}`);
    return json({jsonrpc:'2.0',id,result:{message:{messageId:crypto.randomUUID(),role:'ROLE_AGENT',parts:[{text:[`${found.totalMatches} public record(s) matched. ${scope}`,...lines].join('\n')},{data:found,mediaType:'application/json'}]}}});
  }
  async function handle(request) {
    const url=new URL(request.url);const path=url.pathname.replace(/\/$/,'');
    if(path==='/mcp')return mcp(request);
    if(path==='/a2a')return a2a(request);
    if(!path.startsWith('/api/'))return null;
    if(!['/api/profile','/api/evidence','/api/resumes'].includes(path)) return json({error:'Unknown public API route.'},404);
    if(!['GET','HEAD'].includes(request.method))return json({error:'Read-only API.'},405,{Allow:'GET, HEAD'});
    let result;
    try {
      if(path==='/api/profile') result=envelope({profile});
      if(path==='/api/evidence') result=search(url.searchParams.get('q'),url.searchParams.has('limit')?Number(url.searchParams.get('limit')):10);
      if(path==='/api/resumes') result=getResumes(url.searchParams.has('focus')?url.searchParams.get('focus'):undefined);
    }catch(error){return json({error:error.message},400);}
    const response=json(result,200,{'Access-Control-Allow-Origin':'*'});
    return request.method==='HEAD'?new Response(null,{status:response.status,headers:response.headers}):response;
  }
  return {handle,call,search,getResumes};
}
