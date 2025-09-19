/* scripts.js */

// ✅ Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// ✅ Navigation toggle for small screens
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mainNav.style.display = expanded ? '' : 'block';
  });
}

// ✅ Load items from JSON and render cards
async function loadItems() {
  try {
    const res = await fetch('data/items.json');
    if (!res.ok) throw new Error('Failed to load items');

    const items = await res.json();
    const cardsEl = document.getElementById('cards');

    items.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('role', 'listitem');

      // Title
      const h2 = document.createElement('h2');
      h2.textContent = item.name;

      // Figure + Image
      const fig = document.createElement('figure');
      const img = document.createElement('img');

      // ✅ Allow either "image" or "images" and handle bare filenames
      let src = item.image || item.images || '';
      if (src && !src.includes('/')) {
        src = 'images/' + src;
      }

      img.src = src;
      img.alt = item.alt || `${item.name} photo`;
      img.loading = 'lazy';
      img.width = 300;
      img.height = 200;
      fig.appendChild(img);

      // Address
      const addr = document.createElement('address');
      addr.textContent = item.address;

      // Description
      const p = document.createElement('p');
      p.textContent = item.description;

      // Button
      const actions = document.createElement('div');
      actions.className = 'actions';
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = 'Learn more';
      btn.addEventListener('click', () => {
        alert(`${item.name}\n\n${item.description}\n\nAddress: ${item.address}`);
      });
      actions.appendChild(btn);

      // ✅ Append everything
      card.append(h2, fig, addr, p, actions);
      cardsEl.appendChild(card);
    });

  } catch (err) {
    console.error(err);
    document.getElementById('cards').textContent = 'Unable to load items.';
  }
}


// ✅ LocalStorage visit message
function setVisitMessage() {
  const key = 'chamber-discover-lastvisit';
  const now = Date.now();
  const last = localStorage.getItem(key);
  const msgEl = document.getElementById('visit-message');

  if (!last) {
    msgEl.textContent = 'Welcome! Let us know if you have any questions.';
  } else {
    const lastMs = parseInt(last, 10);
    const diffMs = now - lastMs;
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (days < 1) {
      msgEl.textContent = 'Back so soon! Awesome!';
    } else {
      msgEl.textContent = `You last visited ${days} ${days === 1 ? 'day' : 'days'} ago.`;
    }
  }

  try {
    localStorage.setItem(key, String(now));
  } catch (e) {
    console.warn('localStorage not available');
  }
}

// ✅ Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  loadItems();
  setVisitMessage();
});
