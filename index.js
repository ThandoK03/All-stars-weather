function updateWeatherData(response) {}

function searchCity(city) {
  let apiKey = "853f9fa9a83fbe77003t40d42014oc36";
  let apiUrl = `"https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric"`;
  axios.get(apiUrl).then(updateWeatherData);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
