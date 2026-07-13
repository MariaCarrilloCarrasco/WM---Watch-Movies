const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');
appJs = appJs.replace(/\r\n/g, '\n');

const appendCode = `
// ======== PROFILE AUTH ========
function setupProfileAuth() {
  const form = document.getElementById('profile-auth-form');
  const toggleLink = document.getElementById('profile-toggle-auth-link');
  const nameGroup = document.getElementById('profile-name-group');
  const submitBtn = document.getElementById('profile-submit-btn');
  const authTitle = document.getElementById('profile-auth-title');
  const authSubtitle = document.getElementById('profile-auth-subtitle');
  const logoutBtn = document.getElementById('profile-logout-btn');
  
  let mode = 'login';
  
  if (toggleLink) {
    toggleLink.addEventListener('click', (e) => {
      e.preventDefault();
      const isEs = AppState.language === 'es';
      if (mode === 'login') {
        mode = 'register';
        nameGroup.style.display = 'block';
        submitBtn.textContent = isEs ? 'Registrarse' : 'Sign Up';
        authTitle.textContent = isEs ? 'Crear una cuenta' : 'Create an Account';
        authSubtitle.textContent = isEs ? 'Regístrate para guardar películas' : 'Sign up to save movies';
        toggleLink.textContent = isEs ? 'Inicia sesión' : 'Log in';
        toggleLink.parentElement.childNodes[0].nodeValue = isEs ? '¿Ya tienes una cuenta? ' : 'Already have an account? ';
      } else {
        mode = 'login';
        nameGroup.style.display = 'none';
        submitBtn.textContent = isEs ? 'Iniciar Sesión' : 'Log In';
        authTitle.textContent = isEs ? 'Bienvenido' : 'Welcome';
        authSubtitle.textContent = isEs ? 'Accede a tu biblioteca' : 'Access your library';
        toggleLink.textContent = isEs ? 'Regístrate Ahora' : 'Register Now';
        toggleLink.parentElement.childNodes[0].nodeValue = isEs ? '¿No tienes una cuenta? ' : 'Don\\'t have an account? ';
      }
    });
  }
  
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const isEs = AppState.language === 'es';
      const email = document.getElementById('profile-email').value;
      const password = document.getElementById('profile-password').value;
      
      try {
        if (mode === 'register') {
          const name = document.getElementById('profile-name').value;
          if (!name) return alert(isEs ? 'El nombre es obligatorio' : 'Name is required');
          await AuthService.register({ name, email, password });
          alert(isEs ? '¡Registro completado!' : 'Registration successful!');
        } else {
          await AuthService.login({ email, password });
        }
        if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI();
        refreshHeaderAuthState();
      } catch (err) {
        alert((isEs ? 'Error: ' : 'Error: ') + (err.message === 'email_exists' ? (isEs ? 'El correo ya existe' : 'Email already exists') : (err.message === 'invalid_credentials' ? (isEs ? 'Credenciales incorrectas' : 'Invalid credentials') : err.message)));
      }
    });
  }
  
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      if (AuthService.logout) AuthService.logout();
      if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI();
      refreshHeaderAuthState();
    });
  }
}

window.refreshProfileUI = function() {
  const profileAuthContainer = document.getElementById('profile-auth-container');
  const profileLoggedInContainer = document.getElementById('profile-logged-in-container');
  const profileUsername = document.querySelector('.profile-username');
  
  if (AppState.user) {
    if (profileAuthContainer) profileAuthContainer.style.display = 'none';
    if (profileLoggedInContainer) profileLoggedInContainer.style.display = 'block';
    if (profileUsername) profileUsername.textContent = AppState.user.name || AppState.user.email;
  } else {
    if (profileAuthContainer) profileAuthContainer.style.display = 'block';
    if (profileLoggedInContainer) profileLoggedInContainer.style.display = 'none';
    if (profileUsername) profileUsername.textContent = 'Invitado';
  }
};

// Call setup once
document.addEventListener('DOMContentLoaded', () => {
  setupProfileAuth();
  setTimeout(() => { if (typeof window.refreshProfileUI === 'function') window.refreshProfileUI(); }, 100);
});
`;

appJs += appendCode;
fs.writeFileSync(appJsPath, appJs);
console.log('Appended profile auth logic');
