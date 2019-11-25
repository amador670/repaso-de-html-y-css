$(document).ready(function(){
	var ancho = $(window).width();
	if (ancho > 800){
		var preloader = $.browser; 
		$('.contenedor').hide(); 

		$('#preloader').delay("5000").fadeOut('slow', function(){
			$('.contenedor').fadeIn('fast');  
		});  	
	} 
	else {
		var loading = document.getElementById("preloader");
		loading.className = "ocultarPreloader";
	}
});

