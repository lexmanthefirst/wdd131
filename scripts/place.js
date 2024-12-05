"use strict";

const windChillButton = document.querySelector(".calc-wind-chill");
const temp = document.getElementById("temp");
const windSpan = document.getElementById("wind");
const windChill = document.getElementById("wind-chill");

const temperature = 50; // Adjusted for metric unit compatibility
const wind = 20;
const condition = "Partly Cloudy";

temp.innerHTML = temperature + "&deg;C";
windSpan.innerHTML = wind + " km/h";
windChill.innerHTML = "N/A";

const calcWindChill = (T, V) => {
  return (
    35.74 +
    0.6215 * T -
    35.75 * Math.pow(V, 0.16) +
    0.4275 * T * Math.pow(V, 0.16)
  );
};

windChillButton.addEventListener("click", () => {
  let chill = "N/A";

  // Check if conditions are suitable for wind chill calculation
  if (temperature <= 50 && wind > 4.8) {
    // Metric units
    chill = calcWindChill(temperature, wind);
    windChill.innerHTML = chill.toFixed(2) + "&deg;C";
  } else {
    windChill.innerHTML = chill;
  }
});
