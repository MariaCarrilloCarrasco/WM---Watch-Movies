const fs = require('fs');

const content = `
// Actualizar tipos de Quedadas
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.forEach(q => {
    let name = (q.display_name || '').toLowerCase();
    let text = (q.synopsis_text?.es || '').toLowerCase();
    let combined = name + ' ' + text;
    
    let newTags = [];
    if (combined.includes('cena')) newTags.push('Cena');
    if (combined.includes('cine') || combined.includes('película')) newTags.push('Cine');
    if (combined.includes('casa') || combined.includes('mercadona') || combined.includes('juegos')) newTags.push('Casa');
    if (combined.includes('música') || combined.includes('cumpleaños')) newTags.push('Música');

    if (newTags.length === 0) {
      // Default fallback
      if (Math.random() > 0.5) newTags.push('Cena');
      else newTags.push('Casa');
    }

    q.keyword_labels = newTags;
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Updated Quedadas successfully.");
