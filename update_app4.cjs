const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `function closePersonModal(triggerBack = true) {\n  const modal = document.getElementById('person-modal');`;
const r1 = `function closePersonModal(triggerBack = true) {\n  if (window.speechSynthesis) window.speechSynthesis.cancel();\n  const modal = document.getElementById('person-modal');`;

const t2 = `  const nationality = profile?.nationality || (isEs ? 'Desconocida' : 'Unknown');`;
const r2 = `  let currentCharacterDesc = '';\n  if (window.AppState && AppState.selectedMovie && AppState.selectedMovie.cast) {\n    const actorInMovie = AppState.selectedMovie.cast.find(a => a.name.toLowerCase() === normalizedPerson);\n    if (actorInMovie && actorInMovie.characterDesc) {\n      currentCharacterDesc = actorInMovie.characterDesc[AppState.language] || '';\n    }\n  }\n  const nationality = profile?.nationality || (isEs ? 'Desconocida' : 'Unknown');`;

const t3 = `  const qualities = profile?.qualities?.[AppState.language] || (isEs ? 'Cualidades no especificadas.' : 'Qualities not specified.');\n  const videoSrc = profile?.videoSrc || '';`;
const r3 = `  const qualities = profile?.qualities?.[AppState.language] || (isEs ? 'Cualidades no especificadas.' : 'Qualities not specified.');\n  const textToRead = currentCharacterDesc || \`\${biography}. \${qualities}\`;\n  const videoSrc = profile?.videoSrc || '';`;

const t4 = `        <div class="person-modal-info">\n          <h3 class="person-modal-name">\${personName}</h3>\n          <span class="person-modal-role">\${roleLabel}</span>\n        </div>`;
const r4 = `        <div class="person-modal-info">\n          <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">\n            <h3 class="person-modal-name" style="margin: 0;">\${personName}</h3>\n            <button id="person-header-tts-btn" style="background: rgba(255,255,255,0.15); border: none; font-size: 0.9em; cursor: pointer; padding: 4px 10px; border-radius: 6px; color: #fff; display: flex; align-items: center; gap: 4px; transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.15)'" title="\${isEs ? 'Leer descripción' : 'Read description'}"><span style="font-size: 1.2em;">🔊</span> \${isEs ? 'Escuchar info' : 'Listen'}</button>\n          </div>\n          <span class="person-modal-role">\${roleLabel}</span>\n        </div>`;

const t5 = `  document.body.appendChild(modal);\n\n  const grid = document.getElementById('person-movies-grid');`;
const r5 = `  document.body.appendChild(modal);\n\n  const headerTtsBtn = document.getElementById('person-header-tts-btn');\n  if (headerTtsBtn) {\n    headerTtsBtn.onclick = (e) => {\n      e.stopPropagation();\n      if (window.speechSynthesis) window.speechSynthesis.cancel();\n      if (!textToRead) return;\n      const utterance = new SpeechSynthesisUtterance(textToRead);\n      utterance.lang = AppState.language === 'es' ? 'es-ES' : 'en-US';\n      window.speechSynthesis.speak(utterance);\n    };\n  }\n\n  const grid = document.getElementById('person-movies-grid');`;

appJs = appJs.replace(t1, r1);
appJs = appJs.replace(t2, r2);
appJs = appJs.replace(t3, r3);
appJs = appJs.replace(t4, r4);
appJs = appJs.replace(t5, r5);

fs.writeFileSync(appJsPath, appJs);
console.log('Added header TTS programmatically.');
