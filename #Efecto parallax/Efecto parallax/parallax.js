//jQuery
//document.ready lo usamos para que todo el codigo cargue hasta que haya finalizado la carga de la pagina
$(document).ready(function(){
  //Añadimos un evento para cuando el evento haga scroll
  $(window).scroll(function(){
    //La primera variable contiene el valor de la barra scroll, al moverla almacena un valor en pixeles y con .scrollTop() se almacena al moverla del tope
    var barraScroll = $(window).scrollTop();
    //El valor en pixles de la distancia de la barra scroll se multiplica por el valor dado, este valor es el numero con el cual la imagen bajara
    var posicion =  (barraScroll * 0.15);

    //Accedemos al body, a la parte css y editamos añadiendo en background-position cada vez que hagamos scroll
    $('body').css({
      //Como la imagen no se movera hacia los lados primero colocamos 0
      'background-position': '0 ' + posicion + 'px'
      //Si queremos que el fondo se mueva de forma contraria añadimos un menos despues del 0, Ejemplo: '0 -'
    });
  });
});