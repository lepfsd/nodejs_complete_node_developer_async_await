const axios = require('axios');

/*const getExchangeRate = (from, to) => {
	axios.get('http://data.fixer.io/api/latest?access_key=17c8b050e7685e9a3ead7d931b672868').then((response) => {
		const euro = 1 / response.data.rates[from];
		const rate = euro * response.data.rates[to];
		return rate;
	})
}; */

const getExchangeRate = async (from2, to) => {
	const response = await axios.get('http://data.fixer.io/api/latest?access_key=17c8b050e7685e9a3ead7d931b672868');

	//console.log(response);
	const euro = 1 / response.data.rates[from2];
	const rate = euro * response.data.rates[to];
	return rate;
	
};

/*const getCountries = (currencyCode) => {
	return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
		return response.data.map((country) => country.name);
	});
}*/

const getCountries = async (currencyCode) => {
	const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
	return response.data.map((country) => country.name);
}

getExchangeRate('USD', 'CAD').then((rate) => {
	console.log(rate);
}).catch((e) => {
	console.log(e);
}); 

getCountries('VEF').then((countries) => {
	console.log(countries);
}).catch((e) => {
	console.log(e);
});