const fs = require('fs');

const DISNEY_ANIMATED_MOVIES = [
  {
    movie_identifier: 4011,
    display_name: "Los Increíbles",
    release_year: 2004,
    average_score: 8.8,
    category_type: "Animación/Acción",
    synopsis_text: {
      es: "Una familia de superhéroes encubiertos se ve obligada a entrar en acción para salvar al mundo.",
      en: "A family of undercover superheroes are forced into action to save the world."
    },
    runtime_minutes: "1h 55m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=Los+Incre%C3%ADbles",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=Los+Incre%C3%ADbles",
    filmmaker: { director_name: "Brad Bird", avatar: "" },
    keyword_labels: ["Animación", "Superhéroes", "Familiar"]
  },
  {
    movie_identifier: 4012,
    display_name: "Zootrópolis (Zootopia)",
    release_year: 2016,
    average_score: 8.7,
    category_type: "Animación/Comedia",
    synopsis_text: {
      es: "En una ciudad de animales antropomórficos, una conejita policía novata y un zorro estafador deben trabajar juntos para descubrir una conspiración.",
      en: "In a city of anthropomorphic animals, a rookie bunny cop and a cynical con artist fox must work together to uncover a conspiracy."
    },
    runtime_minutes: "1h 48m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=Zootopia",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=Zootopia",
    filmmaker: { director_name: "Byron Howard, Rich Moore", avatar: "" },
    keyword_labels: ["Animación", "Aventura", "Familiar"]
  },
  {
    movie_identifier: 4013,
    display_name: "Elemental",
    release_year: 2023,
    average_score: 8.2,
    category_type: "Animación/Romance",
    synopsis_text: {
      es: "En una ciudad donde conviven los habitantes del fuego, el agua, la tierra y el aire, una joven de fuego y un chico de agua descubren todo lo que tienen en común.",
      en: "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental."
    },
    runtime_minutes: "1h 41m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=Elemental",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=Elemental",
    filmmaker: { director_name: "Peter Sohn", avatar: "" },
    keyword_labels: ["Animación", "Familiar", "Romántica"]
  },
  {
    movie_identifier: 4014,
    display_name: "Ice Age: La edad de hielo",
    release_year: 2002,
    average_score: 8.1,
    category_type: "Animación/Comedia",
    synopsis_text: {
      es: "Un mamut, un perezoso y un dientes de sable deben devolver a un bebé humano a su tribu durante la glaciación.",
      en: "A mammoth, a sloth, and a saber-tooth tiger must return a human baby to his tribe during the Ice Age."
    },
    runtime_minutes: "1h 21m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/2980b9/ffffff?text=Ice+Age",
    cover_image_url: "https://placehold.co/600x900/2980b9/ffffff?text=Ice+Age",
    filmmaker: { director_name: "Chris Wedge", avatar: "" },
    keyword_labels: ["Animación", "Aventura", "Familiar"]
  },
  {
    movie_identifier: 4015,
    display_name: "Vaiana (Moana)",
    release_year: 2016,
    average_score: 8.6,
    category_type: "Animación/Musical",
    synopsis_text: {
      es: "Una joven valiente se embarca en una misión épica a través del océano para salvar a su pueblo con la ayuda del semidiós Maui.",
      en: "In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call."
    },
    runtime_minutes: "1h 47m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/1abc9c/ffffff?text=Vaiana",
    cover_image_url: "https://placehold.co/600x900/1abc9c/ffffff?text=Vaiana",
    filmmaker: { director_name: "Ron Clements, John Musker", avatar: "" },
    keyword_labels: ["Animación", "Aventura", "Musical"]
  }
];

let content = `
// Añadir Peliculas Disney/Animación
RAW_EXTERNAL_MOVIES_API_DATA.push(...(${JSON.stringify(DISNEY_ANIMATED_MOVIES, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added Disney animated movies correctly.");
