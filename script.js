// script.js

const apiKey = '3d93a712b1fa9bd5b01b91a0724cc387'; // Replace with your API key from OpenWeatherMap or other weather service

function fetchWeather() {
    const locationInput = document.getElementById('locationInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data to see the structure

            // Display weather information
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}
