
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;


function calculateWindChill(temperature, windSpeed) {
    if ((temperature <= 10 && windSpeed > 4.8) || (temperature <= 50 && windSpeed > 3)) {
        return Math.round(13.12 + 0.6215 * temperature -  11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16));
    } else {
        return "N/A";
    }
}

let temperature = 25;
let windSpeed = 15;

let windChill = calculateWindChill(temperature, windSpeed);

document.getElementById('windChill').textContent = windChill === "N/A" ? windChill : `${windChill}°C`;