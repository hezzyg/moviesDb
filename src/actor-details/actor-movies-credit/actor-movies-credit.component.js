(function() {
"use strict";


function MoviesCreditController () {
	var $ctrl = this;

}


angular.module('MoviesDb')
.component('movieCredits', {
	templateUrl: 'src/actor-details/actor-movies-credit/actor-movies-credit.template.html',
	controller: MoviesCreditController,
	bindings: {
		movieslist: '<'
	}
});


})();