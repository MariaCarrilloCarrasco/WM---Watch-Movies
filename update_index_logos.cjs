const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');
html = html.replace(/\r\n/g, '\n');

// Update desktop logo
const targetDesktopLogo = `<div class="sidebar-logo-container" onclick="switchTab('home')">`;
const replaceDesktopLogo = `<div class="sidebar-logo-container" onclick="switchTab('profile')" title="Cambiar de usuario / Iniciar sesión">`;
html = html.replace(targetDesktopLogo, replaceDesktopLogo);

// Update mobile header logo
const targetMobileLogo = `<h1 class="app-title">WM <span style="font-size: 14px; font-weight: 500; color: var(--accent-purple);">Movies</span></h1>`;
const replaceMobileLogo = `<h1 class="app-title" onclick="switchTab('profile')" style="cursor: pointer;" title="Cambiar de usuario / Iniciar sesión">WM <span style="font-size: 14px; font-weight: 500; color: var(--accent-purple);">Movies</span></h1>`;
html = html.replace(targetMobileLogo, replaceMobileLogo);

fs.writeFileSync(indexPath, html);
console.log('Logo click navigation updated');
