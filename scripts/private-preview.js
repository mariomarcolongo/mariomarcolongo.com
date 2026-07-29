#!/usr/bin/env node
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { resolveCvPhone } = require('./lib/private-contact.js');

const DIST = path.resolve(process.cwd(), 'dist');
const CV_PAGES = new Set([
  'cv.html',
  'cv-resume.html',
  'cv-research.html',
  'cv-editorial.html',
  'cv-integrity.html',
  'cv-orcid.html'
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
  return requestedPath;
}

function privateCvResponse(html, phone) {
  const serializedPhone = JSON.stringify(phone).replace(/[<>&]/g, (character) => ({
    '<': '\\u003c',
    '>': '\\u003e',
    '&': '\\u0026'
  })[character]);
  const privateBootstrap = `<script>window.MARIO_PRIVATE={phone:${serializedPhone}};</script>`;
  if (!html.includes('</head>')) throw new Error('CV page has no closing head tag for local private-data injection.');
  return html.replace('</head>', `${privateBootstrap}</head>`);
}

function configuredPort() {
  const port = Number.parseInt(process.env.PRIVATE_PREVIEW_PORT || '4321', 10);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('PRIVATE_PREVIEW_PORT must be an integer from 1 to 65535.');
  return port;
}

function startPrivatePreview() {
  if (!fs.existsSync(DIST)) throw new Error('dist/ not found. Run npm run build first.');

  const phone = resolveCvPhone();
  if (!phone) throw new Error('No local phone is configured. Set CV_PHONE or add window.MARIO_PRIVATE.phone to data/private.local.js.');

  const server = http.createServer((req, res) => {
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

  const port = configuredPort();
  server.once('error', (error) => {
    console.error(`Unable to start local private preview: ${error.message}`);
    process.exitCode = 1;
  });
  server.listen(port, '127.0.0.1', () => {
    console.log(`Local private CV preview: http://127.0.0.1:${port}/`);
    console.log('Phone data is injected only into local CV responses and is never written to dist/.');
  });

  const close = () => server.close(() => process.exit(0));
  process.on('SIGINT', close);
  process.on('SIGTERM', close);
}

try {
  startPrivatePreview();
} catch (error) {
  console.error(`Unable to start local private preview: ${error.message}`);
  process.exit(1);
}
