const fs = require('fs');

const LAURA_GALLEGO_BOOKS = [
  {
    movie_identifier: 2130,
    display_name: "Memorias de Idhún I: La Resistencia",
    release_year: 2004,
    average_score: 9.5,
    category_type: "Libro",
    synopsis_text: {
      es: "Jack y Victoria descubren un mundo mágico llamado Idhún y luchan contra el tirano Ashran el Nigromante.",
      en: "Jack and Victoria discover a magical world called Idhun and fight the tyrant Ashran."
    },
    runtime_minutes: "560 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+I:+La+Resistencia",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+I:+La+Resistencia",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Aventura"]
  },
  {
    movie_identifier: 2131,
    display_name: "Memorias de Idhún II: Tríada",
    release_year: 2005,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "La continuación de la historia de los dioses de Idhún y el destino de sus elegidos.",
      en: "The continuation of the story of the gods of Idhun and the fate of their chosen ones."
    },
    runtime_minutes: "768 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+II:+Tr%C3%ADada",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+II:+Tr%C3%ADada",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Aventura"]
  },
  {
    movie_identifier: 2132,
    display_name: "Memorias de Idhún III: Panteón",
    release_year: 2006,
    average_score: 9.2,
    category_type: "Libro",
    synopsis_text: {
      es: "El épico desenlace de la trilogía que revolucionó la literatura fantástica española.",
      en: "The epic conclusion of the trilogy that revolutionized Spanish fantasy literature."
    },
    runtime_minutes: "944 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+III:+Pante%C3%B3n",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Memorias+de+Idh%C3%BAn+III:+Pante%C3%B3n",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Aventura"]
  },
  {
    movie_identifier: 2133,
    display_name: "El Valle de los Lobos",
    release_year: 2000,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Primer libro de Crónicas de la Torre. Dana es invitada a una escuela de alta hechicería.",
      en: "Dana is invited to a school of high sorcery."
    },
    runtime_minutes: "272 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=El+Valle+de+los+Lobos",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=El+Valle+de+los+Lobos",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Magia"]
  },
  {
    movie_identifier: 2134,
    display_name: "La maldición del Maestro",
    release_year: 2001,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Segundo libro de Crónicas de la Torre.",
      en: "Second book of The Chronicles of the Tower."
    },
    runtime_minutes: "272 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=La+maldici%C3%B3n+del+Maestro",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=La+maldici%C3%B3n+del+Maestro",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Magia"]
  },
  {
    movie_identifier: 2135,
    display_name: "La llamada de los muertos",
    release_year: 2003,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Tercer libro de Crónicas de la Torre.",
      en: "Third book of The Chronicles of the Tower."
    },
    runtime_minutes: "256 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=La+llamada+de+los+muertos",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=La+llamada+de+los+muertos",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Magia"]
  },
  {
    movie_identifier: 2136,
    display_name: "Alas de fuego",
    release_year: 2004,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Ahriel es un ángel que ha sido traicionado y encerrado en Gorlian.",
      en: "Ahriel is an angel who has been betrayed and locked up in Gorlian."
    },
    runtime_minutes: "240 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Alas+de+fuego",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Alas+de+fuego",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil"]
  },
  {
    movie_identifier: 2137,
    display_name: "Alas negras",
    release_year: 2009,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "La continuación de la historia del ángel Ahriel.",
      en: "The continuation of the story of the angel Ahriel."
    },
    runtime_minutes: "384 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Alas+negras",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Alas+negras",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil"]
  },
  {
    movie_identifier: 2138,
    display_name: "Donde los árboles cantan",
    release_year: 2011,
    average_score: 9.4,
    category_type: "Libro",
    synopsis_text: {
      es: "La joven Viana debe adentrarse en el Gran Bosque después de que su reino sea invadido.",
      en: "Viana must enter the Great Forest after her kingdom is invaded."
    },
    runtime_minutes: "480 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Donde+los+%C3%A1rboles+cantan",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Donde+los+%C3%A1rboles+cantan",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Aventura"]
  },
  {
    movie_identifier: 2139,
    display_name: "Dos velas para el diablo",
    release_year: 2008,
    average_score: 8.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Ángeles y demonios libran una guerra oculta entre los humanos.",
      en: "Angels and demons wage a hidden war among humans."
    },
    runtime_minutes: "416 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=Dos+velas+para+el+diablo",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=Dos+velas+para+el+diablo",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Misterio"]
  },
  {
    movie_identifier: 2140,
    display_name: "El bestiario de Axlin",
    release_year: 2018,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Axlin viaja por un mundo lleno de monstruos para documentarlos y salvar a la humanidad.",
      en: "Axlin travels through a world full of monsters to document them."
    },
    runtime_minutes: "512 páginas",
    content_rating: "12+",
    bg_image_url: "https://placehold.co/1200x600/9b59b6/ffffff?text=El+bestiario+de+Axlin",
    cover_image_url: "https://placehold.co/600x900/9b59b6/ffffff?text=El+bestiario+de+Axlin",
    filmmaker: { director_name: "Laura Gallego García", avatar: "" },
    keyword_labels: ["Fantasía", "Literatura Infanto-Juvenil", "Aventura"]
  }
];

let content = "\n// Añadir libros de Laura Gallego\nBOOKS_DATA.push(...(" + JSON.stringify(LAURA_GALLEGO_BOOKS, null, 2) + "));\n";

fs.appendFileSync('js/datos.js', content);
console.log("Added Laura Gallego books correctly.");
