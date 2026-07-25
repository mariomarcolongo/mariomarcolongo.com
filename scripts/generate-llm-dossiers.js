#!/usr/bin/env node
/**
 * Automated LLM & AI Dossier Generator
 * Compiles the effective application-ready release data into canonical
 * machine-readable Markdown files.
 */

const path = require('node:path');
const { D } = require('../data/release-data.js');
const { buildDossiers } = require('./lib/dossier-generators.js');

buildDossiers(D, path.resolve(__dirname, '..'));
