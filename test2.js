const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost' });
const window = dom.window;

// Patch DOMContentLoaded so we can control when it runs
window.addEventListener = function(event, callback) {
  if (event === 'DOMContentLoaded') {
    window.initApp = callback;
  }
};

const script = fs.readFileSync('app.js', 'utf8');

try {
  window.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
  window.eval(script);
  
  if (window.initApp) {
    window.initApp();
  }
  
  // Now AppState should be available in window.AppState because we can expose it
  // Wait, AppState is a const inside app.js. We can't access it from outside!
  // Let's modify app.js in memory to attach AppState to window!
  
} catch (e) {
  console.error('Error:', e);
}
