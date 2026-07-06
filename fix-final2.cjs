const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// 1. Trailer
code = code.replace("function openTrailerModal(movie) {", "function openTrailerModal(movieId) {\\n  const isEs = AppState.language === 'es';\\n  const movie = MOVIES_DATA.find(m => m.id === Number(movieId));\\n  if (!movie) return;");

// 2. Cast
const castRegex = /const avatarUrl = actorProfile && actorProfile\.photo\s*\?\s*actorProfile\.photo\s*:\s*`https:\/\/ui-avatars\.com\/api\/\?name=\$\{encodeURIComponent\(actor\.name\)}&background=random&color=fff&size=150`;/g;

const castReplacement = `let avatarUrl = actorProfile && actorProfile.photo ? actorProfile.photo : '';
          if (!avatarUrl || avatarUrl.includes('ui-avatars') || avatarUrl.includes('unsplash')) {
            const aiImages = [
              "ai_cast/actor_female_one_1783254168757.png",
              "ai_cast/actor_male_one_1783254179999.png",
              "ai_cast/actor_male_two_1783254193629.png",
              "ai_cast/actor_female_two_1783254205060.png"
            ];
            const charCodeSum = actor.name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
            const isFemale = /elena|luna|sienna|rin|sophie|anne/i.test(actor.name);
            const isMale = /marcus|aris|julian|alex|edward|matthew|christoph/i.test(actor.name);
            
            if (isFemale) {
              avatarUrl = aiImages[charCodeSum % 2 === 0 ? 0 : 3];
            } else if (isMale) {
              avatarUrl = aiImages[charCodeSum % 2 === 0 ? 1 : 2];
            } else {
              avatarUrl = aiImages[charCodeSum % 4];
            }
          }`;

code = code.replace(castRegex, castReplacement);

fs.writeFileSync('app.js', code);
console.log('Fixed using regex/replace!');
