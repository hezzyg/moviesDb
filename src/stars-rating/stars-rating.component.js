(function() {


"use strict";


StarsController.$inject = [];
function StarsController () {
	var $ctrl = this;	


	$ctrl.getNumber= function (num) {		
		var array = new Array(Math.floor(num));		
		return array;
	};


	$ctrl.isDecimal = function (num) {
		if (num == Math.floor(num)) {
			return false;
		} else return true;
	};

}


angular.module('MoviesDb')
.component('starsRating', {
	templateUrl: 'src/stars-rating/stars-rating.template.html',
	controller: StarsController,
	bindings: {
		rating: '<'
	}
});


})();