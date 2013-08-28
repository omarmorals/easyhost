	$(document).ready(function() {
		alert('In order to the magic begins, you need to input the first table of each server manualy. Happy Easy Hosting!!!');
		startTime();
		start();
		//$("#start").click(function () {
			//boton();
			//$('#start').hide();
			// body...
		//})

		$('#mesaespecial1').click(mesaespecial1);
		$('#mesaespecial2').click(mesaespecial2);
		$('#mesaespecial3').click(mesaespecial3);
		$('#delatemesero1').click(delatemesero1);
		$('#delatemesero2').click(delatemesero2);
		$('#delatemesero3').click(delatemesero3);


		function delatemesero1 () {
			$('#mesero1 tr:last-child').remove(); 
			turno();
		}
		function delatemesero2 () {
			$('#mesero2 tr:last-child').remove(); 
			turno();
		}
		function delatemesero3 () {
			$('#mesero3 tr:last-child').remove(); 
			turno();
		}



       function mesaespecial1 () {
       		//alert("hola soy la mesa espacial 3");
       		$('#mesero1').addClass('verde')
			$('#mesero3, #mesero2').removeClass('verde');
       }
       function mesaespecial2 () {
       	    //alert("hola soy la mesa espacial 3");
       		$('#mesero2').addClass('verde')
			$('#mesero3, #mesero1').removeClass('verde');
       }
       function mesaespecial3 () {
       	    //alert("hola soy la mesa espacial 3");
       		$('#mesero3').addClass('verde')
			$('#mesero1, #mesero2').removeClass('verde');
       }


		var number_ = parseInt("",10);
		var total = parseInt("",10);

	    function start () {
	    	turno();
	        boton();
	    }


		function turno () {
			// body...
		
			if ( parseInt($('#mesero1 tr:last-child .total').text(),10) < 
				 parseInt($('#mesero2 tr:last-child .total').text(),10) &&
				 parseInt($('#mesero1 tr:last-child .total').text(),10) < 
				 parseInt($('#mesero3 tr:last-child .total').text(),10)
				) 
			{
				//alert("uno es el siguiente")
	    		$("#mesero1").addClass("verde");
	    		$("#mesero3,#mesero2").removeClass("verde");

	    	}


	    	else if ( parseInt($('#mesero2 tr:last-child .total').text(),10) < 
	    			  parseInt($('#mesero3 tr:last-child .total').text(),10)&&
	    			  parseInt($('#mesero2 tr:last-child .total').text(),10) < 
	    			  parseInt($('#mesero1 tr:last-child .total').text(),10)
	    			 ) 
	    	{
	    		//alert("dos es el siguiente")
	    		$("#mesero2").addClass("verde");
	    		$("#mesero3,#mesero1").removeClass("verde");
	    	}



	    	else if ( parseInt($('#mesero3 tr:last-child .total').text(),10) < 
	    		      parseInt($('#mesero1 tr:last-child .total').text(),10)&&
	    		      parseInt($('#mesero3 tr:last-child .total').text(),10) <
	    		      parseInt($('#mesero2 tr:last-child .total').text(),10)
	    		)
	    	{
	    		//alert("tres es el siguiente")
	    		$("#mesero3").addClass("verde");
	    		$("#mesero2,#mesero1").removeClass("verde");
	    	}
	    	else if ( parseInt($('#mesero1 tr:last-child .reloj').text(),10) < 
				 parseInt($('#mesero2 tr:last-child .reloj').text(),10) &&
				 parseInt($('#mesero1 tr:last-child .reloj').text(),10) <
				 parseInt($('#mesero3 tr:last-child .reloj').text(),10)
				) 
			{
				//alert("uno es el siguiente")
	    		$("#mesero1").addClass("verde");
	    		$("#mesero3,#mesero2").removeClass("verde");

	    	}


	    	else if ( parseInt($('#mesero2 tr:last-child .reloj').text(),10) < 
	    			  parseInt($('#mesero3 tr:last-child .reloj').text(),10)&&
	    			  parseInt($('#mesero2 tr:last-child .reloj').text(),10) < 
	    			  parseInt($('#mesero1 tr:last-child .reloj').text(),10)
	    			 ) 
	    	{
	    		//alert("dos es el siguiente")
	    		$("#mesero2").addClass("verde");
	    		$("#mesero3,#mesero1").removeClass("verde");
	    	}



	    	else if ( parseInt($('#mesero3 tr:last-child .reloj').text(),10) < 
	    		      parseInt($('#mesero1 tr:last-child .reloj').text(),10)&&
	    		      parseInt($('#mesero3 tr:last-child .reloj').text(),10) <
	    		      parseInt($('#mesero2 tr:last-child .reloj').text(),10)
	    		)
	    	{
	    		//alert("tres es el siguiente")
	    		$("#mesero3").addClass("verde");
	    		$("#mesero2,#mesero1").removeClass("verde");
	    	}
	    	





	    	/*else if ( 
	    		$('#mesero1 tr:last-child td:first-child').text() < 
	    		$('#mesero2 tr:last-child td:first-child').text()){
	    		$("#mesero1").addClass("verde");
	    		$("#mesero3,#mesero2").removeClass("verde");

	    	}

	    	else if ( 
	    		$('#mesero2 tr:last-child td:first-child').text() < 
	    		$('#mesero3 tr:last-child td:first-child').text() ){
	    		$("#mesero2").addClass("verde");
	    		$("#mesero3,#mesero1").removeClass("verde");
	    	}
	    	else if ( $('#mesero3 tr:last-child td:first-child').text() < $('#mesero1 tr:last-child td:first-child').text() ) {
	    		$("#mesero3").addClass("verde");
	    		$("#mesero2,#mesero1").removeClass("verde");
	    	}
	    	else {
	    		alert('esto es muy main stream no se que hacer');
	    	}*/
	    }

	    function empates () {
	    	if ( parseInt($('#mesero1 tr:last-child .reloj').text(),10) < 
				 parseInt($('#mesero2 tr:last-child .reloj').text(),10) &&
				 parseInt($('#mesero1 tr:last-child .reloj').text(),10) <
				 parseInt($('#mesero3 tr:last-child .reloj').text(),10)
				) 
			{
				//alert("uno es el siguiente")
	    		$("#mesero1").addClass("verde");
	    		$("#mesero3,#mesero2").removeClass("verde");

	    	}


	    	else if ( parseInt($('#mesero2 tr:last-child .reloj').text(),10) < 
	    			  parseInt($('#mesero3 tr:last-child .reloj').text(),10)&&
	    			  parseInt($('#mesero2 tr:last-child .reloj').text(),10) < 
	    			  parseInt($('#mesero1 tr:last-child .reloj').text(),10)
	    			 ) 
	    	{
	    		//alert("dos es el siguiente")
	    		$("#mesero2").addClass("verde");
	    		$("#mesero3,#mesero1").removeClass("verde");
	    	}



	    	else if ( parseInt($('#mesero3 tr:last-child .reloj').text(),10) < 
	    		      parseInt($('#mesero1 tr:last-child .reloj').text(),10)&&
	    		      parseInt($('#mesero3 tr:last-child .reloj').text(),10) <
	    		      parseInt($('#mesero2 tr:last-child .reloj').text(),10)
	    		)
	    	{
	    		//alert("tres es el siguiente")
	    		$("#mesero3").addClass("verde");
	    		$("#mesero2,#mesero1").removeClass("verde");
	    	}
	    	// body...
	    }
	    function nuevaMesa (){
			var html = '';
			html += '<tr>';
			html += '<td class="reloj">' + parseInt($("#txt").text(),10) + '</td>'
			html += '<td class="mesa"> <input> </td>';
			html += '<td class="personas">' + parseInt(number_,10) + '</td>';
			html += '<td class="total">' + parseInt(total,10) + '</td>';
			html += '</tr>';
			return html;
			
		}
		
		function boton () {
			$("#botones a").click(function() {
				    number_ = parseInt($(this).text(),10);
             		total = parseInt(number_) + parseInt($(".verde tr:last-child .total").text(),10);
		    		$(".verde").append(nuevaMesa);

	 
		    	turno();
		    		
		    });
			
		}
		function startTime(){
			var today=new Date();
			var h=today.getHours();
			var m=today.getMinutes();
			var s=today.getSeconds();
			m=checkTime(m);
			s=checkTime(s);
			document.getElementById('txt').innerHTML=h+""+m+""+s;
			t=setTimeout(function(){startTime()},500);
		}

		function checkTime(i){
			if (i<10)
			  {
			  i="0" + i;
			  }
			return i;
		}



 
    });



		// add a zero in front of numbers<10
	    //$(".verde tr:last-child").append($(this).attr("value"));
    	/*if ( mesero1 < mesero2 ){
    		$("#mesero1").addClass("verde");
    	}
    	else if (mesero1 < mesero2) {
    		$("#mesero2").addClass("verde");
    	}*/

	//var myDate = new Date(); 
	//var startTime = getTime(now);
	//var mesero1 = $('#mesero1 tr:last-child td:last-child').text()
    //var mesero2 = $('#mesero2 tr:last-child td:last-child').text()
    //var mesero3 = $('#mesero3 tr:last-child td:last-child').text()

    	//alert($(this).attr("value"));

     //var numeroApretado = function() {
    	//$("a").click(this.innerHTML);
    	// body...
    //}

    

    //var hola = "0"


