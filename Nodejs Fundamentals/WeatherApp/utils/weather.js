const request = require('request');

const weather = (longitude, lattitude, callback) => {
    const darkSkyUrl = `https://api.darksky.net/forecast/7a14ba4e096767baa328c9580f0f525c/${longitude},${lattitude}?units=si`;

    request({ url: darkSkyUrl, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect darkSky server', undefined);
        } else if (response.body.error) {
            callback('Fetching data failed', undefined);
        } else {
            callback(undefined, {
                temperature: response.body.currently.temperature,
                MaxTemp: response.body.daily.data[0].temperatureHigh,
                LowTemp: response.body.daily.data[0].temperatureLow
            })
        }
    })

}

module.exports = { weather };