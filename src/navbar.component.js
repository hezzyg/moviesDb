(function() {


'use strict';


NavBarController.$inject = [];
function NavBarController () {
	var $ctrl = this;
}


angular.module('MoviesDb')
.component('navbarComponent', {
	templateUrl: 'src/templates/navbar.template.html',
	controller: NavBarController,
	bindings: {

	}
});


})();