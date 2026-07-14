const { JSDOM } = require('jsdom');
const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost' });
const script = fs.readFileSync('app.js', 'utf8');
try {
  dom.window.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
  dom.window.eval(script);
  dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
  dom.window.eval("AppState.user = {name:'Test'}; toggleMyList(1); switchTab('mylist'); console.log('MyList HTML:', document.getElementById('mylist-movies-grid').innerHTML);");
} catch (e) {
  console.error('Error:', e);
}
