const fs = require('fs');

const VIDEO_MAP = {
  "El bachatón": "0mFf0KIfR90",
  "Mujer bruja": "rLqHtc8Xks0",
  "Lola bunny": "QdM6aT0i3tE",
  "Ocean": "Q_XNqKz_Q5g",
  "El barco": "eB0XG6L4x1I",
  "200 Copas": "tN74gR_f34E",
  "Gato malo": "eHXZG1f3Bms",
  "Toto de loca": "K2iZ5O6P8Kk",
  "Diva del infierno": "2m1fT7G-0_A",
  "Voy a morir": "oJ8tG7O4W_k",
  "Febrero": "8_WnB_V2NfU",
  "Bomba de amor": "3aZ3w8p4T8s",
  "Oh Daddy": "8M_mIuD3W4M",
  "Fiebre": "rR8eC9x-i9U",
  "Sin Pijama": "zEf423kYfqk",
  "Forever": "o9H1T4H8nqk",
  "Nueva YooL": "ZqQe5W4W7_s",
  "Debí Tirar Más Fotos": "8_X3bX8L-U0",
  "MoscuMule": "p38WguhuYms",
  "Papi Chulo": "T61p7G2pPQs",
  "Canción de Kristina": "dQw4w9WgXcQ", // Placeholder
  "Gasolina": "qGKrc3A6HHM",
  "Lo Que Pasó, Pasó": "qO-gH0sXWl4",
  "Danza Kuduro": "7zp1TbLFPp8",
  "Salió El Sol": "0Z9f7D_x_Qc",
  "Dardos": "dQw4w9WgXcQ", // Placeholder
  "Bebo": "dQw4w9WgXcQ"  // Placeholder
};

let content = `
// Actualizar URLs de videoclips
if (typeof MUSIC_DATA !== 'undefined') {
  const VIDEO_MAP = ${JSON.stringify(VIDEO_MAP, null, 2)};
  MUSIC_DATA.forEach(song => {
    const vid = VIDEO_MAP[song.display_name];
    if (vid && vid !== "dQw4w9WgXcQ") {
      song.video_url = 'https://www.youtube.com/embed/' + vid + '?autoplay=1';
    } else {
      // Fallback a búsqueda de YouTube incrustada si no hay ID exacto
      const query = encodeURIComponent(song.display_name + " " + song.filmmaker.director_name);
      song.video_url = 'https://www.youtube.com/embed?listType=search&list=' + query;
    }
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Videos actualizados.");
