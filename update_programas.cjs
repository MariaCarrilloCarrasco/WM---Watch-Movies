const fs = require('fs');

const content = `
// Actualizar y añadir Programas de TV
if (typeof PROGRAMS_DATA !== 'undefined') {
  const updateProgram = (name, tags) => {
    let p = PROGRAMS_DATA.find(x => x.display_name.toLowerCase().includes(name.toLowerCase()));
    if (p) {
      p.keyword_labels = [...new Set([...(p.keyword_labels || []), ...tags])];
    }
  };

  updateProgram("Hormiguero", ["Entretenimiento"]);
  updateProgram("Resistencia", ["Entretenimiento", "Humor"]);
  updateProgram("Club de la comedia", ["Entretenimiento", "Humor"]);
  updateProgram("Sé lo que hicisteis", ["Entretenimiento", "Humor"]);
  
  updateProgram("Got Talent", ["Talent Show"]);
  
  updateProgram("Atrapa un millón", ["Concurso"]);
  updateProgram("Pasapalabra", ["Concurso"]);
  updateProgram("Ruleta de la suerte", ["Concurso"]);
  
  updateProgram("Operación Triunfo", ["Musical", "Talent Show"]);

  // Add missing programs
  const missingPrograms = [
    { name: "Masterchef", tags: ["Concurso", "Talent Show", "Cocina"] },
    { name: "Topchef", tags: ["Concurso", "Talent Show", "Cocina"] },
    { name: "La Voz", tags: ["Musical", "Talent Show"] },
    { name: "Factor X", tags: ["Musical", "Talent Show"] },
    { name: "Mira Quien Baila", tags: ["Musical", "Talent Show", "Entretenimiento"] }
  ];

  let nextId = 5020;
  missingPrograms.forEach(prog => {
    if (!PROGRAMS_DATA.some(x => x.display_name.toLowerCase().includes(prog.name.toLowerCase()))) {
      let coverText = prog.name + '\\nTV\\nEspaña';
      PROGRAMS_DATA.push({
        movie_identifier: nextId++,
        display_name: prog.name,
        release_year: "TV",
        average_score: 8.5,
        category_type: "Programa",
        synopsis_text: { es: "Programa de televisión: " + prog.name },
        filmmaker: { director_name: "España" },
        keyword_labels: prog.tags,
        cover_image_url: 'https://placehold.co/600x900/16a085/ffffff?text=' + encodeURIComponent(coverText),
        bg_image_url: 'https://placehold.co/1200x600/16a085/ffffff?text=' + encodeURIComponent(coverText)
      });
    }
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Updated TV Programs successfully.");
