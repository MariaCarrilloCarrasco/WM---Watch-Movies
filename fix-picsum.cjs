const fs = require('fs');

const appJsPath = 'app.js';
let appJsContent = fs.readFileSync(appJsPath, 'utf8');

const movieRegex = /movie_identifier:\s*(\d+),[\s\S]*?display_name:\s*"([^"]+)",[\s\S]*?bg_image_url:\s*"([^"]+)",\s*cover_image_url:\s*"([^"]+)"/g;

let match;
while ((match = movieRegex.exec(appJsContent)) !== null) {
  const id = match[1];
  const name = match[2];
  const bg = match[3];
  const cover = match[4];
  
  if (bg.includes('unsplash.com') || cover.includes('unsplash.com')) {
    const newBg = `https://picsum.photos/seed/${id}bg/1200/800`;
    const newCover = `https://picsum.photos/seed/${id}cov/600/900`;
    
    const regexStr = `movie_identifier:\\s*${id},([\\s\\S]*?)bg_image_url:\\s*"[^"]+",\\s*cover_image_url:\\s*"[^"]+"`;
    const specificRegex = new RegExp(regexStr);
    
    appJsContent = appJsContent.replace(specificRegex, `movie_identifier: ${id},$1bg_image_url: "${newBg}",\n    cover_image_url: "${newCover}"`);
  }
}

fs.writeFileSync(appJsPath, appJsContent);
console.log("Completado Picsum");
