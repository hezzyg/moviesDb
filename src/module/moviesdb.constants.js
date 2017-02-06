(function() {


'use strict';


var date = new Date();


function getYear() {
	return date.getFullYear();
}


angular.module('MoviesDb')
.constant("CONST", {
	apiKey : '6d08710adb5b5c85a13d9906bc6e8646',
	movieQueryUrl : 'https://api.themoviedb.org/3/movie/',
	moviedetailsQueryUrl: 'https://api.themoviedb.org/3/search/movie',
	movieSearchUrl: 'https://api.themoviedb.org/3/search/movie',
	personSearchUrl: 'https://api.themoviedb.org/3/person/',
	discoverUrl: 'https://api.themoviedb.org/3/discover/movie',
	genresUrl: 'https://api.themoviedb.org/3/genre/movie/list',
	year: getYear(),
	month: date.getMonth()
});



})();