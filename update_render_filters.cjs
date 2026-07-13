const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

// 1. Fix typo in the click listener
appJs = appJs.replace('renderActiveFiltersList();', 'renderActiveFilters();');

// 2. Extend renderActiveFilters to include the new filters
const targetRenderFilters = `  if (AppState.exploreFilters.trend !== 'All') {
    const trendLabel = AppState.exploreFilters.trend === 'recent' 
      ? (isEs ? 'Recientes' : 'Recent') 
      : (isEs ? 'Tendencia' : 'Trending');
    activeFilters.push({
      type: 'trend',
      label: \`\${isEs ? 'Tendencia' : 'Trend'}: \${trendLabel}\`,
      value: AppState.exploreFilters.trend
    });
  }`;

const replaceRenderFilters = `  if (AppState.exploreFilters.trend !== 'All') {
    const trendLabel = AppState.exploreFilters.trend === 'recent' 
      ? (isEs ? 'Recientes' : 'Recent') 
      : (isEs ? 'Tendencia' : 'Trending');
    activeFilters.push({
      type: 'trend',
      label: \`\${isEs ? 'Tendencia' : 'Trend'}: \${trendLabel}\`,
      value: AppState.exploreFilters.trend
    });
  }
  
  if (AppState.exploreFilters.year && AppState.exploreFilters.year !== 'All') {
    activeFilters.push({
      type: 'year',
      label: \`\${isEs ? 'Año' : 'Year'}: \${AppState.exploreFilters.year}\`,
      value: AppState.exploreFilters.year
    });
  }

  if (AppState.exploreFilters.streaming && AppState.exploreFilters.streaming !== 'All') {
    activeFilters.push({
      type: 'streaming',
      label: \`Streaming: \${AppState.exploreFilters.streaming}\`,
      value: AppState.exploreFilters.streaming
    });
  }

  if (AppState.exploreFilters.director && AppState.exploreFilters.director !== 'All') {
    activeFilters.push({
      type: 'director',
      label: \`Director: \${AppState.exploreFilters.director}\`,
      value: AppState.exploreFilters.director
    });
  }

  if (AppState.exploreFilters.awards === true) {
    activeFilters.push({
      type: 'awards',
      label: isEs ? 'Premios Destacados' : 'Award Winning',
      value: true
    });
  }`;

appJs = appJs.replace(targetRenderFilters, replaceRenderFilters);
fs.writeFileSync(appJsPath, appJs);
console.log('Active filters updated');
