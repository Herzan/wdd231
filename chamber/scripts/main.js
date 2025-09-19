  const apiKey = "2caf78b390e05501ea5e77b5ca58bd97";
    const city = "Timbuktu";
    const units = "metric"; // o "imperial" para °F

    async function getWeather() {
      try {
        // Weather actual
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`);
        let data = await res.json();

        document.getElementById("temp").textContent = data.main.temp + "°C";
        document.getElementById("desc").textContent = data.weather[0].description;
        document.getElementById("high").textContent = data.main.temp_max + "°C";
        document.getElementById("low").textContent = data.main.temp_min + "°C";
        document.getElementById("humidity").textContent = data.main.humidity + "%";
        document.getElementById("sunrise").textContent = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").textContent = new Date(data.sys.sunset * 1000).toLocaleTimeString();

        // Pronóstico (3 días)
        let res2 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=${units}`);
        let forecastData = await res2.json();

        let forecastEl = document.getElementById("forecast");
        forecastEl.innerHTML = "";
        // mostrar solo 3 días (cada 8 intervalos = 24h)
        for (let i = 0; i < forecastData.list.length; i += 8) {
          let item = forecastData.list[i];
          let li = document.createElement("li");
          li.textContent = new Date(item.dt * 1000).toLocaleDateString() + ": " + item.main.temp + "°C";
          forecastEl.appendChild(li);
        }

      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    }

    getWeather();