(function() {
"use strict";


function FilmographyController () {
	var $ctrl = this;

}


angular.module('MoviesDb')
.component('filmography', {
	templateUrl: 'src/actor-details/actor-filmography/actor-filmography.template.html',
	controller: FilmographyController,
	bindings: {
		films: '<'
	}
});


})();