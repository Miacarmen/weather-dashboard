var apiKey = "7d4a585401a3f14d62935effdc6eb514";

// function to get current date
var dateTime = document.querySelector('#dateTime');
var dateDisplay = document.querySelector('.date-container');

setInterval(function() {
    dateTime.textContent = moment().format('dddd, MMMM Do YYYY, h:mm:ss a');
}, 100);





// Function to get user current location
// get current location
// get temperature for current location
// get humidity for current location
// get wind speed for current location
// get UV index for current location
// API requests
var userLocation = function() {
    navigator.geolocation.getCurrentPosition(function(success) {
        console.log(success);
    })
}


const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userLocation + "&units=imperial&appid=" + APIKey;


var getApi = function() {
    fetch(queryUrl)
        .then(function(response) {
            console.log('response', response);
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
}


// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history

// onClick of searchBtn add new button to top of list-group displaying that city name
// API request weather for searched city
// update col-sm-7 city-stats to those of the input city
// update 5 day forcast blocks for that city

// onClick of each list-group item, display clicked in city-stats



// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index



// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe


// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity


// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city