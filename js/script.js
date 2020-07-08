(function () {
	'use script';

	//all window
	let wind = $(window);

	/*===Preloader===*/
	wind.on('load', function () {
		$('.preloader').fadeOut('slow');
	});

	/*===Scroll Navbar===*/
	let mainNav = $('.main-nav');
	wind.scroll(function () {
		let windowScrollNav = $(this).scrollTop();
		if (windowScrollNav > 300) {
			mainNav.addClass('scroll-navbar');
		} else {
			mainNav.removeClass('scroll-navbar');
		}
	});

	/*** ===One Page Nav===***/
	$('.navbar-nav').onePageNav({
		currentClass: 'active',
		scrollThreshold: 0.1,
		scrollSpeed: 500,
	});


})();
new WOW().init();