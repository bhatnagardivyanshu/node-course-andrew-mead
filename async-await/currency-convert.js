const axios = require('axios');
const currencyAPI = 'http://data.fixer.io/api/latest?access_key=974d9b103df333465b93bdd826b080d4'
const countriesAPI = 'https://restcountries.eu/rest/v2/currency/';


const getExchangeRates = async (from, to) => {
	const response = await axios.get(currencyAPI);
	const euro = 1 / response.data.rates[from];
	const rate = euro * response.data.rates[to];
	return rate;
}

const getCountries = async (currency) => {
	const response = await axios.get(`${countriesAPI}${currency}`);
	return response.data.map(country => country.name);
}

const convertCurrency = async (from, to, amount) => {

	const rate = await getExchangeRates(from, to);
	const countries = await getCountries(to);
	const convertedAmount = (amount * rate).toFixed(2);
	
	console.log({rate, amount, convertedAmount, countries});
	return `${amount} ${from} is worth ${convertedAmount} ${to}. You can spend them is ${countries}`;
}

console.log(convertCurrency('USD', 'INR', 100))

// getExchangeRates('USD', 'INR').then(async rate => {
// 	console.log({rate});
// 	let countries = await getCountries('INR')
// 	console.log({countries});
// });
