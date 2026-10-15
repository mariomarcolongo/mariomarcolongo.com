const assert = require('node:assert/strict');
const fs = require('node:fs');
const P = require('../data/source.js').presence;
const ids = new Set(), dois = new Set();
for (const output of P.outputs) {
  for (const key of ['id', 'projectId', 'type', 'title', 'role', 'releasedAt', 'doi', 'conceptDoi', 'sourceUrl', 'reviewedAt', 'reviewScope']) assert.ok(output[key], `${output.id}: ${key}`);
  assert.ok(!ids.has(output.id) && !dois.has(output.doi), 'Duplicated output');
  ids.add(output.id); dois.add(output.doi);
  assert.ok(['Preprint', 'Software'].includes(output.type));
  if (output.type === 'Software') assert.ok(output.version, `${output.id}: software version`);
  assert.match(output.doi, /^10\.5281\/zenodo\.\d+$/);
  assert.notEqual(output.doi, output.conceptDoi);
  assert.ok(P.projects.some(project => project.id === output.projectId));
  if (output.sourceCommit) assert.match(output.sourceCommit, /^[a-f0-9]{40}$/);
  for (const related of output.relatedRecords || []) assert.equal(related.type, 'registry_record');
}
for (const project of P.projects.filter(project => project.archive)) {
  assert.equal(project.archive, P.outputs.find(output => output.projectId === project.id), 'Archive must use the canonical output object');
}
assert.ok(P.reviewScope.includes('individual evidence'));
if (fs.existsSync('dist/profile.json')) {
  const exported = JSON.parse(fs.readFileSync('dist/profile.json'));
  assert.deepEqual(exported.outputs, P.outputs);
  assert.equal(exported.reviewScope, P.reviewScope);
}
console.log(`${P.outputs.length} distinct published outputs: types, roles, version identifiers, provenance and archive reuse passed.`);

if (process.argv.includes('--live')) {
  (async () => {
    for (const output of P.outputs) {
      const response = await fetch(`https://api.datacite.org/dois/${output.doi}`, { signal: AbortSignal.timeout(20000) });
      assert.ok(response.ok, `${output.id}: DataCite HTTP ${response.status}`);
      const { data: { attributes: a } } = await response.json();
      assert.equal(a.types.resourceTypeGeneral, output.type, `${output.id}: type`);
      if (a.version) assert.equal(a.version, output.version, `${output.id}: version`);
      assert.ok(a.creators.some(creator => creator.nameIdentifiers?.some(id => id.nameIdentifier?.endsWith(P.orcidUrl.split('/').pop()))), `${output.id}: creator ORCID`);
      assert.ok(a.dates.some(date => date.dateType === 'Issued' && date.date === output.releasedAt), `${output.id}: issue date`);
      if (output.license) assert.ok(a.rightsList.some(right => right.rightsIdentifier?.toLowerCase() === output.license.toLowerCase()), `${output.id}: licence`);
      assert.ok(a.relatedIdentifiers.some(id => id.relationType === 'IsVersionOf' && id.relatedIdentifier === output.conceptDoi), `${output.id}: concept DOI`);
      console.log(`Verified public DOI metadata: ${output.id}`);
    }
  })().catch(error => { console.error(error); process.exitCode = 1; });
}
