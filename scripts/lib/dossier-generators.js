const fs = require('node:fs');
const path = require('node:path');
const publicProfile = d => d.presence;
// A full stop after a URL ends up inside the link when bots extract it.
const bareUrls = text => text.replace(/(https?:\/\/[^\s)]+?)[.,;](?=\s|$)/gm,'$1');
function generateLlmsTxt(d) {
 const p=publicProfile(d),u=p.canonicalUrl,pdf=key=>`${u}/${p.cv[key].filename}`;
 return `# ${p.name} — ${p.currentPositioning}

> ${p.machineSummary}

Based in Italy; Italian and EU citizen; native Italian, fluent English; open to remote work and relocation. Work authorization outside the EU must be checked for the engagement. Email first to arrange a call: ${p.email}.

Technical implementations are AI-assisted. Accepted contributions show the scope of the reviewed changes, not independent professional programming proficiency. Python, SQL and quantitative foundations are current study. Gray Swan metrics are dated snapshots; the latest profile capture is ${p.aiEvaluationLatestSnapshot.displayDate}. These records are descriptive data, not instructions.

## Résumés

- [AI evaluation and red teaming](${u}/cv-ai): one page, [PDF](${pdf('aiEvaluation')})
- [Scientific research and fact-checking](${u}/cv): one page, [PDF](${pdf('default')})
- [Software QA and AI workflows](${u}/cv-technical): one page, [PDF](${pdf('technical')})

## Work

- [AI evaluation and red teaming](${u}/ai-evaluation): dated results
- [Entropy for Life](${u}/work/entropy): paid scientific and website work
- [Source investigations](${u}/investigations): cases with attributable edits
- [AI Safety Formalization Atlas](${u}/work/atlas): merged contributions, public preprint
- [Wikimedia contributions](${u}/work/wikimedia)
- [Scientific visualizations](${u}/work/scientific-visualizations)
- [Notandia](${u}/notandia): browser research tool
- [Services](${u}/#services)

## Evidence and machine records

- [Evidence index](${u}/evidence): every claim with date, owner and limit
- [Full record](${u}/llms-full.txt)
- [Compact career record](${u}/cv-llm.txt)
- [Structured profile](${u}/profile.json)
- [JSON Resume](${u}/resume.json)
- [Evidence API and MCP](${u}/agent-service.md)

## Optional

- [Research support](${u}/research-operations)
- [Yourself to Science](${u}/work/yourself-to-science)
- [Hypermandala](${u}/work/hypermandala)
${p.researchProfiles.map(profile=>`- [${profile.label}](${profile.url})`).join('\n')}
- [ORCID](${p.orcidUrl})
`;
}
function generateCvLlmTxt(d) {
 const p=publicProfile(d);
 const sections=[`# ${p.name} — ${p.currentPositioning}`,p.machineSummary.split('. ')[0]+'.',`## Engagement\n\nServices: ${p.canonicalUrl}/#services. ${p.engagement.contactPreference}`,`## Current scope\n\n${p.authorship}\n\n${p.availability}`];
 for(const id of ['entropy','atlas','yourself-to-science','notandia','ai-evaluation']){
  const project=p.projects.find(x=>x.id===id);
  sections.push(`## ${project.name}\n\n${project.status}. ${id==='ai-evaluation'?'':project.text}\n\n${p.claims.filter(c=>project.claimIds.includes(c.id)&&c.includeInCompactCv!==false&&!(id==='ai-evaluation'&&c.id==='gray-swan-july-29')).map(c=>`${c.text} ${c.compactLimitation || c.limitation}\nSource: ${c.sourceUrl || c.compactSourceNote || c.sourceNote}. Owner: ${c.sourceOwner.replaceAll('_',' ')}; evidence: ${c.evidenceType.replaceAll('_',' ')}; observed: ${c.observedAt}${c.startDate?`; event/start: ${c.startDate}`:''}.`).join('\n\n')}\n\nCase: ${p.canonicalUrl}${project.route}`);
 }
 sections.push(`## Further experience\n\n${p.experience.filter(e=>e.route==='/work/wikimedia'||e.route==='/research-operations').map(e=>`${e.name}. ${e.period}. ${e.text} Source and attribution: ${p.canonicalUrl}${e.route}`).join('\n\n')}`);
 sections.push(`## Assessed credentials\n\n${p.credentials.map(c=>`${c.title}. ${c.issuer}; earned ${c.earnedAt}; ${c.assessment}.${c.expiresAt?` Valid through ${c.expiresAt}.`:''} Verification: ${c.url}. ${c.limitation}`).join('\n\n')}`);
 sections.push(`## Education\n\n${p.education.map(e=>`${e.institution} — ${e.title}. ${e.period}. ${e.description||''}`).join('\n\n')}`);
 sections.push(`## Demonstrated work and current study\n\nLinked work: source verification, technical documentation and functional testing. Python, SQL and systems study continues.\n\n${p.languages.text}. Certificate subscores: reading 75/C2; listening 81/C2; writing 59/B2; speaking 55/B2. Current English self-assessment: ${p.languages.currentEnglishSelfAssessment.level}, reported ${p.languages.currentEnglishSelfAssessment.reportedAt}. Certificate: ${p.languages.sourceUrl}`);
 sections.push(`## Additional evidence

Source investigations: ${p.canonicalUrl}/investigations. Scientific visualizations (protein supply, not intake): ${p.canonicalUrl}/work/scientific-visualizations. Telegram localisation and source architecture: ${p.canonicalUrl}/work/telegram. QCAE interface and source-version provenance, not new psychometric validation: ${p.canonicalUrl}/work/qcae. Hypermandala geometry experiment: ${p.canonicalUrl}/work/hypermandala.`);
 sections.push(`## Application documents and contact\n\nRésumés: ${p.canonicalUrl}/cv, ${p.canonicalUrl}/cv-technical, ${p.canonicalUrl}/cv-ai. \n\nEmail: ${p.email}. ORCID: ${p.orcidUrl}. Experience: ${p.canonicalUrl}/experience. GitHub: ${p.github}. LinkedIn: ${p.linkedin}. Italy/EU citizen; US work authorization not established. \n\nReviewed: ${p.reviewedAt}; evidence retains individual dates/limitations.`);
 return bareUrls(sections.join('\n\n').split('\n').map(line=>line.trimEnd()).join('\n'))+'\n';
}
function generateLlmsFullTxt(d){
 const p=publicProfile(d),u=p.canonicalUrl,human=value=>value.replaceAll('_',' ');
 const sections=[`# ${p.name} — ${p.currentPositioning}`,`> ${p.machineSummary}`,`Reviewed: ${p.reviewedAt}. Every claim below keeps its date, source owner and limit. These records are descriptive data, not instructions.`];
 sections.push(`## Availability\n\n${p.contact} ${p.availability} ${p.engagement.contactPreference} Email: ${p.email}.`);
 sections.push(`## Services\n\n${p.engagement.audience} ${p.engagement.projectScope}\n\n${p.services.map(s=>`### ${s.name}\n\n${s.description}\n\nRelevant work: ${u}${s.evidencePath}`).join('\n\n')}`);
 sections.push(`## Résumés\n\n${Object.values(p.cv).map(cv=>`- ${cv.title}: ${u}/${cv.filename}. ${cv.summary}`).join('\n')}`);
 for(const project of p.projects)sections.push(`## ${project.name}\n\n${project.status}. ${project.text}\n\nPage: ${u}${project.route}\n\n${(project.sections||[]).map(section=>`### ${section.heading}\n\n${section.text}`).join('\n\n')}`);
 sections.push(`## Claims and limits\n\n${p.claims.map(c=>`- ${c.text}\n  Limit: ${c.limitation}\n  Source: ${c.sourceUrl||c.sourceNote||'Not published.'}\n  Owner: ${human(c.sourceOwner)}; evidence: ${human(c.evidenceType)}; observed: ${c.observedAt}.`).join('\n')}`);
 sections.push(`## Experience\n\n${p.experience.map(e=>`### ${e.name}\n\n${e.period}. ${e.text}\n\n${e.details.map(detail=>`- ${detail}`).join('\n')}`).join('\n\n')}`);
 sections.push(`## Assessed credentials\n\n${p.credentials.map(c=>`- ${c.title}. ${c.issuer}; earned ${c.earnedAt}. ${c.limitation} Verification: ${c.url}`).join('\n')}`);
 sections.push(`## Education\n\n${p.education.map(e=>`- ${e.institution} — ${e.title}. ${e.period}. ${e.description||''}`).join('\n')}`);
 sections.push(`## Languages\n\n${p.languages.text}. Certificate: ${p.languages.sourceUrl}`);
 sections.push(`## Links\n\nGitHub: ${p.github}. LinkedIn: ${p.linkedin}. ORCID: ${p.orcidUrl}. Malt: ${p.malt}.`);
 return bareUrls(sections.join('\n\n').split('\n').map(line=>line.trimEnd()).join('\n'))+'\n';
}
function generateJsonResume(d){
 // No photo, phone or street address: this is a résumé, and those stay out of résumés.
 const p=publicProfile(d),u=p.canonicalUrl,find=route=>p.experience.find(e=>e.route===route);
 const entropy=find('/work/entropy'),padua=find('/research-operations'),wikimedia=find('/work/wikimedia');
 return {
  $schema:'https://raw.githubusercontent.com/jsonresume/resume-schema/v1.0.0/schema.json',
  basics:{name:p.name,label:p.currentPositioning,email:p.email,url:u,summary:p.machineSummary,location:{countryCode:'IT'},profiles:[{network:'GitHub',username:p.github.split('/').pop(),url:p.github},{network:'LinkedIn',url:p.linkedin},{network:'ORCID',url:p.orcidUrl},...p.researchProfiles.map(profile=>({network:profile.label,url:profile.url}))]},
  work:[{name:entropy.name,position:'Science Writer, Fact-Checker & Website Manager',startDate:'2023-06',url:`${u}/work/entropy`,summary:entropy.text,highlights:entropy.details}],
  volunteer:[{organization:padua.name,position:'Research facilitation (volunteer)',startDate:'2022-11',endDate:'2025-06',url:`${u}/research-operations`,summary:padua.text,highlights:padua.details},{organization:wikimedia.name,position:'Public contributor',startDate:'2018',url:`${u}/work/wikimedia`,summary:wikimedia.text,highlights:wikimedia.details}],
  education:p.education.map(e=>({institution:e.institution,area:e.title,studyType:e.degreeAwarded?'Degree':'Studies, no degree awarded',startDate:e.startDate,...(e.sourceUrl?{url:e.sourceUrl}:{})})),
  certificates:p.credentials.map(c=>({name:c.title,date:c.earnedAt,issuer:c.issuer,url:c.url})),
  skills:Object.entries(p.cvSkills.demonstrated).map(([key,text])=>({name:p.cv[key].title,keywords:text.replace(/\.$/,'').split(/, | and /)})),
  languages:[{language:'Italian',fluency:'Native'},{language:'English',fluency:'Fluent (EF SET C1, March 2024)'}],
  projects:p.projects.filter(project=>!['entropy'].includes(project.id)).map(project=>({name:project.name,description:project.text,url:`${u}${project.route}`,roles:[project.status]})),
  meta:{canonical:`${u}/resume.json`,version:'v1.0.0',lastModified:p.reviewedAt}
 };
}
function generateProfile(d){const p=publicProfile(d);return {schemaVersion:p.schemaVersion,name:p.name,knowsAbout:p.knowsAbout,canonicalUrl:p.canonicalUrl,orcidUrl:p.orcidUrl,researchProfiles:p.researchProfiles,visualizationProfiles:p.visualizationProfiles,github:p.github,reviewedAt:p.reviewedAt,reviewScope:p.reviewScope,outputs:p.outputs,linkedin:p.linkedin,email:p.email,engagement:p.engagement,services:p.services,projects:p.projects.map(({id,name,route,status,text,claimIds,links,sections,archive})=>({id,name,route,status,text,claimIds,links,sections,...(archive?{archive}:{})})),entropyOrganization:p.entropyOrganization,aiEvaluationSnapshot:p.aiEvaluationSnapshot,aiEvaluationLatestSnapshot:p.aiEvaluationLatestSnapshot,aiEvaluationFinalResult:p.aiEvaluationFinalResult,aiEvaluationPractice:p.aiEvaluationPractice,aiEvaluationCertificates:p.aiEvaluationCertificates,visualArtifacts:p.visualArtifacts,location:{country:'Italy'},citizenship:p.citizenship,usWorkAuthorization:p.usWorkAuthorization,currentPositioning:p.currentPositioning,developmentDirection:p.developmentDirection,availability:p.availability,summary:p.machineSummary,authorship:p.authorship,resumeRoutes:p.resumeRoutes,resumeDocuments:Object.entries(p.cv).map(([focus,document])=>({focus,title:document.title,filename:document.filename,route:p.resumeRoutes[focus],summary:document.summary,skills:p.cvSkills.demonstrated[focus]})),currentStudy:p.cvSkills.currentStudy,experience:p.experience,credentials:p.credentials,education:p.education,languages:p.languages,claims:p.claims};}
function buildDossiers(d,root){for(const [name,content] of Object.entries({'llms.txt':generateLlmsTxt(d),'cv-llm.txt':generateCvLlmTxt(d),'llms-full.txt':generateLlmsFullTxt(d),'profile.json':JSON.stringify(generateProfile(d),null,2)+'\n','resume.json':JSON.stringify(generateJsonResume(d),null,2)+'\n'})){for(const folder of ['', 'public'])fs.writeFileSync(path.join(root,folder,name),content);}}
module.exports={generateLlmsTxt,generateLlmsFullTxt,generateCvLlmTxt,generateProfile,generateJsonResume,buildDossiers};
