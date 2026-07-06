const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf8');

const personProfileReplacement = `const PERSON_PROFILE_DATA = {
  "elena rostova": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "marcus vance": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "dr. aris thorne": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "luna park": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian c.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "sienna w.": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "alex thompson": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "rin aoyagi": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "edward norton": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "sophie turner": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "matthew m.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "anne hathaway": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian haas": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "christoph waltz": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "denis villeneuve": {
    nationality: "Canadiense",
    birthDate: "03 de octubre de 1967",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Denis Villeneuve es un director canadiense reconocido por su enfoque visual y narrativo único, creando historias extensas y personajes profundos.",
      en: "Denis Villeneuve is a Canadian director known for his unique visual and narrative style, creating expansive stories and deep characters."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "Esta historia de vida se presenta con interpretación en lengua de signos, narración y subtítulos para mayor accesibilidad.",
      en: "This life story is presented with sign language interpretation, narration, and subtitles for enhanced accessibility."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\\nDenis Villeneuve, director canadiense, revela cómo sus experiencias forman su voz artística.",
      en: "00:00:00.000 --> 00:00:07.000\\nDenis Villeneuve, Canadian director, reveals how his experiences shape his artistic voice."
    }
  },
  "christopher nolan": {
    nationality: "Británico",
    birthDate: "30 de julio de 1970",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    biography: {
      es: "Christopher Nolan es conocido por su capacidad de combinar ciencia ficción con emoción humana, creando universos narrativos complejos.",
      en: "Christopher Nolan is known for his ability to combine science fiction with human emotion, creating complex narrative universes."
    },
    videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    videoText: {
      es: "El relato muestra su carrera en lengua de signos, con un narrador que contextualiza su trayectoria.",
      en: "The story shows his career in sign language, with a narrator contextualizing his trajectory."
    },
    videoSubtitles: {
      es: "00:00:00.000 --> 00:00:07.000\\nChristopher Nolan, maestro de la narrativa no lineal.",
      en: "00:00:00.000 --> 00:00:07.000\\nChristopher Nolan, master of non-linear narrative."
    }
  }
};`;

// replace from `const PERSON_PROFILE_DATA = {` up to `  }
// };`
const startIdx = appJs.indexOf('const PERSON_PROFILE_DATA = {');
let endIdx = appJs.indexOf('};', startIdx);
while (appJs.substring(endIdx - 4, endIdx) !== '  }\n') {
    endIdx = appJs.indexOf('};', endIdx + 1);
}

const newAppJs = appJs.substring(0, startIdx) + personProfileReplacement + appJs.substring(endIdx + 2);
fs.writeFileSync('app.js', newAppJs);
console.log('PERSON_PROFILE_DATA updated!');
