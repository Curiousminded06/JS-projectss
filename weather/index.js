
const apiKey="7038c275b759dfb5e3159826d0c38a3f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather_icon");
        async function checkWeather(city){
            const response =await fetch(apiUrl + city +  `&appid=${apiKey}`);

            if(response.status==404){
                document.querySelector(".error").style.display="block";
                document.querySelector(".weather").style.display="none";
            }
            else{
                var data= await response.json();
            console.log(data);


            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c";
            document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
            document.querySelector(".wind").innerHTML=data.wind.speed +" kmph";

            if(data.weather[0].main=="Clouds"){
                weatherIcon.src="./images/clouds.png"
            }
            else if(data.weather[0].main=="Clear"){
                weatherIcon.src="./images/clear.png"
            }
            else if(data.weather[0].main=="Drizzle"){
                weatherIcon.src="./images/drizzle.png"
            }
            else if(data.weather[0].main=="Rain"){
                weatherIcon.src="./images/rain.png"
            }
            else if(data.weather[0].main=="Mist"){
                weatherIcon.src="./images/mist.png"
            }
            else if(data.weather[0].main=="Snow"){
                weatherIcon.src="./images/snow.png"
            }
            document.querySelector(".weather").style.display="block";
            document.querySelector(".error").style.display="none";
            }

            

        }
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);     
})
 








































// const apiKey="7038c275b759dfb5e3159826d0c38a3f";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather_icon");
// const weather = document.querySelector(".weather");
// const error = document.querySelector(".error");

// async function checkWeather(city) {
//   try {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     const data = await response.json();

//     weather.style.display = "block";
//     error.style.display = "none";

//     updateWeatherData(data);
//   } catch (err) {
//     console.error("Error fetching weather:", err);
//     error.style.display = "block";
//     weather.style.display = "none";
//   }
// }

// function updateWeatherData(data) {
//   document.querySelector(".city").innerHTML = data.name;
//   document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//   document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

//   const weatherCondition = data.weather[0].main;
//   weatherIcon.src = `./images/${weatherCondition}.png`; // Use template literal for image path
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });