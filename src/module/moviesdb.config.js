(function() {


"use strict";
	

angular.module('MoviesDb')
.run(init);

init.$inject = ['$rootScope', '$state', '$document', '$stateParams'];
function init ($rootScope, $state, $document, $stateParams){ 
	$rootScope.$state = $state; 
	$rootScope.$stateParams = $stateParams; 
	$rootScope.$on('$stateChangeSuccess', function() { 
		$document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0; 
	}); 		
};


})();