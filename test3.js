const { JSDOM } = require('jsdom');
const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: 'dangerously', url: 'http://localhost' });
const window = dom.window;

let script = fs.readFileSync('app.js', 'utf8');
// Expose AppState to window for testing
script = script.replace('const AppState = {', 'window.AppState = {');
script = script.replace(/AppState\./g, 'window.AppState.');

try {
  window.fetch = () => Promise.resolve({ json: () => Promise.resolve({}) });
  window.eval(script);
  
  window.document.dispatchEvent(new window.Event('DOMContentLoaded'));
  
  window.AppState.user = {name:'Test'};
  
  // call toggleMyList for movie ID 1
  window.toggleMyList(1);
  console.log("MyListMovies array:", window.AppState.myListMovies);
  
  // switch tab
  window.switchTab('mylist');
  
  console.log('MyList HTML:', window.document.getElementById('mylist-movies-grid').innerHTML);
} catch (e) {
  console.error('Error:', e);
}
