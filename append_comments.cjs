
// ==========================================
// COMMENTS LOGIC
// ==========================================
let currentItemIdForComments = null;
let currentRating = 5;

// Load comments from localStorage
if (!AppState.comments) {
  try {
    const saved = localStorage.getItem('wom_comments');
    AppState.comments = saved ? JSON.parse(saved) : {};
  } catch(e) {
    AppState.comments = {};
  }
}

window.openCommentsModal = function(itemId, itemName) {
  currentItemIdForComments = itemId;
  currentRating = 5;
  document.getElementById('comments-modal-title').textContent = 'Comentarios sobre ' + itemName;
  document.getElementById('new-comment-text').value = '';
  setRating(5);
  
  renderComments();
  const modal = document.getElementById('comments-modal');
  if(modal) modal.style.display = 'flex';
};

window.closeCommentsModal = function() {
  const modal = document.getElementById('comments-modal');
  if(modal) modal.style.display = 'none';
  currentItemIdForComments = null;
};

window.setRating = function(stars) {
  currentRating = stars;
  const container = document.getElementById('star-rating-input');
  if(!container) return;
  const starSpans = container.querySelectorAll('span');
  starSpans.forEach(span => {
    const val = parseInt(span.getAttribute('data-val'));
    if (val <= stars) {
      span.style.color = 'gold';
    } else {
      span.style.color = '#555';
    }
  });
};

window.submitComment = function() {
  if(!currentItemIdForComments) return;
  
  const input = document.getElementById('new-comment-text');
  const text = input.value.trim();
  if(!text) return;
  
  // Positivity Filter
  const negativeWords = ['malo', 'aburrido', 'feo', 'peor', 'asco', 'odio', 'basura', 'horrible', 'mierda', 'puta'];
  const lowerText = text.toLowerCase();
  
  const hasNegative = negativeWords.some(word => lowerText.includes(word));
  if (hasNegative) {
    alert("¡En WOM! solo vibramos alto! Modifica tu mensaje 💖");
    return; // Block comment
  }
  
  if (!AppState.comments[currentItemIdForComments]) {
    AppState.comments[currentItemIdForComments] = [];
  }
  
  AppState.comments[currentItemIdForComments].push({
    text: text,
    rating: currentRating,
    user: 'Tú',
    date: new Date().toLocaleDateString()
  });
  
  // Save to localStorage
  localStorage.setItem('wom_comments', JSON.stringify(AppState.comments));
  
  input.value = '';
  renderComments();
};

window.renderComments = function() {
  const container = document.getElementById('comments-list');
  if(!container) return;
  
  const comments = AppState.comments[currentItemIdForComments] || [];
  
  if (comments.length === 0) {
    container.innerHTML = '<p style="color: #888; font-style: italic;">No hay comentarios todavía. ¡Sé el primero!</p>';
    return;
  }
  
  container.innerHTML = '';
  comments.forEach(c => {
    const div = document.createElement('div');
    div.style.cssText = 'background: #2a2a3c; padding: 10px; border-radius: 8px;';
    
    let starsHtml = '';
    for(let i=0; i<5; i++) {
      starsHtml += i < c.rating ? '<span style="color:gold;">★</span>' : '<span style="color:#555;">★</span>';
    }
    
    div.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
        <span style="font-weight: bold; color: var(--accent-purple);">${c.user}</span>
        <span style="font-size: 12px; color: #888;">${c.date}</span>
      </div>
      <div style="margin-bottom: 5px;">${starsHtml}</div>
      <div style="font-size: 14px;">${c.text}</div>
    `;
    container.appendChild(div);
  });
};
