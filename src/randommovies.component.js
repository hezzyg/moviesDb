(function () {
	

'use strict';


RandomMoviesController.$inject = ['MoviesService', 'CONST', '$rootScope', '$document', '$timeout'];
function RandomMoviesController (MoviesService, CONST, $rootScope, $document, $timeout) {
	var $ctrl = this;	

	$ctrl.showExplanation = false;
	$timeout(function() {
		$ctrl.showExplanation = true;		
		$timeout(function() {
			$ctrl.showExplanation = false;			
		}, 6000)
	}, 2000);


	$ctrl.isEmpty = function () {
		return ($ctrl.movies.length == 0);
	};


	if (!$ctrl.isEmpty()) { 
		$ctrl.year = $ctrl.params.primary_release_year;
		$ctrl.genre = function () {
			var id = $ctrl.params.with_genres;
			var list = $ctrl.genres.data.genres;			
			var i=0;
			while (list.length > i) {				
				if (list[i].id == id) {					
					return list[i].name;
				}
				i++;
			}
			return 'All';
		};
	}
	

	// LOAD MORE RESULTS ON DEMAND
	var busy = false;
	var page = $ctrl.params.page + 1;				
	$document.bind('scroll', function() {
	    if (!busy) {
		    if (($(window).scrollTop()  + 400) > ($(document).height()-$(window).height())){
		    	busy = true;
		    	MoviesService.getRandomMovies(page++)
		       .then(function(data) {		       		
		       		$ctrl.movies = $ctrl.movies.concat(data);		       		
		       		busy = false;		      
		       })
		      
		    }
		}
	});
	

	$ctrl.$onDestroy = function () {		
		$document.unbind('scroll'); 		
	};	
}


angular.module('MoviesDb')
.component ('randomMovies', {
	templateUrl: 'src/templates/radommovies.template.html',
	controller: RandomMoviesController, 
	bindings: {
		movies: '<',
		genres: '<',
		params: '<'
	}
});


})();