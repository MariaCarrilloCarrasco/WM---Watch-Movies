const fs = require('fs');

const NEW_TEEN_SERIES = [
  {
    movie_identifier: 3012,
    display_name: "Embrujadas",
    release_year: 1998,
    average_score: 8.1,
    category_type: "Serie",
    synopsis_text: {
      es: "Tres hermanas descubren que son brujas destinadas a proteger a los inocentes de las fuerzas del mal.",
      en: "Three sisters discover they are witches destined to protect innocents from evil forces."
    },
    runtime_minutes: "8 Temporadas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=Embrujadas",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=Embrujadas",
    filmmaker: { director_name: "Constance M. Burge", avatar: "" },
    keyword_labels: ["Fantasía", "Drama"]
  },
  {
    movie_identifier: 3013,
    display_name: "H2O: Just Add Water",
    release_year: 2006,
    average_score: 7.9,
    category_type: "Serie",
    synopsis_text: {
      es: "Tres adolescentes se convierten en sirenas con poderes mágicos después de visitar una isla misteriosa.",
      en: "Three teenagers become mermaids with magical powers after visiting a mysterious island."
    },
    runtime_minutes: "3 Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/3498db/ffffff?text=H2O",
    cover_image_url: "https://placehold.co/600x900/3498db/ffffff?text=H2O",
    filmmaker: { director_name: "Jonathan M. Shiff", avatar: "" },
    keyword_labels: ["Fantasía", "Comedia"]
  },
  {
    movie_identifier: 3014,
    display_name: "Zoey 101",
    release_year: 2005,
    average_score: 8.0,
    category_type: "Serie",
    synopsis_text: {
      es: "Las aventuras de Zoey Brooks y sus amigos en la Academia PCA, un antiguo internado solo para chicos.",
      en: "The adventures of Zoey Brooks and her friends at PCA Academy."
    },
    runtime_minutes: "4 Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=Zoey+101",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=Zoey+101",
    filmmaker: { director_name: "Dan Schneider", avatar: "" },
    keyword_labels: ["Comedia", "Drama"]
  },
  {
    movie_identifier: 3015,
    display_name: "Los Magos de Waverly Place",
    release_year: 2007,
    average_score: 8.2,
    category_type: "Serie",
    synopsis_text: {
      es: "Tres hermanos adolescentes compiten por heredar los poderes mágicos de su familia mientras intentan llevar una vida normal.",
      en: "Three teenage siblings compete to inherit their family's magical powers."
    },
    runtime_minutes: "4 Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Los+Magos+de+Waverly+Place",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Los+Magos+de+Waverly+Place",
    filmmaker: { director_name: "Todd J. Greenwald", avatar: "" },
    keyword_labels: ["Fantasía", "Comedia"]
  },
  {
    movie_identifier: 3016,
    display_name: "Zack y Cody: Hotel Dulce Hotel",
    release_year: 2005,
    average_score: 8.3,
    category_type: "Serie",
    synopsis_text: {
      es: "Las travesuras de los gemelos Zack y Cody Martin, quienes viven en el lujoso Hotel Tipton.",
      en: "The antics of twin brothers Zack and Cody Martin, who live in the luxurious Tipton Hotel."
    },
    runtime_minutes: "3 Temporadas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f1c40f/333333?text=Zack+y+Cody",
    cover_image_url: "https://placehold.co/600x900/f1c40f/333333?text=Zack+y+Cody",
    filmmaker: { director_name: "Danny Kallis, Jim Geoghan", avatar: "" },
    keyword_labels: ["Comedia"]
  }
];

const NEW_MOVIES = [
  {
    movie_identifier: 4001,
    display_name: "Hotel Transilvania",
    release_year: 2012,
    average_score: 8.5,
    category_type: "Animación/Comedia",
    synopsis_text: {
      es: "Drácula regenta un resort de cinco estrellas para monstruos, pero su mundo se pone patas arriba cuando un humano normal descubre el hotel.",
      en: "Dracula operates a high-end resort for monsters, but his world gets turned upside down when a boy discovers the resort."
    },
    runtime_minutes: "1h 31m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=Hotel+Transilvania",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=Hotel+Transilvania",
    filmmaker: { director_name: "Genndy Tartakovsky", avatar: "" },
    keyword_labels: ["Animación", "Comedia", "Familiar"]
  },
  {
    movie_identifier: 4002,
    display_name: "Tú a Londres y yo a California",
    release_year: 1998,
    average_score: 8.7,
    category_type: "Comedia/Familiar",
    synopsis_text: {
      es: "Dos gemelas idénticas separadas al nacer se reencuentran en un campamento de verano e idean un plan para volver a juntar a sus padres.",
      en: "Identical twins separated at birth reunite at summer camp and hatch a plan to bring their parents back together."
    },
    runtime_minutes: "2h 8m",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e67e22/ffffff?text=T%C3%BA+a+Londres+y+yo+a+California",
    cover_image_url: "https://placehold.co/600x900/e67e22/ffffff?text=T%C3%BA+a+Londres+y+yo+a+California",
    filmmaker: { director_name: "Nancy Meyers", avatar: "" },
    keyword_labels: ["Comedia", "Familiar"]
  },
  {
    movie_identifier: 4003,
    display_name: "Cruella",
    release_year: 2021,
    average_score: 8.4,
    category_type: "Comedia/Crimen",
    synopsis_text: {
      es: "La historia de los orígenes rebeldes de uno de los villanos más conocidos de la moda, la legendaria Cruella de Vil.",
      en: "The rebellious early days of one of cinema's most notorious and notoriously fashionable villains, the legendary Cruella de Vil."
    },
    runtime_minutes: "2h 14m",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/000000/ffffff?text=Cruella",
    cover_image_url: "https://placehold.co/600x900/000000/ffffff?text=Cruella",
    filmmaker: { director_name: "Craig Gillespie", avatar: "" },
    keyword_labels: ["Comedia", "Crimen", "Moda"]
  },
  {
    movie_identifier: 4004,
    display_name: "Crepúsculo",
    release_year: 2008,
    average_score: 7.8,
    category_type: "Romance/Fantasía",
    synopsis_text: {
      es: "Una adolescente arriesga todo al enamorarse de un vampiro en este romance sobrenatural.",
      en: "A teenage girl risks everything when she falls in love with a vampire in this supernatural romance."
    },
    runtime_minutes: "2h 2m",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/2c3e50/ffffff?text=Crep%C3%BAsculo",
    cover_image_url: "https://placehold.co/600x900/2c3e50/ffffff?text=Crep%C3%BAsculo",
    filmmaker: { director_name: "Catherine Hardwicke", avatar: "" },
    keyword_labels: ["Fantasía", "Romance", "Drama"]
  }
];

let content = `
// Añadir Series Teen/Disney
SERIES_DATA.push(...(${JSON.stringify(NEW_TEEN_SERIES, null, 2)}));

// Añadir Peliculas Disney/Familiar
RAW_EXTERNAL_MOVIES_API_DATA.push(...(${JSON.stringify(NEW_MOVIES, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added teen series and family movies correctly.");
