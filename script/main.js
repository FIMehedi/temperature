const apiKey = '01c013d419af574ef8eb56e8ef6aa17b';
const weatherStatusShow = document.getElementById('weather-status-show');
const weatherError = document.getElementById('weather-error');


document.getElementById('searchBtn').addEventListener('click', () => {
    const cityName = document.getElementById('city-input').value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {

            if (data.cod == 200) {
                const weather = data.weather[0]
                weatherStatusShow.style.display = 'block';
                weatherError.style.display = 'none';
                document.getElementById('city-name').innerText = data.name;
                document.getElementById('weather-img').src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`
                document.getElementById('temp').innerText = data.main.temp;
                document.getElementById('status').innerText = weather.description;
            }
            else {
                weatherStatusShow.style.display = 'none';
                weatherError.style.display = 'block';
                document.getElementById('error-msg').innerText = data.message;
            }

        })
        .catch(err => {
            console.log('An error')
            console.log(err);
        });


})


