const fs = require('fs');

const content = `
// Actualizar detalles de Teatro
if (typeof THEATER_DATA !== 'undefined') {
  THEATER_DATA.forEach(t => {
    t.event_details = {
      fecha: "Próximamente",
      hora: "20:00h",
      lugar: "Teatro Madrid",
      precio: "Desde 15€",
      web_compra: "https://entradas.com",
      plataforma: "Entradas.com"
    };
  });
}

// Actualizar detalles de Monólogos
if (typeof MONOLOGUES_DATA !== 'undefined') {
  MONOLOGUES_DATA.forEach(m => {
    m.event_details = {
      fecha: "Fines de semana",
      hora: "22:00h",
      lugar: "Sala de Comedia, Madrid",
      precio: "Desde 10€",
      web_compra: "https://atrapalo.com",
      plataforma: "Atrápalo"
    };
  });
}

// Actualizar y añadir Series
if (typeof SERIES_DATA !== 'undefined') {
  const updateSeries = (name, tags) => {
    let s = SERIES_DATA.find(x => x.display_name.toLowerCase().includes(name.toLowerCase()));
    if (s) {
      s.keyword_labels = [...new Set([...(s.keyword_labels || []), ...tags])];
    }
  };

  updateSeries("Game of Thrones", ["Fantasía", "Drama"]);
  updateSeries("Juego de Tronos", ["Fantasía", "Drama"]);
  updateSeries("Stranger Things", ["Fantasía", "Ciencia Ficción", "Thriller"]);
  updateSeries("Simpson", ["Animación", "Comedia"]);
  updateSeries("Futurama", ["Animación", "Ciencia Ficción"]);
  updateSeries("Friends", ["Comedia"]);
  updateSeries("Serrano", ["Comedia", "Drama"]);
  updateSeries("Padre de Familia", ["Animación", "Comedia"]);
  updateSeries("Waverly", ["Fantasía", "Comedia", "Infantil"]);

  if (!SERIES_DATA.some(x => x.display_name.toLowerCase().includes("game of thrones") || x.display_name.toLowerCase().includes("juego de tronos"))) {
    let coverText = "Game of Thrones\\n2011\\nDavid Benioff";
    SERIES_DATA.push({
      movie_identifier: 4001,
      display_name: "Game of Thrones",
      release_year: 2011,
      average_score: 9.3,
      category_type: "Serie",
      synopsis_text: { es: "Nueve familias nobles luchan por el control de las míticas tierras de Poniente." },
      filmmaker: { director_name: "David Benioff" },
      keyword_labels: ["Fantasía", "Drama"],
      cover_image_url: 'https://placehold.co/600x900/2c3e50/ffffff?text=' + encodeURIComponent(coverText),
      bg_image_url: 'https://placehold.co/1200x600/2c3e50/ffffff?text=' + encodeURIComponent(coverText)
    });
  }

  if (!SERIES_DATA.some(x => x.display_name.toLowerCase().includes("stranger things"))) {
    let coverText = "Stranger Things\\n2016\\nThe Duffer Brothers";
    SERIES_DATA.push({
      movie_identifier: 4002,
      display_name: "Stranger Things",
      release_year: 2016,
      average_score: 8.7,
      category_type: "Serie",
      synopsis_text: { es: "Acontecimientos extraños y fuerzas sobrenaturales acechan un pequeño pueblo." },
      filmmaker: { director_name: "The Duffer Brothers" },
      keyword_labels: ["Fantasía", "Ciencia Ficción", "Thriller"],
      cover_image_url: 'https://placehold.co/600x900/8e44ad/ffffff?text=' + encodeURIComponent(coverText),
      bg_image_url: 'https://placehold.co/1200x600/8e44ad/ffffff?text=' + encodeURIComponent(coverText)
    });
  }
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Updated events and series successfully.");
