// ===========================
// Toggle Active / Inactive Buttons
// ===========================
const gridSelector = document.querySelector('#directory-grid');
const listSelector = document.querySelector('#directory-list');
const directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', () => {
  if (!gridSelector.classList.contains('active')) {
    gridSelector.classList.add('active');
    listSelector.classList.remove('active');
    directoryData.classList.add('directory-cards');
    directoryData.classList.remove('directory-list');
  }
});

listSelector.addEventListener('click', () => {
  if (!listSelector.classList.contains('active')) {
    listSelector.classList.add('active');
    gridSelector.classList.remove('active');
    directoryData.classList.add('directory-list');
    directoryData.classList.remove('directory-cards');
  }
});

// ===========================
// Display Businesses from JSON
// ===========================
const displayBusinesses = (members) => {
  const cards = document.querySelector(".directory-cards");

  // Limpiar contenido anterior
  cards.innerHTML = "";

  members.forEach(business => {
    const card = document.createElement("section");
    card.innerHTML = `
      <img src="${business.imageURL}" alt="${business.name}">
      <p>${business.name}</p>
      <p>${business.streetAddress}</p>
      <p>${business.cityStateZip}</p>
      <p><a href="${business.websiteURL}" target="_blank">Website</a></p>
    `;
    if (business.membershipLevel === 'gold') {
      card.classList.add('gold-member');
    }
    cards.appendChild(card);
  });
};

async function getBusinessData() {
  try {
    const response = await fetch("./data/members.json"); // ruta correcta
    if (!response.ok) throw new Error("Error loading members.json");
    const data = await response.json();
    displayBusinesses(data.businesses);
  } catch (error) {
    console.error(error);
    const container = document.querySelector("#directory-data");
    container.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}


getBusinessData();

// ===========================
// Display Today's Date
// ===========================
const headerToday = document.querySelector(".header-today p");
headerToday.textContent = new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short" }).format(new Date());

// ===========================
// Hamburger Menu Toggle
// ===========================
function toggleMenu() {
  document.querySelector("nav ul").classList.toggle("menu-active");
  document.querySelector("#hamburger-x").classList.toggle("menu-active");
  document.querySelector("#hamburger-equiv").classList.toggle("menu-active");
}
document.querySelector("#hamburger-menu").addEventListener('click', toggleMenu);

//Weather//

// Datos iniciales del clima
const weatherData = {
    currentTemp: 75,
    description: "Partly Cloudy",
    high: 85,
    low: 52,
    humidity: 34,
    sunrise: "7:30am",
    sunset: "9:59pm"
};

// Selección de elementos del DOM
const tempEl = document.querySelector('.weather-temp');
const descEl = document.querySelector('.weather-desc');
const highEl = document.querySelector('.weather-details li:nth-child(1)');
const lowEl = document.querySelector('.weather-details li:nth-child(2)');
const humidityEl = document.querySelector('.weather-details li:nth-child(3)');
const sunriseEl = document.querySelector('.weather-details li:nth-child(4)');
const sunsetEl = document.querySelector('.weather-details li:nth-child(5)');

// Función para actualizar la interfaz
function updateWeatherUI() {
    tempEl.textContent = `${weatherData.currentTemp}°F`;
    descEl.textContent = weatherData.description;
    highEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.high}°`;
    lowEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.low}°`;
    humidityEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.humidity}%`;
    sunriseEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.sunrise}`;
    sunsetEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.sunset}`;
}

// Alternar entre Fahrenheit y Celsius
function toggleTemperatureUnit() {
    const isFahrenheit = tempEl.textContent.includes('°F');
    if(isFahrenheit) {
        tempEl.textContent = `${Math.round((weatherData.currentTemp - 32) * 5/9)}°C`;
        highEl.querySelector('strong').nextSibling.textContent = ` ${Math.round((weatherData.high - 32) * 5/9)}°`;
        lowEl.querySelector('strong').nextSibling.textContent = ` ${Math.round((weatherData.low - 32) * 5/9)}°`;
    } else {
        tempEl.textContent = `${weatherData.currentTemp}°F`;
        highEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.high}°`;
        lowEl.querySelector('strong').nextSibling.textContent = ` ${weatherData.low}°`;
    }
}

// Simular actualización del clima
function simulateWeatherUpdate() {
    weatherData.currentTemp += Math.floor(Math.random() * 3) - 1; // -1,0,1
    weatherData.humidity = Math.max(10, Math.min(90, weatherData.humidity + Math.floor(Math.random() * 5) - 2));
    updateWeatherUI();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateWeatherUI();
    // Actualización automática cada 5 minutos
    setInterval(simulateWeatherUpdate, 300000);
});


// Datos iniciales del pronóstico
const forecastData = [
    { day: "Today", temp: 90 },
    { day: "Wednesday", temp: 89 },
    { day: "Thursday", temp: 68 }
];

// Selección de elementos del DOM
const forecastList = document.querySelector('.forecast-list');

// Función para actualizar el pronóstico
function updateForecastUI() {
    // Limpiar la lista
    forecastList.innerHTML = '';
    
    // Agregar cada día y temperatura
    forecastData.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.day}: <span>${item.temp}°F</span>`;
        forecastList.appendChild(li);
    });
}

// Función para alternar Fahrenheit/Celsius
function toggleForecastUnit() {
    const isFahrenheit = forecastList.querySelector('li span').textContent.includes('°F');
    
    forecastData.forEach(item => {
        if(isFahrenheit){
            item.temp = Math.round((item.temp - 32) * 5/9);
        } else {
            item.temp = Math.round((item.temp * 9/5) + 32);
        }
    });

    updateForecastUI();
}

// Simular actualización aleatoria de pronóstico
function simulateForecastUpdate() {
    forecastData.forEach(item => {
        item.temp += Math.floor(Math.random() * 3) - 1; // Cambios entre -1,0,1
    });
    updateForecastUI();
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    updateForecastUI();

    // Actualización automática cada 5 minutos
    setInterval(simulateForecastUpdate, 300000);
    
    // Opcional: botón para alternar unidad
    const toggleBtn = document.getElementById('toggle-forecast-unit');
    if(toggleBtn){
        toggleBtn.addEventListener('click', toggleForecastUnit);
    }
});

