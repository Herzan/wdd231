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
    location: "Timbuktu",
    currentTemp: 75,
    description: "Partly Cloudy",
    high: 85,
    low: 52,
    humidity: 34,
    sunrise: "7:30am",
    sunset: "9:59pm"
};

// Función para actualizar la interfaz con los datos del clima
function updateWeatherUI(data) {
    // Actualizar ubicación
    document.querySelector('.location').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${data.location}`;
    
    // Actualizar temperatura actual
    document.querySelector('.temperature').textContent = `${data.currentTemp}°F`;
    
    // Actualizar descripción
    document.querySelector('.description').textContent = data.description;
    
    // Actualizar detalles
    document.querySelector('.detail-row:nth-child(1) .detail-value').textContent = `${data.high}°`;
    document.querySelector('.detail-row:nth-child(2) .detail-value').textContent = `${data.low}°`;
    document.querySelector('.detail-row:nth-child(3) .detail-value').textContent = `${data.humidity}%`;
    document.querySelector('.detail-row:nth-child(4) .detail-value').textContent = data.sunrise;
    document.querySelector('.detail-row:nth-child(5) .detail-value').textContent = data.sunset;
    
    // Actualizar hora de última actualización
    updateLastUpdateTime();
}

// Función para actualizar la hora de última actualización
function updateLastUpdateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
    };
    const timeString = now.toLocaleTimeString('en-US', options);
    document.querySelector('.last-update').textContent = `Updated: ${timeString}`;
}

// Función para cambiar la ubicación (simulada)
function changeLocation(newLocation) {
    weatherData.location = newLocation;
    
    // Simular cambios en el clima basados en la ubicación
    if (newLocation.toLowerCase().includes("paris")) {
        weatherData.currentTemp = 62;
        weatherData.description = "Light Rain";
        weatherData.high = 68;
        weatherData.low = 55;
        weatherData.humidity = 78;
        weatherData.sunrise = "6:45am";
        weatherData.sunset = "9:15pm";
    } else if (newLocation.toLowerCase().includes("tokyo")) {
        weatherData.currentTemp = 82;
        weatherData.description = "Mostly Sunny";
        weatherData.high = 88;
        weatherData.low = 72;
        weatherData.humidity = 65;
        weatherData.sunrise = "4:45am";
        weatherData.sunset = "6:50pm";
    } else {
        // Valores por defecto (Timbuktu)
        weatherData.currentTemp = 75;
        weatherData.description = "Partly Cloudy";
        weatherData.high = 85;
        weatherData.low = 52;
        weatherData.humidity = 34;
        weatherData.sunrise = "7:30am";
        weatherData.sunset = "9:59pm";
    }
    
    updateWeatherUI(weatherData);
}

// Función para alternar entre Fahrenheit y Celsius
function toggleTemperatureUnit() {
    const tempElement = document.querySelector('.temperature');
    let currentTemp = weatherData.currentTemp;
    
    if (tempElement.textContent.includes('°F')) {
        // Convertir a Celsius
        const celsius = Math.round((currentTemp - 32) * 5/9);
        tempElement.textContent = `${celsius}°C`;
        
        // Actualizar high y low
        document.querySelector('.detail-row:nth-child(1) .detail-value').textContent = 
            `${Math.round((weatherData.high - 32) * 5/9)}°`;
        document.querySelector('.detail-row:nth-child(2) .detail-value').textContent = 
            `${Math.round((weatherData.low - 32) * 5/9)}°`;
    } else {
        // Volver a Fahrenheit
        tempElement.textContent = `${currentTemp}°F`;
        document.querySelector('.detail-row:nth-child(1) .detail-value').textContent = `${weatherData.high}°`;
        document.querySelector('.detail-row:nth-child(2) .detail-value').textContent = `${weatherData.low}°`;
    }
}

// Función para simular la actualización de datos del clima
function simulateWeatherUpdate() {
    // Simular pequeños cambios en la temperatura
    const tempChange = Math.floor(Math.random() * 3) - 1; // -1, 0, o 1
    weatherData.currentTemp += tempChange;
    
    // Simular pequeños cambios en la humedad
    const humidityChange = Math.floor(Math.random() * 5) - 2; // -2 a 2
    weatherData.humidity = Math.max(10, Math.min(90, weatherData.humidity + humidityChange));
    
    updateWeatherUI(weatherData);
}

// Inicializar la aplicación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', function() {
    // Cargar datos iniciales
    updateWeatherUI(weatherData);
    
    // Configurar evento para el botón de cambio de unidad (si existe)
    const toggleUnitBtn = document.getElementById('toggle-unit');
    if (toggleUnitBtn) {
        toggleUnitBtn.addEventListener('click', toggleTemperatureUnit);
    }
    
    // Configurar evento para el botón de actualización (si existe)
    const refreshBtn = document.getElementById('refresh-weather');
    if (refreshBtn) {
        refreshBtn.addEventListener('click', simulateWeatherUpdate);
    }
    
    // Simular actualización automática cada 5 minutos
    setInterval(simulateWeatherUpdate, 300000);
});

// Ejemplo de cómo cambiar la ubicación
// changeLocation("Paris, France");
// changeLocation("Tokyo, Japan");