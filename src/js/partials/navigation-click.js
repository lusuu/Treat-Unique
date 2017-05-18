function windowSizeNavigation(){
    if ($(window).width() >= '992'){

    	// console.log('big');
    	$('.promo-section .header').removeClass('header-substrate');
    	$('.navigation-inside').removeClass('active');
    	$('.header-substrate-bottom').height(0);
        
        $('.navigation li.with-drop-nav').on( "click", function() {

			$(this).addClass('active');
			$(this).children('.navigation-inside').addClass('active');
			$('.promo-section .header').addClass('header-substrate');

			var insideNavigation = $(this).children('.navigation-inside');
			var heightInsideNavigation = insideNavigation.height();
			$('.header-substrate-bottom').height(heightInsideNavigation);

			$(document).mouseup(function (e) {
			    var container = $('.navigation-inside');
			    if (container.has(e.target).length === 0){
			        $('.navigation-inside').removeClass('active');
					$('.promo-section .header').removeClass('header-substrate');
					$('.header-substrate-bottom').height(0);
			    }
			});
		});

    } else {

    	// console.log('small');
		$('.promo-section .header').removeClass('header-substrate');
		$('.header-substrate-bottom').height(0);

        $('.navigation li.with-drop-nav').on( "click", function() {
			$(this).children('.navigation-inside').toggleClass('active');
			$('.header-substrate-bottom').height(0);
		});
    }
}

// $(window).load(windowSizeNavigation);
// $(window).resize(windowSizeNavigation)
$(window).on('load resize', windowSizeNavigation);