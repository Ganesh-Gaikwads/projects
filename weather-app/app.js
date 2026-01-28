const apiKey = "c83b34b1248c7b3e350aaf8d32673a5a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    // Update the weather data on the page
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " % ";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    // Set the weather icon based on the weather condition
    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "Asset/images/clouds.png";
    } else if (data.weather[0].main === "Clear") {
        weatherIcon.src = "Asset/images/clear.png";
    } else if (data.weather[0].main === "Rain") {
        weatherIcon.src = "Asset/images/rain.png";
    } else if (data.weather[0].main === "Drizzle") {
        weatherIcon.src = "Asset/images/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
        weatherIcon.src = "Asset/images/mist.png";
    }

    // Show the weather info block after the city is searched
    document.querySelector(".weather").style.display = "block";
}

// Add event listener for the search button
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
