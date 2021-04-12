$('document').jQuery(document).ready(function($) {
	
        /**
        * Smooth scrolling to a specific element 
        **/
        function scrollTo( target ) {
            if( target.length ) {
                $("html, body").stop().animate( { scrollTop: target.offset().top }, 1500);
            }
        }
        // exemple
    $("#chambres").on('click', function(e){
               scrollTo( $("#chambres") );
    });

    $("#bungalow_link").on('click', function(e){
               scrollTo( $("#bungalow") );
    });

	
});