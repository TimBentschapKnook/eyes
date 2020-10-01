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

	// // Scroll back to top or bottom header
	// function onScrollStop() {
	// 	const scrollPos = $(window).scrollTop();

	// 	if ($('header').length > 0) {
	// 		const scrollHeight = $('header').height();
	// 		let scrollTo = scrollHeight;

	// 		if (scrollPos < scrollHeight) {
	// 			if ((scrollHeight / 4) * 1 > scrollPos) {
	// 				scrollTo = 0;
	// 			}
	// 			$('html, body').animate(
	// 				{
	// 					scrollTop: scrollTo,
	// 				},
	// 				500,
	// 			);
	// 		}
	// 	}
	// }

	// // Check on page if scrolled 
	// $(window).scroll(function() {
	// 	clearTimeout($.data(this, 'scrollTimer'));
	// 	$.data(this, 'scrollTimer', setTimeout(function() {
	// 		onScrollStop();
	// 	}, 250));
	// });

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