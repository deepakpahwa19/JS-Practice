const request = require('request');

const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1552996214210&autocomplete=true&limit=1`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to geocode Server', undefined);
        } else if (response.body.features.length === 0) {
            callback(`Fetching longitude and lattitude of ${address} is failing with error`, undefined);
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                lattitude: response.body.features[0].center[1],
                address: response.body.features[0].place_name
            })
        }

    })

}

module.exports = { geoCode };