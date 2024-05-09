function displayTemperature(response) {
  let temperatureElement = document.querySelector("temp");
  let temperature = math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = response.data.temperature.current;
}

function searchCity(city) {
  let apiKey = "853f9fa9a83fbe77003t40d42014oc36";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}}`;

  axios.get(apiUrl).then(displayTemperature);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchCity("Lisbon");
