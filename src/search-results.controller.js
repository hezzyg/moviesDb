(function() {


'use strict';


angular.module('MoviesDb')
.controller('SearchResultsController', SearchResultsController);


SearchResultsController.$inject = ['$stateParams', 'results'];
function SearchResultsController ($stateParams, results) {
	var $ctrl =  this;

	$ctrl.term = $stateParams.movieName;
	$ctrl.list = results.results;	
	$ctrl.galleryView = false;
	$ctrl.byYearDsc = false;	
	$ctrl.byYear = false;
	$ctrl.byRelevance = true;
	$ctrl.results = results;

	function sortArr(arr) {

		if ($ctrl.byYearDsc) {
		return arr.concat().sort(function(a, b) {
			    return parseFloat(b.release_date) - parseFloat(a.release_date);
			});		
		} else {
			return arr.concat().sort(function(a, b) {
			    return parseFloat(a.release_date) - parseFloat(b.release_date);
			});		
		}
	};


	$ctrl.sortByYear =  function() {				
		
		$ctrl.list = sortArr(results.results);
		$ctrl.byYear = true;
		$ctrl.byRelevance = false;
		$ctrl.byYearDsc = !$ctrl.byYearDsc;		
	};


	$ctrl.sortByRelevance = function () {		
		$ctrl.list = results.results;
		$ctrl.byRelevance = true;
		$ctrl.byYear = false;		
	};

}


})();