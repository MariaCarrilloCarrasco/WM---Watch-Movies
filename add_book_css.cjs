const fs = require('fs');

const css = `
/* Book specific card styling to make them smaller and look more like books */
.book-card {
  width: 140px;
  height: 210px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.3);
}

.book-card .card-image-wrapper {
  height: 100%;
}

.book-card .card-img {
  object-fit: cover;
  border-radius: 4px;
}

.book-card .card-content {
  padding: 8px;
}

.book-card .card-title {
  font-size: 12px;
  margin-bottom: 2px;
}

.book-card .card-info {
  font-size: 10px;
}

.book-card .card-synopsis {
  display: none;
}

/* Ensure the grid fits them nicely */
#wom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 20px;
  padding: 20px 0;
}
`;

fs.appendFileSync('style.css', css);
console.log("CSS appended.");
