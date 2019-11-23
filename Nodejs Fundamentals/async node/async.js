const request = require('request'), url = "https://api.darksky.net/forecast/7a14ba4e096767baa328c9580f0f525c/37.8267,-122.4233?units=si";

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log(error); // error is linked to the low level error like unable to reach to the server
    } else if (response.body.error) {
        console.log(response.body.error); // this error will be returned from the server.
    } else {
        console.log(`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability} % chance of rain`);
    }
});


const geoCodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/rlajfepowqerhjkasdf.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1552996214210&autocomplete=true&limit=1'

request({ url: geoCodeURL, json: true }, (error, response) => {
    if (error) {
        console.log(`Unable to connect to server:::: ${error}`);
    } else if (response.body.features.length === 0) {
        console.log(`GeoCode API is failing with the error`);
    } else {
        console.log(`Langitude is ${response.body.features[0].center[0]} and lattitude is ${response.body.features[0].center[1]}`);
    }
})