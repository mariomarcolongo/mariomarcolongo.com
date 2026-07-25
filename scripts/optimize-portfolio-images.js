#!/usr/bin/env node

const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');

const ROOT = path.resolve(__dirname, '..');
const WORK = path.join(ROOT, 'public', 'media', 'work');

const targets = [
  'yourself-to-science.png',
  'emergent-humanity.png',
  'mdpi-filter-1.jpg',
  'mdpi-filter-2.jpg',
  'tableau-mortality.png'
];

function mimeFor(filename) {
  if (filename.endsWith('.png')) return 'image/png';
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
  throw new Error(`Unsupported image type: ${filename}`);
}

async function convert(page, sourcePath, width, outputPath) {
  const filename = path.basename(sourcePath);
  const dataUrl = `data:${mimeFor(filename)};base64,${fs.readFileSync(sourcePath).toString('base64')}`;
  const encoded = await page.evaluate(async ({ dataUrl, width }) => {
    const image = new Image();
    image.src = dataUrl;
    await image.decode();
    const targetWidth = Math.min(width, image.naturalWidth);
    const targetHeight = Math.round(image.naturalHeight * targetWidth / image.naturalWidth);
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const context = canvas.getContext('2d', { alpha: false });
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    context.drawImage(image, 0, 0, targetWidth, targetHeight);
    return canvas.toDataURL('image/webp', 0.82).split(',')[1];
  }, { dataUrl, width });
  fs.writeFileSync(outputPath, Buffer.from(encoded, 'base64'));
}

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });
  try {
    const page = await browser.newPage();
    for (const filename of targets) {
      const sourcePath = path.join(WORK, filename);
      if (!fs.existsSync(sourcePath)) throw new Error(`Missing source image: ${sourcePath}`);
      const stem = filename.replace(/\.(png|jpe?g)$/i, '');
      for (const width of [400, 800]) {
        const outputPath = path.join(WORK, `${stem}-${width}.webp`);
        await convert(page, sourcePath, width, outputPath);
        console.log(`${filename} -> ${path.basename(outputPath)} (${fs.statSync(outputPath).size} bytes)`);
      }
    }
    await page.close();
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
