const fs = require('fs');
const https = require('https');

const appJsPath = 'app.js';
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const movieRegex = /movie_identifier:\s*(\d+),[\s\S]*?display_name:\s*"([^"]+)",[\s\S]*?bg_image_url:\s*"([^"]+)",\s*cover_image_url:\s*"([^"]+)"/g;

let match;
const movies = [];

while ((match = movieRegex.exec(appJsContent)) !== null) {
  const id = match[1];
  const name = match[2];
  const bg = match[3];
  const cover = match[4];
  
  if (bg.includes('unsplash.com') || cover.includes('unsplash.com')) {
    movies.push({ id, name, bg, cover });
  }
}

console.log(`Encontradas ${movies.length} películas con imágenes genéricas.`);

const fetchJson = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'MovieAppFixer/1.0 (test@example.com)' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
};

async function searchWikipediaImage(movieName, lang = 'es') {
  const cleanName = movieName.split('(')[0].trim();
  const suffix = lang === 'es' ? ' pelicula' : ' film';
  const query = encodeURIComponent(cleanName + suffix);
  const searchUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&list=search&srsearch=${query}&utf8=&format=json`;
  
  const searchResult = await fetchJson(searchUrl);
  if (searchResult && searchResult.query && searchResult.query.search && searchResult.query.search.length > 0) {
    const title = encodeURIComponent(searchResult.query.search[0].title);
    const imageUrl = `https://${lang}.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=600`;
    const imageResult = await fetchJson(imageUrl);
    if (imageResult && imageResult.query && imageResult.query.pages) {
      const pageId = Object.keys(imageResult.query.pages)[0];
      if (imageResult.query.pages[pageId].thumbnail) {
        return imageResult.query.pages[pageId].thumbnail.source;
      }
    }
  }
  return null;
}

async function processMovies() {
  for (const movie of movies) {
    console.log(`Buscando imagen para: ${movie.name}`);
    let img = await searchWikipediaImage(movie.name, 'es');
    if (!img) {
      img = await searchWikipediaImage(movie.name, 'en');
    }
    
    if (img) {
      console.log(`  Encontrada: ${img}`);
      const regexStr = `movie_identifier:\\s*${movie.id},[\\s\\S]*?bg_image_url:\\s*"([^"]+)",\\s*cover_image_url:\\s*"([^"]+)"`;
      const specificRegex = new RegExp(regexStr);
      
      appJsContent = appJsContent.replace(specificRegex, (match, p1, p2) => {
        return match.replace(p1, img).replace(p2, img);
      });
    } else {
      console.log(`  No encontrada para: ${movie.name}`);
    }
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync(appJsPath, appJsContent);
  console.log("Completado y guardado en app.js");
}

processMovies();
