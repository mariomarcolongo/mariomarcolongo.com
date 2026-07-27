import { defineConfig } from 'astro/config';
import markdownEmitter from './src/integrations/markdown-emitter.mjs';

const dossierInterop = {
  name: 'mario-dossier-commonjs-interop',
  enforce: 'pre',
  transform(code, id) {
    if (!id.endsWith('/data/source.js')) return null;
    if (code.includes('export default MARIO_DOSSIER')) return null;
    return `${code}\nexport default MARIO_DOSSIER;\n`;
  }
};

export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [dossierInterop]
  },
  integrations: [
    markdownEmitter()
  ]
});
