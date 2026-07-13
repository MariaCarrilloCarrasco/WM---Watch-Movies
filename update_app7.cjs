const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `      <div style="padding: 16px; background: #0f172a; color: #fff;">\n        <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700;">\${movie.title}</h3>\n        <p style="margin: 0; font-size: 13px; color: #94a3b8;">\${isEs ? 'Tráiler Oficial' : 'Official Trailer'}</p>\n      </div>`;
const r1 = `      <div style="padding: 16px; background: #0f172a; color: #fff; display: flex; flex-direction: column; gap: 12px;">\n        <div>\n          <h3 style="margin: 0 0 4px 0; font-size: 18px; font-weight: 700;">\${movie.title}</h3>\n          <p style="margin: 0; font-size: 13px; color: #94a3b8;">\${isEs ? 'Tráiler Oficial' : 'Official Trailer'}</p>\n        </div>\n        <button id="trailer-fallback-tts-btn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); font-size: 0.9em; cursor: pointer; padding: 8px 12px; border-radius: 6px; color: #cbd5e1; display: flex; align-items: center; gap: 8px; transition: background 0.2s; align-self: flex-start;" onmouseover="this.style.background='rgba(255,255,255,0.2)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'">\n          <span style="font-size: 1.2em;">🔊</span> \n          <span>\${isEs ? '¿No puedes ver el tráiler? Escuchar descripción de la película' : 'Cannot see the video? Listen to movie description'}</span>\n        </button>\n      </div>`;

const t2 = `  document.body.appendChild(modal);\n}`;
const r2 = `  document.body.appendChild(modal);\n\n  const fallbackBtn = document.getElementById('trailer-fallback-tts-btn');\n  if (fallbackBtn) {\n    fallbackBtn.onclick = (e) => {\n      e.stopPropagation();\n      if (window.speechSynthesis) window.speechSynthesis.cancel();\n      const descText = typeof movie.description === 'object' ? movie.description[AppState.language] : movie.description;\n      if (!descText) return;\n      \n      // Ocultar iframe para que no interfiera\n      const iframe = modal.querySelector('iframe');\n      if (iframe) iframe.style.display = 'none';\n\n      const utterance = new SpeechSynthesisUtterance(descText);\n      utterance.lang = AppState.language === 'es' ? 'es-ES' : 'en-US';\n      window.speechSynthesis.speak(utterance);\n    };\n  }\n}`;

const t3 = `function closeTrailerModal() {\n  const modal = document.getElementById('trailer-modal');`;
const r3 = `function closeTrailerModal() {\n  if (window.speechSynthesis) window.speechSynthesis.cancel();\n  const modal = document.getElementById('trailer-modal');`;

appJs = appJs.replace(t1, r1);
appJs = appJs.replace(t2, r2);
appJs = appJs.replace(t3, r3);

fs.writeFileSync(appJsPath, appJs);
console.log('Trailer fallback TTS script complete.');
