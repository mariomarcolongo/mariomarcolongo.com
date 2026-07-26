import { defineConfig } from 'astro/config';
import markdownEmitter from './src/integrations/markdown-emitter.mjs';

export default defineConfig({
  output: 'static',
  build: {
    format: 'file',
    inlineStylesheets: 'always'
  },
  integrations: [
    markdownEmitter()
  ]
});
