module.exports = function() {
	var config = {

		//all the js that i want to vet
		alljs: [
			'./src/**/*.js',
			'./*.js'
		]
	};

	return config;
};