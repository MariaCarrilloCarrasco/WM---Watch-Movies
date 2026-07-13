const fs = require('fs');
const path = require('path');

const appJsPath = path.join(__dirname, 'app.js');
let appJs = fs.readFileSync(appJsPath, 'utf8');

appJs = appJs.replace(/\r\n/g, '\n');

const t1 = `  const textToRead = currentCharacterDesc || \`\${biography}. \${qualities}\`;`;
const r1 = `  const projectsListText = allAssociatedMovies.length > 0 ? (isEs ? \` Además, ha participado en: \${allAssociatedMovies.map(m => m.title).join(', ')}.\` : \` Also, has participated in: \${allAssociatedMovies.map(m => m.title).join(', ')}.\`) : '';\n  const textToRead = (currentCharacterDesc || \`\${biography}. \${qualities}\`) + projectsListText;`;

appJs = appJs.replace(t1, r1);

fs.writeFileSync(appJsPath, appJs);
console.log('Appended projects list to textToRead.');
