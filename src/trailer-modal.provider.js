(function() {


'use strict';


angular.module('MoviesDb')
.provider('modalState', modalStateProvider);


modalStateProvider.$inject = ['$stateProvider'];
function modalStateProvider ($stateProvider) {
    var provider = this;
    this.$get = function() {
        return provider;
    };    
    this.state = function(stateName, options) {
        var modalInstance;
        $stateProvider.state(stateName, {
            url: options.url,
            onEnter: function($uibModal, $state) {
                modalInstance = $uibModal.open({
			      animation: true,
			      templateUrl: 'trailerModal',
			      controller: 'TrailerController',
			      controllerAs: 'trailCtrl'			      	      
			    });			    
                modalInstance.result['finally'](function() {
                    modalInstance = null;
                    if ($state.$current.name === stateName) {
                        $state.go('^');
                    }
                });    
            },
            onExit: function() {
                if (modalInstance) {
                    modalInstance.close();
                }
            }
        });
    };
};


})();