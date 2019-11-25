$(document).ready(function(){
	var preloader = $.browser; /* Create a variable for browser info */
	$('.contenedor').hide(); /* Hide the content */

	$('.load').delay("2000").fadeOut('slow', function(){
		$('.contenedor').fadeIn('fast');  
	});  	
});