(function() {


'use strict';


MovieCardController.$inject = ['$timeout', '$document'];
function MovieCardController ($timeout, $document) {
	var $ctrl = this;	

	$ctrl.showDetails = false;
	$ctrl.firstHide = false;

	$timeout(function() {
		$ctrl.firstHide = true;
	}, 500);
}


angular.module('MoviesDb')
.component('movieCard', {
	templateUrl: 'src/movie-card/movie-card.template.html',
	controller: MovieCardController,
	bindings: {
		movie: '<'
	}
});


})();