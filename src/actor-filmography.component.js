(function() {
"use strict";


function FilmographyController () {
	var $ctrl = this;

}


angular.module('MoviesDb')
.component('filmography', {
	templateUrl: 'src/templates/actor-filmography.template.html',
	controller: FilmographyController,
	bindings: {
		films: '<'
	}
});


})();