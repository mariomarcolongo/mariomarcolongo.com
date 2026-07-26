#!/usr/bin/env node
/**
 * Automated LLM & AI Dossier Generator
 * Compiles the effective career-positioned release data into canonical
 * machine-readable Markdown files.
 */

const path = require('node:path');
const { D } = require('../data/career-positioning.js');
const { buildDossiers } = require('./lib/dossier-generators.js');

buildDossiers(D, path.resolve(__dirname, '..'));
