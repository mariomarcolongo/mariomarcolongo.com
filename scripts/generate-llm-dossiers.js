const path=require('node:path');
const D=require('../data/source.js');
const {buildDossiers}=require('./lib/dossier-generators.js');
buildDossiers(D,path.resolve(__dirname,'..'));
console.log('Generated compact public dossiers from data/source.js presence record.');
