// ================== NAV MENU ==================
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
  // Alterna clase 'show' para estilos en CSS
  navMenu.classList.toggle('show');

  // Alterna display de forma segura
  if (navMenu.style.display === 'flex') {
    navMenu.style.display = 'none';
  } else {
    navMenu.style.display = 'flex';
  }
});
