var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = $('.navbar-fixed-top'),
		dropdown = $('.navbar-nav>li>.dropdown-menu'),
		didScroll = false,
		changeHeaderOn = 50;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.addClass('navbar-shrink');
			dropdown.css({
				'border-top-left-radius':'0',
				'border-top-right-radius':'0'
			});
		}
		else {
			header.removeClass('navbar-shrink');
			dropdown.css({
				'border-top-left-radius':'4px',
				'border-top-right-radius':'4px'
			});
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();