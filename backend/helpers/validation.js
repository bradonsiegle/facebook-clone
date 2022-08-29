const User = require('../models/User');

exports.validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
};

exports.validateLength = (text, min, max) => {
	return text.length >= min && text.length <= max;
};

exports.validateUsername = async (username) => {
	let a = false;

	do {
		let check = await User.findOne({ username });
		if (check) {
			//change username
			username = username + Math.floor(Math.random() * 10000);
			a = true;
		} else {
			a = false;
		}
	} while (a);
	return username;
};
