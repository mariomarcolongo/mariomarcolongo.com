#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const zlib = require('node:zlib');

const ROOT = path.resolve(process.cwd(), 'dist');
const PORT = Number(process.env.PORT || 4173);

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8'
};

function resolveFile(requestUrl) {
  let pathname = decodeURIComponent(new URL(requestUrl, `http://127.0.0.1:${PORT}`).pathname);
  if (pathname === '/') pathname = '/index.html';
  const candidate = path.resolve(ROOT, `.${pathname}`);
  if (!candidate.startsWith(ROOT)) return null;
  if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) return candidate;
  if (!path.extname(candidate) && fs.existsSync(`${candidate}.html`)) return `${candidate}.html`;
  return null;
}

const server = http.createServer((request, response) => {
  const file = resolveFile(request.url || '/');
  if (!file) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const extension = path.extname(file).toLowerCase();
  const contentType = types[extension] || 'application/octet-stream';
  const relative = path.relative(ROOT, file).replaceAll(path.sep, '/');
  const immutable = relative.startsWith('_astro/') || relative.startsWith('media/');
  const headers = {
    'Content-Type': contentType,
    'Cache-Control': immutable ? 'public, max-age=31536000, immutable' : 'no-cache',
    'Vary': 'Accept-Encoding'
  };

  const raw = fs.readFileSync(file);
  const compressible = /^(text\/|application\/(json|javascript|xml|manifest\+json)|image\/svg\+xml)/.test(contentType);
  const encoding = request.headers['accept-encoding'] || '';
  if (compressible && encoding.includes('br')) {
    headers['Content-Encoding'] = 'br';
    response.writeHead(200, headers);
    response.end(zlib.brotliCompressSync(raw));
  } else if (compressible && encoding.includes('gzip')) {
    headers['Content-Encoding'] = 'gzip';
    response.writeHead(200, headers);
    response.end(zlib.gzipSync(raw));
  } else {
    response.writeHead(200, headers);
    response.end(raw);
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`Lighthouse server listening at http://127.0.0.1:${PORT}`);
});
