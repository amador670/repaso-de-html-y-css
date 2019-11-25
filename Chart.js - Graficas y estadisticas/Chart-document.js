$(document).ready(function(){
	var ancho = $(window).width();
	if (ancho > 480){
		//Ejecutamos codigo

		//Definimos el contexto de la gráfica en JS 

		var nodoGrafica = document.createElement("canvas");

		document.getElementById("grafica-barra").appendChild(nodoGrafica);

		var contexto = document.querySelector('canvas'); 

		//Debemos crear un objeto de configuración donde definiremos el tipo de gráfica, la información que contendrá y 
		// las opciones de escalas y ejes. 
		var configuracion = { 
			type: 'bar', //Tipo de gráfica 
			data: { //Aqui definimos el nombre, el tamaño y el color de cada barra de la gráfica 
				labels: ["Ruby", "Javascript", "PHP", "Python", "Java", "C++"], //Etiqueta de cada barra 
				datasets: [{ // 
					label: 'Número de votos', 
					data: [12, 19, 3, 5, 2, 3], //Barras de la gráfica 
					backgroundColor: [ //Color de relleno de cada barra respectivamente 
						'rgba(255, 99, 132, 0.2)', 
						'rgba(255, 206, 86, 0.2)', 
						'rgba(54, 162, 235, 0.2)', 
						'rgba(75, 192, 192, 0.2)', 
						'rgba(153, 102, 255, 0.2)', 
						'rgba(255, 159, 64, 0.2)' 
					], 
					borderColor: [ //Color del borde de cada barra 
						'rgba(255, 99, 132, 1)', 
						'rgba(255, 206, 86, 1)', 
						'rgba(54, 162, 235, 1)', 
						'rgba(75, 192, 192, 1)', 
						'rgba(153, 102, 255, 1)', 
						'rgba(255, 159, 64, 1)' 
					], 
					borderWidth: 2 //Ancho del borde de cada barra 
				}] 
			}, 
			options: { 
				responsive: true, //True por defecto 
				scales: { 
					yAxes: [{ 
						ticks: { 
							beginAtZero: true //Si es false empezaría en el valor de la barra más pequeña 
						} 
					}] 
				} 
			} 
		}; 

		//Ahora ya podemos generar nuestra gráfica creando una instancia de Chart(), a la cuál debemos pasarle dos párametros, 
		// el primero es el contexto y el segundo es el objeto con la configuración de nuestra gráfica. 
		var myChart = new Chart(contexto, configuracion); 
	}
});
