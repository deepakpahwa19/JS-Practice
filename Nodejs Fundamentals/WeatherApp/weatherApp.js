const { geoCode } = require('./utils/geocode');
const { weather } = require('./utils/weather')



geoCode('Bangalore', (error, data) => {
    if (error)
        return console.log(`Error:::: ${error}`);
    console.log('Data:::: ', data);
    weather(data.lattitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log('Weather API error:', error);
        }
        console.log(`Temperature for ${data.address} `, forecastData.temperature);
    });
});