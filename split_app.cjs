const fs = require('fs');

const appContent = fs.readFileSync('app.js', 'utf8');

// Create directory if not exists
if (!fs.existsSync('js')) {
    fs.mkdirSync('js');
}

const appStateIndex = appContent.indexOf('const AppState = {');

if (appStateIndex !== -1) {
    let datosContent = appContent.substring(0, appStateIndex);
    let restContent = appContent.substring(appStateIndex);
    
    // Write datos.js
    fs.writeFileSync('js/datos.js', datosContent);
    console.log('Created js/datos.js');
    
    // Write back the rest to app.js
    fs.writeFileSync('app.js', restContent);
    console.log('Updated app.js');
} else {
    console.log('Could not find AppState');
}
