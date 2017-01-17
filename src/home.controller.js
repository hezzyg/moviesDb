(function() {

'use strict'


angular.module('MoviesDb')
.controller('HomeController', HomeController);


HomeController.$inject = ['randomMovies', 'genres', 'params'];
function HomeController (randomMovies, genres, params) {
	var $ctrl = this;
	
	$ctrl.moviesList = randomMovies;
	$ctrl.genres = genres;
	$ctrl.params = params;
}


})();