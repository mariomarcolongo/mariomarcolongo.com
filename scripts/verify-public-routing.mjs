#!/usr/bin/env node
import { readFile } from 'node:fs/promises';

const functionUrl = new URL('../functions/[[path]].js', import.meta.url);
const functionSource = await readFile(functionUrl, 'utf8');
const moduleUrl = `data:text/javascript;charset=utf-8,${encodeURIComponent(functionSource)}`;
const { onRequest } = await import(moduleUrl);

const retiredOAuthMetadataPaths = [
  '/.well-known/oauth-protected-resource',
  '/.well-known/oauth-authorization-server'
];

for (const pathname of retiredOAuthMetadataPaths) {
  let nextCalled = false;
  const response = await onRequest({
    request: new Request(`https://mariomarcolongo.com${pathname}`),
    next: async () => {
      nextCalled = true;
      return new Response('unexpected fallback');
    }
  });

  if (nextCalled) throw new Error(`${pathname} must not reach the static fallback`);
  if (response.status !== 404) throw new Error(`${pathname} must return HTTP 404; received ${response.status}`);
  if (response.headers.get('Content-Type') !== 'text/plain; charset=utf-8') {
    throw new Error(`${pathname} must return a plain-text not-found response`);
  }
  if (response.headers.get('Cache-Control') !== 'no-store') {
    throw new Error(`${pathname} must not cache a not-found response`);
  }
}

console.log(`Public routing verification passed for ${retiredOAuthMetadataPaths.length} retired OAuth metadata paths.`);
