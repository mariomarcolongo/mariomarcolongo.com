#!/usr/bin/env node
/**
 * MODULAR CV GENERATOR — Mario Marcolongo Portfolio
 *
 * Generates custom, tailored Markdown CVs from single source of truth (`data/source.js`),
 * allowing exclusion of specific projects, sections, or tags for specific job applications.
 *
 * Usage Examples:
 *   node scripts/generate-custom-cv.js --exclude=emergent-humanity,telegram-bot --out=cv-campbell.md
 *   node scripts/generate-custom-cv.js --profile=campbell --out=cv-campbell.md
 *   node scripts/generate-custom-cv.js --help
 */

const fs = require('node:fs');
const path = require('node:path');
const D = require('../data/source.js');

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log(`
Modular CV Generator — Mario Marcolongo

Options:
  --exclude=<ids>         Comma-separated list of project/section IDs or keywords to exclude (e.g., emergent-humanity,telegram-bot)
  --profile=<name>        Use a predefined exclusion profile (e.g., campbell, academic, tech)
  --out=<filepath>        Path to save generated Markdown file (defaults to console output if omitted)
  --help, -h              Show this help message

Predefined Profiles:
  campbell   Excludes: emergent-humanity, telegram-bot (Focuses strictly on evidence synthesis, literature verification & AI automation)
  academic   Excludes: telegram-bot
  tech       Excludes none (Shows full technical spectrum)
`);
  process.exit(0);
}

// Parse arguments
let excludeList = [];
let outPath = null;
let profile = null;

args.forEach(arg => {
  if (arg.startsWith('--exclude=')) {
    excludeList = excludeList.concat(arg.split('=')[1].split(',').map(s => s.trim().toLowerCase()));
  } else if (arg.startsWith('--profile=')) {
    profile = arg.split('=')[1].trim().toLowerCase();
  } else if (arg.startsWith('--out=')) {
    outPath = arg.split('=')[1].trim();
  }
});

if (profile === 'campbell') {
  excludeList = excludeList.concat(['emergent-humanity', 'telegram-bot']);
} else if (profile === 'academic') {
  excludeList = excludeList.concat(['telegram-bot']);
}

function shouldInclude(item) {
  if (!item) return false;
  const id = (item.id || '').toLowerCase();
  const title = (item.title || item.role || '').toLowerCase();
  return !excludeList.some(ex => id === ex || title.includes(ex));
}

function generateModularCv(d) {
  let out = `# ${d.identity.name} — Targeted Curriculum Vitae\n`;
  out += `> ${d.identity.headline}\n`;
  out += `> Location: ${d.identity.location} · ${d.identity.relocation}\n`;
  out += `> Email: ${d.identity.email} | Web: ${d.identity.domain} | ORCID: ${d.identity.orcid}\n\n`;
  out += `---\n\n`;

  out += `## Executive Summary\n${d.summary}\n\n---\n\n`;

  out += `## Core Competencies & Technical Skills\n`;
  if (d.skills) {
    d.skills.forEach(s => {
      out += `- ${s}\n`;
    });
  }
  out += `\n---\n\n`;

  out += `## Professional Experience\n\n`;
  if (d.experience) {
    d.experience.filter(shouldInclude).forEach(exp => {
      out += `### ${exp.role} — ${exp.org}\n`;
      out += `*${exp.period}*\n\n`;
      if (exp.bullets) {
        exp.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }
  out += `---\n\n`;

  out += `## Research & Open Science Infrastructure\n\n`;
  if (d.research) {
    d.research.filter(shouldInclude).forEach(r => {
      out += `### ${r.role} — ${r.org}\n`;
      out += `*${r.period}*\n\n`;
      if (r.bullets) {
        r.bullets.forEach(b => {
          out += `- ${b}\n`;
        });
      }
      out += `\n`;
    });
  }
  out += `---\n\n`;

  out += `## Deployed Systems & Open-Source Projects\n\n`;
  if (d.projects) {
    d.projects.filter(shouldInclude).forEach(p => {
      const linkUrl = p.links && (p.links.website || p.links.bot || p.links.github || p.links.chromeStore)
        ? (p.links.website || p.links.bot || p.links.github || p.links.chromeStore)
        : '';
      out += `### ${p.title}\n`;
      out += `**${p.role}** | ${linkUrl}\n\n`;
      out += `${p.description}\n\n`;
      if (p.highlights?.length) {
        p.highlights.forEach(h => {
          out += `- ${h}\n`;
        });
        out += `\n`;
      }
    });
  }
  out += `---\n\n`;

  out += `## Education & Certifications\n\n`;
  if (d.education) {
    d.education.forEach(e => {
      const periodPart = e.period ? '(' + e.period + ') ' : '';
      out += `- **${e.title}** ${periodPart}— ${e.detail}\n`;
    });
  }
  out += `\n`;

  return out;
}

const result = generateModularCv(D);

if (outPath) {
  const fullPath = path.resolve(process.cwd(), outPath);
  fs.writeFileSync(fullPath, result, 'utf8');
  console.log(`✓ Generated tailored CV at: ${fullPath} (Excluded: ${excludeList.join(', ') || 'none'})`);
} else {
  console.log(result);
}
