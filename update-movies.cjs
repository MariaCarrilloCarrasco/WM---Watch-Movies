const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

content = content.replace(
  /display_name: "THE MIDNIGHT ECHO"/g,
  'display_name: "Interstellar"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1614728894747-a83421e2b9c9\?auto=format&fit=crop&w=600&q=80"/g,
  '"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"'
);

content = content.replace(
  /display_name: "PROJECT ORION"/g,
  'display_name: "Inception"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1614730321146-b6fa6a46bcb4\?auto=format&fit=crop&w=600&q=80"/g,
  '"https://m.media-amazon.com/images/I/81mUTY45VyL._SL1500_.jpg"'
);

content = content.replace(
  /display_name: "NEON NIGHTS"/g,
  'display_name: "The Matrix"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1509198397868-475647b2a1e5\?auto=format&fit=crop&w=600&q=80"/g,
  '"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"'
);

content = content.replace(
  /display_name: "DREAMWALKER"/g,
  'display_name: "The Dark Knight"'
).replace(
  /"https:\/\/images\.unsplash\.com\/photo-1518709268805-4e9042af9f23\?auto=crop&w=600&q=80"/g,
  '"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"'
);

fs.writeFileSync('app.js', content);
console.log('Movies updated');
