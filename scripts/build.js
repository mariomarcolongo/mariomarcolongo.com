#!/usr/bin/env node
/**
 * UNIFIED STATIC SSOT BUILDER — Mario Marcolongo Portfolio & Dossiers
 */

const path = require('node:path');
const D = require('../data/source.js');
const {
  formatProjectLinksText,
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt,
  buildDossiers: buildDossiersLib
} = require('./lib/dossier-generators.js');

const ROOT_DIR = path.resolve(__dirname, '..');

function buildDossiers() {
  buildDossiersLib(D, ROOT_DIR);
}

if (require.main === module) {
  buildDossiers();
}

module.exports = {
  formatProjectLinksText,
  generateLlmsTxt,
  generateLlmsFullTxt,
  generateCvLlmTxt,
  buildDossiers
};
