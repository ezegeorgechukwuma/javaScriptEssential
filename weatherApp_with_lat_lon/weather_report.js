document.getElementById('weatherForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const lat = parseFloat(document.getElementById('lat').value);
  const lon = parseFloat(document.getElementById('lon').value);
  const apiKey = '2cb6f32efe1bdd3b6fdb020f240a94db'; //API key

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const city = data.name;
      const country = data.sys.country;
      const mapUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;

      // 🕒 Local time logic
      const timezoneOffset = data.timezone; // in seconds
      const localTime = new Date(Date.now() + timezoneOffset * 1000).toUTCString().replace("GMT", "");

      // Set content
      document.getElementById('location').innerText = `${city}, ${country}`;
      document.getElementById('weatherIcon').src = iconUrl;
      document.getElementById('temperature').innerText = `${temp}°C`;
      document.getElementById('description').innerText = description;
      document.getElementById('mapLink').href = mapUrl;
      document.getElementById('localTime').innerText = `Local Time: ${localTime}`;

      const weatherInfo = document.getElementById('weatherInfo');
      weatherInfo.classList.remove('hidden');
      weatherInfo.classList.add('show');
    })
    .catch(err => {
      console.error(err);
      document.getElementById('weatherInfo').innerText = 'Failed to fetch weather data';
    });
});

// 🌙 Theme toggle
const toggle = document.getElementById('modeToggle');
const card = document.querySelector('.weather-card');

toggle.addEventListener('change', function () {
  card.classList.toggle('dark');
  if (this.checked) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ⏪ Reset button logic
document.getElementById('resetBtn').addEventListener('click', function () {
  document.getElementById('lat').value = '';
  document.getElementById('lon').value = '';
  document.getElementById('weatherInfo').classList.add('hidden');
});

