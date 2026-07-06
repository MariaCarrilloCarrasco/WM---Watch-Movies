const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const target = `  let photoUrl = profile?.photo || '';
  if (!photoUrl) {
    if (directedMovies.length > 0) {
      photoUrl = directedMovies[0].director.photo;
    } else if (actedMovies.length > 0) {
      const firstMovie = actedMovies[0];
      const actorIndex = firstMovie.cast.findIndex(actor => actor.name.toLowerCase() === normalizedPerson);
      const imageIndex = 40 + actorIndex + firstMovie.id;
      photoUrl = \`https://images.unsplash.com/photo-\${1500000000000 + imageIndex * 100000}?auto=format&fit=crop&w=150&h=150&q=80\`;
    } else {
      photoUrl = 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80';
    }
  }`;

const replacement = `  let photoUrl = profile?.photo || '';
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
  }`;

if (code.includes(target)) {
  code = code.replace(target, replacement);
  fs.writeFileSync('app.js', code);
  console.log('Fixed showPersonDetails successfully!');
} else {
  console.log('Could not find target block in showPersonDetails.');
}
