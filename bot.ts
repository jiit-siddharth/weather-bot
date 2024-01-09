import axios from 'axios'

import { Bot } from 'grammy'

const apiKey = ''
const city = 'New Delhi'

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
let weatherData: any

function getdata() {
    axios
        .get(apiUrl)
        .then((response) => {
            weatherData = response.data
            console.log(`Current weather in ${city}:`)
            console.log(`Temperature: ${weatherData.main.temp} °C`)
            console.log(`Description: ${weatherData.weather[0].description}`)
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error.message)
        })
    return weatherData
}

const bot = new Bot('6464046474:AAEpBo7tIHVCcFVNkFy6TZaZklH9a1TQHZM')

getdata()

bot.on('message', (ctx) => ctx.reply('Temp in Delhi-' + weatherData.main.temp))

bot.start()
