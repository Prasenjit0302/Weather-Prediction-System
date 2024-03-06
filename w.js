const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('search');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind speed');
const feels_like = document.getElementById('feelslike');
const visibility = document.getElementById('visibility');


async function checkWeather(city){
    const api_key = "45d0265f7cd9c971c2ef57f7b1935be9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());

   
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed} KMPH`;
    feels_like.innerHTML = `${Math.round(weather_data.main.feels_like - 273.15)}°C`;
    visibility.innerHTML = `${weather_data.visibility / 1000} KM`;

    
    console.log(weather_data);

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
         case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;   
    }


}

searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});



