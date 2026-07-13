const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

const targetRemoveFilter = `  if (filterType === 'genre' && selectGenre) {
    selectGenre.value = 'All';
    AppState.exploreFilters.genre = 'All';
  } else if (filterType === 'rating' && selectRating) {
    selectRating.value = 'All';
    AppState.exploreFilters.rating = 'All';
  } else if (filterType === 'trend' && selectTrend) {
    selectTrend.value = 'All';
    AppState.exploreFilters.trend = 'All';
  }`;

const replaceRemoveFilter = `  if (filterType === 'genre' && selectGenre) {
    selectGenre.value = 'All';
    AppState.exploreFilters.genre = 'All';
  } else if (filterType === 'rating' && selectRating) {
    selectRating.value = 'All';
    AppState.exploreFilters.rating = 'All';
  } else if (filterType === 'trend' && selectTrend) {
    selectTrend.value = 'All';
    AppState.exploreFilters.trend = 'All';
  } else if (filterType === 'year') {
    AppState.exploreFilters.year = 'All';
  } else if (filterType === 'streaming') {
    AppState.exploreFilters.streaming = 'All';
  } else if (filterType === 'director') {
    AppState.exploreFilters.director = 'All';
  } else if (filterType === 'awards') {
    AppState.exploreFilters.awards = false;
  }`;

appJs = appJs.replace(targetRemoveFilter, replaceRemoveFilter);

const targetClearFilters = `  if (selectGenre) selectGenre.value = 'All';
  if (selectRating) selectRating.value = 'All';
  if (selectTrend) selectTrend.value = 'All';

  AppState.exploreFilters = {
    genre: 'All',
    rating: 'All',
    trend: 'All'
  };`;

const replaceClearFilters = `  if (selectGenre) selectGenre.value = 'All';
  if (selectRating) selectRating.value = 'All';
  if (selectTrend) selectTrend.value = 'All';

  AppState.exploreFilters = {
    genre: 'All',
    rating: 'All',
    trend: 'All',
    year: 'All',
    streaming: 'All',
    director: 'All',
    awards: false
  };`;

appJs = appJs.replace(targetClearFilters, replaceClearFilters);
fs.writeFileSync(appJsPath, appJs);
console.log('removeFilter and clearAllFilters updated');
