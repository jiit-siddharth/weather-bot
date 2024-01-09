"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const grammy_1 = require("grammy");
const apiKey = '39852f71534ad57fe439c90ebf67c2a4';
const city = 'New Delhi';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
let weatherData;
function getdata() {
    axios_1.default
        .get(apiUrl)
        .then((response) => {
        weatherData = response.data;
        console.log(`Current weather in ${city}:`);
        console.log(`Temperature: ${weatherData.main.temp} °C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
    })
        .catch((error) => {
        console.error('Error fetching weather data:', error.message);
    });
    return weatherData;
}
const bot = new grammy_1.Bot('6464046474:AAEpBo7tIHVCcFVNkFy6TZaZklH9a1TQHZM');
bot.on('message', (ctx) => {
    getdata();
    ctx.reply('Temp in Delhi-' + weatherData.main.temp);
});
bot.start();
