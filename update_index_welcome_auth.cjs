const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\r\n/g, '\n');

const targetHtml = `      <button class="welcome-enter-btn" id="welcome-enter-btn" onclick="enterPlatform()">
        <span>ENTRAR A LA PLATAFORMA</span>
        <svg viewBox="0 0 24 24" width="24" height="24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
      </button>`;

const replacementHtml = `      <!-- Botones iniciales: Iniciar sesión o Registrarse -->
      <div id="welcome-auth-buttons" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; width: 100%; max-width: 300px; margin-left: auto; margin-right: auto;">
        <button id="welcome-login-trigger" class="welcome-enter-btn" style="background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">
          <span>INICIAR SESIÓN</span>
        </button>
        <button id="welcome-register-trigger" class="welcome-enter-btn">
          <span>REGISTRARSE</span>
        </button>
        <button class="welcome-enter-btn" id="welcome-enter-btn-guest" onclick="enterPlatform()" style="background: transparent; border: none; font-size: 12px; margin-top: -4px;">
          <span>Entrar como invitado</span>
        </button>
      </div>

      <!-- Wrapper del formulario de autenticación (oculto por defecto) -->
      <div id="welcome-auth-form-wrapper" style="display: none; width: 100%; max-width: 320px; margin: 0 auto 24px; text-align: left; background: rgba(255, 255, 255, 0.05); padding: 24px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1);">
        <h3 id="welcome-form-title" style="margin-top: 0; text-align: center; color: #fff; font-size: 20px; font-weight: 600;">Iniciar Sesión</h3>
        <p id="welcome-form-subtitle" style="font-size: 13px; color: rgba(255,255,255,0.7); text-align: center; margin-bottom: 20px;">Accede a tu cuenta</p>
        
        <div class="form-group" id="welcome-form-name-group" style="display:none; margin-bottom: 16px;">
          <label id="welcome-label-name" style="font-size: 13px; color: rgba(255,255,255,0.8); display: block; margin-bottom: 6px;">Nombre Completo</label>
          <input type="text" id="welcome-auth-name" style="width: 100%; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 14px; box-sizing: border-box;" placeholder="Escribe tu nombre">
        </div>
        
        <div class="form-group" style="margin-bottom: 16px;">
          <label id="welcome-label-email" style="font-size: 13px; color: rgba(255,255,255,0.8); display: block; margin-bottom: 6px;">Correo Electrónico</label>
          <input type="email" id="welcome-auth-email" style="width: 100%; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 14px; box-sizing: border-box;" value="maria.carrillo@movies.com">
        </div>
        
        <div class="form-group" style="margin-bottom: 24px;">
          <label id="welcome-label-password" style="font-size: 13px; color: rgba(255,255,255,0.8); display: block; margin-bottom: 6px;">Contraseña</label>
          <input type="password" id="welcome-auth-password" style="width: 100%; padding: 12px; border-radius: 8px; background: rgba(0,0,0,0.4); border: 1px solid rgba(255,255,255,0.2); color: #fff; font-size: 14px; box-sizing: border-box;" value="12345678">
        </div>
        
        <button id="welcome-auth-submit-btn" class="welcome-enter-btn" style="width: 100%; justify-content: center; margin-bottom: 16px;" onclick="submitWelcomeAuth()">
          <span id="welcome-auth-submit-text">Entrar</span>
        </button>
        
        <div style="text-align: center;">
          <a href="#" id="welcome-auth-toggle-link" style="color: var(--accent-purple); font-size: 13px; text-decoration: none;">¿No tienes cuenta? Regístrate aquí</a>
        </div>
        <div style="text-align: center; margin-top: 12px;">
          <button onclick="document.getElementById('welcome-auth-form-wrapper').style.display='none'; document.getElementById('welcome-auth-buttons').style.display='flex';" style="background:transparent; border:none; color: rgba(255,255,255,0.5); font-size: 12px; cursor: pointer; text-decoration: underline;">Volver</button>
        </div>
      </div>`;

html = html.replace(targetHtml, replacementHtml);
fs.writeFileSync(indexPath, html);
console.log('Welcome screen auth HTML updated');
