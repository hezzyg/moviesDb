(function() {
"use strict";


angular.module('MoviesDb')
.controller('ActorController', ActorController);


ActorController.$inject = ['info', 'CONST'];
function ActorController (info, CONST) {
	var $ctrl = this;

	$ctrl.info = info;
	$ctrl.filmography = info.movie_credits.cast;

	if (info.birthday && !info.deathday) {
		var year = info.birthday.substr(0,4);
		var month = info.birthday.substr(5,2);			
		if (CONST.month < parseInt(month)) $ctrl.age = CONST.year - parseInt(year) + 1;
			else $ctrl.age = CONST.year - parseInt(year);			
	}
}


})();