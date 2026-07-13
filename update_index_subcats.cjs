const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/\r\n/g, '\n');

const targetHtml = `      <!-- Categorías de Exploración -->
      <h2 class="explore-section-title">Explorar Categorías</h2>
      <div class="explore-categories-grid">`;

const replaceHtml = `      <!-- Categorías de Exploración -->
      <h2 class="explore-section-title">Explorar Categorías</h2>
      
      <div id="explore-subcategories-container" style="display: none; margin-bottom: 24px;">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <button id="explore-subcategories-back" style="background: transparent; border: none; color: var(--accent-purple); font-size: 14px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 4px;">
            <span>◀</span> Volver a Categorías
          </button>
        </div>
        <h3 id="explore-subcategories-title" style="margin-top: 0; font-size: 18px; margin-bottom: 12px;">Selecciona una opción</h3>
        <div id="explore-subcategories-list" style="display: flex; flex-wrap: wrap; gap: 8px;">
          <!-- Se inyectan botones aquí dinámicamente -->
        </div>
      </div>

      <div class="explore-categories-grid" id="explore-categories-grid">`;

indexHtml = indexHtml.replace(targetHtml, replaceHtml);
fs.writeFileSync(indexPath, indexHtml);
console.log('explore subcategories container added');
