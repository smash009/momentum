const apiKey = "5e64673b34535dbc8e5b001eac6f5a8a";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    
    //console.log("You live in", lat, lon);

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.name, data.weather[0].main, data.main.temp);
            //console.dir(data);
            const cityTemp = document.querySelector("#weather span:first-child");
            const cityWeather = document.querySelector("#weather span:nth-child(2)");
            const cityName = document.querySelector("#weather span:last-child");
            cityTemp.innerText = `${Math.round(data.main.temp)}°C`;
            cityWeather.innerText = `${data.weather[0].main}`;
            cityName.innerText = data.name;
            //const name = data.name;
            //const weather = data.weather[0].main;
        });
    
}

function onGeoError() {
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
