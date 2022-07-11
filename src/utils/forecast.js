const request = require("request");

const forecast = (lat, long, callback) => {
	const url =
		"http://api.weatherapi.com/v1/current.json?key=14a4bda393f34825a0a134214222206&q=" +
		lat +
		"," +
		long +
		"&aqi=yes";

	request({ url, json: true }, (error, {body}) => {
		if (error) {
			callback("Unable to connect to weather service!", undefined);
		} else if (body.error) {
			callback(body.error.message, undefined);
		} else {
			callback(
				undefined,
				body.current.condition.text +
					". It is currently " +
					body.current.temp_c +
					" degree celsius out in " +
					body.location.name +
					", " +
					//body.location.region +
					body.location.tz_id +
					", " +
					body.location.country +
					". There is a " +
					body.current.precip_in +
					"% chance of rain." +
					"The wind speed is " +
					body.current.wind_kph +
					" kph and it currently feels like " +
					body.current.feelslike_c +
					". degree celsius outside."
			)}
	});
};

module.exports = forecast;
