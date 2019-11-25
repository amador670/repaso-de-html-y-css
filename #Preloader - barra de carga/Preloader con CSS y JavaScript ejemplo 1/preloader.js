$(document).ready(function(){
	var preloader = $.browser; /* Create a variable for browser info */
	$('.contenedor').hide(); /* Hide the content */

	$('body').append('<div id="preloader"></div>');
	/* La animacion durara 2000(sec) (auto para que se ejecute automaticamente), 
            change the delay parameter to extend or decrase the animation, 
            remember to change the duration of the animation also in CSS */
	$('#preloader').delay("2000").fadeOut('slow', function(){
		$('.contenedor').fadeIn('fast');  
	});  	
});