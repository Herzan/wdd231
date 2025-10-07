// Slider setup
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

// Navigation buttons
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to show a slide
function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length; // wrap around
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to move slides
function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize first slide
showSlide(slideIndex);

// Attach event listeners instead of using onclick
prevButton.addEventListener('click', () => moveSlide(-1));
nextButton.addEventListener('click', () => moveSlide(1));

// Optional: Auto-play
// setInterval(() => moveSlide(1), 5000);
