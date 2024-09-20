const API_KEY = "8d69f3aa9ec61ad36479d9c702a9db5a"

function onGeoOk(position) {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    fetch(url).then((response)=> response.json())
    .then((data) => {
        const currentWeather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")

        city.innerText = data.name
        currentWeather.innerText = `${data.weather[0].main} / ${data.main.temp}`


    })
}


function onGeoError(){
    alert("error")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
//https://home.openweathermap.org/api_keys




