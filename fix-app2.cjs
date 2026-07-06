const fs = require('fs');
let lines = fs.readFileSync('app.js', 'utf8').split('\n');

const replacementLines = `    const role = directedMovies.length > 0 ? 'director' : actedMovies.length > 0 ? 'actor' : 'profile';
    const roleLabel = role === 'director'
      ? (isEs ? 'Director de Cine' : 'Film Director')
      : role === 'actor'
        ? (isEs ? 'Actor / Actriz' : 'Actor / Actress')
        : (isEs ? 'Profesional del Cine' : 'Film Professional');

    let photoUrl = profile?.photo || '';
    if (!photoUrl || photoUrl.includes('unsplash.com') || photoUrl.includes('ui-avatars')) {
      const aiImages = [
        "ai_cast/actor_female_one_1783254168757.png",
        "ai_cast/actor_male_one_1783254179999.png",
        "ai_cast/actor_male_two_1783254193629.png",
        "ai_cast/actor_female_two_1783254205060.png"
      ];
      const charCodeSum = normalizedPerson.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
      const isFemale = /elena|luna|sienna|rin|sophie|anne/i.test(normalizedPerson);
      const isMale = /marcus|aris|julian|alex|edward|matthew|christoph/i.test(normalizedPerson);
      
      if (isFemale) {
        photoUrl = aiImages[charCodeSum % 2 === 0 ? 0 : 3];
      } else if (isMale) {
        photoUrl = aiImages[charCodeSum % 2 === 0 ? 1 : 2];
      } else {
        photoUrl = aiImages[charCodeSum % 4];
      }
    }`.split('\n');

let startIndex = lines.findIndex(l => l.includes('try {'));
if (startIndex !== -1 && lines[startIndex+1].includes("const role = directedMovies.length > 0")) {
  let endIndex = startIndex + 12; // lines 4454 to 4466 (inclusive) is 13 lines. try { is at startIndex. The } is at startIndex + 12.
  lines.splice(startIndex + 1, 12, ...replacementLines);
  fs.writeFileSync('app.js', lines.join('\n'));
  console.log('Fixed exactly!');
} else {
  console.log('Could not find try {');
}
