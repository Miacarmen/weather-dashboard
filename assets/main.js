// GIVEN a weather dashboard with form inputs
var currWeather = document.querySelector('current-weatther');
var time = document.getElementById('time');
var date = document.getElementById('date');

var cityStats = document.getElementById('stats');
var statItem = document.querySelectorAll('stat-item');
var currDate = document.querySelector('current-date');
var currTemp = document.querySelector('current-temp');
var currHumidity = document.querySelector('current-humidity');
var currWind = document.querySelector('current-wind');
var currUv = document.querySelector('current-uv-index');


var locationContainer = document.querySelector('location-container');
var timeZone = document.getElementById('time-zone');
var country = document.getElementById('country');

var forecastContainer = document.querySelector('forecast-container');
var today = document.getElementById('current-stats');
var currentDay = document.querySelector('current-day');
var amTemp = document.querySelector('am-temp');
var pmTemp = document.querySelector('pm-temp');

var forcast = document.getElementById('weather-forecast');
var forecastItem = document.querySelectorAll('forecast-item');
var day = document.querySelectorAll('day');



// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// onClick of searchBtn add new button to top of list-group displaying that city name
// API request weather for searched city
// update col-sm-7 city-stats to those of the input city
// update 5 day forcast blocks for that city

// onClick of each list-group item, display clicked in city-stats



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

// get current date
// moment.js
// moment().format('MMMM Do YYYY);


// get current location
// get temperature for current location
// get humidity for current location
// get wind speed for current location
// get UV index for current location
// API requests



// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
var requestURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={7d4a585401a3f14d62935effdc6eb514}';

var getApi = function() {
    fetch(requestUrl)
        .then(function(response) {
            console.log('response', response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
}