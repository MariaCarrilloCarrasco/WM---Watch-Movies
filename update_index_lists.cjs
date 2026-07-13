const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/\r\n/g, '\n');

const targetHtml = `    <!-- 3.5. VISTA MI LISTA (MY LIST) -->
    <section id="view-mylist" class="app-view">
      <h2 class="explore-section-title" style="font-size: 26px; margin-bottom: 4px;">My List</h2>
      <p class="mylist-subtitle" id="mylist-subtitle-text">Tienes 0 títulos guardados en tu lista de seguimiento.</p>

      <!-- Cuadrícula de películas en mi lista -->
      <div class="movies-grid" id="mylist-movies-grid">
        <!-- Renderizado dinámicamente mediante JS -->
      </div>

      <!-- Estado vacío (sin watchlist) -->
      <div class="empty-state" id="mylist-empty-state">
        <span class="empty-state-icon">📁</span>
        <h3 class="empty-state-title">Tu lista de seguimiento está vacía</h3>
        <p class="empty-state-desc">Añade películas a tu lista pulsando el icono 📁 para verlas más tarde.</p>
      </div>
    </section>`;

const replacementHtml = `    <!-- 3.5. VISTA MI LISTA (MY LIST) -->
    <section id="view-mylist" class="app-view">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
        <div>
          <h2 class="explore-section-title" style="font-size: 26px; margin-bottom: 4px; margin-top: 0;">Mis Listas</h2>
          <p class="mylist-subtitle" id="mylist-subtitle-text">Cargando tus listas...</p>
        </div>
        <button id="create-custom-list-btn" style="background: var(--accent-purple); color: #fff; border: none; padding: 10px 16px; border-radius: 8px; font-weight: bold; cursor: pointer; display: flex; align-items: center; gap: 8px;">
          <span>➕</span> Crear nueva lista
        </button>
      </div>

      <!-- Contenedor dinámico de múltiples listas -->
      <div id="custom-lists-container">
        <!-- Renderizado dinámicamente mediante JS -->
      </div>

      <!-- Estado vacío genérico -->
      <div class="empty-state" id="mylist-empty-state" style="display: none;">
        <span class="empty-state-icon">📁</span>
        <h3 class="empty-state-title">No tienes ninguna lista creada</h3>
        <p class="empty-state-desc">Crea una lista nueva para empezar a organizar tus películas favoritas.</p>
      </div>
    </section>

    <!-- Modal para seleccionar lista al añadir película -->
    <div id="list-selection-modal" class="modal-overlay" style="display: none; align-items: center; justify-content: center; z-index: 9999;">
      <div class="modal-content" style="background: var(--bg-color); border: 1px solid var(--border-color); padding: 24px; border-radius: var(--border-radius-lg); width: 90%; max-width: 400px; position: relative;">
        <button onclick="document.getElementById('list-selection-modal').style.display='none'" style="position: absolute; right: 16px; top: 16px; background: transparent; border: none; color: #fff; font-size: 24px; cursor: pointer;">×</button>
        <h3 style="margin-top: 0; color: #fff; font-size: 20px; font-weight: 700; margin-bottom: 8px;">Añadir a lista</h3>
        <p style="color: var(--text-secondary); margin-bottom: 20px; font-size: 14px;">Elige a qué lista quieres añadir esta película.</p>
        
        <div id="list-selection-container" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; max-height: 250px; overflow-y: auto;">
          <!-- Listas dinámicas aquí -->
        </div>

        <button onclick="document.getElementById('list-selection-modal').style.display='none'" style="background: var(--accent-purple); color: #fff; border: none; padding: 12px; width: 100%; border-radius: 8px; font-weight: bold; cursor: pointer;">Listo</button>
      </div>
    </div>`;

indexHtml = indexHtml.replace(targetHtml, replacementHtml);
fs.writeFileSync(indexPath, indexHtml);
console.log('index.html updated with custom list structure');
