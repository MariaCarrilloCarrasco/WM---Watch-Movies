const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(/\r\n/g, '\n');

const targetHtml = `      <div class="login-form-container">
        <h3 class="login-title">Bienvenido</h3>
        <p class="login-subtitle">Accede a tu biblioteca y listas de seguimiento</p>
        
        <form onsubmit="event.preventDefault(); alert('¡Inicio de sesión simulado con éxito!');">
          <div class="form-group">
            <label class="form-label" for="login-email">Correo Electrónico</label>
            <input type="email" id="login-email" class="form-input" placeholder="ejemplo@correo.com" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="login-password">Contraseña</label>
            <input type="password" id="login-password" class="form-input" placeholder="••••••••" required>
            <a href="#" class="forgot-password" onclick="alert('Se ha enviado un correo simulado de recuperación.')">¿Olvidaste tu contraseña?</a>
          </div>
          
          <button type="submit" class="login-submit-btn">Iniciar Sesión</button>
        </form>

        <div class="social-login-separator">O continuar con</div>

        <button class="social-btn" onclick="alert('Autenticación simulada con Google...')">
          <span>🌐</span> Google
        </button>
        <button class="social-btn" onclick="alert('Autenticación simulada con Apple...')">
          <span>🍏</span> Apple
        </button>

        <div class="register-link-wrapper">
          ¿No tienes una cuenta? <a href="#" class="register-link" onclick="alert('Registro simulado.')">Regístrate Ahora</a>
        </div>
      </div>`;

const replacementHtml = `      <!-- Formulario de Acceso a biblioteca (Login / Register) -->
      <div class="login-form-container" id="profile-auth-container">
        <h3 class="login-title" id="profile-auth-title">Bienvenido</h3>
        <p class="login-subtitle" id="profile-auth-subtitle">Accede a tu biblioteca y listas de seguimiento</p>
        
        <form id="profile-auth-form">
          <div class="form-group" id="profile-name-group" style="display: none;">
            <label class="form-label" for="profile-name">Nombre Completo</label>
            <input type="text" id="profile-name" class="form-input" placeholder="Tu nombre">
          </div>

          <div class="form-group">
            <label class="form-label" for="profile-email">Correo Electrónico</label>
            <input type="email" id="profile-email" class="form-input" placeholder="ejemplo@correo.com" required>
          </div>
          
          <div class="form-group">
            <label class="form-label" for="profile-password">Contraseña</label>
            <input type="password" id="profile-password" class="form-input" placeholder="••••••••" required>
            <a href="#" class="forgot-password" id="profile-forgot-password">¿Olvidaste tu contraseña?</a>
          </div>
          
          <button type="submit" class="login-submit-btn" id="profile-submit-btn">Iniciar Sesión</button>
        </form>

        <div class="social-login-separator" id="profile-social-separator">O continuar con</div>

        <button class="social-btn" id="profile-google-btn">
          <span>🌐</span> Google
        </button>
        <button class="social-btn" id="profile-apple-btn">
          <span>🍏</span> Apple
        </button>

        <div class="register-link-wrapper" id="profile-toggle-auth-wrapper">
          ¿No tienes una cuenta? <a href="#" class="register-link" id="profile-toggle-auth-link">Regístrate Ahora</a>
        </div>
      </div>

      <!-- Sección mostrada si está logueado -->
      <div id="profile-logged-in-container" style="display: none; padding: 20px; text-align: center;">
        <button id="profile-logout-btn" class="login-submit-btn" style="background: var(--accent-red); margin-top: 20px; max-width: 300px; margin-left: auto; margin-right: auto;">Cerrar Sesión</button>
      </div>`;

indexHtml = indexHtml.replace(targetHtml, replacementHtml);
fs.writeFileSync(indexPath, indexHtml);
console.log('index.html updated with auth container');
