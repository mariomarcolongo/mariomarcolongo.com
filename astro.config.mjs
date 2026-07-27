import { defineConfig } from 'astro/config';
import markdownEmitter from './src/integrations/markdown-emitter.mjs';

const legacyDataDefaultExports = new Map([
  ['/data/source.js', 'MARIO_DOSSIER'],
  ['/data/portfolio-human.js', 'PORTFOLIO_HUMAN'],
  ['/data/portfolio-v3.js', 'PORTFOLIO_V3'],
  ['/data/recent-application-evidence.js', 'RECENT_APPLICATION_EVIDENCE']
]);

const legacyDataInterop = {
  name: 'mario-legacy-data-commonjs-interop',
  enforce: 'pre',
  transform(code, id) {
    const cleanId = id.split('?', 1)[0];
    const matchedExport = [...legacyDataDefaultExports.entries()]
      .find(([pathSuffix]) => cleanId.endsWith(pathSuffix));

    if (!matchedExport) return null;

    const [, identifier] = matchedExport;
    const defaultExport = `export default ${identifier}`;
    if (code.includes(defaultExport)) return null;

    return `${code}\n${defaultExport};\n`;
  }
};

export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [legacyDataInterop]
  },
  integrations: [
    markdownEmitter()
  ]
});
