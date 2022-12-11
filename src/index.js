function toInsert(showCity) {
    let insertCity = document.querySelector("#cityCurrentTemp");
    let cityName = document.querySelector("#cityName");
    let hem = document.querySelector("#humidity");
    let wind = document.querySelector("#wind");
    let desc = document.querySelector("#description");
    insertCity.innerHTML = `${showCity.data.main.temp} °C`;
    hem.innerHTML = `${showCity.data.main.humidity}`;
    wind.innerHTML = `${showCity.data.wind.speed}`;
    cityName.innerHTML = `${showCity.data.name}`;
    desc.innerHTML = `${showCity.data.weather[0].description}`;
}

function startLocation(data2) {
    let lati = data2.coords.latitude;
    let long = data2.coords.longitude;
    let endPiont = "https://api.openweathermap.org/data/2.5/weather?"
    let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let units = "metric";
    axios.get(`${endPiont}&appid=${apiKey}&units=${units}&lat=${lati}&lon=${long}`).then(toInsert) 
    }


function start(event) {
    event.preventDefault();
    let city3 = document.querySelector("#checkcity")
    let cityName = city3.value;
    let endPiont = "https://api.openweathermap.org/data/2.5/weather?q="
    let apiKey = "f09d3949047ab6c9e3bcaf79cf61f619";
    let units = "metric";
    axios.get(`${endPiont}${cityName}&appid=${apiKey}&units=${units}`).then(toInsert) 
    }
let clickBtn = document.querySelector("#btndbclick");
let clicklocation = document.querySelector("#current-location-button");
clickBtn.addEventListener("click", start);
clicklocation.addEventListener("click", startLocation)
navigator.geolocation.getCurrentPosition(startLocation);
