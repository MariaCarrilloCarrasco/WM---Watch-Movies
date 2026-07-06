const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: "dangerously",
  resources: "usable",
  url: "http://localhost:5175"
});

// Polyfill fetch
dom.window.fetch = async () => ({
  json: async () => ({}),
  text: async () => ''
});

dom.window.console.error = (msg, err) => {
  console.log('ERROR:', msg, err ? err : '');
};

dom.window.console.warn = (msg) => {
  console.log('WARN:', msg);
};

dom.window.onerror = function(msg, source, line, col, error) {
  console.log('UNCAUGHT EXCEPTION:', msg, 'at line', line);
  if (error) console.log(error);
};

// Wait a bit for DOMContentLoaded to run
setTimeout(() => {
  console.log('Done.');
  process.exit(0);
}, 2000);
