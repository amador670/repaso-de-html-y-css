$(document).ready(function(){

 //Al hacer click en los <li> dentro de la clase .paginacion que no tenga el id="prev o next":
 $(".pagination li:not(#prev, #next)").on("click", function(){

  //Seleccionamos el atributo "id" dentro de esos elementos
  var elementos = $(this).attr("id");
  //Los redireccionamos al "id + .html" 
  window.location = elementos + '.html';

 });

 /* var ocultar = $(".pagination li:not(#prev, #next)");
 for(var i=4; i<ocultar.length; i++){
  ocultar.eq(i).addClass("disabled");
 }*/

 function paginacion(){
  //valor inicial de page
  var page = -1;
  //Obtenemos el indice inicial donde esta la palabra content
  var firstIndexOfWord = window.location.href.indexOf("content");

  //Se optiene el href y sus string, el primero sera el incial (0) y el segundo la posicion final a editar, en este caso 8
  var contentWord = window.location.href.substring(firstIndexOfWord, firstIndexOfWord+9);
  //Transformamos cada letra en un array()
  var wordSplitted = contentWord.split("content");
  page = wordSplitted[1];

  $("#next").on("click",  function(){
   window.location = "content" + parseInt(parseInt(page) + parseInt(1)) + ".html";
  });

  $("#prev").on("click",  function(){
   window.location = "content" + parseInt(parseInt(page) - parseInt(1)) + ".html";
  });
 }
 paginacion();

});

