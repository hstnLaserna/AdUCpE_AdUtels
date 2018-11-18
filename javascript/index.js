// JavaScript Document
new Vue({
    el: '#sample',
	mounted: function(){
		this.updates="foobar";
	},
	data:	{
		name: 'Hustino',
		updates: 'update thissz',
		seerooms: 'rooms.html',
		bookhotel: 'ref.html',
		removebooking: 'ref.html',
		viewbooking: 'ref.html',
		updatebooking: 'ref.html',
		showName: true,
		foods:	[
			{	foodname: "apple", rating: 10},
			{	foodname: "orange", rating: 5},
			{	foodname: "choco", rating: 8},
			{	foodname: "mango", rating: 7},
		],
		ctr: 1,
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
