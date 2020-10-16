$(document).ready(function() {

    // ONLICK ARROW SLIDESHOW HOME FULLSCREEN SCROLL DOWN
	$('#slide-down').on('click', function() {
        const scrollAmount = $('header').height();
		$('html, body').animate(
			{
				scrollTop: scrollAmount,
			},
			800,
		);
	});


// In winkelwagen als je op product info drukt verschijnen de specificaties van het product
	$('#showSpecs').click(function() {
		$('#specs').toggleClass('showSpecs');
		if($('#specs').hasClass('showSpecs')) {
			$('#rotate').addClass('rotate');
		} else {
			$('#rotate').removeClass('rotate');
		}
	});

	// als er op het nav-icon gedrukt wordt krijgt hij de class open
	$('.nav-icon').click(function() {
		// this = de .nav-icon
		$(this).addClass('open');
		// Check of .nav-icon class open heeft
		if($(this).hasClass('open')) {
			// Voeg aan de .side-nav, .nav-icon-2 een class toe
			$('.side-nav').addClass('open');
			$('.nav-icon-2').addClass('open');
		} else {
			// Haal de classes van de .side-nav en .nav-icon-2 af
			$('.nav-icon-2').removeClass('open');
			$('.side-nav').removeClass('open');
		}
	});

	// als er op het nav-icon-2 gedrukt wordt krijgt hij de class open
	$('.nav-icon-2').click(function() {
		// this = .nav-icon-2
		// Check of .nav-icon class open heeft
		if($(this).hasClass('open')) {
			// if this has class open, remove classes to side-nav, nav-icon-2 en .nav-icon
			$('.side-nav').removeClass('open');
			$('.nav-icon-2').removeClass('open');
			$('.nav-icon').removeClass('open');
		} else {
			// anders voeg ze toe aan .side-nav en .nav-icon de clasnaam = 'open'
			$('.side-nav').addClass('open');
			$('.nav-icon').addClass('open');
		}
	});

	// Scroll back to top or bottom header
	function onScrollStop() {
		// Check op de scollpositie van de pagina
		const scrollPos = $(window).scrollTop();

		// Check of er een header element is op de pagina
		if ($('header').length > 0) {
			// Maak constante aan, het element header, maar zonder de class not-100vh. Hiervan pakken we de hoogte van het element
			const scrollHeight = $('header:not(.not-100vh)').height();
			// defineer een nieuwe variabele, wat de scrollto wordt, waar we dus naartoe gaan scrollen en dat is de hoogte van de header.
			// Hier maken we een let van, omdat deze kan veranderen, constant blijft constant
			let scrollTo = scrollHeight;

			// Hier kijken we of de positie van hoever je met scrollen bent kleiner is dan de hoogte van de header en dat klopt dus volgende if
			if (scrollPos < scrollHeight) {
				// Scrollheight is de header, de hoogte van de header wordt gedeeld door 4 gedaan x 1, dit antwoord wordt gekeken of het groter is dan hoogte van scrollen op pagina
				// stel pagina is 100px wordt hier gekeken of de pagina 250px voorbij is of niet anders zet hij hem op de scrollposition 0 en zit je bovenaan de pagina, anders ga je naar de onderkant van de header
				if ((scrollHeight / 4) * 1 > scrollPos) {
					scrollTo = 0;
				}
				// in je html, body wil je scrollen, dus scrolltop wordt de scrollTop en dat is dus de hoogte van de header
				$('html, body').animate(
					{
						scrollTop: scrollTo,
					},
					// Zorgt voor een delay, vertraging
					500,
				);
			}
		}
	}

	// Check on page if scrolled, soort timer, waarbij je kijkt of er gescrollt wordt op de pagina, doet hij om de 250 ms
	$(window).scroll(function() {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			onScrollStop();
		}, 250));
	});

	// Menu effect
	function onScroll() {
		// maak variabele van de header menu
		const menu = $('header:not(.not-100vh) .menu');
		// maak variabele van de scrolltop , position hoever iemand is gescrolt
		const top = $(window).scrollTop();

		// Kijk of hij over de scrolltop van 300 is laat dan pas het menu zien door middel van class visible 
		// class visible bevat top: 0; in de style waardoor er een leuk effect onstaat
		if (top > 300) {
			menu.addClass('visible');
		} else {
			menu.removeClass('visible');
		}

		// Kijk of hij over de scrolltop van 200 is laat voeg dan de class fixed toe
		// class fixed bevat top: -?; zorgt ervoor dat hij als een slidedown uit de top komt bij de class visible
		if (top > 200) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');
		}


	}

	// Zelfde als bovenstaande function, deze functie is als een pagina geen banner heeft op de pagina en dat er dus nogsteeds een goed effect verschenen moet worden.
	// Hiervoor dus een clearfix toegvoegd
	function onScrollNot100VH() {
		const menu = $('header.not-100vh .menu');
		const top = $(window).scrollTop();
		const clearfix = $('.menu-fix');

		if (top > 300) {
			menu.addClass('visible');
		} else {
			menu.removeClass('visible');
		}

		if (top > 200) {
			menu.addClass('fixed');
			clearfix.addClass('fixed');
		} else {
			menu.removeClass('fixed');
			clearfix.removeClass('fixed');
		}
	}

	onScroll();
	onScrollNot100VH();
	addUserData();

	// Window scrollfunctions, als er gescrolld wordt op de pagina, voer deze functions uit
	$(window).on('scroll', onScroll);
	$(window).on('scroll', onScrollNot100VH);

	CalcShoppingBasket();
	shippingOnChange();

	// Calculate price in shopping basket, voeg parameter toe die ervoor zorgt dat de geselecteerd verzendig gedaan kan worden
	function CalcShoppingBasket(selectedOption){
		var PriceOfItem = "34,49";
		var TotalItemPrice = PriceOfItem;

		// INLINE if, check eerst of er een optie is veranderd, doe dan de waarde die uit de onderstaande functie wordt opgehaald, anders de nu geselecteerde value
		var SendingCost = shippingOnChange() ? selectedOption : $('.SelectDelivery').find(':selected').val();

		// added parseFloat, omdat de variabelen string zijn maken we er een number van, zodat de totale prijs berekend kan worden
		var TotalPrice = parseFloat(PriceOfItem) + parseFloat(SendingCost);

		// veranderd Inner html in de bovenstaande var's met jQuery
		$("#ItemPrice").html('€' + PriceOfItem);
		$("#PriceItemsTotal").html('€' + TotalItemPrice);
		$("#SendCosts").html('€' + SendingCost);
		$("#PriceTotal").html('€' + TotalPrice);
	}
	
	// Functie voor het kijken of de verzendmogelijkheid is aangepast
	function shippingOnChange() {
		$('.SelectDelivery').change( ()=> {
			var selectedOption = $(this).find(':selected').val();
			CalcShoppingBasket(selectedOption);
		});
	}

	function addUserData() {
			 // Random var
			 var gebruikersnaam = "Jan Klaasen";
			 var geboortedatum = "1990-01-01";
			 var adres = "Hendriksstraat 1"
			 var woonplaats = "Sint-Johannes";
			 var mailadres = "Voorbeeld@test.nl";
		 
			 // array1 voor het zoeken naar de id's, array2 vult in de gevonden id's
			 var array1=["gebruikersnaam", "geboortedatum", "adres", "woonplaats", "mailadres"];
			 var array2=[gebruikersnaam, geboortedatum, adres, woonplaats, mailadres];
		 
			 // For loop voor het invullen van de gegevens
			 for (i = 0; i < array1.length; i++) {
				 document.getElementById(array1[i]).value = array2[i];
			 }
	}
	
});