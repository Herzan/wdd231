let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(n) {
    slideIndex = (n + slides.length) % slides.length; // wrap around
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Initialize first slide
showSlide(slideIndex);

// Optional: Auto-play every 5 seconds (comment out if not needed)
// setInterval(() => { moveSlide(1); }, 5000);
