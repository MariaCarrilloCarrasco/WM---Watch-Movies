const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// 1. Fix trailer modal signature and logic
const trailerTarget = `function openTrailerModal(movie) {
  const oldModal = document.getElementById('trailer-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'trailer-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  
  // Cerrar al hacer click fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTrailerModal();
    }
  });

  const searchQuery = encodeURIComponent(\`\${movie.title} official trailer\`);`;

const trailerReplacement = `function openTrailerModal(movieId) {
  const isEs = AppState.language === 'es';
  const movie = MOVIES_DATA.find(m => m.id === Number(movieId));
  if (!movie) return;

  const oldModal = document.getElementById('trailer-modal');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'trailer-modal';
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';
  
  // Cerrar al hacer click fuera del contenido
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeTrailerModal();
    }
  });

  const searchQuery = encodeURIComponent(\`\${movie.title} official trailer\`);`;

if (code.includes(trailerTarget)) {
  code = code.replace(trailerTarget, trailerReplacement);
  console.log('Fixed trailer modal!');
}

// 2. Fix cast fallback in createMovieCardElement grid
const castTarget = `          const avatarUrl = actorProfile && actorProfile.photo
            ? actorProfile.photo
            : \`https://ui-avatars.com/api/?name=\${encodeURIComponent(actor.name)}&background=random&color=fff&size=150\`;`;

const castReplacement = `          let avatarUrl = actorProfile && actorProfile.photo ? actorProfile.photo : '';
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

if (code.includes(castTarget)) {
  code = code.replace(castTarget, castReplacement);
  console.log('Fixed cast images!');
}

fs.writeFileSync('app.js', code);
