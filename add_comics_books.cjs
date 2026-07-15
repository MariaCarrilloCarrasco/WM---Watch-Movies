const fs = require('fs');

const COMICS_AND_FANTASY_BOOKS = [
  // Fantasía extras
  {
    movie_identifier: 2150,
    display_name: "La brújula dorada (Materia oscura I)",
    release_year: 1995,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Lyra emprende un viaje al norte para rescatar a su amigo Roger y desentrañar el misterio del Polvo.",
      en: "Lyra journeys to the north to rescue her friend Roger and uncover the mystery of Dust."
    },
    runtime_minutes: "399 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=La+br%C3%BAjula+dorada",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=La+br%C3%BAjula+dorada",
    filmmaker: { director_name: "Philip Pullman", avatar: "" },
    keyword_labels: ["Fantasía", "Aventura"]
  },
  {
    movie_identifier: 2151,
    display_name: "Las crónicas de Narnia: El león, la bruja y el armario",
    release_year: 1950,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Cuatro hermanos descubren un mundo mágico congelado en el invierno eterno de la Bruja Blanca.",
      en: "Four siblings discover a magical world frozen in the eternal winter of the White Witch."
    },
    runtime_minutes: "208 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Las+cr%C3%B3nicas+de+Narnia",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Las+cr%C3%B3nicas+de+Narnia",
    filmmaker: { director_name: "C.S. Lewis", avatar: "" },
    keyword_labels: ["Fantasía", "Clásicos", "Literatura Infanto-Juvenil"]
  },

  // Cómics y Gráficos
  {
    movie_identifier: 2152,
    display_name: "Aquaman: Las fosas",
    release_year: 2011,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Arthur Curry se enfrenta a terroríficas criaturas abisales conocidas como las Fosas.",
      en: "Arthur Curry faces terrifying abyssal creatures known as the Trench."
    },
    runtime_minutes: "144 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Aquaman",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Aquaman",
    filmmaker: { director_name: "Geoff Johns (DC Comics)", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Superhéroes"]
  },
  {
    movie_identifier: 2153,
    display_name: "Harley Quinn: Calor en la ciudad",
    release_year: 2014,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Las aventuras locas e impredecibles de Harley Quinn en su nueva vida.",
      en: "The crazy and unpredictable adventures of Harley Quinn in her new life."
    },
    runtime_minutes: "224 páginas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=Harley+Quinn",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=Harley+Quinn",
    filmmaker: { director_name: "Amanda Conner (DC Comics)", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Superhéroes"]
  },
  {
    movie_identifier: 2154,
    display_name: "Catwoman: Si vas a Roma",
    release_year: 2004,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Selina Kyle viaja a Roma para descubrir los secretos de su pasado y la familia criminal Falcone.",
      en: "Selina Kyle travels to Rome to uncover secrets of her past."
    },
    runtime_minutes: "160 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=Catwoman",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=Catwoman",
    filmmaker: { director_name: "Jeph Loeb (DC Comics)", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Superhéroes"]
  },
  {
    movie_identifier: 2155,
    display_name: "Civil War (Marvel)",
    release_year: 2006,
    average_score: 9.5,
    category_type: "Libro",
    synopsis_text: {
      es: "El universo Marvel se divide en dos bandos liderados por Iron Man y Capitán América.",
      en: "The Marvel universe splits into two factions led by Iron Man and Captain America."
    },
    runtime_minutes: "208 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/c0392b/ffffff?text=Marvel:+Civil+War",
    cover_image_url: "https://placehold.co/600x900/c0392b/ffffff?text=Marvel:+Civil+War",
    filmmaker: { director_name: "Mark Millar (Marvel Comics)", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Superhéroes"]
  },
  {
    movie_identifier: 2156,
    display_name: "Winx Club Cómic: El misterio del castillo",
    release_year: 2004,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Las hadas del Winx Club regresan en formato cómic lleno de aventuras.",
      en: "The Winx Club fairies return in comic format full of adventures."
    },
    runtime_minutes: "64 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=Winx+Club+(C%C3%B3mic)",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=Winx+Club+(C%C3%B3mic)",
    filmmaker: { director_name: "Iginio Straffi", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Fantasía"]
  },
  {
    movie_identifier: 2157,
    display_name: "Mortadelo y Filemón: El sulfato atómico",
    release_year: 1969,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "La primera aventura larga de los agentes de la T.I.A. creada por Ibáñez.",
      en: "The first long adventure of the T.I.A. agents created by Ibáñez."
    },
    runtime_minutes: "48 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Mortadelo+y+Filem%C3%B3n",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Mortadelo+y+Filem%C3%B3n",
    filmmaker: { director_name: "Francisco Ibáñez", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Humor"]
  },
  {
    movie_identifier: 2158,
    display_name: "Los Simpson: Cómics",
    release_year: 1993,
    average_score: 8.4,
    category_type: "Libro",
    synopsis_text: {
      es: "Las locas aventuras de Homer, Bart y toda la familia amarilla en Springfield.",
      en: "The crazy adventures of Homer, Bart and the whole yellow family in Springfield."
    },
    runtime_minutes: "128 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/333333?text=Los+Simpson+(C%C3%B3mics)",
    cover_image_url: "https://placehold.co/600x900/f1c40f/333333?text=Los+Simpson+(C%C3%B3mics)",
    filmmaker: { director_name: "Matt Groening", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Humor"]
  }
];

let content = "\n// Añadir Cómics, Narnia y La Brújula Dorada\nBOOKS_DATA.push(...(" + JSON.stringify(COMICS_AND_FANTASY_BOOKS, null, 2) + "));\n";

fs.appendFileSync('js/datos.js', content);
console.log("Added Comics and Fantasy books correctly.");
