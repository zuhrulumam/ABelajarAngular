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
		image: 'images/azusa 7.jpg',
		comments: [
			{
				username: "Umam",
				text: "Test comment1"
			},
			{
				username: "Umam2",
				text: "Test comment3"
			},
		]
	},
	{
		name: "Azusa 2",
		telp: "222-2222-2222",
		email: "zuhrulumam@gmail.com",
		age: 21,
		sisters: [],
		image: 'images/azusa 9.jpg',
		comments: [
			{
				username: "Umam",
				text: "Test comment1"
			},
			{
				username: "Umam2",
				text: "Test comment3"
			},
		]
	},
	];

	app.controller('TabController', function(){
		this.tab = 1;

		this.setTab = function(tab){
			this.tab = tab;
		};

		this.isSet = function(){
			return this.tab;
		};
	});

	app.controller('CommentController', function(){
		this.comment = {};

		this.addComment = function(item){
			item.comments.push(this.comment);
			this.comment = {};
		};
	});
})();

