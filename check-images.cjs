const https = require('https');

const url = "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80";

https.get(url, (res) => {
  console.log('Status Code:', res.statusCode);
  if (res.statusCode >= 300 && res.statusCode < 400) {
    console.log('Redirect location:', res.headers.location);
  }
}).on('error', (e) => {
  console.error(e);
});
