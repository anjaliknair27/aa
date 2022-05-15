const request = require('request')
const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const process = require('process')

const address = process.argv[2];

if(!address) {

    return console.log("please provide an address!");

}


geoCode(process.argv[2], (error, {lattitude, longitude, placeName} = {} /*If I don't get a value use empty */) => {

    if (error) {
        return console.log(error)
    }

    forecast(lattitude, longitude, (error, foreCastData) => {
        if (error) {
            return console.log(error)
        }
        console.log(placeName)
        console.log(foreCastData)
    })

})


