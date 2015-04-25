(function(){
	var app = angular.module('BelajarAngular', []);

	app.controller('appController', function(){
		this.items = items;
	});

	var items = [
	{
		name: "Azusa",
		telp: "1111-1111-1111",
		email: "zuhrulu@gmail.com",
		age: 16,
		sisters: [
			'Yui',
			'Mio'
		],
		image: 'images/azusa 7.jpg'
	},
	{
		name: "Azusa 2",
		telp: "222-2222-2222",
		email: "zuhrulumam@gmail.com",
		age: 21,
		sisters: [],
		image: 'images/azusa 9.jpg'
	},
	];
})();

