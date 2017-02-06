(function() {


'use strict';


ResultsController.$inject = [];
function ResultsController () {
	var $ctrl = this;
}


angular.module('MoviesDb')
.component('results', {
	templateUrl: 'src/results-list/results.component.template.html',
	controller: ResultsController,
	bindings: {
		list: '<'
	}
});


})();