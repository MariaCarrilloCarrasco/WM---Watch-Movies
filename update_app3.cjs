const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// Normalize line endings for replacement
appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `  const biography = profile?.biography?.[AppState.language] || (isEs ? 'Biografía no disponible.' : 'Biography not available.');\n  const videoSrc = profile?.videoSrc || 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4';`;
const r1 = `  const biography = profile?.biography?.[AppState.language] || (isEs ? 'Biografía no disponible.' : 'Biography not available.');\n  const qualities = profile?.qualities?.[AppState.language] || (isEs ? 'Cualidades no especificadas.' : 'Qualities not specified.');\n  const videoSrc = profile?.videoSrc || '';`;

const t2 = `        <div class="person-profile-row person-biography-row">\n          <span class="person-profile-label">\${isEs ? 'Biografía' : 'Biography'}</span>\n          <span>\${biography}</span>\n        </div>\n      </div>`;
const r2 = `        <div class="person-profile-row person-biography-row">\n          <span class="person-profile-label">\${isEs ? 'Biografía' : 'Biography'}</span>\n          <span>\${biography}</span>\n        </div>\n        <div class="person-profile-row person-qualities-row">\n          <span class="person-profile-label">\${isEs ? 'Cualidades' : 'Qualities'}</span>\n          <span>\${qualities}</span>\n        </div>\n      </div>`;

const t3 = `        <video controls class="person-story-video" aria-label="\${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for \${personName}">\n          <source src="\${videoSrc}" type="video/mp4">\n          \${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}\n        </video>`;
const r3 = `        \${videoSrc ? \`<video controls class="person-story-video" aria-label="\${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for \${personName}">\n          <source src="\${videoSrc}" type="video/mp4">\n          \${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}\n        </video>\` : \`<div style="padding: 20px; background: #1e293b; color: #94a3b8; border-radius: 8px; text-align: center; margin-bottom: 10px;">\${isEs ? '🎥 [Vídeo en lengua de signos no disponible por el momento]' : '🎥 [Sign language video currently unavailable]'}</div>\`}`;

const t4 = `      allAssociatedMovies.forEach(movie => {\n        grid.appendChild(createMovieCardElement(movie));\n      });`;
const r4 = `      allAssociatedMovies.forEach(movie => {\n        const card = createMovieCardElement(movie);\n        const actorInfo = movie.cast.find(a => a.name.toLowerCase() === normalizedPerson);\n        if (actorInfo) {\n          const descEl = document.createElement('div');\n          descEl.className = 'person-character-desc';\n          descEl.innerHTML = \`<strong>\${isEs ? 'Personaje' : 'Character'}:</strong> \${actorInfo.character?.[AppState.language] || ''}<br><small>\${actorInfo.characterDesc?.[AppState.language] || ''}</small>\`;\n          descEl.style.marginTop = '10px';\n          descEl.style.padding = '10px';\n          descEl.style.background = 'rgba(0,0,0,0.4)';\n          descEl.style.borderRadius = '6px';\n          descEl.style.fontSize = '0.85em';\n          descEl.style.color = '#cbd5e1';\n          card.appendChild(descEl);\n        }\n        grid.appendChild(card);\n      });`;

appJs = appJs.replace(t1, r1);
appJs = appJs.replace(t2, r2);
appJs = appJs.replace(t3, r3);
appJs = appJs.replace(t4, r4);

// Write back with normalized endings
fs.writeFileSync(appJsPath, appJs);
console.log('UI replacements done programmatically (line endings handled).');
