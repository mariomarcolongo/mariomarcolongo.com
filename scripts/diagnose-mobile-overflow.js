#!/usr/bin/env node
const path = require('node:path');
const { startStaticServer } = require('./lib/static-server.js');
const { launchBrowser } = require('./lib/browser.js');

async function main() {
  const server = await startStaticServer(path.resolve(process.cwd(), 'dist'));
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
    await page.goto(`${server.origin}/index.html`, { waitUntil: 'networkidle0', timeout: 45000 });
    const report = await page.evaluate(() => {
      const viewport = document.documentElement.clientWidth;
      const elements = Array.from(document.querySelectorAll('body *')).map((element) => {
        const rect = element.getBoundingClientRect();
        const style = getComputedStyle(element);
        return {
          tag: element.tagName.toLowerCase(),
          id: element.id || '',
          className: typeof element.className === 'string' ? element.className : '',
          left: Math.round(rect.left),
          right: Math.round(rect.right),
          width: Math.round(rect.width),
          scrollWidth: element.scrollWidth,
          overflowX: style.overflowX,
          position: style.position,
          transform: style.transform
        };
      }).filter((item) => item.right > viewport + 1 || item.left < -1 || item.width > viewport + 1)
        .sort((a, b) => Math.max(b.right - viewport, b.width - viewport) - Math.max(a.right - viewport, a.width - viewport));
      return {
        viewport,
        documentScrollWidth: document.documentElement.scrollWidth,
        offenders: elements.slice(0, 30)
      };
    });
    console.log(JSON.stringify(report, null, 2));
  } finally {
    await browser.close();
    await server.close();
  }
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exit(1);
});
