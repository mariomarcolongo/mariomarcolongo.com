const {
  PDFArray,
  PDFDict,
  PDFDocument,
  PDFHexString,
  PDFName,
  PDFString
} = require('pdf-lib');

const PRODUCTION_ORIGIN = 'https://mariomarcolongo.com';
const LOOPBACK_HOSTS = new Set(['127.0.0.1', 'localhost', '[::1]']);

function productionUrlFor(value) {
  let url;
  try { url = new URL(value); }
  catch (error) { return null; }
  if (!LOOPBACK_HOSTS.has(url.hostname)) return null;
  return `${PRODUCTION_ORIGIN}${url.pathname}${url.search}${url.hash}`;
}

async function rewriteLoopbackLinksForPdf(page) {
  const result = await page.evaluate(({ productionOrigin, loopbackHosts }) => {
    const hosts = new Set(loopbackHosts);
    let rewritten = 0;

    for (const anchor of document.querySelectorAll('a[href]')) {
      let url;
      try { url = new URL(anchor.href); }
      catch (error) { continue; }
      if (!hosts.has(url.hostname)) continue;
      anchor.setAttribute('href', `${productionOrigin}${url.pathname}${url.search}${url.hash}`);
      rewritten += 1;
    }

    const remaining = Array.from(document.querySelectorAll('a[href]'))
      .map((anchor) => anchor.href)
      .filter((href) => {
        try { return hosts.has(new URL(href).hostname); }
        catch (error) { return false; }
      });

    return { rewritten, remaining };
  }, { productionOrigin: PRODUCTION_ORIGIN, loopbackHosts: [...LOOPBACK_HOSTS] });

  if (result.remaining.length) {
    throw new Error(`DOM still contains loopback hyperlinks after rewrite: ${result.remaining.join(', ')}`);
  }
  return result.rewritten;
}

function decodePdfText(value) {
  if (value instanceof PDFString || value instanceof PDFHexString) return value.decodeText();
  return null;
}

function pdfUriActions(pdf) {
  const records = [];
  const annotsName = PDFName.of('Annots');
  const actionName = PDFName.of('A');
  const uriName = PDFName.of('URI');

  for (const [pageIndex, page] of pdf.getPages().entries()) {
    const annotsObject = page.node.get(annotsName);
    if (!annotsObject) continue;
    const annots = pdf.context.lookup(annotsObject);
    if (!(annots instanceof PDFArray)) continue;

    for (let annotationIndex = 0; annotationIndex < annots.size(); annotationIndex += 1) {
      const annotation = pdf.context.lookup(annots.get(annotationIndex));
      if (!(annotation instanceof PDFDict)) continue;
      const actionObject = annotation.get(actionName);
      if (!actionObject) continue;
      const action = pdf.context.lookup(actionObject);
      if (!(action instanceof PDFDict)) continue;
      const uriObject = action.get(uriName);
      const uri = decodePdfText(uriObject);
      if (!uri) continue;
      records.push({ action, uri, pageIndex, annotationIndex });
    }
  }
  return records;
}

async function rewriteLoopbackPdfLinks(pdfBytes, label) {
  const pdf = await PDFDocument.load(pdfBytes);
  const uriName = PDFName.of('URI');
  let rewritten = 0;

  for (const record of pdfUriActions(pdf)) {
    const replacement = productionUrlFor(record.uri);
    if (!replacement) continue;
    record.action.set(uriName, PDFString.of(replacement));
    rewritten += 1;
  }

  if (!rewritten) return Buffer.from(pdfBytes);
  const saved = await pdf.save();
  console.log(`${label} rewritten PDF hyperlinks: ${rewritten}`);
  return Buffer.from(saved);
}

async function assertNoLoopbackPdfLinks(pdfBytes, label) {
  const pdf = await PDFDocument.load(pdfBytes);
  const remaining = pdfUriActions(pdf)
    .map((record) => record.uri)
    .filter((uri) => productionUrlFor(uri));

  if (remaining.length) {
    throw new Error(`${label} contains loopback PDF hyperlinks: ${remaining.join(', ')}`);
  }
}

module.exports = {
  PRODUCTION_ORIGIN,
  rewriteLoopbackLinksForPdf,
  rewriteLoopbackPdfLinks,
  assertNoLoopbackPdfLinks
};
