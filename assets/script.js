var searchBox = document.querySelector("#cityTextBox")
var searchButton = document.querySelector("#search-btn")

searchButton.addEventListener("click", function(){
var cityName = searchBox.value;
console.log(cityName)
// var Apikey = "b6e6606d2e4ba5a69ba6d4d4f0f36d64"
var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b6e6606d2e4ba5a69ba6d4d4f0f36d64`

var url = `https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=b6e6606d2e4ba5a69ba6d4d4f0f36d64`

fetch(url).then(function(response){
    return response.json()
}).then(function(data){
    // console.log(data)
    var lat=data.coord.lat;
    var lon=data.coord.lon;
    

    var url2= `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=b6e6606d2e4ba5a69ba6d4d4f0f36d64`

    fetch(url2).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        var cityNameh4=document.querySelector("#cityName")
        cityNameh4.textContent=cityName

        var tempSpan=document.querySelector("#temp")
        tempSpan.textContent=data.current.temp
        
        var humiditySpan=document.querySelector("#humidity")
        humiditySpan.textContent=data.current.humidity

        var windSpeedSpan=document.querySelector("#windSpeed")
        windSpeedSpan.textContent=data.current.wind_speed

        var uvIndexSpan=document.querySelector("#uvIndex")
        uvIndexSpan.textContent=data.current.uvi
    })

})


});

