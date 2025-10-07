import { fetchData } from "./utils.js";

const directories = document.getElementById("directory");
const buttons = document.querySelectorAll(".view-buttons button");
const spotlightContainer = document.querySelector(".spotlight-card-container");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const modalClose = document.getElementById("modal-close");

document.addEventListener("DOMContentLoaded", () => {
    displayTrips();
    displaySpotlight();
});

// Weather API setup

const API_KEY = "928baf53f34be0d716c884614e720892";
const LON = 7.49;
const LAT = 9.07;

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("show");
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    showList(
      e.target.id === "grid" ? "grid-view" : "list-view",
      e.target.id === "grid" ? "list-view" : "grid-view"
    );
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (directories) {
    displayBusinesses();
  }

  if (forecastContainer) {
    displayCurrentWeather();
    displayWeatherForecast();
  }

  if (spotlightContainer) {
    displaySpotlight();
  }

  if (joinForm) {
    joinForm.addEventListener("submit", () => {
      document.getElementById("formTimestamp").value = Date.now();
    });
  }
});

mCardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.dataset.level) {
      case "np":
        modal1.showModal();
        break;
      case "bronze":
        modal2.showModal();
        break;
      case "silver":
        modal3.showModal();
        break;
      case "gold":
        modal4.showModal();
        break;
      default:
        break;
    }
  });
});

closeModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dialog = e.target.closest("dialog");
    dialog.close();
  });
});

// Helper functions

function showList(show, hide) {
  if (!directories) return;
  directories.classList.remove(hide);
  directories.classList.add(show);
}

async function displayBusinesses() {
  const businesses = await fetchData("data/members.json");
  businesses.forEach((business) => {
    const card = createBusinessCard(business);
    directories.appendChild(card);
  });
}

async function displayCurrentWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
  const weatherData = await fetchData(url);
  if (weatherData) {
    const info = createCurrentWeatherInfo(weatherData);
    currentWeather.innerHTML = "";
    currentWeather.appendChild(info);
  } else {
    currentWeather.innerHTML = "<span>Unavailable to fetch data</span>";
  }
}

async function displayWeatherForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;
  const forecastData = await fetchData(url);
  if (forecastData) {
    const info = createForecastInfo(forecastData);
    forecastContainer.innerHTML = info;
  } else {
    forecastContainer.innerHTML = "<b>Unavailable to fetch data</b>";
  }
}

async function displaySpotlight() {
  const businesses = await fetchData("data/members.json");

  if (!businesses || businesses.length === 0) {
    spotlightContainer.innerHTML = "<p>No spotlight businesses found.</p>";
    return;
  }
  const spotlightBusinesses = businesses
  .filter((b) => b.membershipLevel === 2 || b.membershipLevel === 3)
  .sort(() => 0.5 - Math.random())
  .slice(0, 3);

  spotlightBusinesses.forEach((business) => {
    const card = createSpotlightCard(business);
    spotlightContainer.appendChild(card);
  });
}