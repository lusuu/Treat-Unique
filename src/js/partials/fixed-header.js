var stickyHeaderOffset = $('.sticky-header').offset().top;

$(window).scroll(function(){
	var stickyHeader = $('.sticky-header'),
	scroll = $(window).scrollTop();
    
	if (scroll > stickyHeaderOffset) {
		stickyHeader.addClass('fixed-header');
	} else {
		stickyHeader.removeClass('fixed-header');
	}
});


function windowSizeNavigationScroll(){

	var headerBigNavHeight = $('.header .navigation-section-hold').outerHeight();
	var headerInsideNavHeight = $('.header .navigation-section-hold .navigation-inside').outerHeight();

	var headerNavigationHeight = headerBigNavHeight + headerInsideNavHeight + 120;

	var windowHeight = $(window).height();
	var navigationSectionScrollHeight = windowHeight - 100;

    if (windowHeight >= headerNavigationHeight ){
		$('.navigation-section-hold').removeClass('navigation-section-scroll');
    } else {
		$('.navigation-section-hold').addClass('navigation-section-scroll');
		$('.navigation-section-scroll').height(navigationSectionScrollHeight);
    }

	if ($(window).width() >= '768'){
        $('.navigation-section-scroll').css( {'height': 'auto'});
    }
}

$(window).on('load resize', windowSizeNavigationScroll);
