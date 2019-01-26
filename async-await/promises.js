const usersArr = [{
	id: 1,
	name: 'Ayush Gulati',
	city: 'NY'
}, {
	id: 2,
	name: 'Divyanshu Bhatnagar',
	city: 'LA'
}]

const citiesArr = [{
	id: 1,
	name: 'NY',
	address: 'St. 42, House Number 2, Landsmark'
}, {
	id: 2,
	name: 'LA',
	address: 'St. 4, House Number 1, Queens Land'
}, {
	id: 3,
	name: 'LA',
	address: 'St. 9, House Number 22, Georgia'
}]

const getCities = (name) => {
	return new Promise((resolve, reject) => {
		const cities = citiesArr.filter(city => city.name === name);
		if (cities) resolve(cities);
		else reject (`No city found with this name`)
	});
}

const getUser = (id) => {
	return new Promise((resolve, reject) => {
		const user = usersArr.find((item) => item.id=== id);
		if(user) resolve(user);
		else reject(`Unable to find user with id ${id}.`)
	});
}

const user = getUser(2)
	.then(user => console.log(user))
	.catch(err => console.log(err))

const cities = getCities('LA')
	.then(cities => console.log(cities))
	.catch(e => console.log(e));