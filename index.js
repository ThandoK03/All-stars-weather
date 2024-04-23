function getWeather() {
  let apiKey = "853f9fa9a83fbe77003t40d42014oc36";

  let city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city");
    return;
  }
}
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
let apiForecast = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
