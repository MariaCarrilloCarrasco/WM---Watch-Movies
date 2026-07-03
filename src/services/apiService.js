import { RAW_EXTERNAL_MOVIES_API_DATA } from '../data/mockData';

export class MovieModel {
  constructor(raw) {
    this.id = raw.movie_identifier;
    this.title = raw.display_name;
    this.year = raw.release_year;
    this.rating = raw.average_score;
    this.genre = raw.category_type;
    this.synopsis = raw.synopsis_text;
    this.poster = raw.poster_image;
    this.backdrop = raw.backdrop_image || '';
    this.duration = raw.duration_minutes || 120;
    this.director = raw.director || null;
    this.cast = raw.cast || [];
    this.trailer = raw.youtube_trailer_id || '';
  }
}

export async function fetchMoviesAPI() {
  try {
    const response = await fetch('/movies.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.map(raw => new MovieModel(raw));
  } catch (error) {
    console.warn("Failed to fetch movies from API, falling back to local mock data:", error);
    // Fallback standard data
    return RAW_EXTERNAL_MOVIES_API_DATA.map(raw => new MovieModel(raw));
  }
}

export async function fetchPersonProfileAPI(personName) {
  const isEs = true; // Determined dynamically at use time
  const normalized = personName.toLowerCase().trim();
  
  // Cast and director details are parsed directly from movie database
  const movies = await fetchMoviesAPI();
  const directed = movies.filter(m => m.director && m.director.name.toLowerCase() === normalized);
  const acted = movies.filter(m => m.cast.some(a => a.name.toLowerCase() === normalized));
  
  if (directed.length === 0 && acted.length === 0) {
    throw new Error('Person not found');
  }
  
  return {
    name: personName,
    directed,
    acted,
    allMovies: [...new Set([...directed, ...acted])]
  };
}
