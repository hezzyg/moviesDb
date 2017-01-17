(function() {

'use strict';

/*function MovieDetailsController () {

	var $ctrl = this;

	function onYouTubeIframeAPIReady() {
			
			console.log("API ready");
			player = new YT.Player ('player', {				
				playerVars: { 
		          	'controls': 0,
		          	'showinfo': 0
				},
				events: {
				    // 'onReady': onPlayerReady,
		            'onStateChange': onPlayerStateChange,
		            'onError': onPlayerError
				}
			});
		}
			
			function onPlayerStateChange(event) {
			  	// If the video ended, then seek to begining pause and close modal
		      	if (event.data == 0) {
		      		$("#trailerModal").toggle();
		      		$(".modal-backdrop").fadeOut();
		      		player.seekTo(0, true);
		      		player.pauseVideo();
		      	}
		        
		    }

		  	function pauseVideo() {
		        player.pauseVideo();
		    }

			function onPlayerError (event) {

			}

		    function playVideo() {
		    	player.playVideo();
		    }

}*/

/*

angular.module('MoviesDb')
.component('movieDetails', {
	templateUrl: 'src/templates/moviedetails.template.html',
	bindings: {
		movie: '<'
	}
});

})();*/