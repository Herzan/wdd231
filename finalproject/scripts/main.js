const apiKey = "3303bef75fc55ba83598b4ac3f5d3a4a";
const lat = "12.1364"; // Nicaragua latitude
const lon = "-86.2514"; // Nicaragua longitude
const units = "metric";

async function getWeather() {
    try {
        // Get current weather for Nicaragua
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`);
        let data = await res.json();

        // Update weather information in the header
        document.getElementById("weather-temp").textContent = Math.round(data.main.temp) + "°C";
        document.getElementById("weather-desc").textContent = data.weather[0].description;
        
        // Update date and time
        updateDateTime();

    } catch (error) {
        console.error("Error fetching weather:", error);
        // Fallback to static data if API fails
        document.getElementById("weather-temp").textContent = "29°C";
        document.getElementById("weather-desc").textContent = "Parcialmente soleado";
        updateDateTime();
    }
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString();
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
}

// Update time every minute
setInterval(updateDateTime, 60000);

// Initialize weather and time when page loads
document.addEventListener('DOMContentLoaded', function() {
    getWeather();
    updateDateTime();
});