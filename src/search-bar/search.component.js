(function () {


"use stirct";


SearchController.$inject = ['$state'];
function SearchController ($state) {
	var $ctrl = this;

	$ctrl.submit = function (searchTerm) {		
		$state.go('search', {movieName: searchTerm});		
	};
}


angular.module('MoviesDb')
.component('searchBar', {
	templateUrl: 'src/search-bar/search-bar.template.html',
	controller: SearchController
});


})();