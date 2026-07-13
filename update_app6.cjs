const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `  let currentCharacterDesc = '';\n  if (window.AppState && AppState.selectedMovie && AppState.selectedMovie.cast) {\n    const actorInMovie = AppState.selectedMovie.cast.find(a => a.name.toLowerCase() === normalizedPerson);\n    if (actorInMovie && actorInMovie.characterDesc) {\n      currentCharacterDesc = actorInMovie.characterDesc[AppState.language] || '';\n    }\n  }`;

const r1 = `  let currentCharacterDesc = '';\n  if (window.AppState && AppState.selectedMovie && AppState.selectedMovie.cast) {\n    const actorInMovie = AppState.selectedMovie.cast.find(a => a.name.toLowerCase() === normalizedPerson);\n    if (actorInMovie) {\n      const charName = actorInMovie.character?.[AppState.language] || 'este personaje';\n      const charDesc = actorInMovie.characterDesc?.[AppState.language] || '';\n      if (charName || charDesc) {\n        const intro = isEs\n          ? \`En la película \${AppState.selectedMovie.title}, interpreta a \${charName}. \`\n          : \`In the movie \${AppState.selectedMovie.title}, plays \${charName}. \`;\n        currentCharacterDesc = intro + charDesc;\n      }\n    }\n  }`;

appJs = appJs.replace(t1, r1);

fs.writeFileSync(appJsPath, appJs);
console.log('Added movie and character intro to TTS text.');
