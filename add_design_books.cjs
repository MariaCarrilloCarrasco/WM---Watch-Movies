const fs = require('fs');

const DESIGN_BOOKS = [
  // Generales
  { movie_identifier: 2001, display_name: "The Design of Everyday Things", release_year: "Diseño", average_score: 9.5, category_type: "Libro", synopsis_text: { es: "Principios fundamentales del diseño centrado en el usuario." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Don Norman" }, keyword_labels: ["Diseño", "UX"] },
  { movie_identifier: 2002, display_name: "Design for the Real World", release_year: "Diseño", average_score: 9.2, category_type: "Libro", synopsis_text: { es: "Diseño ecológico y socialmente responsable." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Victor Papanek" }, keyword_labels: ["Diseño", "Social"] },
  { movie_identifier: 2003, display_name: "Universal Principles of Design", release_year: "Diseño", average_score: 9.0, category_type: "Libro", synopsis_text: { es: "125 principios clave de diseño." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "William Lidwell" }, keyword_labels: ["Diseño", "Principios"] },
  { movie_identifier: 2004, display_name: "The Non-Designer's Design Book", release_year: "Diseño", average_score: 8.8, category_type: "Libro", synopsis_text: { es: "Conceptos básicos de diseño para no diseñadores." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Robin Williams" }, keyword_labels: ["Diseño", "Visual"] },
  { movie_identifier: 2005, display_name: "Grid Systems in Graphic Design", release_year: "Diseño", average_score: 9.3, category_type: "Libro", synopsis_text: { es: "Uso de cuadrículas en diseño gráfico." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Josef Müller-Brockmann" }, keyword_labels: ["Diseño", "Gráfico"] },
  
  // UX
  { movie_identifier: 2006, display_name: "Don't Make Me Think", release_year: "Diseño", average_score: 9.6, category_type: "Libro", synopsis_text: { es: "Usabilidad web de sentido común." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Steve Krug" }, keyword_labels: ["UX", "Diseño", "Usabilidad"] },
  { movie_identifier: 2007, display_name: "About Face: The Essentials of Interaction Design", release_year: "Diseño", average_score: 9.4, category_type: "Libro", synopsis_text: { es: "Diseño de interacción detallado." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Alan Cooper" }, keyword_labels: ["UX", "Diseño", "Interacción"] },
  { movie_identifier: 2008, display_name: "Lean UX", release_year: "Diseño", average_score: 8.9, category_type: "Libro", synopsis_text: { es: "Diseño ágil y centrado en el usuario." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Jeff Gothelf" }, keyword_labels: ["UX", "Diseño", "Agile"] },
  { movie_identifier: 2009, display_name: "100 Things Every Designer Needs to Know About People", release_year: "Diseño", average_score: 9.1, category_type: "Libro", synopsis_text: { es: "Psicología aplicada al diseño." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Susan Weinschenk" }, keyword_labels: ["UX", "Psicología", "Diseño"] },
  { movie_identifier: 2010, display_name: "Rocket Surgery Made Easy", release_year: "Diseño", average_score: 8.7, category_type: "Libro", synopsis_text: { es: "Pruebas de usabilidad para todos." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Steve Krug" }, keyword_labels: ["UX", "Usabilidad"] },

  // UI
  { movie_identifier: 2011, display_name: "Refactoring UI", release_year: "Diseño", average_score: 9.7, category_type: "Libro", synopsis_text: { es: "Consejos prácticos de interfaz de usuario." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Adam Wathan, Steve Schoger" }, keyword_labels: ["UI", "Diseño"] },
  { movie_identifier: 2012, display_name: "Design Systems", release_year: "Diseño", average_score: 9.0, category_type: "Libro", synopsis_text: { es: "Cómo crear sistemas de diseño escalables." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Alla Kholmatova" }, keyword_labels: ["UI", "Sistemas", "Diseño"] },
  { movie_identifier: 2013, display_name: "Laws of UX", release_year: "Diseño", average_score: 9.3, category_type: "Libro", synopsis_text: { es: "Leyes psicológicas aplicadas a UX/UI." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Jon Yablonski" }, keyword_labels: ["UX", "UI", "Psicología"] },
  { movie_identifier: 2014, display_name: "Practical UI", release_year: "Diseño", average_score: 8.8, category_type: "Libro", synopsis_text: { es: "Guía lógica y práctica de UI." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Adham Dannaway" }, keyword_labels: ["UI", "Diseño"] },

  // Visual
  { movie_identifier: 2015, display_name: "Steal Like an Artist", release_year: "Diseño", average_score: 9.2, category_type: "Libro", synopsis_text: { es: "Desbloquea tu creatividad." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Austin Kleon" }, keyword_labels: ["Creatividad", "Diseño"] },
  { movie_identifier: 2016, display_name: "Show Your Work!", release_year: "Diseño", average_score: 8.9, category_type: "Libro", synopsis_text: { es: "Cómo dar a conocer tu trabajo." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Austin Kleon" }, keyword_labels: ["Creatividad", "Profesional"] },
  { movie_identifier: 2017, display_name: "Creative Confidence", release_year: "Diseño", average_score: 8.7, category_type: "Libro", synopsis_text: { es: "Libera el potencial creativo que llevas dentro." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Tom & David Kelley" }, keyword_labels: ["Creatividad", "Innovación"] },
  { movie_identifier: 2018, display_name: "Logo Design Love", release_year: "Diseño", average_score: 9.0, category_type: "Libro", synopsis_text: { es: "Guía para crear identidades de marca icónicas." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "David Airey" }, keyword_labels: ["Branding", "Diseño"] },
  { movie_identifier: 2019, display_name: "Thinking with Type", release_year: "Diseño", average_score: 9.4, category_type: "Libro", synopsis_text: { es: "Guía fundamental de tipografía." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Ellen Lupton" }, keyword_labels: ["Tipografía", "Diseño Gráfico"] },

  // Social
  { movie_identifier: 2020, display_name: "Ruined by Design", release_year: "Diseño", average_score: 8.6, category_type: "Libro", synopsis_text: { es: "Responsabilidad ética en el diseño tecnológico." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Mike Monteiro" }, keyword_labels: ["Ética", "Diseño", "Social"] },
  { movie_identifier: 2021, display_name: "Mismatched", release_year: "Diseño", average_score: 8.9, category_type: "Libro", synopsis_text: { es: "Cómo la inclusión fomenta la innovación." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Kat Holmes" }, keyword_labels: ["Inclusión", "Diseño"] },
  { movie_identifier: 2022, display_name: "Inclusive Design for a Digital World", release_year: "Diseño", average_score: 8.8, category_type: "Libro", synopsis_text: { es: "Diseño con accesibilidad en mente." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Regine Gilbert" }, keyword_labels: ["Inclusión", "Accesibilidad"] },
  { movie_identifier: 2023, display_name: "Design Justice", release_year: "Diseño", average_score: 9.1, category_type: "Libro", synopsis_text: { es: "Diseño liderado por comunidades marginadas." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Sasha Costanza-Chock" }, keyword_labels: ["Justicia", "Diseño", "Social"] },
  { movie_identifier: 2024, display_name: "La era del capitalismo de la vigilancia", release_year: "Diseño", average_score: 9.5, category_type: "Libro", synopsis_text: { es: "El impacto de la recolección de datos en la sociedad." }, runtime_minutes: "Libro", content_rating: "All", filmmaker: { director_name: "Shoshana Zuboff" }, keyword_labels: ["Tecnología", "Sociedad"] }
];

const NEW_IMAGE_EVENTS = [
  {
    id: 7007,
    title: "Curso: Monetiza tu talento creativo usando IA",
    date: "21 al 23 de julio, 18:00h",
    location: "Founderz / Microsoft (Online)",
    type: "Curso/Webinar",
    category: "TICs"
  }
];

let content = `
// Añadir libros de diseño
if (typeof BOOKS_DATA !== 'undefined') {
  // Precompute placeholder images with name, date, author
  const booksWithImages = ${JSON.stringify(DESIGN_BOOKS, null, 2)}.map(book => {
    let coverText = book.display_name + '\\n' + book.filmmaker.director_name;
    book.cover_image_url = 'https://placehold.co/600x900/34495e/ffffff?text=' + encodeURIComponent(coverText);
    book.bg_image_url = 'https://placehold.co/1200x600/34495e/ffffff?text=' + encodeURIComponent(coverText);
    return book;
  });
  BOOKS_DATA.push(...booksWithImages);
}

// Añadir evento IA
if (typeof EVENTS_DATA !== 'undefined') {
  const iaEvent = ${JSON.stringify(NEW_IMAGE_EVENTS[0], null, 2)};
  iaEvent.image = 'https://placehold.co/800x400/2c3e50/ffffff?text=' + encodeURIComponent(iaEvent.title + '\\n' + iaEvent.date + '\\n' + iaEvent.location);
  EVENTS_DATA.push(iaEvent);
  
  // Update Tertulia details in place
  const tertuliaIndex = EVENTS_DATA.findIndex(e => e.id === 7004);
  if (tertuliaIndex !== -1) {
    EVENTS_DATA[tertuliaIndex].title = "Tertulias escuela de verano 2026";
    EVENTS_DATA[tertuliaIndex].date = "23/07/2026, 18:00 a 19:30h";
    EVENTS_DATA[tertuliaIndex].location = "Online - Fundación Mujeres (Dirigido a: Mujeres emprendedoras. Por: Mercedes Blasco)";
    EVENTS_DATA[tertuliaIndex].image = 'https://placehold.co/800x400/8e44ad/ffffff?text=' + encodeURIComponent("Tertulias escuela de verano 2026\\n23/07/2026 18:00h\\nFundación Mujeres - Mercedes Blasco");
  }
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Design books, updated Tertulia and added IA course.");
