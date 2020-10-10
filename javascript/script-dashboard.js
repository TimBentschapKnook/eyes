
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
    var geboortedatum = "01-01-1999";
    var adres = "Hendriksstraat 1"
    var woonplaats = "Sint-Johannes";
    var mailadres = "Voorbeeld@test.nl";

    var abonnement = "Gold";
    var aanschaf_bril = "20-10-2020";

    // array1 voor het zoeken naar de id's, array2 vult in de gevonden id's
	var array1=["gebruikersnaam", "geboortedatum", "adres", "woonplaats", "mailadres", "abonnement", "aanschaf_bril"];
	var array2=[gebruikersnaam, geboortedatum, adres, woonplaats, mailadres, abonnement, aanschaf_bril];

    // For loop voor het invullen van de gegevens
    for (i = 0; i < array1.length; i++) {
		document.getElementById(array1[i]).innerHTML = array2[i];
	}

});

// Ophalen van bepaalde elementen
var gborder = document.getElementById("gegevens-border");
var bborder = document.getElementById("bestellingen-border");
var pborder = document.getElementById("product-border");
var cborder = document.getElementById("chart-border");

function function_full_border() {
    
    gborder.style.borderStyle = "solid solid none solid";
    bborder.style.borderStyle = "solid solid none solid";
    pborder.style.borderStyle = "solid solid none solid";
    cborder.style.borderStyle = "solid solid solid solid";
};

function function_half_border() {
    // Border style van het element wordt aangepast
    gborder.style.borderStyle = "none solid solid none";
    bborder.style.borderStyle = "none none solid solid";
    pborder.style.borderStyle = "solid solid none none";
    cborder.style.borderStyle = "solid none none solid";
};

if (window.location.href.includes("userdata")) {
    var dont_border = true;
} else {
    var dont_border = false;
}

// Kijkt bij het laden van de site of het kleiner is dan 768
if ($(window).width() < 768 && dont_border == false) {
    function_full_border();
} else {
    function_half_border();
}

// Als het formaat wijzigd dan (dit wordt alleen uitgevoerd als het formaat wijzigd)
$(window).resize(function() {
	// Als het formaat wijzigd en het is kleiner dan 768
	if ($(window).width() < 768 && dont_border == false) {
        function_full_border();
	} else {
        function_half_border();
	}
});