window.addEventListener("load", function(){

 /*1.- CREAR NODOS*/
 function nodos(){
  //Numero de paginaciones
  for(var i=1; i<=5; i++){

   //Creamos los nodos li, a y el texto sera el ciclo
   var li = document.createElement("li"),
       href = document.createElement("a"),
       textoLi = document.createTextNode([i]);

   //Añadimos el texto dentro del hreft y este dentro del li
   li.appendChild(href).appendChild(textoLi);
   //Tendra una clase que sera content + el ciclo
   li.className="content" + [i];

   //Insertamos todo el nodo adentro de un "id"
   document.getElementById("contenedorLi").appendChild(li);
  }

  //Creamos los nodos prev y next, su texto y el href de cada uno
  var liPrev = document.createElement("li"),
      liTextoPrev = document.createTextNode("«"),
      liNext = document.createElement("li"),
      liTextoNext = document.createTextNode("»"),
      hrefPrev = document.createElement("a"),
      hrefNext = document.createElement("a");

  //Creamos un atributo id de valor prev y lo insertamos la etiqueta liPrev
  var liPrevId = document.createAttribute("id");
  liPrevId.value = "prev";
  liPrev.setAttributeNode(liPrevId);

  //Creamos un atributo id de valor next y lo insertamos la etiqueta liNext
  var liNextId = document.createAttribute("id");
  liNextId.value = "next";
  liNext.setAttributeNode(liNextId);

  //Añadimos el texto dentro del hreft y este dentro del li
  liPrev.appendChild(hrefPrev).appendChild(liTextoPrev);
  liNext.appendChild(hrefNext).appendChild(liTextoNext);

  //Creamos las variables con los elementos donde seran insertados.
  var elementoPadre = document.getElementsByClassName("pagination")[0],
      elementoHijoPrev = document.getElementById("contenedorLi");

  //Mostramos los elementos en pantalla
  elementoPadre.insertBefore(liPrev, elementoHijoPrev);
  elementoPadre.appendChild(liNext);

  //Si la url es igual a content1 añadimos la clase disabled a elemento liPrev
  if(window.location == "file:///D:/Mis%20Documentos/Mis%20documentos/Amador%20-%20Curso%20programacion%20web/Repaso%20web%20en%20casa%20HTML%20y%20CSS/Paginacion%20HTML%20y%20CSS%20y%20NODOS/page/content1.html"){
   liPrev.className="disabled";
   /*liPrev.classList.toggle("disabled", i=1);*/
  } 

  //Si la url es igual a content5 añadimos la clase disabled a elemento liNext
  if(window.location == "file:///D:/Mis%20Documentos/Mis%20documentos/Amador%20-%20Curso%20programacion%20web/Repaso%20web%20en%20casa%20HTML%20y%20CSS/Paginacion%20HTML%20y%20CSS%20y%20NODOS/page/content5.html"){
   liNext.className="disabled";
  }

  //Creamos un ciclo para añadir la clase "active" a cada elemento
  for(var active = 1; active<=i; active++){
   if(window.location == "file:///D:/Mis%20Documentos/Mis%20documentos/Amador%20-%20Curso%20programacion%20web/Repaso%20web%20en%20casa%20HTML%20y%20CSS/Paginacion%20HTML%20y%20CSS%20y%20NODOS/page/content" + [active] + ".html"){

    //Creamos un atributo "id" con el valor "active"
    var activePage = document.createAttribute("id");
    activePage.value = "active";

    //Añadimos el valor atributo "id=active" a nuestras etiquetas <li>
    var elementoActive = document.getElementsByTagName("li")[active];
    elementoActive.setAttributeNode(activePage);
   }
  }
 }
 nodos();


 //2.- CAMBIAR DE URL MEDIANTE CLASES. 
 var elementos = document.querySelectorAll(".pagination li:not(#prev):not(#next)");

 for(var i=0; i<elementos.length; i++){
  elementos[i].addEventListener("click", function elementosClick(){
   var id = this.getAttribute("class");
   window.location = id + ".html";
  });
 }


 /*3.- AÑADIR PAGINACION*/
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

  document.getElementById("next").addEventListener("click", function clickNext(){
   window.location = "content" + parseInt(parseInt(page) + parseInt(1)) + ".html";
  });

  document.getElementById("prev").addEventListener("click", function clickPrev(){
   window.location = "content" + parseInt(parseInt(page) - parseInt(1)) + ".html";
  });
 }
 paginacion();

});
