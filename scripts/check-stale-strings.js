const assert=require('node:assert/strict');const D=require('../data/source.js');const p=D.presence;
assert.equal(p.currentPositioning,'Research & Technical Operations');assert.equal(p.machineSummary.split(/\s+/).length,50);assert.equal(p.education[0].creditsAwarded,3);assert.equal(p.education[0].degreeAwarded,false);assert.equal(p.education[1].period,'2020–2023');assert.equal(p.languages.sourceUrl,'https://cert.efset.org/jHk84h');
for(const c of p.claims){for(const key of ['id','text','sourceOwner','evidenceType','engagementType','observedAt','lastReviewedAt','limitation','visibility'])assert.ok(c[key],`${c.id}: missing ${key}`);assert.equal(c.visibility,'public');}
assert.equal(new Set(p.claims.map(c=>c.id)).size,p.claims.length);
const value=JSON.stringify(p);for(const prohibited of ['API Gateway','eJz39v','MLCommons contributor','120 ECTS completed','eight years of professional','EmpiricalFolio','private.local','PRJEB109744'])assert.ok(!value.includes(prohibited),`Public record contains ${prohibited}`);
console.log('Approved facts, provenance, education and public boundaries passed.');
