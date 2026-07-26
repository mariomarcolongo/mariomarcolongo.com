const fs = require('node:fs');
const puppeteer = require('puppeteer');

function resolveChromiumExecutable() {
  const candidates = [
    process.env.PUPPETEER_EXECUTABLE_PATH,
    '/usr/bin/google-chrome-stable',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary'
  ].filter(Boolean);
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  try {
    return puppeteer.executablePath();
  } catch (error) {
    return undefined;
  }
}

async function launchBrowser() {
  const executablePath = resolveChromiumExecutable();
  if (!executablePath) {
    throw new Error('No Chromium executable found. Install the Puppeteer browser or set PUPPETEER_EXECUTABLE_PATH.');
  }
  console.log(`Using Chromium: ${executablePath}`);
  return puppeteer.launch({
    headless: true,
    executablePath,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium']
  });
}

module.exports = { launchBrowser, resolveChromiumExecutable };
