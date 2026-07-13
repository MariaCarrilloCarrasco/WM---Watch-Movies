const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Add qualities to modal details
const biographyRow = `<div class="person-profile-row person-biography-row">
          <span class="person-profile-label">\${isEs ? 'Biografía' : 'Biography'}</span>
          <span>\${biography}</span>
        </div>`;
const biographyRowReplacement = biographyRow + `
        <div class="person-profile-row person-qualities-row">
          <span class="person-profile-label">\${isEs ? 'Cualidades' : 'Qualities'}</span>
          <span>\${qualities}</span>
        </div>`;
if (appJs.includes(biographyRow)) {
  appJs = appJs.replace(biographyRow, biographyRowReplacement);
} else {
  console.log("Could not find biography row");
}

// 2. Add character description to Filmography
const gridLoop = `allAssociatedMovies.forEach(movie => {
        grid.appendChild(createMovieCardElement(movie));
      });`;
const gridLoopReplacement = `allAssociatedMovies.forEach(movie => {
        const card = createMovieCardElement(movie);
        const actorInfo = movie.cast.find(a => a.name.toLowerCase() === normalizedPerson);
        if (actorInfo) {
          const descEl = document.createElement('div');
          descEl.className = 'person-character-desc';
          descEl.innerHTML = \`<strong>\${isEs ? 'Personaje' : 'Character'}:</strong> \${actorInfo.character?.[AppState.language] || ''}<br><small>\${actorInfo.characterDesc?.[AppState.language] || ''}</small>\`;
          descEl.style.marginTop = '10px';
          descEl.style.padding = '10px';
          descEl.style.background = 'rgba(0,0,0,0.4)';
          descEl.style.borderRadius = '6px';
          descEl.style.fontSize = '0.85em';
          descEl.style.color = '#cbd5e1';
          card.appendChild(descEl);
        }
        grid.appendChild(card);
      });`;
if (appJs.includes(gridLoop)) {
  appJs = appJs.replace(gridLoop, gridLoopReplacement);
} else {
  console.log("Could not find grid loop");
}

// 3. Fix the video rendering to handle empty videoSrc
const videoHtml = `<video controls class="person-story-video" aria-label="\${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for \${personName}">
          <source src="\${videoSrc}" type="video/mp4">
          \${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}
        </video>`;
const videoHtmlReplacement = `\${videoSrc ? \`<video controls class="person-story-video" aria-label="\${isEs ? 'Historia de vida en lengua de signos' : 'Life story in sign language'} for \${personName}">
          <source src="\${videoSrc}" type="video/mp4">
          \${isEs ? 'Tu navegador no soporta video HTML5.' : 'Your browser does not support HTML5 video.'}
        </video>\` : \`<div style="padding: 20px; background: #1e293b; color: #94a3b8; border-radius: 8px; text-align: center; margin-bottom: 10px;">\${isEs ? '🎥 [Vídeo en lengua de signos no disponible por el momento]' : '🎥 [Sign language video currently unavailable]'}</div>\`}`;
if (appJs.includes(videoHtml)) {
  appJs = appJs.replace(videoHtml, videoHtmlReplacement);
} else {
  console.log("Could not find video HTML");
}

fs.writeFileSync(appJsPath, appJs);
console.log('app.js updated successfully pass 2!');
