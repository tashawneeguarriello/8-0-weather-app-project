document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = event.target.search.value;
  console.log(userInput);
  const url = `https://wttr.in/${userInput}?format=j1`;

  fetch(url)
    .then((response) => response.json())
    .then((forecast) => {
      const feelsLike = forecast.current_condition[0].FeelsLikeF;
      helper(forecast);
      const ul = document.querySelector("#previous");
      if (ul.firstElementChild.textContent === "No previous searches.") {
        ul.firstElementChild.remove();
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${userInput}</a> - ${feelsLike}°F`;

        li.addEventListener("click", (event) => {
          event.preventDefault();
          helper(forecast);
        });
        ul.append(li);
      } else {
        const li = document.createElement("li");
        li.innerHTML = `<a href="#">${userInput}</a> - ${feelsLike}°F`;
        li.addEventListener("click", (event) => {
          event.preventDefault();
          helper(forecast);
        });
        ul.append(li);
      }
      event.target.reset();
    });
});
