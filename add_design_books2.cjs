const fs = require('fs');

const DESIGN_BOOKS = [
  {
    movie_identifier: 2033,
    display_name: "Universal Principles of Design",
    release_year: 2003,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Ciento veinticinco formas de mejorar la usabilidad, influencia, percepción y más en el diseño.",
      en: "125 ways to enhance usability, influence, perception, appeal, make better design decisions, and teach through design."
    },
    runtime_minutes: "272 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=H8pPpwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=H8pPpwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "William Lidwell, Kritina Holden, Jill Butler", avatar: "" },
    keyword_labels: ["Diseño"]
  },
  {
    movie_identifier: 2034,
    display_name: "Design for the Real World",
    release_year: 1971,
    average_score: 9.6,
    category_type: "Libro",
    synopsis_text: {
      es: "Ecología humana y cambio social. Un clásico sobre la responsabilidad moral del diseñador.",
      en: "Human Ecology and Social Change."
    },
    runtime_minutes: "416 páginas",
    content_rating: "All",
    bg_image_url: "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=9H1GDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "Victor Papanek", avatar: "" },
    keyword_labels: ["Diseño", "Social"]
  }
];

let content = `
// Añadir libros de diseño Papanek y Lidwell
BOOKS_DATA.push(...(${JSON.stringify(DESIGN_BOOKS, null, 2)}));
`;

fs.appendFileSync('js/datos.js', content);
console.log("Added new design books correctly.");
