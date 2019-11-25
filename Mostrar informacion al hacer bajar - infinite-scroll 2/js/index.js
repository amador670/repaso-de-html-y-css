(function () {

  $(window).scroll(function () {   
   //Tamaño que se ha desplazado el usuario:
    var scrollTop = $(window).scrollTop();
   
   //La altura de la ventana 
    var windowHeight = $(window).height();
   
   //La altura del documento (pagina)
    var documentHeight = $(document).height();
   
   //Esto es para estilos visuales, permite que el nuevo contenido se cargue cuando el usuario esté cerca del final de la página. 
    var offset = 100;

   //Si el desplazamiento del usuario + el alto de la ventana es mayor al alto del documento ejecuta lo siguiente
   if (scrollTop + windowHeight > documentHeight - offset) {
    
      var divs = $('div').length;
    
      $('body').append(function () {
        var result = '';
        //Añade tres nuevos resultados
        for(var i = divs + 1; i <= divs + 3; i++) {
          result += '<div>Content ' + i + '</div>';
        }
        return result;
      });
    }
   
  }); 
})();