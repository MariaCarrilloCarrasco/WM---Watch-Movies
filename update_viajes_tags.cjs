const fs = require('fs');

const content = `
// Actualizar tipos de Viajes
if (typeof VIAJES_DATA !== 'undefined') {
  VIAJES_DATA.forEach(v => {
    let name = (v.display_name || '').toLowerCase();
    let text = (v.synopsis_text?.es || '').toLowerCase();
    let combined = name + ' ' + text;
    
    let newTags = [];
    if (combined.includes('playa') || combined.includes('costa') || combined.includes('mar')) newTags.push('Playa');
    if (combined.includes('aventura') || combined.includes('actividades')) newTags.push('Aventura');
    if (combined.includes('relax') || combined.includes('bienestar') || combined.includes('romántica')) newTags.push('Relax');
    if (combined.includes('escapada') || combined.includes('estancias') || combined.includes('smartbox')) newTags.push('Escapada');

    if (newTags.length === 0) {
      newTags.push('Escapada');
    }

    v.keyword_labels = [...new Set([...(v.keyword_labels || []), ...newTags])];
  });
}

// También asegurar que QUEDADAS_DATA esté bien
if (typeof QUEDADAS_DATA !== 'undefined') {
  QUEDADAS_DATA.forEach(q => {
    if (!q.keyword_labels || q.keyword_labels.length === 0) {
       q.keyword_labels = ['Casa'];
    }
  });
}
`;

fs.appendFileSync('js/datos.js', content);
console.log("Updated Viajes and verified Quedadas successfully.");
