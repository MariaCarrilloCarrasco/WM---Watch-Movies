const fs = require('fs');

const MORE_PROGRAMS = [
  {
    movie_identifier: 5006,
    display_name: "La Resistencia",
    release_year: 2018,
    average_score: 8.4,
    category_type: "Programa",
    synopsis_text: {
      es: "Late night show desenfadado y caótico presentado por David Broncano.",
      en: "Casual and chaotic late night show hosted by David Broncano."
    },
    runtime_minutes: "7+ Temporadas",
    content_rating: "16+",
    bg_image_url: "https://placehold.co/1200x600/34495e/ffffff?text=La+Resistencia",
    cover_image_url: "https://placehold.co/600x900/34495e/ffffff?text=La+Resistencia",
    filmmaker: { director_name: "David Broncano", avatar: "" },
    keyword_labels: ["Entretenimiento", "Entrevistas"]
  },
  {
    movie_identifier: 5007,
    display_name: "Pasapalabra",
    release_year: 2000,
    average_score: 8.0,
    category_type: "Programa",
    synopsis_text: {
      es: "Concurso cultural donde los participantes deben acertar palabras del diccionario basadas en su letra inicial.",
      en: "Cultural game show where participants must guess dictionary words based on their initial letter."
    },
    runtime_minutes: "24+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/2980b9/ffffff?text=Pasapalabra",
    cover_image_url: "https://placehold.co/600x900/2980b9/ffffff?text=Pasapalabra",
    filmmaker: { director_name: "Roberto Leal / Christian Gálvez", avatar: "" },
    keyword_labels: ["Concurso", "Entretenimiento"]
  },
  {
    movie_identifier: 5008,
    display_name: "La ruleta de la suerte",
    release_year: 2006,
    average_score: 7.2,
    category_type: "Programa",
    synopsis_text: {
      es: "Concurso clásico en el que los participantes giran una gran ruleta y adivinan paneles de palabras.",
      en: "Classic game show where participants spin a large wheel and guess word puzzles."
    },
    runtime_minutes: "18+ Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=La+ruleta+de+la+suerte",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=La+ruleta+de+la+suerte",
    filmmaker: { director_name: "Jorge Fernández", avatar: "" },
    keyword_labels: ["Concurso", "Entretenimiento"]
  },
  {
    movie_identifier: 5009,
    display_name: "El club de la comedia",
    release_year: 1999,
    average_score: 8.6,
    category_type: "Programa",
    synopsis_text: {
      es: "Programa pionero en el formato de monólogos stand-up en España.",
      en: "Pioneer program in the stand-up comedy format in Spain."
    },
    runtime_minutes: "12 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/c0392b/ffffff?text=El+club+de+la+comedia",
    cover_image_url: "https://placehold.co/600x900/c0392b/ffffff?text=El+club+de+la+comedia",
    filmmaker: { director_name: "Varios presentadores", avatar: "" },
    keyword_labels: ["Entretenimiento"]
  },
  {
    movie_identifier: 5010,
    display_name: "Sé lo que hicisteis...",
    release_year: 2006,
    average_score: 8.8,
    category_type: "Programa",
    synopsis_text: {
      es: "Programa de humor y crítica a la prensa del corazón y a la actualidad televisiva.",
      en: "Humor program criticizing the gossip press and television current events."
    },
    runtime_minutes: "6 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=S%C3%A9+lo+que+hicisteis",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=S%C3%A9+lo+que+hicisteis",
    filmmaker: { director_name: "Patricia Conde, Ángel Martín", avatar: "" },
    keyword_labels: ["Entretenimiento"]
  }
];

const MORE_MOVIES = [
  {
    movie_identifier: 4008,
    display_name: "Alicia en el país de las maravillas (Animación)",
    release_year: 1951,
    average_score: 8.3,
    category_type: "Animación/Fantasía",
    synopsis_text: {
      es: "Alicia cae por una madriguera y se adentra en el estrambótico País de las Maravillas.",
      en: "Alice falls down a rabbit hole and enters the bizarre Wonderland."
    },
    runtime_minutes: "1h 15m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/2980b9/ffffff?text=Alicia+(Animaci%C3%B3n)",
    cover_image_url: "https://placehold.co/600x900/2980b9/ffffff?text=Alicia+(Animaci%C3%B3n)",
    filmmaker: { director_name: "Clyde Geronimi, Wilfred Jackson", avatar: "" },
    keyword_labels: ["Animación", "Fantasía", "Familiar", "Clásicos"]
  },
  {
    movie_identifier: 4009,
    display_name: "Alicia en el país de las maravillas",
    release_year: 2010,
    average_score: 7.5,
    category_type: "Fantasía/Aventura",
    synopsis_text: {
      es: "Una Alicia de 19 años regresa al mágico mundo de su infancia para enfrentarse a la Reina Roja.",
      en: "A 19-year-old Alice returns to the magical world from her childhood adventure."
    },
    runtime_minutes: "1h 48m",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=Alicia+(Live+Action)",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=Alicia+(Live+Action)",
    filmmaker: { director_name: "Tim Burton", avatar: "" },
    keyword_labels: ["Fantasía", "Aventura"]
  },
  {
    movie_identifier: 4010,
    display_name: "Las crónicas de Narnia: El león, la bruja y el armario",
    release_year: 2005,
    average_score: 7.9,
    category_type: "Fantasía/Aventura",
    synopsis_text: {
      es: "Cuatro niños descubren el mágico mundo de Narnia, gobernado por la malvada Bruja Blanca.",
      en: "Four kids travel through a wardrobe to the land of Narnia."
    },
    runtime_minutes: "2h 23m",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/34495e/ffffff?text=Cr%C3%B3nicas+de+Narnia",
    cover_image_url: "https://placehold.co/600x900/34495e/ffffff?text=Cr%C3%B3nicas+de+Narnia",
    filmmaker: { director_name: "Andrew Adamson", avatar: "" },
    keyword_labels: ["Fantasía", "Aventura", "Familiar"]
  }
];

let content = `
// Añadir más Programas de TV
PROGRAMS_DATA.push(...(${JSON.stringify(MORE_PROGRAMS, null, 2)}));

// Añadir Peliculas Fantasía (Alicia, Narnia)
RAW_EXTERNAL_MOVIES_API_DATA.push(...(${JSON.stringify(MORE_MOVIES, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added TV Programs and Movies correctly.");
