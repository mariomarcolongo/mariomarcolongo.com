import assert from 'node:assert/strict';
import {createSubmission} from './submit-indexnow.mjs';
const valid='<urlset><url><loc>https://mariomarcolongo.com/</loc></url><url><loc>https://mariomarcolongo.com/</loc></url></urlset>';
assert.deepEqual(createSubmission(valid).urlList,['https://mariomarcolongo.com/']);
for(const value of ['https://example.org/private','https://mariomarcolongo.com/?token=private','https://user:password@mariomarcolongo.com/','https://mariomarcolongo.com/#contact','http://mariomarcolongo.com/'])assert.throws(()=>createSubmission(`<loc>${value}</loc>`));
assert.throws(()=>createSubmission('<urlset/>'));
console.log('IndexNow canonical-host, credential/query/fragment exclusion, empty-batch and deduplication checks passed.');
