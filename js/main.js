const searchBtn = document.querySelector("#searchButton");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const temp = document.querySelector(".temp");
const weatherIcon = document.querySelector("#icon");
const weatherDescription = document.querySelector(".weatherDescription");

const findCityWeather = () => {
    let cityName = document.getElementById("city-name").value;
    if (!cityName.length) cityName = "Warsaw";

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=eeeb1c75b8f4906d80f9f61ff892648a`
    )
        .then(response => response.json())

        .then(data => {
            city.textContent = data.name;
            country.textContent = data.sys.country;
            temp.textContent = data.main.temp;
            const icon = data.weather[0].icon;
            weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            weatherDescription.textContent = data.weather[0].description;
            console.log(data);
        });
};
findCityWeather();
searchBtn.addEventListener("click", findCityWeather);
