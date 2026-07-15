const fs = require('fs');

let content = fs.readFileSync('js/datos.js', 'utf8');

// Replace hallucinated unsplash URLs in newly added arrays with picsum.photos
// We will look for "https://images.unsplash.com/photo-... " inside js/datos.js
// Only the ones in CONCERTS_DATA, BOOKS_DATA, THEATER_DATA, EVENTS_DATA, EXTERNAL_PLANS_DATA, and NEW_BOOKS.
// Actually, it's easier to just match all cover_image_url and bg_image_url in those arrays if we parse them. 
// But since the file is large, let's do a regex replace for any unsplash URL that we might have added that fails.
// Or even simpler: run a script that parses the file, or just does a global replace.
// Let's replace any "https://images.unsplash.com/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=600&q=80"
// with "https://picsum.photos/seed/" + Math.random() + "/600/900"

let match;
const regex600 = /"https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=600&q=80"/g;
const regex1200 = /"https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=1200&q=80"/g;
const regex150 = /"https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9\-]+\?auto=format&fit=crop&w=150&h=150&q=80"/g;

let count = 0;

content = content.replace(regex600, () => {
    count++;
    return '"https://picsum.photos/seed/cover' + count + '/600/900"';
});

content = content.replace(regex1200, () => {
    count++;
    return '"https://picsum.photos/seed/bg' + count + '/1200/600"';
});

content = content.replace(regex150, () => {
    count++;
    return '"https://picsum.photos/seed/avatar' + count + '/150/150"';
});

fs.writeFileSync('js/datos.js', content);
console.log('Replaced', count, 'URLs with picsum.photos.');
