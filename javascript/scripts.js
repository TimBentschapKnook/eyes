$(document).ready(function() {

    // ONLICK ARROW SLIDESHOW HOME FULLSCREEN SCROLL DOWN
	$('.slide-down-image').on('click', function() {
		console.log("click");
		const scrollAmount = $('header').height();
		console.log(scrollAmount);
		$('html, body').animate(
			{
				scrollTop: scrollAmount,
			},
			800,
		);
	});

	// Scroll back to top or bottom header
	function onScrollStop() {
		const scrollPos = $(window).scrollTop();

		if ($('header').length > 0) {
			const scrollHeight = $('header').height();
			let scrollTo = scrollHeight;

			if (scrollPos < scrollHeight) {
				if ((scrollHeight / 5) * 1 > scrollPos) {
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
			console.log('timer');
		}, 250));
	});

	function onScroll() {
		const menu = $('.menu');
		const top = $(window).scrollTop();

		if (top > 300) {
			menu.addClass('visible');
		} else {
			menu.removeClass('visible');
		}

		if (top > 200) {
			menu.addClass('fixed');
		} else {
			menu.removeClass('fixed');
		}


	}
	onScroll();
	$(window).on('scroll', onScroll);


});