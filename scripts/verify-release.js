#!/usr/bin/env node
// Compatibility entry point for the current public presence, replacing July's layout assertions.
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
try {
  for (const script of ['verify-dist.js', 'verify-structured-data.js', 'verify-discovery.js']) {
    execFileSync(process.execPath, [path.join(__dirname, script)], { cwd: root, stdio: 'inherit' });
  }
  execFileSync(process.execPath, [path.join(__dirname, 'verify-live-release.js'), '--local'], {
    cwd: root, stdio: 'inherit'
  });
} catch (error) {
  process.exitCode = error.status || 1;
}
