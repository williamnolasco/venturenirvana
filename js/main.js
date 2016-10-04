

	var $hoja1 = $('.leaf1')
	var $hoja2 = $('.leaf2')
	var $hoja3 = $('.leaf3')
	var $hoja4 = $('.leaf4')


	$(".arrow-one").click(function(){
		$hoja1.css('left', '-100%')
		$hoja2.css('left', '0%')
	});

	$(".arrow-two").click(function(){
		$hoja2.css('left', '-100%')
		$hoja3.css('left', '0%')
	});

	$(".down-one").click(function(){
		$hoja3.css('top', '-100%')
		$hoja4.css('top', '0%')

	});

	var $menuMovil = $('.menuMovil')
	var ingresar = document.getElementById('modal-ingresar');

	$(".login-desktop").click(function(){
		ingresar.style.display = "block"
	});

	$(".login-movil").click(function(){   
		$menuMovil.css('top', '-101px')
		ingresar.style.display = "block"
	});

	$(".publicar-desktop").click(function(){
		ingresar.style.display = "block"
	});


	$(".publicar-movil").click(function(){
		$menuMovil.css('top', '-101px')
		ingresar.style.display = "block"
	});

	$(".explorar-desktop").click(function(){
		$hoja3.css('left', '0')
	});

	$(".explorar-movil").click(function(){
		$menuMovil.css('top', '-101px')
		$("body, html").animate({
			scrollTop: $hoja3.offset().top
		}, 1000);
	});




	var registrarse = document.getElementById("modal-registrar");

	$(".link-registrate").click(function(){
		ingresar.style.display = "none"
		registrarse.style.display = "block"
	});


	window.onclick = function(event){
		/*Cuando le doy click al  elemento registrarse este desaparece*/
		if(event.target == registrarse){
			registrarse.style.display = "none"
		}

		/*cuando le doy click al elemento ingresar este desaparece*/
	    if (event.target == ingresar) {
	    	ingresar.style.display = "none"
	    }
	}


	$(".link-login").click(function(){
		registrarse.style.display = "none"
		ingresar.style.display = "block"
	});


	var $movible1 = $('.contenido-procedimientos')
	var $movible2 = $('.contenido-beneficios')
	var $movible3 = $('.contenido-costos')
	var $procedimientos = $(".procedimientos")
	var $procedimientosMovil = $(".procedimientos-movil")
	var $beneficios = $(".beneficios")
	var $beneficiosMovil = $(".beneficios-movil")
	var $costos = $(".costos")
	var $costosMovil = $(".costos-movil")



	$procedimientos.click(function(){
		$(this).siblings().css('border-bottom', 'none')
		$procedimientos.css('border-bottom', '4px solid #95EC00')
		$movible2.css('display', 'none')
		$movible3.css('display', 'none')
	    $movible1.css('display', 'block')
	});


	$procedimientosMovil.click(function(){
		$hoja2.css('min-height', '1720px')
		$(this).siblings().css('border-bottom', 'none')
		$procedimientosMovil.css('border-bottom', '4px solid #95EC00')
		$movible2.css('display', 'none')
		$movible3.css('display', 'none')
	    $movible1.css('display', 'block')
		$("body, html").animate({
			scrollTop: $movible1.offset().top
		}, 1000);

	});

	$beneficios.click(function(){
		$(this).siblings().css('border-bottom', 'none')
		$beneficios.css('border-bottom', '4px solid #95EC00')
		$movible1.css('display', 'none')
		$movible3.css('display', 'none')
		$movible2.css('display', 'block')
	});


	$beneficiosMovil.click(function(){
		$hoja2.css('min-height', '1170px');
		$(this).siblings().css('border-bottom', 'none')
		$beneficiosMovil.css('border-bottom', '4px solid #95EC00')
		$movible1.css('display', 'none')
		$movible3.css('display', 'none')
	    $movible2.css('display', 'block')
		$("body, html").animate({
			scrollTop: $movible2.offset().top
		}, 1000);

	});


	$costos.click(function(){
		$(this).siblings().css('border-bottom', 'none')
		$costos.css('border-bottom', '4px solid #95EC00')
		$movible1.css('display', 'none')
		$movible2.css('display', 'none')
		$movible3.css('display', 'block')
	});


	$costosMovil.click(function(){
		$hoja2.css('min-height', '900px').css('max-height', '900px')
		$(this).siblings().css('border-bottom', 'none')
		$costosMovil.css('border-bottom', '4px solid #95EC00')
		$movible1.css('display', 'none')
		$movible2.css('display', 'none')
	    $movible3.css('display', 'block')
		$("body, html").animate({
			scrollTop: $movible3.offset().top
		}, 1000);
	});



	/* Menu desplegable */

	var indicador = 1;

	$(".icon-menu").click(function(){
		if( indicador == 1 ){
			$menuMovil.css('top', '49px');
			indicador = 2;
		}else if( indicador == 2){
			$menuMovil.css('top', '-101px');
			indicador = 1;
		}
	});



