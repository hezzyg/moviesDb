(function () {

'use strict';


CarouselController.$inject = ['MoviesService'];
function CarouselController (MoviesService) {
	var $ctrl = this;

	var rawList = MoviesService.getRandomMovies(4);
	$ctrl.list = rawList[0];
	console.log("carousel array is: ", $ctrl.list);
}


angular.module('MoviesDb')
.component('moviesCarousel', {
	templateUrl: 'src/templates/carousel.template.html',
	controller: CarouselController,
	controllerAs: 'carouselCtrl'
	
});


})();