document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = event.target.search.value;
  console.log(userInput);
  const url = `https://wttr.in/${userInput}?format=j1`;

  fetch(url)
    .then((response) => response.json())
    .then((forecast) => {
      const display = document.querySelector(".display");
      display.innerHTML = `
                <h2>${forecast.nearest_area[0].areaName[0].value}</h2>
                <p><strong>Area: </strong>${forecast.nearest_area[0].region[0].value}<p>
                <p><strong>Region: </strong>${forecast.nearest_area[0].region.value}</p>
                <p><strong>Country: </strong>${forecast.nearest_area[0].country[0].value}</p>
                <p><strong>Currently: </strong>${forecast.current_condition[0].FeelsLikeF}°</p>
                `;
    });
});
