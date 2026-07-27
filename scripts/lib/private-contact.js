const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const PRIVATE_CONFIG_PATH = path.resolve(__dirname, '../../data/private.local.js');

function asNonEmptyString(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function loadLocalPrivateContact() {
  if (!fs.existsSync(PRIVATE_CONFIG_PATH)) return {};

  try {
    const sandbox = { window: {} };
    const source = fs.readFileSync(PRIVATE_CONFIG_PATH, 'utf8');
    vm.runInNewContext(source, sandbox, {
      filename: PRIVATE_CONFIG_PATH,
      timeout: 1000
    });

    const contact = sandbox.window.MARIO_PRIVATE || sandbox.window._privateData;
    return contact && typeof contact === 'object' ? contact : {};
  } catch (error) {
    console.warn(`Unable to load local private contact data: ${error.message}`);
    return {};
  }
}

function resolveCvPhone() {
  return asNonEmptyString(process.env.CV_PHONE) || asNonEmptyString(loadLocalPrivateContact().phone);
}

module.exports = { resolveCvPhone };
