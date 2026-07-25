#!/usr/bin/env node
/**
 * Automated LLM & AI Dossier Generator
 * Compiles data/source.js into canonical machine-readable Markdown files.
 */

const path = require('node:path');
const D = require('../data/source.js');
const { buildDossiers } = require('./lib/dossier-generators.js');

buildDossiers(D, path.resolve(__dirname, '..'));
