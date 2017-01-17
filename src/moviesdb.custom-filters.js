(function() {


"use strict";


angular.module('MoviesDb')
.filter('lastPostion', function() {
	return function (input) {
		if (input) return input.slice((input.length - 1));		
		return [];
	}
});


})();