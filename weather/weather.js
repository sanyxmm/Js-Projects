const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const currentLocation = document.querySelector('.current-location');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const Humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const weather_details = document.querySelector('.weather-details');
const weather_body = document.querySelector('.weather-body');
const not_found = document.querySelector('.not-found');
const weather_btn = document.querySelector('.weather-btn');
const locate = document.querySelector('.location');
const access = document.querySelector('.accessBtn')
async function checkweather(city){
    const api_key = "cd6a0a2219b8d8d0f82772bb65bd96d6";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());
    
    // console.log(weather_data);

    if(weather_data.cod === `404`){
        weather_body.style.display = "none";
        not_found.style.display = "flex";
        return;   
    }

    not_found.style.display = "none";
    weather_body.style.display = "flex";
    currentLocation.innerHTML = `${(weather_data.name)}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 298.71)}°C`;
    description.innerHTML =`${(weather_data.weather[0].description)}`;
    Humidity.innerHTML = `${(weather_data.main.humidity)}%`;
    wind_speed.innerHTML = `${(weather_data.wind.speed)}Km/Hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "cloud.png";
            break;
        
        case 'Clear':
            weather_img.src = "clear.png";
            break;

        case 'Rain' :
            weather_img.src = "rain.png";
            break;

        case 'Mist' :
            weather_img.src = "mist.png";
            break;

        case 'Snow' :
            weather_img.src = "snow.png";
            break;

    }
}

searchBtn.addEventListener('click',() => {
    if(inputBox.value!== '')
    checkweather(inputBox.value);
inputBox.value='';
});

weather_btn.addEventListener('click',() => {
weather_body.style.display = "none";
locate.style.display = "block";
})

access.addEventListener('click' ,() =>{
    locate.style.display = "none";
    getlocation();
    getfromsessionstorage();

} )

async function fetchUserWeatherInfo(coordinates){
    const {lat,lon} = coordinates;
    // api call
    try{
        const api_key = "cd6a0a2219b8d8d0f82772bb65bd96d6";
        const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

        const weather_data = await fetch(`${url}`).then(response => response.json());
        console.log(weather_data);
        if(weather_data.cod === `404`){
            weather_body.style.display = "none";
            not_found.style.display = "flex";
            return;   
        }
    
        not_found.style.display = "none";
        weather_body.style.display = "flex";
        currentLocation.innerHTML = `${(weather_data.name)}`;
        temperature.innerHTML = `${Math.round(weather_data.main.temp - 298.71)}°C`;
        description.innerHTML =`${(weather_data.weather[0].description)}`;
        Humidity.innerHTML = `${(weather_data.main.humidity)}%`;
        wind_speed.innerHTML = `${(weather_data.wind.speed)}Km/Hr`;
    
        switch(weather_data.weather[0].main){
            case 'Clouds':
                weather_img.src = "cloud.png";
                break;
            
            case 'Clear':
                weather_img.src = "clear.png";
                break;
    
            case 'Rain' :
                weather_img.src = "rain.png";
                break;
    
            case 'Mist' :
                weather_img.src = "mist.png";
                break;
    
            case 'Snow' :
                weather_img.src = "snow.png";
                break;
    
        }
        inputBox.value='';
    }
    catch(err){
        console.log("fix the error");
    }
}

function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("no geo location support available at your location")
    }
}
function showPosition(position){
    const userCoordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates" , JSON.stringify(userCoordinates));

}

function getfromsessionstorage() {
    const localcoordinates = sessionStorage.getItem('user-coordinates');
 
    if(!localcoordinates) {
        //agr local coordinates nhi mile
        console.log("agr local coordinates nhi mile");
    }
    else{
        const coordinates = JSON.parse(localcoordinates);
        console.log(coordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

