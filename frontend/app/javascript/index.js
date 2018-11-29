// JavaScript Document
new Vue({
    el: '#sample',

	data:	{
		/* side panel/menu items */
		menu1: '<a class="menuitem" href="../pages/view.html">See available rooms</a><div class="divider"></div>',
		menu2: '<a class="menuitem" href="../pages/book.html">Book a hotel</a><div class="divider"></div>',
		menu3: '<a class="menuitem" href="../pages/requests.html">View booking requests</a><div class="divider"></div>',
		menu4: '<a class="menuitem" href="../pages/drop.html">Remove a booking request</a><div class="divider"></div>',
		menu5: '<a class="menuitem" href="../pages/update.html">Update booking requests</a>',
		menu6: '<a class="menuitem" href="../pages/ref.html">Update booking requests</a>',
		menu6: '<a class="menuitem" href="../pages/ref.html">Update booking requests</a>',
		/* sample data */
		name: 'Hustino',
		updates: 'update thissz',
		showName: true,
		foods:	[
			{	foodname: "apple", rating: 10},
			{	foodname: "orange", rating: 5},
			{	foodname: "choco", rating: 8},
			{	foodname: "mango", rating: 7},
		],
		ctr: 1,
		/* sample json items */
		rooms:	[
		{	Room_Name: 'de Finibus Bonorum et Malorum',
			address: 'Caliphornia',
			max_guests:	Math.floor((Math.random() * 10) + 1),
			no_bedrooms:	Math.floor((Math.random() * 3) + 1),
			no_bed:	Math.floor((Math.random() * 5) + 1),
			no_bath:	Math.floor((Math.random() * 5) + 1),
			price:	(Math.floor((Math.random() * 10000) + 1000)),
			currency:	'USD',
			currency_symbol:	'$ ',
			comments_and_feedback:	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			begindate: Math.floor((Math.random() * 10) + 1),
			enddate: Math.floor((Math.random() * 10) + 10),
			guestnumbers: null,
			days_of_stay: (this.enddate - this.begindate),
			currentdate: null,
			/*
			picture1: "https://www.w3schools.com/howto/img_nature_wide.jpg",
			picture2: "https://www.w3schools.com/howto/img_snow_wide.jpg",
			picture3: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
			pictures :[{
				picture: "https://www.w3schools.com/howto/img_nature_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_snow_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_mountains_wide.jpg"}],*/
		},
		{	Room_Name: 'de Finibus Bonorum et Malorum',
			address: 'Caliphornia',
			max_guests:	Math.floor((Math.random() * 10) + 1),
			no_bedrooms:	Math.floor((Math.random() * 3) + 1),
			no_bed:	Math.floor((Math.random() * 5) + 1),
			no_bath:	Math.floor((Math.random() * 5) + 1),
			price:	(Math.floor((Math.random() * 10000) + 1000)),
			currency:	'USD',
			currency_symbol:	'$ ',
			comments_and_feedback:	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			begindate: Math.floor((Math.random() * 10) + 1),
			enddate: Math.floor((Math.random() * 10) + 10),
			guestnumbers: null,
			days_of_stay: (this.enddate - this.begindate),
			currentdate: null,
			/*
			picture1: "https://www.w3schools.com/howto/img_nature_wide.jpg",
			picture2: "https://www.w3schools.com/howto/img_snow_wide.jpg",
			picture3: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
			pictures :[{
				picture: "https://www.w3schools.com/howto/img_nature_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_snow_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_mountains_wide.jpg"}],*/
		},
		{	Room_Name: 'de Finibus Bonorum et Malorum',
			address: 'Caliphornia',
			max_guests:	Math.floor((Math.random() * 10) + 1),
			no_bedrooms:	Math.floor((Math.random() * 3) + 1),
			no_bed:	Math.floor((Math.random() * 5) + 1),
			no_bath:	Math.floor((Math.random() * 5) + 1),
			price:	(Math.floor((Math.random() * 10000) + 1000)),
			currency:	'USD',
			currency_symbol:	'$ ',
			comments_and_feedback:	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			begindate: Math.floor((Math.random() * 10) + 1),
			enddate: Math.floor((Math.random() * 10) + 10),
			guestnumbers: null,
			days_of_stay: (this.enddate - this.begindate),
			currentdate: null,
			/*
			picture1: "https://www.w3schools.com/howto/img_nature_wide.jpg",
			picture2: "https://www.w3schools.com/howto/img_snow_wide.jpg",
			picture3: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
			pictures :[{
				picture: "https://www.w3schools.com/howto/img_nature_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_snow_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_mountains_wide.jpg"}],*/
		},
		{	Room_Name: 'de Finibus Bonorum et Malorum',
			address: 'Caliphornia',
			max_guests:	Math.floor((Math.random() * 10) + 1),
			no_bedrooms:	Math.floor((Math.random() * 3) + 1),
			no_bed:	Math.floor((Math.random() * 5) + 1),
			no_bath:	Math.floor((Math.random() * 5) + 1),
			price:	(Math.floor((Math.random() * 10000) + 1000)),
			currency:	'USD',
			currency_symbol:	'$ ',
			comments_and_feedback:	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			begindate: Math.floor((Math.random() * 10) + 1),
			enddate: Math.floor((Math.random() * 10) + 10),
			guestnumbers: null,
			days_of_stay: (this.enddate - this.begindate),
			currentdate: null,
			/*
			picture1: "https://www.w3schools.com/howto/img_nature_wide.jpg",
			picture2: "https://www.w3schools.com/howto/img_snow_wide.jpg",
			picture3: "https://www.w3schools.com/howto/img_mountains_wide.jpg",
			pictures :[{
				picture: "https://www.w3schools.com/howto/img_nature_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_snow_wide.jpg",
				picture: "https://www.w3schools.com/howto/img_mountains_wide.jpg"}],*/
		},
		]
		
	},
	
	methods: {
		clearThis: function(){
			this.name=this.updates;
			this.updates="";
			this.ctr++;
		},
		setHustino: function(){
			this.name="Hustino";
			xx = 'huwaw';
			this.updates=xx;
		},
	},
});
