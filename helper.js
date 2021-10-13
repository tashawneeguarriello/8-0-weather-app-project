const helper = (forecast) => {
  const area = forecast.nearest_area[0].areaName[0].value;
  const region = forecast.nearest_area[0].region[0].value;
  const country = forecast.nearest_area[0].country[0].value;
  const feelsLike = forecast.current_condition[0].FeelsLikeF;

  const todayAvg = forecast.weather[0].avgtempF;
  const todayMax = forecast.weather[0].maxtempF;
  const todayMin = forecast.weather[0].mintempF;

  const tomorrowAvg = forecast.weather[1].avgtempF;
  const tomorrowMax = forecast.weather[1].maxtempF;
  const tomorrowMin = forecast.weather[1].mintempF;

  const dayAfterAvg = forecast.weather[2].avgtempF;
  const dayAfterMax = forecast.weather[2].maxtempF;
  const dayAfterMin = forecast.weather[2].mintempF;

  const display = document.querySelector("#current-city");
  display.innerHTML = `
                    <h2>${area}</h2>
                    <p><strong>Area: </strong>${area}<p>
                    <p><strong>Region: </strong>${region}</p>
                    <p><strong>Country: </strong>${country}</p>
                    <p><strong>Currently: </strong>${feelsLike}°</p>
                    `;
  const today = document.querySelector("#today");
  today.innerHTML = `
                        <h3>Today</h3>
                        <p><strong>Average Temperature:</strong> ${todayAvg}˚F</p>
                        <p><strong>Max Temperature:</strong> ${todayMax}˚F</p>
                        <p><strong>Min Temperature:</strong> ${todayMin}˚F</p> `;

  const tomorrow = document.querySelector("#tomorrow");
  tomorrow.innerHTML = ` 
                        <h3>Tomorrow</h3>
                        <p><strong>Average Temperature:</strong> ${tomorrowAvg}˚F</p>
                        <p><strong>Max Temperature:</strong> ${tomorrowMax}˚F</p>
                        <p><strong>Min Temperature:</strong> ${tomorrowMin}˚F</p>`;

  const dayAfter = document.querySelector("#dayAfter");
  dayAfter.innerHTML = `     
                    
                        <h3>Day After Tomorrow</h3>
                        <p><strong>Average Temperature:</strong> ${dayAfterAvg}˚F</p>
                        <p><strong>Max Temperature:</strong> ${dayAfterMax}˚F</p>
                        <p><strong>Min Temperature:</strong> ${dayAfterMin}˚F</p>
                   
                `;
};

if (typeof helper === "undefined") {
  helper = undefined;
}

if (typeof module !== "undefined") {
  module.exports = helper;
}
