import { defineConfig } from 'astro/config';
import markdownEmitter from './src/integrations/markdown-emitter.mjs';

const legacyDataDefaultExports = new Map([
  ['/data/source.js', 'MARIO_DOSSIER'],
  ['/data/portfolio-human.js', 'PORTFOLIO_HUMAN'],
  ['/data/portfolio-v3.js', 'PORTFOLIO_V3'],
  ['/data/application-profiles.js', 'APPLICATION_PROFILES'],
  ['/data/recent-application-evidence.js', 'RECENT_APPLICATION_EVIDENCE'],
  ['/data/investigation-cases.js', 'INVESTIGATION_CASES']
]);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function stripConditionalCommonJsExport(code, identifier) {
  const footer = new RegExp(
    `\\nif \\(typeof module !== ["']undefined["'] && module\\.exports\\) \\{\\s*module\\.exports = ${escapeRegExp(identifier)};\\s*\\}\\s*$`
  );
  return code.replace(footer, '');
}

const legacyDataInterop = {
  name: 'mario-legacy-data-commonjs-interop',
  enforce: 'pre',
  transform(code, id) {
    const cleanId = id.split('?', 1)[0];

    if (cleanId.endsWith('/data/notandia-branding.js')) {
      const transformed = code.replace(
        'module.exports = { NOTANDIA, applyNotandiaBranding, rewriteLegacyLinks };',
        'export { NOTANDIA, applyNotandiaBranding, rewriteLegacyLinks };\nexport default { NOTANDIA, applyNotandiaBranding, rewriteLegacyLinks };'
      );
      return transformed === code ? null : transformed;
    }

    if (cleanId.endsWith('/data/public-evidence.js')) {
      const transformed = code.replace(
        'module.exports = { ENTROPY_WORK_URL, graySwan, audience, yourselfToScience };',
        'export { ENTROPY_WORK_URL, graySwan, audience, yourselfToScience };\nexport default { ENTROPY_WORK_URL, graySwan, audience, yourselfToScience };'
      );
      return transformed === code ? null : transformed;
    }

    if (cleanId.endsWith('/data/homepage-positioning.js')) {
      const originalImports = [
        "const source = require('./source.js');",
        "const portfolio = require('./portfolio-human.js');",
        "const { applyNotandiaBranding } = require('./notandia-branding.js');",
        'const {',
        '  ENTROPY_WORK_URL,',
        '  audience,',
        '  graySwan,',
        '  yourselfToScience',
        "} = require('./public-evidence.js');"
      ].join('\n');
      const compatibleImports = [
        "import source from './source.js';",
        "import portfolio from './portfolio-human.js';",
        "import notandiaBranding from './notandia-branding.js';",
        "import publicEvidence from './public-evidence.js';",
        'const { applyNotandiaBranding } = notandiaBranding;',
        'const { ENTROPY_WORK_URL, audience, graySwan, yourselfToScience } = publicEvidence;'
      ].join('\n');
      const transformed = code
        .replace(originalImports, compatibleImports)
        .replace('module.exports = { D, H, audience, graySwan };', 'export default { D, H, audience, graySwan };');
      return transformed === code ? null : transformed;
    }

    if (cleanId.endsWith('/data/release-data.js')) {
      const originalImports = [
        'const D = require("./source.js");',
        'const H = require("./portfolio-human.js");',
        'const P = require("./application-profiles.js");'
      ].join('\n');
      const compatibleImports = [
        'import D from "./source.js";',
        'import H from "./portfolio-human.js";',
        'import P from "./application-profiles.js";'
      ].join('\n');
      const compatibleExports = [
        'const release = { D, H, P, GS, ENTROPY };',
        'export { D, H, P, GS, ENTROPY };',
        'export default release;'
      ].join('\n');
      const transformed = code
        .replace(originalImports, compatibleImports)
        .replace('module.exports = { D, H, P, GS, ENTROPY };', compatibleExports);
      return transformed === code ? null : transformed;
    }

    if (cleanId.endsWith('/data/career-positioning.js')) {
      const originalImports = [
        "const release = require('./release-data.js');",
        'const { D, H, P } = release;',
        '',
        'const {',
        '  ENTROPY_WORK_URL,',
        '  graySwan,',
        '  audience,',
        '  yourselfToScience',
        "} = require('./public-evidence.js');"
      ].join('\n');
      const compatibleImports = [
        "import release from './release-data.js';",
        "import publicEvidence from './public-evidence.js';",
        'const { D, H, P } = release;',
        'const { ENTROPY_WORK_URL, graySwan, audience, yourselfToScience } = publicEvidence;'
      ].join('\n');
      const compatibleExports = [
        'const career = { ...release, D, H, P, audience, graySwan, yourselfToScience, ENTROPY_WORK_URL };',
        'export { D, H, P, audience, graySwan, yourselfToScience, ENTROPY_WORK_URL };',
        'export default career;'
      ].join('\n');
      const transformed = code
        .replace(originalImports, compatibleImports)
        .replace(
          'module.exports = { ...release, D, H, P, audience, graySwan, yourselfToScience, ENTROPY_WORK_URL };',
          compatibleExports
        );
      return transformed === code ? null : transformed;
    }

    if (cleanId.endsWith('/data/multilingual-positioning.js')) {
      const originalImports = [
        "const career = require('./career-positioning.js');",
        'const { D, H, P } = career;'
      ].join('\n');
      const compatibleImports = [
        "import career from './career-positioning.js';",
        'const { D, H, P } = career;'
      ].join('\n');
      const compatibleExports = [
        'const multilingualPositioning = { ...career, D, H, P, multilingualQuality };',
        'export { D, H, P, multilingualQuality };',
        'export default multilingualPositioning;'
      ].join('\n');
      const transformed = code
        .replace(originalImports, compatibleImports)
        .replace(
          'module.exports = { ...career, D, H, P, multilingualQuality };',
          compatibleExports
        );
      return transformed === code ? null : transformed;
    }

    const matchedExport = [...legacyDataDefaultExports.entries()]
      .find(([pathSuffix]) => cleanId.endsWith(pathSuffix));

    if (!matchedExport) return null;

    const [, identifier] = matchedExport;
    const defaultExport = `export default ${identifier}`;
    if (code.includes(defaultExport)) return null;

    const transformed = stripConditionalCommonJsExport(code, identifier);
    if (cleanId.endsWith('/data/source.js')) {
      return `${transformed}\nexport { createMarioDossier };\n${defaultExport};\n`;
    }
    if (cleanId.endsWith('/data/portfolio-human.js')) {
      return `${transformed}\nexport { createPortfolioHuman };\n${defaultExport};\n`;
    }
    return `${transformed}\n${defaultExport};\n`;
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
