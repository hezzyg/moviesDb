(function() {


'use strict';


angular.module('MoviesDb')
.config(RoutesConfig)


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'modalStateProvider'];
function RoutesConfig ($stateProvider, $urlRouterProvider, modalStateProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'src/home/home.template.html',		
		controller: 'HomeController as homeCtrl',
		resolve: {
			randomMovies: ['MoviesService', function (MoviesService) {
				return MoviesService.getRandomMovies(1);
			}],
			genres: ['MoviesService', function (MoviesService) {
				return MoviesService.getGenres();
			}],
			params: ['MoviesService', function (MoviesService) {
				return MoviesService.getParams();
			}]
		}
	})	
	.state ('search', {
		url: '/search/{movieName}',
		templateUrl: 'src/search-results/search-results.template.html',
		controller: 'SearchResultsController',
		controllerAs: 'searchResultsCtrl',
		resolve: {
			results: ['MoviesService', '$stateParams', function (MoviesService, $stateParams) {
				return MoviesService.getMoviesSearchResultsByName($stateParams.movieName);
			}]
		}
	})
	.state ('movieDetails', {
		url: '/movie-details/{movieId}',
		templateUrl: 'src/movie-details/moviedetails.template.html',
		controller: 'movieDetailsController',
		controllerAs: 'movieDetailsCtrl',
		resolve: {
			details: ['MoviesService', '$stateParams', function (MoviesService, $stateParams) {
				return MoviesService.getMovieDetailsById($stateParams.movieId);
			}]
		}
	})
	.state ('actorDetails', {
		url: '/actor-details/{actorId}',
		templateUrl: 'src/actor-details/actor-details.template.html',
		controller: 'ActorController',
		controllerAs: 'actorCtrl',
		resolve: {
			info: ['MoviesService', '$stateParams', function (MoviesService, $stateParams) {
				return MoviesService.getActorInfo($stateParams.actorId, true);
			}]
		}
	})
	.state('fullCast', {
		url: '/full-cast/{movieId}',
		templateUrl: 'src/full-cast/full-cast.template.html',
		controller: 'FullCastController',
		controllerAs: 'FullCastCtrl',
		resolve: {
			movie: ['MoviesService', '$stateParams', function (MoviesService, $stateParams) {
				return MoviesService.getMovieDetailsById($stateParams.movieId);
			}]
		}
	});

	// Youtube Modal State
	modalStateProvider.state('movieDetails.trailer', {
        url: '/trailer/{add}',
        templateUrl: 'trailerModal',
        resolve: {
	        youtubeAdd: ['$stateParams', function ($stateParams) {
		       return $stateParams.add;
		    }]
	    }
    });
}


})();