const locationInput = document.getElementById("input-loc");
const searchBtn = document.querySelector(".fa-magnifying-glass");
const weatherImage = document.querySelector(".weather-img");
const temperature = document.querySelector(".temp");
const minTemp = document.querySelector(".min-temp");
const maxTemp = document.querySelector(".max-temp");
const humidity = document.querySelector(".humidity-data");
const windSpeed = document.querySelector(".wind-speed");
const loc = document.querySelector(".location");
const weatherName = document.querySelector(".weather-name");
const errorMessage = document.querySelector(".error-message");
const weatherInfoContainer = document.querySelector(".weather-info-container");
const weatherElement = document.querySelector(".weather-element");
const frontCover = document.querySelector(".front-cover");
const footer = document.querySelector(".footer");


searchBtn.addEventListener("click", ()=>{
//value set for input element
let inputCity = locationInput.value;

//fetch API promise function
const fetchApi = async () => {
    const api_key = "91993fa2d0d901f800e0501477b94c7e";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    if(data.cod == "404" || inputCity == ""){
        errorMessage.style.display = "block";
        weatherInfoContainer.style.display = "none";
    }
    else{
        errorMessage.style.display = "none";
        weatherInfoContainer.style.display = "flex";
        weatherElement.style.display = "flex";
    }
    frontCover.style.display = "none";
    footer.style.display = "none";
    //weather data input into html elent
    weatherName.innerHTML = data.weather[0].main;
    temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    windSpeed.innerHTML = `${data.wind.speed}km/h`;
    loc.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;

    //weather image set logic 
    if(data.weather[0].icon == "01d"){
        weatherImage.src = "Image/sun-1837376_640.png";
    }
    else if(data.weather[0].icon == "01n"){
        weatherImage.src = "Image/moon.png";
    }
    else if(data.weather[0].icon == "10d" || data.weather[0].icon == "10n"){
        weatherImage.src = "Image/rain.png";
    }
    else if(data.weather[0].icon == "11d" || data.weather[0].icon == "11n"){
        weatherImage.src = "Image/thunderstorm.png";
    }
    else if(data.weather[0].icon == "13d" || data.weather[0].icon == "13n"){
        weatherImage.src = "Image/snow.png";
    }
    else if(data.weather[0].icon == "50d" || data.weather[0].icon == "50n"){
        weatherImage.src = "Image/mist.png";
    }
    else if(data.weather[0].icon == "02d" || data.weather[0].icon == "02n"){
        weatherImage.src = "Image/cloud.png";
    }
    else if(data.weather[0].icon == "03d" || data.weather[0].icon == "03n"){
        weatherImage.src = "Image/cloud.png";
    }
    else if(data.weather[0].icon == "04d" || data.weather[0].icon == "04n"){
        weatherImage.src = "Image/cloud.png";
    }
    else{
        weatherImage.src = "Image/sun-1837376_640.png";
    } 
}
    fetchApi(); 
})
