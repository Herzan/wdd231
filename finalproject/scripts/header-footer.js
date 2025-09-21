// ===========================
// Display Today's Date in Header
// ===========================
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(now);
const headerToday = document.querySelector(".header-today p");
if (headerToday) {
    headerToday.textContent = fulldate;
}

// ===========================
// Hamburger Menu Toggle
// ===========================
const hamburger = document.querySelector("#hamburger-menu");
const navList = document.querySelector("nav ul");
const hamburgerX = document.querySelector("#hamburger-x");
const hamburgerEquiv = document.querySelector("#hamburger-equiv");

function toggleMenu() {
    navList.classList.toggle("menu-active");
    hamburgerX.classList.toggle("menu-active");
    hamburgerEquiv.classList.toggle("menu-active");
}

// Attach click listener
if (hamburger) {
    hamburger.addEventListener("click", toggleMenu);
}

// ===========================
// Wayfinding: Highlight Current Page
// ===========================
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage || (href === "index.html" && currentPage === "")) {
        link.classList.add("active");
    }
});
