
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
		$(this).toggleClass('open');
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

});