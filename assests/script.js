// Global variables
var key = "86f4cd96d013d52d553577ecdc931bd8"
var cityName = document.querySelector(".name");
var currentCity = document.querySelector(".currentcity");
var  futureweather = document.querySelector(".future");
var fiveForecast = document.querySelector(".fiveday");


const temp = document.getElementById("temp");

let currentCity = "";
let currentTemp = "";
let currentWing = "";
let currentHumidity = "";

function getDataTime() {
    let 
}






fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={dd3c8bf55d91ab4371e0acb375048f53}')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });