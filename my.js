$(document).ready(function() {
	var cuatosmeseros = prompt("cuatos meseros van a trabajar")






  

    
    if ( cuatosmeseros == 3 ){

       $('body').ready(function(){
		$('#meseros').load('tresmeseros.html', function () {
    		$(this).trigger('create');
		});

		});
    	

			$("#1").click(function(){
			$("#mesero1").append(hola);
			});

			$("#2").click(function(){
			$("#mesero2").append(hola);
			});

			$("#3").click(function(){
			$("#mesero3").append(hola);
			});
//aki funciona
	}
    else if( cuatosmeseros == 2){
    	$('body').ready(function(){
		$('#meseros').load('dosmeseros.html', function () {
    		$(this).trigger('create');
		});

		});

			
			$("#1").click(function(){
			$("#mesero1").append(hola);
			});
			
			$("#2").click(function(){
			$("#mesero2").append(hola);
			});

			$("#3").click(function(){
			$("#mesero3").append(boton);
			});
		
//aki funciona
    }

    else{
    	alert(cuatosmeseros + "???? Ni que estuviera tan ocupado!!!!"
    	 );
      }


	var hola = "<tr>"
	         +		"<td class='mesa'>"
	         +		    5
	         +		"</td>"
	         +		"<td class='personas'>"
	         +			5 
	         +		"</td>"
	         +		"<td class='total'>"
	         +			5
	         +		"</td>"
	         + "</tr>";

	
	// body...
});