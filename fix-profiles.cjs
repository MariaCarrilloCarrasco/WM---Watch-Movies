const fs = require('fs');
let code = fs.readFileSync('app.js', 'utf8');

const replacement = `const PERSON_PROFILE_DATA = {
  "elena rostova": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "marcus vance": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "dr. aris thorne": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "luna park": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian c.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "sienna w.": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "alex thompson": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "rin aoyagi": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "edward norton": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "sophie turner": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "matthew m.": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "anne hathaway": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "julian haas": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "christoph waltz": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "denis villeneuve": {`;

code = code.replace(`const PERSON_PROFILE_DATA = {
  "elena rostova": { photo: "ai_cast/actor_female_one_1783254168757.png" },
  "marcus vance": { photo: "ai_cast/actor_male_one_1783254179999.png" },
  "dr. aris thorne": { photo: "ai_cast/actor_male_two_1783254193629.png" },
  "luna park": { photo: "ai_cast/actor_female_two_1783254205060.png" },
  "denis villeneuve": {`, replacement);

fs.writeFileSync('app.js', code);
console.log('Fixed profiles!');
