#!/usr/bin/env node
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { resolveCvPhone } = require('./lib/private-contact.js');

const DIST = path.resolve(process.cwd(), 'dist');
const CV_PAGES = new Set([
  'cv.html',
  'cv-technical.html',
  'cv-ai.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html'
]);
const MIME_TYPES = {
  '.avif': 'image/avif',
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8'
};

function resolveRequestPath(requestUrl) {
  const pathname = decodeURIComponent(new URL(requestUrl, 'http://localhost').pathname);
  const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const requestedPath = path.resolve(DIST, relativePath);
  const distRoot = `${DIST}${path.sep}`;
  if (requestedPath !== DIST && !requestedPath.startsWith(distRoot)) return null;
  if (!path.extname(requestedPath) && fs.existsSync(`${requestedPath}.html`)) return `${requestedPath}.html`;
  return requestedPath;
}

function privateCvResponse(html, phone) {
  const escaped = phone.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  if (!html.includes('id="cvPhoneSlot"')) return html;
  let result = html.replace(/<span id="cvPhoneSlot"[^>]*><\/span>/, `<span id="cvPhoneSlot"> · ${escaped}</span>`);
  const cvs = Object.values(require('../data/source').presence.cv);
  for (const cv of cvs) result = result.replace(`href="/${cv.filename}"`, `href="/private-cv/${cv.filename}"`);
  return result;
}

function configuredPort() {
  const port = Number.parseInt(process.env.PRIVATE_PREVIEW_PORT || '4321', 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PRIVATE_PREVIEW_PORT must be an integer from 1 to 65535.');
  return port;
}

function startPrivatePreview(options = {}) {
  if (!fs.existsSync(DIST)) throw new Error('dist/ not found. Run npm run build first.');

  const phone = options.phone || resolveCvPhone();
  if (!phone) throw new Error('No local phone is configured. Set CV_PHONE or add window.MARIO_PRIVATE.phone to data/private.local.js.');

  const server = http.createServer((req, res) => {
    let url;
    try { url = new URL(req.url || '/', 'http://localhost'); }
    catch { res.writeHead(400, {'Cache-Control':'no-store'}); res.end('Invalid request'); return; }
    if (url.pathname.startsWith('/private-cv/')) {
      const name = url.pathname.slice('/private-cv/'.length);
      const allowed = Object.values(require('../data/source').presence.cv).some(cv => cv.filename === name);
      const localFile = allowed ? path.resolve('private/exports', name.replace('.pdf','-EU.pdf')) : null;
      if (!localFile || !fs.existsSync(localFile)) { res.writeHead(404, {'Cache-Control':'no-store'}); res.end('Private PDF unavailable. Generate the private EU exports with --include-phone.'); return; }
      res.writeHead(200, {'Content-Type':'application/pdf','Cache-Control':'no-store','X-Local-Private-Preview':'true'});
      fs.createReadStream(localFile).pipe(res); return;
    }
    let filePath;
    try {
      filePath = resolveRequestPath(req.url || '/');
    } catch {
      filePath = null;
    }

    if (!filePath || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end('Not found');
      return;
    }

    const relativePath = path.relative(DIST, filePath).split(path.sep).join('/');
    const headers = {
      'Content-Type': MIME_TYPES[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-store'
    };

    if (CV_PAGES.has(relativePath)) {
      try {
        const html = fs.readFileSync(filePath, 'utf8');
        res.writeHead(200, { ...headers, 'X-Local-Private-Preview': 'true' });
        res.end(privateCvResponse(html, phone));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' });
        res.end(`Unable to serve local private CV preview: ${error.message}`);
      }
      return;
    }

    res.writeHead(200, headers);
    fs.createReadStream(filePath).pipe(res);
  });

  const port = options.port ?? configuredPort();
  server.once('error', (error) => {
    console.error(`Unable to start local private preview: ${error.message}`);
    process.exitCode = 1;
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Local private CV preview: http://127.0.0.1:${server.address().port}/`);
    console.log('Phone data is injected only into local CV responses and is never written to dist/.');
  });

  if (require.main === module) {
    const close = () => server.close(() => process.exit(0));
    process.on('SIGINT', close);
    process.on('SIGTERM', close);
  }
  return server;
}

module.exports = { startPrivatePreview, privateCvResponse };

if (require.main === module) try {
  startPrivatePreview();
} catch (error) {
  console.error(`Unable to start local private preview: ${error.message}`);
  process.exit(1);
}
