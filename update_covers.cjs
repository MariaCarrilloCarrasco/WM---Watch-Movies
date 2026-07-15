const fs = require('fs');

const orwellBook = [
  {
    movie_identifier: 2020,
    display_name: "1984",
    release_year: 1949,
    average_score: 9.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Una escalofriante distopía sobre la vigilancia extrema, el control mental y el Gran Hermano.",
      en: "A chilling dystopia about extreme surveillance, mind control, and Big Brother."
    },
    runtime_minutes: "328 páginas",
    content_rating: "12+",
    bg_image_url: "https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    cover_image_url: "https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    filmmaker: { director_name: "George Orwell", avatar: "" },
    keyword_labels: ["Social", "Ciencia Ficción", "Distopía"]
  }
];

// Append Orwell
let content = `
// Añadir Orwell
BOOKS_DATA.push(...(${JSON.stringify(orwellBook, null, 2)}));
`;
fs.appendFileSync('js/datos.js', content);

// We will also just use a known list of covers for the ones we added.
const bookCovers = {
  "Los Incomprendidos": "https://books.google.com/books/content?id=O8hSAwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "El Futuro Tecnológico": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
  "Diseño de Interfaces Modernas": "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
  "Un Verano en París": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80",
  "Versos al Viento": "https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&w=600&q=80",
  "Dune": "https://books.google.com/books/content?id=B1hSG45JCX4C&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Harry Potter y la Piedra Filosofal": "https://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Justicia ¿hacemos lo que debemos?": "https://books.google.com/books/content?id=z1fB_tC3v1kC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Summerhill": "https://books.google.com/books/content?id=1T1fAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Compartiendo palabras": "https://books.google.com/books/content?id=eJ_vAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Más fuerte que el odio": "https://books.google.com/books/content?id=8vY6AAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Sextualidades: Teorías Literarias Feministas": "https://books.google.com/books/content?id=jN7XAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "El buen amor en la pareja": "https://books.google.com/books/content?id=gP-XDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Hasta que te caigas bien": "https://books.google.com/books/content?id=2D_MEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Querida yo: tenemos que hablar": "https://books.google.com/books/content?id=M8yTEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Recupera tu mente, Reconquista tu vida": "https://books.google.com/books/content?id=1I_1EAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Cómo hacer que te pasen cosas buenas": "https://books.google.com/books/content?id=R21lDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "Encuentra tu persona vitamina": "https://books.google.com/books/content?id=XJkzEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
};

let dbContent = fs.readFileSync('js/datos.js', 'utf8');

for (const [title, coverUrl] of Object.entries(bookCovers)) {
  // Regex to find the specific book block and replace its cover_image_url
  // display_name: "Title", ... cover_image_url: "..."
  const regex = new RegExp('(display_name:\\s*"' + title + '"[\\s\\S]*?cover_image_url:\\s*")[^"]+(")', 'g');
  dbContent = dbContent.replace(regex, '$1' + coverUrl + '$2');
}

fs.writeFileSync('js/datos.js', dbContent);
console.log("Covers updated successfully.");
