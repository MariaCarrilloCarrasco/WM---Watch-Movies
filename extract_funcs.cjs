const fs = require('fs');

const appContent = fs.readFileSync('app.js', 'utf8');

function extractFunction(content, funcName) {
    const searchStr = `function ${funcName}(`;
    const startIndex = content.indexOf(searchStr);
    if (startIndex === -1) {
        return { extracted: '', remaining: content };
    }
    
    // Find the opening brace of the function
    let braceIndex = content.indexOf('{', startIndex);
    if (braceIndex === -1) {
        return { extracted: '', remaining: content };
    }
    
    let braceCount = 1;
    let endIndex = braceIndex + 1;
    
    while (braceCount > 0 && endIndex < content.length) {
        if (content[endIndex] === '{') braceCount++;
        else if (content[endIndex] === '}') braceCount--;
        endIndex++;
    }
    
    const extracted = content.substring(startIndex, endIndex);
    const remaining = content.substring(0, startIndex) + content.substring(endIndex);
    
    return { extracted, remaining };
}

const buscadorFuncs = [
    'setupSearch',
    'setupVoiceSearch',
    'renderActiveFilters',
    'removeFilter',
    'clearAllFilters',
    'clearSearchQuery'
];

const botonesFuncs = [
    'setupMovieClicks',
    'setupNavigation',
    'switchTab',
    'setupGenreFilters',
    'toggleLikeMovie',
    'toggleMyList',
    'playAllMyList',
    'shuffleMyList',
    'sortMyList',
    'copyMovieShareLink',
    'shareMovie'
];

let currentContent = appContent;
let buscadorCode = '';
let botonesCode = '';

for (const fn of buscadorFuncs) {
    const res = extractFunction(currentContent, fn);
    if (res.extracted) {
        buscadorCode += res.extracted + '\n\n';
        currentContent = res.remaining;
        console.log(`Extracted ${fn} to buscador.js`);
    } else {
        console.log(`Could not find ${fn}`);
    }
}

for (const fn of botonesFuncs) {
    const res = extractFunction(currentContent, fn);
    if (res.extracted) {
        botonesCode += res.extracted + '\n\n';
        currentContent = res.remaining;
        console.log(`Extracted ${fn} to botones.js`);
    } else {
        console.log(`Could not find ${fn}`);
    }
}

fs.writeFileSync('js/buscador.js', buscadorCode);
fs.writeFileSync('js/botones.js', botonesCode);
fs.writeFileSync('app.js', currentContent);
console.log('Extraction complete.');
