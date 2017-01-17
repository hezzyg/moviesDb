(function() {

'use strict';


angular.module('MoviesDb')
.controller ('FullCastController', FullCastController);


FullCastController.$inject = ['movie', 'MoviesService'];
function FullCastController (movie, MoviesService) {
	var $ctrl = this;
	$ctrl.movie = movie;

	var crew = movie.credits.crew;	
	var jobs = {};
	var dep;	
	
	for (var i = 0; crew.length > i; i++) {		
			dep = crew[i].department; 
			if (!jobs[dep]) jobs[dep] = [];
			jobs[dep].push(crew[i]);
	}

	$ctrl.jobs = jobs;	
}


})();