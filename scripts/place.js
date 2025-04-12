const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();


const nowtime = new Date();


currentyear.innerHTML = `${today.getFullYear()}`;



lastModified.innerHTML = document.lastModified;


//Windchill Calcuator

let windDisplay = document.getElementById("windchill");
let temperature = document.getElementById("temperature")
let windSpeed = document.getElementById("windspeed")


function calculateWindChill(temperature, windSpeed) {

  if (windSpeed > 4.8) {
    return temperature;
  }

  let windChill = 1 + 1
  //let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    /*35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);*/

  return windChill.toFixed(2);
}

windChill = calculateWindChill(temperature, windSpeed);

if (temperature <= 10 && windSpeed > 4.8) {
  windDisplay.innerHTML = `${windChill} °C`;
} else {
  windDisplay.innerHTML = `N/A buri`;
}