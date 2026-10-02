import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {PROTOCOLS,SERVER} from '../src/server/portfolio-service.mjs';
const root=new URL('../',import.meta.url);
const profile=JSON.parse(readFileSync(new URL('public/profile.json',root),'utf8'));
const base=profile.canonicalUrl;
const card={
  $schema:'https://static.modelcontextprotocol.io/schemas/v1/server-card.schema.json',
  ...SERVER,
  description:'Read-only public professional profile, evidence search and résumé links.',
  repository:{url:profile.github+'/mariomarcolongo.com',source:'github'},
  remotes:[{type:'streamable-http',url:base+'/mcp',supportedProtocolVersions:PROTOCOLS}],
  _meta:{'com.mariomarcolongo/service':{access:'public; no authentication required',readOnly:true,documentation:base+'/agent-service.md',discoveryStatus:'MCP server card is an experimental extension'}}
};
const index={schemaVersion:1,organization:profile.name,website:base,agents:[{
  id:'portfolio-evidence',name:SERVER.title,protocol:'mcp',endpoint:base+'/mcp',
  serverCard:base+'/mcp/server-card',capabilities:['get_profile','search_evidence','get_resumes'],
  readOnly:true,authentication:'none',documentation:base+'/agent-service.md'
}],scope:'Experimental organization index for a working public retrieval service. No generative model, A2A, OAuth, booking, payments or private data access.'};
for(const [path,data] of [['.well-known/agent-index.json',index],['.well-known/mcp/server-card.json',card],['mcp/server-card',card]]){
  const file=new URL('public/'+path,root);mkdirSync(new URL('./',file),{recursive:true});writeFileSync(file,JSON.stringify(data,null,2)+'\n');
}
console.log('Generated discovery for the public read-only MCP service.');
