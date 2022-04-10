// GIVEN a weather dashboard with form inputs



var citySearch = document.querySelector('.searchCity');
var searchBtn = document.querySelector('.btn-primary');
var input = document.querySelectorAll('.form-control');
var cityList = document.querySelectorAll('.list-group');
var cityName = document.querySelectorAll('.list-group-item');
var today = document.querySelector('.date');
console.log(cityName);







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