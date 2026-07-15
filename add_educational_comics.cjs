const fs = require('fs');

const EDUCATIONAL_COMICS = [
  {
    movie_identifier: 2160,
    display_name: "Nuestro planeta Tierra",
    release_year: 2015,
    average_score: 8.8,
    category_type: "Libro",
    synopsis_text: {
      es: "Un viaje visual e ilustrado para descubrir los secretos de nuestro planeta.",
      en: "A visual and illustrated journey to discover the secrets of our planet."
    },
    runtime_minutes: "120 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/27ae60/ffffff?text=Nuestro+planeta+Tierra",
    cover_image_url: "https://placehold.co/600x900/27ae60/ffffff?text=Nuestro+planeta+Tierra",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  },
  {
    movie_identifier: 2161,
    display_name: "El cuerpo humano",
    release_year: 2016,
    average_score: 9.0,
    category_type: "Libro",
    synopsis_text: {
      es: "Aprende de forma gráfica y divertida cómo funciona la increíble máquina que es tu cuerpo.",
      en: "Learn in a graphic and fun way how the incredible machine that is your body works."
    },
    runtime_minutes: "96 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/e74c3c/ffffff?text=El+cuerpo+humano",
    cover_image_url: "https://placehold.co/600x900/e74c3c/ffffff?text=El+cuerpo+humano",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  },
  {
    movie_identifier: 2162,
    display_name: "El espacio",
    release_year: 2017,
    average_score: 9.1,
    category_type: "Libro",
    synopsis_text: {
      es: "Una exploración ilustrada de los planetas, estrellas y galaxias de nuestro universo.",
      en: "An illustrated exploration of the planets, stars, and galaxies of our universe."
    },
    runtime_minutes: "104 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/8e44ad/ffffff?text=El+espacio",
    cover_image_url: "https://placehold.co/600x900/8e44ad/ffffff?text=El+espacio",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  },
  {
    movie_identifier: 2163,
    display_name: "Animales y naturaleza",
    release_year: 2018,
    average_score: 8.9,
    category_type: "Libro",
    synopsis_text: {
      es: "Gráficos y dibujos detallados sobre la flora y fauna de todo el mundo.",
      en: "Detailed graphics and drawings of flora and fauna from around the world."
    },
    runtime_minutes: "112 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/16a085/ffffff?text=Animales+y+naturaleza",
    cover_image_url: "https://placehold.co/600x900/16a085/ffffff?text=Animales+y+naturaleza",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  },
  {
    movie_identifier: 2164,
    display_name: "Cómo funcionan las cosas",
    release_year: 2019,
    average_score: 9.3,
    category_type: "Libro",
    synopsis_text: {
      es: "Descubre el mecanismo interno de las máquinas y objetos que nos rodean mediante ilustraciones.",
      en: "Discover the internal mechanics of machines and objects around us through illustrations."
    },
    runtime_minutes: "128 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/f39c12/ffffff?text=C%C3%B3mo+funcionan+las+cosas",
    cover_image_url: "https://placehold.co/600x900/f39c12/ffffff?text=C%C3%B3mo+funcionan+las+cosas",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  },
  {
    movie_identifier: 2165,
    display_name: "Cómo somos las personas",
    release_year: 2020,
    average_score: 8.7,
    category_type: "Libro",
    synopsis_text: {
      es: "Un libro muy gráfico sobre la diversidad humana, culturas y sociedad.",
      en: "A very graphic book about human diversity, cultures, and society."
    },
    runtime_minutes: "96 páginas",
    content_rating: "All",
    bg_image_url: "https://placehold.co/1200x600/d35400/ffffff?text=C%C3%B3mo+somos+las+personas",
    cover_image_url: "https://placehold.co/600x900/d35400/ffffff?text=C%C3%B3mo+somos+las+personas",
    filmmaker: { director_name: "Edelvives", avatar: "" },
    keyword_labels: ["Cómics y Gráficos", "Educación"]
  }
];

let content = "\n// Añadir enciclopedias visuales a Cómics y Gráficos\nBOOKS_DATA.push(...(" + JSON.stringify(EDUCATIONAL_COMICS, null, 2) + "));\n";

fs.appendFileSync('js/datos.js', content);
console.log("Added Educational Comics correctly.");
