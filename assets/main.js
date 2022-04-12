var apiKey = "7d4a585401a3f14d62935effdc6eb514";

// Function to get current date
var dateTime = document.querySelector('#dateTime');

setInterval(function() {
    dateTime.textContent = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}, 100);



// Function to get searched city stats

var getApi = function(city) {
    // API request for searched city
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;


    fetch(queryURL)
        .then(function(response) {
            console.log('response', response);
            return response.json();
        })
        // THEN then display current temp, humiditiy, wind speed, uv index
        // current.temp, current.humidity, current.wind_speed, current.uvi
        .then(function(data) {
            console.log(data);
            forecast(data.coord.lat, data.coord.lon);
            document.querySelector('.city').textContent = data.name;
            document.querySelector('.temp').textContent = 'Temperature: ' + data.main.temp;
            document.querySelector('.wind').textContent = 'Wind Speed: ' + data.wind.speed;
            document.querySelector('.humidity').textContent = 'Humidity: ' + data.main.humidity;
            // document.querySelector('.uvIndex').textContent = 'UV Index: ' + current.uvi;
            // call forecast function to get searched City's forecast data

        });
}



// function to handle input submission
var formInput = document.querySelector('.formInput');
var searchBtn = document.querySelector('#searchBtn');

// callback Fn
searchBtn.addEventListener('click', function(event) {
    // prevent refresh default
    event.preventDefault();
    var citySearch = formInput.value;
    console.log(citySearch);
    getApi(citySearch);

    // create list item 'city' as button, append to HTML
    var searchHistory = document.querySelector('.search-history');
    var newList = document.createElement('ul');


    // add onClick to button that grabs txt from btn and runs getApi function, hand it txt from button

    // local storage
});

// onClick of searchBtn that city is added to the search history displayed as a 'button' 
// create onClick function for created li button above, here






// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon (current.weather.icon OR daily.weather.icon)  representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index




// FORECAST
// daily.temp, daily.humidity, daily.wind_speed, daily.uvi
var forecastContainer = document.querySelector('.forecast-container'),
    futureTemp = forecastContainer.querySelector('.for-temp'),
    futureWind = forecastContainer.querySelector('.for-wind'),
    futureHumidity = forecastContainer.querySelector('.for-humidity'),
    futureUV = forecastContainer.querySelector('.for-uvIndex');


function forecast(lat, lon) {
    var queryUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly,alerts&units=imperial&appid=' + apiKey;

    fetch(queryUrl)
        .then(function(response) {
            console.log('response', response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);

            forecastContainer.querySelector('.for-temp').textContent = 'Temperature: ' + data.daily[1].temp.day;
            forecastContainer.querySelector('.for-wind').textContent = 'Wind Speed: ' + data.daily[1].wind_speed;
            forecastContainer.querySelector('.for-humidity').textContent = 'Humidity: ' + data.daily[1].humidity;
            forecastContainer.querySelector('.for-uvIndex').textContent = 'UV Index: ' + data.daily[1].uvi;


            // for loop to display only 5 days
            // create forecast cards inside loop
            // append card to html

        });
}



// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
function clickedCity() {
    // onClick of each list-group item, display clicked in city-stats
}



function uvIndexStats() {

}
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity