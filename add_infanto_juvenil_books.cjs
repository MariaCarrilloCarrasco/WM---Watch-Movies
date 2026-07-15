const fs = require('fs');

let content = fs.readFileSync('js/datos.js', 'utf8');

// Replace old "Infantil" labels with "Literatura Infanto-Juvenil"
content = content.replace(/"Infantil"/g, '"Literatura Infanto-Juvenil"');

const NEW_INFANTO_JUVENIL_BOOKS = [
  {
    movie_identifier: 2120,
    display_name: "Mi planta de naranja lima",
    release_year: 1968,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "La conmovedora historia de Zezé, un niño que descubre el dolor y la ternura.",
      en: "The touching story of Zezé, a boy who discovers pain and tenderness."
    },
    runtime_minutes: "192 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Mi+planta+de+naranja+lima",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Mi+planta+de+naranja+lima",
    filmmaker: { director_name: "José Mauro de Vasconcelos", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Drama"]
  },
  {
    movie_identifier: 2121,
    display_name: "Pequeñas infamias",
    release_year: 1998,
    average_score: 8.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Un brillante retrato social y psicológico.",
      en: "A brilliant social and psychological portrait."
    },
    runtime_minutes: "336 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Peque%C3%B1as+infamias",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Peque%C3%B1as+infamias",
    filmmaker: { director_name: "Carmen Posadas", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil"]
  },
  {
    movie_identifier: 2122,
    display_name: "Hoyos",
    release_year: 1998,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "Un campamento de detención juvenil donde los niños cavan hoyos para construir el carácter.",
      en: "A juvenile detention camp where boys dig holes to build character."
    },
    runtime_minutes: "272 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Hoyos",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Hoyos",
    filmmaker: { director_name: "Louis Sachar", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Aventura"]
  },
  {
    movie_identifier: 2123,
    display_name: "La catedral",
    release_year: 2000,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Un misterio en la construcción de una catedral gótica en el siglo XIII.",
      en: "A mystery in the construction of a gothic cathedral in the 13th century."
    },
    runtime_minutes: "288 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=La+catedral",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=La+catedral",
    filmmaker: { director_name: "César Mallorquí", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Misterio"]
  },
  {
    movie_identifier: 2124,
    display_name: "El principito",
    release_year: 1943,
    average_score: 9.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Una narración corta sobre el amor, la amistad y el sentido de la vida.",
      en: "A short tale about love, friendship, and the meaning of life."
    },
    runtime_minutes: "96 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=El+principito",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=El+principito",
    filmmaker: { director_name: "Antoine de Saint-Exupéry", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Clásicos"]
  },
  {
    movie_identifier: 2125,
    display_name: "La música del viento",
    release_year: 1998,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "La historia de un periodista que investiga la explotación infantil en la India.",
      en: "The story of a journalist investigating child exploitation in India."
    },
    runtime_minutes: "224 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=La+m%C3%BAsica+del+viento",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=La+m%C3%BAsica+del+viento",
    filmmaker: { director_name: "Jordi Sierra i Fabra", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Social"]
  },
  {
    movie_identifier: 2126,
    display_name: "Pupila de águila",
    release_year: 1989,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Las aventuras y los conflictos de Martina para descubrir la verdad.",
      en: "Martina's adventures and conflicts to discover the truth."
    },
    runtime_minutes: "208 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Pupila+de+%C3%A1guila",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Pupila+de+%C3%A1guila",
    filmmaker: { director_name: "Alfredo Gómez Cerdá", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil"]
  },
  {
    movie_identifier: 2127,
    display_name: "Pesadillas: Sangre de monstruo",
    release_year: 1992,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "El inicio de la terrorífica y famosa saga juvenil Pesadillas.",
      en: "The beginning of the famous terrifying youth saga Goosebumps."
    },
    runtime_minutes: "144 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Pesadillas:+Sangre+de+monstruo",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Pesadillas:+Sangre+de+monstruo",
    filmmaker: { director_name: "R.L. Stine", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Terror"]
  },
  {
    movie_identifier: 2128,
    display_name: "Cuentos clásicos de los Hermanos Grimm",
    release_year: 1812,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Una recopilación de los cuentos clásicos más famosos de la historia.",
      en: "A compilation of the most famous classic tales in history."
    },
    runtime_minutes: "500 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Cuentos+cl%C3%A1sicos",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Cuentos+cl%C3%A1sicos",
    filmmaker: { director_name: "Hermanos Grimm", avatar: "" },
    keyword_labels: ["Literatura Infanto-Juvenil", "Fantasía", "Clásicos"]
  }
];

content += "\n// Añadir libros de Literatura Infanto-Juvenil\nBOOKS_DATA.push(...(" + JSON.stringify(NEW_INFANTO_JUVENIL_BOOKS, null, 2) + "));\n";

fs.writeFileSync('js/datos.js', content);
console.log("Renamed Infantil to Literatura Infanto-Juvenil and added books.");
