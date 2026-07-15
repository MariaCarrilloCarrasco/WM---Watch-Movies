const fs = require('fs');

const NEW_BOOKS = [
  {
    movie_identifier: 2002,
    display_name: "Los Incomprendidos",
    release_year: 2014,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Una novela de temática social sobre un grupo de adolescentes que enfrentan los problemas del instituto, la amistad y el primer amor.",
      en: "A social theme novel about teenagers facing high school problems, friendship, and first love."
    },
    runtime_minutes: "400 páginas",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Blue Jeans", avatar: "" },
    keyword_labels: ["Social", "Juvenil"]
  },
  {
    movie_identifier: 2003,
    display_name: "El Futuro Tecnológico",
    release_year: 2025,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Un análisis profundo sobre cómo la inteligencia artificial, Web3 y la computación cuántica redefinirán nuestra sociedad.",
      en: "A deep analysis on how AI, Web3, and quantum computing will redefine our society."
    },
    runtime_minutes: "320 páginas",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Tech Guru", avatar: "" },
    keyword_labels: ["Tecnológica", "Ensayo"]
  },
  {
    movie_identifier: 2004,
    display_name: "Diseño de Interfaces Modernas",
    release_year: 2026,
    average_score: 9.5,
    category_type: "Libro",
    synopsis_text: {
      es: "La guía definitiva para entender UX/UI, la teoría del color y la psicología detrás de las aplicaciones más populares.",
      en: "The ultimate guide to understanding UX/UI, color theory, and psychology behind popular apps."
    },
    runtime_minutes: "280 páginas",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Elena UI", avatar: "" },
    keyword_labels: ["Diseño", "Educación"]
  },
  {
    movie_identifier: 2005,
    display_name: "Un Verano en París",
    release_year: 2023,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Una novela romántica sobre dos extraños que se cruzan en las calles de París y cambian sus vidas para siempre.",
      en: "A romantic novel about two strangers who cross paths in the streets of Paris."
    },
    runtime_minutes: "350 páginas",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Sarah Romance", avatar: "" },
    keyword_labels: ["Romántica", "Ficción"]
  },
  {
    movie_identifier: 2006,
    display_name: "Versos al Viento",
    release_year: 2022,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Una antología de poesía moderna que explora los sentimientos más profundos de la condición humana.",
      en: "An anthology of modern poetry exploring the deepest feelings of the human condition."
    },
    runtime_minutes: "150 páginas",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Poeta Anónimo", avatar: "" },
    keyword_labels: ["Poesía", "Arte"]
  },
  {
    movie_identifier: 2007,
    display_name: "Dune",
    release_year: 1965,
    average_score: 9.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Obra maestra de la ciencia ficción que nos transporta al desértico planeta Arrakis y a las intrigas políticas por la Especia.",
      en: "Sci-Fi masterpiece transporting us to the desert planet Arrakis and political intrigues."
    },
    runtime_minutes: "800 páginas",
    content_rating: "12+",
    bg_image_url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1618331835717-801e976710b2?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "Frank Herbert", avatar: "" },
    keyword_labels: ["Ciencia Ficción", "Aventura"]
  },
  {
    movie_identifier: 2008,
    display_name: "Harry Potter y la Piedra Filosofal",
    release_year: 1997,
    average_score: 9.7,
    category_type: "Libro",
    synopsis_text: {
      es: "El inicio de la saga de fantasía más famosa del mundo. Un joven mago descubre su verdadero destino en Hogwarts.",
      en: "The beginning of the world's most famous fantasy saga. A young wizard discovers his destiny."
    },
    runtime_minutes: "300 páginas",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1543884803-db96df6222b0?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1543884803-db96df6222b0?auto=format&fit=crop&w=600&q=80",
    filmmaker: { director_name: "J.K. Rowling", avatar: "" },
    keyword_labels: ["Fantasía", "Magia"]
  }
];

const appendContent = `

// Añadir los nuevos libros a la base de datos
BOOKS_DATA.push(...(${JSON.stringify(NEW_BOOKS, null, 2)}));

`;

fs.appendFileSync('js/datos.js', appendContent);
console.log("Updated js/datos.js with new books.");
