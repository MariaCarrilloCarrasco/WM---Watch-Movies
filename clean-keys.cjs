const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

// The script fix-all-profiles.cjs added a block of lines to the top of PERSON_PROFILE_DATA.
// Let's remove the duplicated entries that were added at the top.
// The keys added were:
const keysToRemove = [
  "elena rostova", "aris k.", "luna v.", "julian c.",
  "sienna w.", "alex thompson", "rin aoyagi", "edward norton",
  "sophie turner", "julian haas", "matthew m.", "anne hathaway", "christoph waltz"
];

let lines = code.split('\n');
let startIdx = lines.findIndex(l => l.includes('const PERSON_PROFILE_DATA = {'));
let endIdx = lines.findIndex((l, i) => i > startIdx && l === '};');

if (startIdx !== -1 && endIdx !== -1) {
  let insideBlock = lines.slice(startIdx + 1, endIdx);
  // We want to keep the FULL objects and remove the single-line { photo: "..." } objects.
  let filtered = insideBlock.filter(line => {
    // If it's a one-liner with just a photo, we remove it
    if (line.match(/^\s*"[^"]+":\s*\{\s*photo:\s*"[^"]+"\s*\},\s*$/)) {
      return false;
    }
    return true;
  });
  
  lines.splice(startIdx + 1, insideBlock.length, ...filtered);
  code = lines.join('\n');
}

fs.writeFileSync('app.js', code);
console.log('Cleaned duplicated keys!');
