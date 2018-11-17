// JavaScript Document
new Vue({
    el: '#sample',
	mounted: function(){
		this.twowaybind="foobar";
	},
	data:	{
		name: 'Hustino',
		twowaybind: 'update this',
		link: 'https://www.google.com/',
		showName: true,
		foods:	[
			{	foodname: "apple", rating: 10},
			{	foodname: "orange", rating: 5},
			{	foodname: "choco", rating: 8},
			{	foodname: "mango", rating: 7},
		],
		posts: null,
	},
	
	methods: {
		clearName: function(){
			this.twowaybind="";
		},
		getPosts: function(){
		axios({
			method: 'get',
			url: "",
		})
		axios({
			method: 'get',
			url: "",
		})
		}
	},
});
