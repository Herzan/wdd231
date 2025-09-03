const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav ul');


menuButton.addEventListener('click', () => {
navMenu.classList.toggle('show');
if (navMenu.style.display === 'flex') {
navMenu.style.display = 'none';
} else {
navMenu.style.display = 'flex';
}
});