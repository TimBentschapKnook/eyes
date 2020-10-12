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

	$('#showSpecs').click(function() {
		$('#specs').toggleClass('showSpecs');
		if($('#specs').hasClass('showSpecs')) {
			$('#rotate').addClass('rotate');
		} else {
			$('#rotate').removeClass('rotate');
		}
	});

	$('.nav-icon').click(function() {
		$(this).addClass('open');
		if($(this).hasClass('open')) {
			$('.side-nav').addClass('open');
			$('.nav-icon-2').addClass('open');
		} else {
			$('.nav-icon-2').removeClass('open');
			$('.side-nav').removeClass('open');
		}
	});

	$('.nav-icon-2').click(function() {
		if($(this).hasClass('open')) {
			$('.side-nav').removeClass('open');
			$('.nav-icon-2').removeClass('open');
			$('.nav-icon').removeClass('open');
		} else {
			$('.side-nav').addClass('open');
			$('.nav-icon').addClass('open');
		}
	});

	// Scroll back to top or bottom header
	function onScrollStop() {
		const scrollPos = $(window).scrollTop();

		if ($('header').length > 0) {
			const scrollHeight = $('header').height();
			let scrollTo = scrollHeight;

			if (scrollPos < scrollHeight) {
				if ((scrollHeight / 4) * 1 > scrollPos) {
					scrollTo = 0;
				}
				$('html, body').animate(
					{
						scrollTop: scrollTo,
					},
					500,
				);
			}
		}
	}

	// Check on page if scrolled 
	$(window).scroll(function() {
		clearTimeout($.data(this, 'scrollTimer'));
		$.data(this, 'scrollTimer', setTimeout(function() {
			onScrollStop();
		}, 250));
	});

	function onScroll() {
		const menu = $('.menu');
		const top = $(window).scrollTop();
		var x = 300;
		const website_string = window.location.href;
		const match_string = "index";

		if (website_string.includes(match_string)) {
			x = 300;
		} else {
			x = 120;
		}

		if (top > x) {
			menu.addClass('visible');
		} else {
			menu.removeClass('visible');
		}
		
		if (top > 80) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');
		}
	}
	onScroll();
	$(window).on('scroll', onScroll);
	
});

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


		// Onderstaand doet hetzelfde als JQuery functie -> laten staan voor duidelijkheid

		// document.getElementById("ItemPrice").innerHTML = '€' + PriceOfItem;
		// document.getElementById("PriceItemsTotal").innerHTML = '€' + TotalItemPrice;
		// document.getElementById("SendCosts").innerHTML = '€' + SendingCost;
		// document.getElementById("PriceTotal").innerHTML = '€' + TotalPrice;
	}
	
	// Functie voor het kijken of de verzendmogelijkheid is aangepast
	function shippingOnChange() {
		$('.SelectDelivery').change( ()=> {
			var selectedOption = $(this).find(':selected').val();
			CalcShoppingBasket(selectedOption);
		});
	}

