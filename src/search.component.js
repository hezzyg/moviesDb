(function () {


"use stirct";


SearchController.$inject = ['$state'];
function SearchController ($state) {
	var $ctrl = this;

	$ctrl.submit = function (searchTerm) {
		console.log("fdgdgdf" + searchTerm );
		$state.go('search', {movieName: searchTerm});		
	};
}


angular.module('MoviesDb')
.component('searchBar', {
	templateUrl: 'src/templates/search-bar.template.html',
	controller: SearchController
});


})();