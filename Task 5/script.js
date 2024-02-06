function SearchOnEnter(event) {
    if (event.key === 'Enter') {
      Search();
    }
  }
  
function Search() {
    let cityname = document.getElementById("cityname").value;
    const API_KEY = "150a0484cccd3d17bd96223c3e566259"; // My API
    const WHEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`; // weather API
  
    if (cityname === "") {
      alert("Please enter a city name");
    } else {
      fetch(WHEATHER_API)
        .then((response) => response.json())
        .then((data) => {
         
          const enteredCity = cityname.toLowerCase();
          const fetchedCity = data.name.toLowerCase();
  
          if (enteredCity === fetchedCity) {
            let city = document.getElementById("city");
            let humidity = document.getElementById("humidity");
            let wind = document.getElementById("wind");
            let temperature = document.getElementById("temperature");
            let weatherImg = document.getElementById("weatherImg");
            let weatherCondition = document.getElementById("weatherCondition");
  
            city.innerHTML = data.name + ", " + data.sys.country;
            humidity.innerHTML = data.main.humidity + "%";
            wind.innerHTML = (data.wind.speed * 3.6).toFixed(1) + " km/h";
            temperature.innerHTML = (data.main.temp - 273.15).toFixed(0) + "°C";
            weatherCondition.innerHTML = data.weather[0].main;
  
            if (data.weather[0].main.toLowerCase() === "haze") {
              weatherImg.src = 'images/clouds.png';
            } else if (data.weather[0].main.toLowerCase() === "thunderstorm") {
              weatherImg.src = 'images/thunderstorm.png';
            } else if (data.weather[0].main.toLowerCase() === "drizzle") {
              weatherImg.src = 'images/drizzle.png';
            } else if (data.weather[0].main.toLowerCase() === "rain") {
              weatherImg.src = 'images/rain.png';
            } else if (data.weather[0].main.toLowerCase() === "snow") {
              weatherImg.src = 'images/snow.png';
            } else if (data.weather[0].main.toLowerCase() === "mist") {
              weatherImg.src = 'images/mist.png';
            } else if (data.weather[0].main.toLowerCase() === "smoke") {
              weatherImg.src = 'images/clouds.png';
            } else if (data.weather[0].main.toLowerCase() === "squall") {
              weatherImg.src = 'images/squall.png';
            } else if (data.weather[0].main.toLowerCase() === "tornado") {
              weatherImg.src = 'images/thunderstorm.png';
            } else if (data.weather[0].main.toLowerCase() === "clear") {
              weatherImg.src = 'images/clear.png';
            } else if (data.weather[0].main.toLowerCase() === "clouds") {
              weatherImg.src = 'images/clouds.png';
            } else {
              weatherImg.src = 'images/default.png';
            }
          } else {
            alert("City not found!");
          }
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
          alert("City not found!");
        });
    }
  }
  
  