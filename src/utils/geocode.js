
const request = require('request')

const geoCode = (address, callback) => {
	const url = 'http://api.weatherapi.com/v1/current.json?key=14a4bda393f34825a0a134214222206&q=' + address + '&aqi=yes'

	request({url, json: true}, (error, {body}) => {
		if(error) {
				callback('Unable to connect to location services!', undefined)
		} else if (body.error) {
			callback(body.error.message, undefined)
		}
		else {
			callback(undefined, {
				latitude: body.location.lat,
				longitude: body.location.lon,
				//location: body.location.region + ', ' + body.location.tz_id + ', ' + body.location.country
				location: body.location.tz_id + ', ' + body.location.country
			})
		}
	})
}


module.exports = geoCode


