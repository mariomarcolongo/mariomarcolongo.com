const assert = require('node:assert/strict');
const fs = require('node:fs');
const { once } = require('node:events');
const { startPrivatePreview, privateCvResponse } = require('./private-preview');
(async () => {
  const marker = 'PRIVATE-CONTACT-TEST';
  const server = startPrivatePreview({ port: 0, phone: marker });
  await once(server, 'listening');
  const origin = `http://127.0.0.1:${server.address().port}`;
  try {
    for (const route of ['/cv', '/cv-technical', '/cv-ai', '/cv.html']) {
      const response = await fetch(origin + route);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('cache-control'), 'no-store');
      const html = await response.text();
      assert.ok(html.includes(`<span id="cvPhoneSlot"> · ${marker}</span>`));
      assert.ok(html.includes('href="/private-cv/'));
      assert.ok(!html.includes('window.MARIO_PRIVATE'));
    }
    for (const route of ['/', '/experience', '/profile.json']) {
      const response = await fetch(origin + route);
      assert.equal(response.status, 200);
      assert.ok(!(await response.text()).includes(marker));
    }
    const escaped = privateCvResponse('<span id="cvPhoneSlot" hidden></span>', '<script>&"');
    assert.ok(!escaped.includes('<script>'));
    assert.ok(escaped.includes('&lt;script&gt;'));
    for (const cv of Object.values(require('../data/source').presence.cv)) {
      const response = await fetch(origin + '/private-cv/' + cv.filename);
      assert.equal(response.status, 200);
      assert.equal(response.headers.get('content-type'), 'application/pdf');
      const bytes = Buffer.from(await response.arrayBuffer());
      assert.equal(bytes.compare(fs.readFileSync('private/exports/' + cv.filename.replace('.pdf','-EU.pdf'))), 0);
    }
    assert.equal((await fetch(origin + '/private-cv/unknown.pdf')).status,404);
    console.log('Private routes, escaped no-JS contact, private downloads and non-CV isolation passed.');
  } finally { await new Promise(resolve => server.close(resolve)); }
})().catch(error => { console.error(error); process.exitCode = 1; });
