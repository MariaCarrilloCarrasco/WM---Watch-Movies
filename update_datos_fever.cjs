const fs = require('fs');

const EXTERNAL_PLANS_DATA = [
  {
    movie_identifier: 5001,
    display_name: "Sorolla a través de la luz",
    release_year: 2026,
    average_score: 9.6,
    category_type: "Exposición",
    synopsis_text: {
      es: "Una exposición inmersiva sin precedentes en el Palacio Real de Madrid. Descubre las obras maestras del pintor valenciano en una experiencia sensorial con realidad virtual y salas digitales.",
      en: "An unprecedented immersive exhibition at the Royal Palace of Madrid. Discover the masterpieces of the Valencian painter in a sensory experience."
    },
    runtime_minutes: "1h 30m",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1572949645841-094f3a9c4c94?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Fever", "Arte", "Inmersivo"],
    event_details: {
      fecha: "Hasta el 30 Nov 2026",
      hora: "10:00 - 20:00",
      lugar: "Palacio Real, Madrid",
      precio: "Desde 14€",
      web_compra: "https://feverup.com/m/sorolla-madrid",
      plataforma: "Fever"
    }
  },
  {
    movie_identifier: 5002,
    display_name: "Dining in the Dark",
    release_year: 2026,
    average_score: 8.9,
    category_type: "Gastronomía",
    synopsis_text: {
      es: "¿Alguna vez te has preguntado cómo es comer a oscuras? Agudiza tus sentidos en este misterioso y exclusivo evento gastronómico.",
      en: "Have you ever wondered what it's like to eat in the dark? Sharpen your senses at this mysterious dining event."
    },
    runtime_minutes: "2h",
    content_rating: "18+",
    bg_image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Fever", "Gastronomía", "Cena"],
    event_details: {
      fecha: "Jueves a Domingos",
      hora: "21:00",
      lugar: "Restaurante Secreto, Madrid Centro",
      precio: "49€",
      web_compra: "https://feverup.com/m/dining-in-the-dark-madrid",
      plataforma: "Fever"
    }
  },
  {
    movie_identifier: 5003,
    display_name: "Madrid Tech Builders Meetup",
    release_year: 2026,
    average_score: 9.2,
    category_type: "Tech Meetup",
    synopsis_text: {
      es: "Reunión exclusiva para desarrolladores, founders y diseñadores de producto. Charlas, networking y pizza. Organizado por la comunidad tech de Madrid.",
      en: "Exclusive meeting for developers, founders and product designers. Talks, networking and pizza."
    },
    runtime_minutes: "3h",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Luma", "Tech", "Networking", "TICs"],
    event_details: {
      fecha: "12 Oct 2026",
      hora: "18:30",
      lugar: "Google for Startups Campus, Madrid",
      precio: "Gratis",
      web_compra: "https://lu.ma/madrid-tech-builders",
      plataforma: "Luma"
    }
  },
  {
    movie_identifier: 5004,
    display_name: "Web3 & AI Design Workshop",
    release_year: 2026,
    average_score: 9.8,
    category_type: "Workshop",
    synopsis_text: {
      es: "Taller práctico sobre la integración de Inteligencia Artificial en el diseño de interfaces Web3.",
      en: "Practical workshop on the integration of AI in Web3 interface design."
    },
    runtime_minutes: "4h",
    content_rating: "All",
    bg_image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Luma", "Diseño Web", "AI"],
    event_details: {
      fecha: "25 Nov 2026",
      hora: "10:00",
      lugar: "La Nave, Madrid",
      precio: "15€",
      web_compra: "https://lu.ma/web3-ai-design",
      plataforma: "Luma"
    }
  },
  {
    movie_identifier: 5005,
    display_name: "Ruta de Vinos y Quesos por Malasaña",
    release_year: 2026,
    average_score: 9.5,
    category_type: "Tardeo",
    synopsis_text: {
      es: "Descubre los mejores locales de Malasaña en esta ruta exclusiva. Incluye degustación de 4 vinos y 4 quesos artesanales.",
      en: "Discover the best spots in Malasaña on this exclusive route."
    },
    runtime_minutes: "2.5h",
    content_rating: "18+",
    bg_image_url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Nomdtable", "Tardeo", "Gastronomía"],
    event_details: {
      fecha: "Todos los Sábados",
      hora: "13:00",
      lugar: "Punto de encuentro: Plaza del Dos de Mayo",
      precio: "35€",
      web_compra: "https://nomdtable.com/ruta-vinos-malasana",
      plataforma: "Nomdtable"
    }
  },
  {
    movie_identifier: 5006,
    display_name: "Cena Secreta: The Great Gatsby",
    release_year: 2026,
    average_score: 9.1,
    category_type: "Cena",
    synopsis_text: {
      es: "Viaja a los años 20 en una cena inmersiva con actores, música en vivo y coctelería clandestina.",
      en: "Travel back to the 1920s in an immersive dinner with actors, live music and clandestine cocktails."
    },
    runtime_minutes: "3h",
    content_rating: "18+",
    bg_image_url: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=1200&q=80",
    cover_image_url: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&w=600&q=80",
    keyword_labels: ["Nomdtable", "Cena", "Inmersivo"],
    event_details: {
      fecha: "18 Dic 2026",
      hora: "21:30",
      lugar: "Ubicación revelada 24h antes",
      precio: "65€",
      web_compra: "https://nomdtable.com/gatsby-dinner",
      plataforma: "Nomdtable"
    }
  }
];

const appendContent = `

// Nuevos planes de Fever, Luma y Nomdtable
const EXTERNAL_PLANS_DATA = ${JSON.stringify(EXTERNAL_PLANS_DATA, null, 2)};

`;

fs.appendFileSync('js/datos.js', appendContent);
console.log("Updated js/datos.js with EXTERNAL_PLANS_DATA.");
