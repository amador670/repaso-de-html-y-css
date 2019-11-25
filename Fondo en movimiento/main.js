//Añadimos un evento, al cargar la pagina se carga enseguida la funcion moverFondo()
addEventListener("load", moverFondo, false);

//Esta funcion cargara el evento mousemove (movimiento del cursor) con una funcion() y un parametro
function moverFondo(){
  document.addEventListener("mousemove", function(move){
    //Esta funcion contiene dos variables, .clientX y clientY que es la posicion del mouse en "x" & en "y" dividida entre "/ 10" para que sea mas lento el movimiento
    var x = move.clientX / 10,
        y = move.clientY / 10;

    //Luego accedemos al estilo del body, background-position y los valores en pixeles sera el resultado de como se movera la imagen
    document.body.style.backgroundPosition = x + "px " + y + "px";

  }, false);
};