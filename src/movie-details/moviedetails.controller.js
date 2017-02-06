(function() {


'use strict'


angular.module('MoviesDb')
.controller('movieDetailsController', movieDetailsController);


movieDetailsController.$inject = ['$rootScope','details', 'MoviesService', 'CONST', '$timeout', '$sce', '$uibModal'];
function movieDetailsController ($rootScope, details, MoviesService, CONST, $timeout, $sce, $uibModal) {
	var $ctrl = this;
	var cancellers = [];
	var currentActor = [];


	if (details) {
		$ctrl.movie = details;

		$ctrl.showDetails = false;
		$ctrl.firstHide = false;

		$timeout(function() {
			$ctrl.firstHide = true;
		}, 1200);
		

		if ($ctrl.movie.trailers.youtube[0]) 	
			$ctrl.youtubeAdd = $ctrl.movie.trailers.youtube[0].source;	
		
		$ctrl.listLength = function (list) {		
			return (list.length - 1);
		};
		
		$ctrl.popoverTemplateUrl = 'src/actor-details/actor-info-popover.template.html';

		$ctrl.getInfo = function (id, $index) {
			
			if (!$ctrl.movie.credits.cast[$index].actor_info) {
				
				currentActor = MoviesService.getActorInfo(id, false);
				currentActor.then (
					function(response) {
						$ctrl.movie.credits.cast[$index].actor_info = response;						
					}, 
					function (reject) {

				});						
			}
			
		};
	}	
}


})();