function showweatherDetails(event) {
      event.preventDefault();

 const lat = parseFloat( document.getElementById('lat').value);
 const lon = parseFloat(document.getElementById('lon').value);
      const apiKey = '2cb6f32efe1bdd3b6fdb020f240a94db'; // API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&&units=metric&appid=${apiKey}`;

 fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
   
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });    
}

document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );

