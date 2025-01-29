const apiKey = '8fa2da659a9e829cbbeb81d0f0d88fe7'; 

function getWeather() {
  const city = document.getElementById('city').value.trim();
  if (!city) return alert("Enter a city");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('City not found');
      }
      return res.json();
    })
    .then(data => {
      const name = data.name;
      const temp_min = data.main.temp_min;
      const temp_max = data.main.temp_max;
      const humidity = data.main.humidity;

      const tableBody = document.querySelector('#weatherTable tbody');
      tableBody.innerHTML = `<tr><td>${name}</td><td>${temp_min}°C</td><td>${temp_max}°C</td><td>${humidity}%</td></tr>`;
    })
    .catch(err => alert(err.message));
}
