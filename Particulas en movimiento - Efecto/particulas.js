$(document).ready(function(){
  var ancho = $(window).width();
  if (ancho > 800){
    //Ejecutamos codigo
    
    particlesJS('particles-js',

                {
      "particles": {
        "number": {
          "value": 100, //Aqui se cambie la cantidad de particulas que aparecen
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"//Aqui se cambie el color de los puntos de las particulas
        },
        "shape": {
          "type": ["star", "circle", "polygon"], //Aqui se cambie la figura de las particulas. Las figuras disponibles son:
          /*
      "circle"
      "edge"
      "triangle"
      "polygon"
      "star"
      "image"
      ["circle", "triangle", "image"]
      */
          "stroke": {
            "width": 1, //Cambia el ancho de las particulas, crea un borde alrededor, probar con "2" de ejemplo
            "color": "#009dff" //Cambia el color del borde de las particulas, se visualiza mejor si se incrementa el valor de "width": 0
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "logo.png", //Aqui se añade una imagen para las particulas
            "width": 50, //Aqui se cambia el ancho de la imagen
            "height": 50 //Aqui se cambia el alto de la imagen
          }
        },
        "opacity": {
          "value": 0.5, //Aqui se cambia la opacida de las particulas "0.1 al 0.9"
          "random": false, 
          "anim": {
            "enable": false, //Aqui cambia la animacion
            "speed": 1, //Aqui cambia la velocidad de las particulas, "1 al 3"
            "opacity_min": 1,
            "sync": false
          }
        },
        "size": {
          "value": 5, //Cambia el tamaño de las particulas
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,//Elimina la linea de union de las particulas
          "distance": 120, //Cambia el largo de la linea de union de las particulas
          "color": "#ffffff", //Cambia el color de la linea de las particulas
          "opacity": 0.5, //Aqui se cambia la opacidad de las lineas de las particulas
          "width": 1 //Aqui se cambia el ancho de la linea de las particulas 
        },
        "move": {
          "enable": true, //Aqui se activa o desactiva el movimiento de las particulas
          "speed": 2, //Aqui se cambia la velocidad de movimiento de las particulas
          "direction": "none", //Aqui se cambia la direccion de movimiento de las particulas, ejemplos:
          /*
      "none"
      "top"
      "top-right"
      "right"
      "bottom-right"
      "bottom"
      "bottom-left"
      "left"
      "top-left"
      */
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600, //Rotacion de movimiento de particulas en el eje X
            "rotateY": 1200 //Rotacion de movimiento de particulas en el eje Y
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true, //Aqui desactiva el evento hover al pasar el mouse, si se cambia a "false" no se mueven al pasar el cursor
            "mode": "repulse" //Aqui cambia el efecto al pasar el cursor, cambia el efecto de alejar las particulas, tambien se pueden unir o poner mas grande al pasar el cursor
            /*
        "grab"
        "bubble"
        "repulse"
        ["grab", "bubble"]
        */
          },
          "onclick": {
            "enable": true, //Aqui activa que al dar click haga un efecto, si se coloca false se desactiva
            "mode": "push" //Aqui se cambia el efecto al dar click, ejemplos:
            /*
        "push"
        "remove"
        "bubble"
        "repulse"
        ["push", "repulse"]
        */
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400, //Esta es la distancia de las particulas
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

               );
  }
});

