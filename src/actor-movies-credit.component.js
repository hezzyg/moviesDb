(function() {
"use strict";


function MoviesCreditController () {
	var $ctrl = this;

}


angular.module('MoviesDb')
.component('movieCredits', {
	templateUrl: 'src/templates/actor-movies-credit.template.html',
	controller: MoviesCreditController,
	bindings: {
		movieslist: '<'
	}
});


})();