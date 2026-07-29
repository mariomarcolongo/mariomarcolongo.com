const PRODUCTION_ORIGIN = 'https://mariomarcolongo.com';
const LOOPBACK_HOSTS = new Set(['127.0.0.1', 'localhost', '[::1]']);

async function rewriteLoopbackLinksForPdf(page) {
  await page.evaluate(({ productionOrigin, loopbackHosts }) => {
    const hosts = new Set(loopbackHosts);
    for (const anchor of document.querySelectorAll('a[href]')) {
      let url;
      try { url = new URL(anchor.href); }
      catch (error) { continue; }
      if (!hosts.has(url.hostname)) continue;
      anchor.href = `${productionOrigin}${url.pathname}${url.search}${url.hash}`;
    }
  }, { productionOrigin: PRODUCTION_ORIGIN, loopbackHosts: [...LOOPBACK_HOSTS] });
}

function assertNoLoopbackPdfLinks(pdfBytes, label) {
  const raw = Buffer.from(pdfBytes).toString('latin1');
  for (const prohibited of ['127.0.0.1', 'localhost', '[::1]']) {
    if (raw.includes(prohibited)) throw new Error(`${label} contains a loopback PDF hyperlink: ${prohibited}`);
  }
}

module.exports = {
  PRODUCTION_ORIGIN,
  rewriteLoopbackLinksForPdf,
  assertNoLoopbackPdfLinks
};
