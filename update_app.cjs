const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

// 1. Add character_desc to actors_list
appJs = appJs.replace(/character_role:\s*\{\s*es:\s*"(.*?)",\s*en:\s*"(.*?)"\s*\}/g, 'character_role: { es: "$1", en: "$2" }, character_desc: { es: "Una figura central que aporta dinamismo y profundidad a la narrativa de la película.", en: "A central figure that brings dynamism and depth to the film\'s narrative." }');

// 2. Add qualities to PERSON_PROFILE_DATA
appJs = appJs.replace(/biography:\s*\{[\s\S]*?\},/g, match => {
  return match + '\n    qualities: {\n      es: "Destaca por su increíble versatilidad, carisma natural y capacidad para transmitir emociones complejas.",\n      en: "Stands out for their incredible versatility, natural charisma, and ability to convey complex emotions."\n    },';
});

// 3. Replace flower video with empty string
appJs = appJs.replace(/videoSrc:\s*"https:\/\/interactive-examples\.mdn\.mozilla\.net\/media\/cc0-videos\/flower\.mp4"/g, 'videoSrc: ""');

// 4. Update the Movie constructor to parse characterDesc
appJs = appJs.replace(/character:\s*actor\.character_role\s*\/\/\s*es\/en\s*object/, 'character: actor.character_role, characterDesc: actor.character_desc');

fs.writeFileSync(appJsPath, appJs);
console.log('Pass 1: data updated');
