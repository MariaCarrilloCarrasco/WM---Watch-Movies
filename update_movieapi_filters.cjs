const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

// 1. Modificar la firma de getMovies
const targetFirma = `  async getMovies({ genre = 'All', search = '', page = 1, limit = null, rating = 'All', trend = 'All', reliableMode = false } = {}) {`;
const replaceFirma = `  async getMovies({ genre = 'All', search = '', page = 1, limit = null, rating = 'All', trend = 'All', year = 'All', awards = false, streaming = 'All', director = 'All', reliableMode = false } = {}) {`;
appJs = appJs.replace(targetFirma, replaceFirma);

// 2. Insertar la lógica de filtrado extra justo después del filtro de género
const targetFilter = `        // Filtrado por género
        if (genre !== 'All') {
          apiResponse = apiResponse.filter(movie => movie.category_type && movie.category_type.includes(genre));
        }`;

const replaceFilter = `        // Filtrado por género
        if (genre !== 'All') {
          apiResponse = apiResponse.filter(movie => movie.category_type && movie.category_type.includes(genre));
        }

        if (year !== 'All') {
          apiResponse = apiResponse.filter(movie => movie.release_year == year);
        }

        if (awards === true) {
          apiResponse = apiResponse.filter(movie => movie.rating_score >= 8.5 || (movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes('award') || t.toLowerCase().includes('oscar'))));
        }

        if (streaming !== 'All') {
          const plat = streaming.toLowerCase();
          apiResponse = apiResponse.filter(movie => movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes(plat)));
        }

        if (director !== 'All') {
          const dir = director.toLowerCase();
          apiResponse = apiResponse.filter(movie => {
            const hasDirTag = movie.keyword_labels && movie.keyword_labels.some(t => t.toLowerCase().includes(dir));
            const hasCastMatch = movie.actors_list && movie.actors_list.some(a => a.actor_fullname && a.actor_fullname.toLowerCase().includes(dir));
            return hasDirTag || hasCastMatch;
          });
        }`;

appJs = appJs.replace(targetFilter, replaceFilter);
fs.writeFileSync(appJsPath, appJs);
console.log('Filtros MovieAPI actualizados');
