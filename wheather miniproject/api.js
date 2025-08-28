const getWeather = async () => {
    const city = document.getElementById('input').value;
    const nameval = document.getElementById('name');
    const temp = document.getElementById('temp');
    const desc = document.getElementById('desc');
    const body = document.body;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c41b04184c9abd3f3c2fd530d3f433f1`)
        const data = await response.json()
        const weather = data.weather[0].main;

        nameval.innerText = data.name;
        temp.innerText = data.main.temp + "C";
        const weatherCondition = data.weather[0].main;
        desc.innerText = data.weather[0].main;

          if (weatherCondition.includes('Cloud')) {
            body.classList.add('cloudy');
        } else if (weatherCondition.includes('Rain')){
            body.classList.add('rainy');
        } else if ((data.main.temp) >= 30) {
            body.classList.add('clear');
        } else {
            body.classList.add('default');
        }

    } catch (error) {
        alert("city is not found");
    };
}

document.getElementById('button').addEventListener('click', getWeather)