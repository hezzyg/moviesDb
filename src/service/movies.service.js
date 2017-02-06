(function() {


'use sttrict'


angular.module('MoviesDb')
.service('MoviesService', MoviesService);


MoviesService.$inject = ['$http', '$q', 'CONST'];
function MoviesService ($http, $q, CONST) {
	var service = this;	
	var params = {
				primary_release_year: CONST.year.toString(),
				'vote_average.gte': 5,
				with_genres: ''
			};

	service.selectedGenre = params.with_genres;


	service.getRandomMovies = function (page) {	
		params.api_key =  CONST.apiKey;
		params.language =  'en-US';
		params.sort_by =  'popularity.desc';
		params.include_adult =  'false';
		params.page = page;				

		return $http({
			method: 'GET',
			url: CONST.discoverUrl,
			params: params
		})
		.then(function(response) {			
			return response.data.results;
		}, function (reject) {
			return null;
		});
	};


	service.getGenres = function () {	
		return $http ({
			method: 'GET', 
			url: CONST.genresUrl,
			params: {
				api_key: CONST.apiKey,
				language: 'en-US'
			}
		});
	};


	service.saveParams = function (p) {
		params = p;
		service.selectedGenre = p.with_genres;
	};


	service.getParams = function () {
		return params;
	};		
	

	//service for search result page
	service.getMoviesSearchResultsByName = function (movieName) {		
		if (movieName) {			
			movieName = decodeURIComponent(movieName);
			movieName = movieName.replace(/ /g, "+");						

			return $http({
					method: 'GET',
					url: (CONST.movieSearchUrl),
					params: {
						query: movieName,
						api_key: CONST.apiKey
					}
					})
					.then(function (response) {						
						if (response.data.results) {
							return response.data;							
						} else return 'no movie found';
					}, function (reject) {
						return 'network problem';
					});				
		} else {			
			return null;
		}
	};


	//Get details for specific movie
	service.getMovieDetailsByName = function (movieName) {		
		if (movieName) {			
			movieName = decodeURIComponent(movieName);
			movieName = movieName.replace(/ /g, "+");			

			return $http({
					method: 'GET',
					url: (CONST.movieSearchUrl),
					params: {
						query: movieName,
						api_key: CONST.apiKey
					}
					})
					.then(function (response) {												
						if (response.data.results[0]) {
							var id = response.data.results[0].id;
							return service.getMovieDetailsById(id);
						} else return 'no movie found';
					}, function (reject) {
						return 'network problem';
					});				
		} else {			
			return null;
		}
	};


	service.getMovieDetailsById = function (id) {		
		return $http({
			method: 'GET',
			url: (CONST.movieQueryUrl + id),
			params: {
				api_key: CONST.apiKey,
				append_to_response: 'credits,trailers'
			}
			})
			.then(function(result) {
				return result.data;
			}, function (reject) {
				return null;
		});
	};


	service.getActorInfo = function (id, append) {
		if (append) {
			return $http ({
				method: 'GET',
				url: (CONST.personSearchUrl + id),
				params: {					
					api_key: CONST.apiKey,
					append_to_response: 'movie_credits'
				}
			})
			.then(function (response) {				
				return response.data;
			}, function (reject) {
				return null;

			});

		}else {
			return $http ({
				method: 'GET',
				url: (CONST.personSearchUrl + id),
				params: {					
					api_key: CONST.apiKey
				}
			})
			.then(function (response) {				
				return response.data;

			}, function (reject) {
				return null;

			});
		}
	};
}


})();