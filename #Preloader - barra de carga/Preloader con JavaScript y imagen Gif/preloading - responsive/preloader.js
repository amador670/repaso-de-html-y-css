$(document).ready(function(){
	var ancho = $(window).width();
	if (ancho > 800){
		var preloader = $.browser; 
		$('.contenedor').hide(); 

		$('#preloader').delay("3000").fadeOut('slow', function(){
			$('.contenedor').fadeIn('fast');  
		});  	
	} 
	else {
		var loading = document.getElementById("preloader");
		loading.className = "ocultarPreloader";
		
		var loadingImagen = document.getElementById("imagen-preloader");
		loadingImagen.className = "ocultarPreloaderImagen";
		
		var preloader = $.browser; 
		$('.contenedor').show(); 	
	}
});

