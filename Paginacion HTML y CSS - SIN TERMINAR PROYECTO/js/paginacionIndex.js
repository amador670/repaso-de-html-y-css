$(document).ready(function(){

 $(".pagination li").on("click", function(){

  var elementos = $(this).attr("id");
  window.location='page/content' +  elementos + '.html';
 });
});

/*$(".pagination li").on("click", function(){
  let id = this.id;

  for(var i=0; i<=id.length; i++){  
   window.location='page/content' + i + '.html';
  }
 })*/

