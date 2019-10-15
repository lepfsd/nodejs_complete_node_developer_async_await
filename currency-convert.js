const axios = require('axios');

/*const getExchangeRate = (from, to) => {
	axios.get('http://data.fixer.io/api/latest?access_key=17c8b050e7685e9a3ead7d931b672868').then((response) => {
		const euro = 1 / response.data.rates[from];
		const rate = euro * response.data.rates[to];
		return rate;
	})
}; */

/*const getCountries = (currencyCode) => {
	return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`).then((response) => {
		return response.data.map((country) => country.name);
	});
}*/

/*const convertCurreny = (from2, to, amount) => {
	let convertedAmount;
	getExchangeRate(from2, to).then((rate) => {
		convertedAmount = (amount * rate).toFixed(2);
		return getCountries(to);
	}).then((countries) => {
		return `${amount} ${from2} is worth ${convertedAmount} ${to}. you cand spend in ${countries}`; 
	});
};*/

const getExchangeRate = async (from2, to) => {
	const response = await axios.get('http://data.fixer.io/api/latest?access_key=17c8b050e7685e9a3ead7d931b672868');

	//console.log(response);
	const euro = 1 / response.data.rates[from2];
	const rate = euro * response.data.rates[to];
	return rate;
	
};

const getCountries = async (currencyCode) => {
	const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
	return response.data.map((country) => country.name);
}

const convertCurreny = async (from2, to, amount) => {
	const rate = await getExchangeRate(from2, to);
	const countries = await getCountries(to);
	const convertedAmount = (amount * rate).toFixed(2);
	return `${amount} ${from2} is worth ${convertedAmount} ${to}. you cand spend in ${countries}`; 
}; 

getExchangeRate('USD', 'CAD').then((rate) => {
	//console.log(rate);
}).catch((e) => {
	console.log(e);
}); 

getCountries('VEF').then((countries) => {
	//console.log(countries);
}).catch((e) => {
	console.log(e);
});

convertCurreny('USD', 'CAD', 20).then((message) => {
	console.log(message);
}).catch((e) => {
	console.log(e);
});
