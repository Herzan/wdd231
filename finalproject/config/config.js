const LAT = "12.1364"; // Nicaragua latitude
const LON = "-86.2514"; // Nicaragua longitude (Managua)
const APIKEY = "3303bef75fc55ba83598b4ac3f5d3a4a";

const WEATHER_URL_STUB = "./data/weather.json";
const WEATHER_URL_PROD = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=metric`;

const apiURL = WEATHER_URL_PROD;

const DIRECTORY_DATA_URL_PROD = "<PRODUCTION_URL_HERE>";
const DIRECTORY_DATA_URL_STUB = "./data/business.json";
const DIRECTORY_DATA_URL_TEST = "http://127.0.0.1:8000/data/all";

const businessDataUrl = DIRECTORY_DATA_URL_TEST;