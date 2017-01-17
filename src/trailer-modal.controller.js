(function() {


'use strict';


angular.module('MoviesDb')
.controller('TrailerController', TrailerController);


TrailerController.$inject = ['$sce', '$stateParams'];
function TrailerController ($sce, $stateParams) {
	var $ctrl = this;
	$ctrl.address = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + 
					$stateParams.add + 
					"?enablejsapi=1&autoplay=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3");	
};


})();