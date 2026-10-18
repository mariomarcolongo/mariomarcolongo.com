#!/usr/bin/env node
// Refresh checked-in previews from the public originals; never runs during builds.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const gallery = require('../data/visualization-gallery.json');
const root = path.resolve(__dirname, '..');
const force = process.argv.includes('--force');

async function retrieve(url) {
  const response = await fetch(url, {signal: AbortSignal.timeout(60000)});
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return response;
}

async function refresh(item) {
  const file = path.join(root, 'public', item.image);
  if (!force || !item.image.startsWith('/media/visualizations/')) {
    try {
      const info = await sharp(file).metadata();
      item.previewWidth = info.width;
      item.previewHeight = info.height;
      return;
    } catch (error) {
      if (!item.image.startsWith('/media/visualizations/')) throw error;
    }
  }
  let source;
  if (item.platform === 'Flourish') {
    const html = await (await retrieve(item.url)).text();
    source = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
    if (!source || !source.startsWith('https://public.flourish.studio/published_thumbnails/')) {
      throw new Error(`Missing official thumbnail: ${item.url}`);
    }
  } else if (item.platform === 'Tableau') {
    const view = new URL(item.url).pathname.split('/viz/')[1];
    source = `https://public.tableau.com/views/${view}.png?:showVizHome=no`;
  } else if (item.platform === 'Wikimedia Commons') {
    source = `https://commons.wikimedia.org/wiki/Special:Redirect/file/${new URL(item.url).pathname.split('/wiki/File:')[1]}`;
  } else {
    throw new Error(`Capture this preview manually: ${item.url}`);
  }
  const response = await retrieve(source);
  const type = response.headers.get('content-type') || '';
  if (!type.startsWith('image/')) throw new Error(`Expected image, received ${type}: ${source}`);
  const input = Buffer.from(await response.arrayBuffer());
  const buffer = await sharp(input, {limitInputPixels: 80000000})
    .resize({width: 800, height: 640, fit: 'inside', withoutEnlargement: true})
    .webp({quality: 84}).toBuffer();
  const info = await sharp(buffer).metadata();
  if (info.width < 200 || info.height < 100) throw new Error(`Preview too small: ${item.id}`);
  await fs.mkdir(path.dirname(file), {recursive: true});
  await fs.writeFile(file, buffer);
  item.previewSource = source;
  item.previewWidth = info.width;
  item.previewHeight = info.height;
  console.log(`${item.id}: ${info.width}×${info.height}, ${Math.round(buffer.length / 1024)} KB`);
}

(async () => {
  // Two downloads at a time to avoid loading either publishing service heavily.
  const failures = [];
  for (let i = 0; i < gallery.items.length; i += 2) {
    const results = await Promise.allSettled(gallery.items.slice(i, i + 2).map(refresh));
    await fs.writeFile(path.join(root, 'data/visualization-gallery.json'), JSON.stringify(gallery, null, 2) + '\n');
    results.forEach((result, offset) => {
      if (result.status === 'rejected') {
        console.error(`${gallery.items[i + offset].id}: ${result.reason.message}`);
        failures.push(result.reason);
      }
    });
  }
  if (failures.length) throw new AggregateError(failures, 'Preview refresh failed');
  await fs.writeFile(path.join(root, 'data/visualization-gallery.json'), JSON.stringify(gallery, null, 2) + '\n');
  console.log(`Verified previews for ${gallery.items.length} public views.`);
})().catch(error => { console.error(error); process.exitCode = 1; });
