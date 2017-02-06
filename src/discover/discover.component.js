(function() {


'use strict';


DiscoverController.$inject = ['$state', 'MoviesService', 'CONST'];
function DiscoverController ($state, MoviesService, CONST) {
	var $ctrl=  this;

  	var oldYear = "";
  	var oldVotes = "";
  	var oldGenres = "";

  	var currentParams = MoviesService.getParams();  	
  
	$ctrl.votesInput = currentParams['vote_average.gte'];
	$ctrl.rate = currentParams['vote_average.gte'];
	$ctrl.genresInput = currentParams.with_genres;
	if (currentParams.with_genres === '') $ctrl.genresInput = '-1';
	$ctrl.yearSelector = currentParams.primary_release_year;
  	$ctrl.isReadonly = false;
  	$ctrl.yearsList = new Array(100);
  	$ctrl.yearsAdj = CONST.year - 99;
  	$ctrl.show = true;

	// fetching GENRES list
	MoviesService.getGenres()
	.then(function(response) {
		$ctrl.genres = response.data.genres;

	});
	

	$ctrl.go = function () {
		var genreId = $ctrl.genresInput;
		if ($ctrl.genresInput == -1) genreId = '';
		
		var params = {
			primary_release_year: $ctrl.yearSelector,
			'vote_average.gte': $ctrl.votesInput,
			with_genres: genreId
		};

		oldYear = $ctrl.yearSelector;
		oldVotes = $ctrl.votesInput;
		oldGenres = genreId;		

		MoviesService.saveParams(params);
		$state.transitionTo('home', {}, { reload: true });		
	};



	$ctrl.hoveringOver = function(value) {
		$ctrl.overStar = value;
		$ctrl.votesInput = value;	
	};	

	
	$ctrl.discoverSubmit = function () {
		var genreId = $ctrl.genresInput;
		if ($ctrl.genresInput == -1) genreId = '';

		if ((oldYear !== $ctrl.yearSelector) || (oldVotes !== $ctrl.votesInput) || (oldGenres !== genreId)) {
			var params = {
				primary_release_year: $ctrl.yearSelector,
				'vote_average.gte': $ctrl.votesInput,
				with_genres: genreId
			};

			oldYear = $ctrl.yearSelector;
			oldVotes = $ctrl.votesInput;
			oldGenres = genreId;		

			

			var promise = MoviesService.getRandomMovies(params);

			promise.then (function (response) {			
				$ctrl.movies = response;
			});
		}
	};
}


angular.module('MoviesDb')
.component('discoverMovies', {
	templateUrl: 'src/discover/discover-movies.template.html',
	controller: DiscoverController,	
	bindings: {
		genres: '<'
	}
});



})();