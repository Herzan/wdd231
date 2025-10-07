// Initialize slide index and select elements
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Function to display the current slide
function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length; // wrap around
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Function to move slides by a given offset
function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize first slide
showSlide(slideIndex);

// Add event listeners to navigation buttons instead of using onclick
if (prevButton) {
    prevButton.addEventListener('click', () => moveSlide(-1));
}
if (nextButton) {
    nextButton.addEventListener('click', () => moveSlide(1));
}

// Optional: Auto-play every 5 seconds (comment out if not needed)
// setInterval(() => { moveSlide(1); }, 5000);
