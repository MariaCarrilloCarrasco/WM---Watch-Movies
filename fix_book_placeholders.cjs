const fs = require('fs');

let content = fs.readFileSync('js/datos.js', 'utf8');

// The books we added in the last batch had hallucinated IDs.
// We will replace them with placehold.co images containing the title.

const brokenBooks = [
  "Factfulness",
  "La era del capitalismo de la vigilancia",
  "Armas de destrucción matemática",
  "La sociedad red",
  "Tecnopolítica",
  "Homo Deus",
  "Vida 3.0",
  "Don't Make Me Think",
  "The Design of Everyday Things",
  "About Face",
  "Hooked",
  "Lean UX",
  "Universal Principles of Design",
  "Design for the Real World"
];

brokenBooks.forEach(title => {
  // Regex to find the book block and replace its cover_image_url and bg_image_url
  const encodedTitle = encodeURIComponent(title);
  const placeholdCover = 'https://placehold.co/600x900/1e1e2f/ffffff?text=' + encodedTitle;
  const placeholdBg = 'https://placehold.co/1200x600/1e1e2f/ffffff?text=' + encodedTitle;
  
  const regexCover = new RegExp('(display_name:\\s*"' + title + '"[\\s\\S]*?cover_image_url:\\s*")[^"]+(")', 'g');
  const regexBg = new RegExp('(display_name:\\s*"' + title + '"[\\s\\S]*?bg_image_url:\\s*")[^"]+(")', 'g');
  
  content = content.replace(regexCover, '$1' + placeholdCover + '$2');
  content = content.replace(regexBg, '$1' + placeholdBg + '$2');
});

fs.writeFileSync('js/datos.js', content);
console.log("Fixed broken book placeholders.");
