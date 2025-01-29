const apiKey = '8fa2da659a9e829cbbeb81d0f0d88fe7';  

function getWeather() {
  const city = document.getElementById('city').value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => 
      {
      const { name, sys: { country }, main: { temp, humidity }, weather, wind: { speed } } = data;
      document.getElementById('weatherResult').innerHTML = `
        <h3>${name}, ${country}</h3>
        <p>Temperature: ${temp}°C</p>
        <p>Condition: ${weather[0].description}</p>
        <p>Humidity: ${humidity}%</p>
        <p>Wind Speed: ${speed} m/s</p>
      `;
      document.getElementById('errorMessage').textContent = '';
    })
    .catch(() => {
      document.getElementById('weatherResult').innerHTML = '';
      document.getElementById('errorMessage').textContent = 'City not found';
    });
}
