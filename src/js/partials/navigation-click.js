function windowSizeNavigation(){
    if ($(window).width() >= '992'){

		$('.promo-section .header').removeClass('header-substrate');
		$('.navigation-inside').removeClass('active');
		$('.header-substrate-bottom').height(0);

    	var linkName = '';
        var isWiped = false;
        $('.navigation li.with-drop-nav > a').on( "click", function() {

        	if (linkName == $(this).attr('name') && !isWiped) {

				$('.navigation-inside').removeClass('active');
				$('.promo-section .header').removeClass('header-substrate');
				$('.header-substrate-bottom').height(0);
				linkName = '';
				isWiped = false;
			} else {

				$('.navigation li').removeClass('active');
				$(this).closest('li').addClass('active');
				$(this).closest('li').children('.navigation-inside').addClass('active');
				$('.promo-section .header').addClass('header-substrate');

				var insideNavigation = $(this).closest('li').children('.navigation-inside');
				var heightInsideNavigation = insideNavigation.height();
				$('.header-substrate-bottom').height(heightInsideNavigation);
				isWiped = false;
				linkName = $(this).attr('name');
			}

			$(document).mouseup(function (e) {
			    var container = $('.navigation-inside');
			    if(e.target.name==null) isWiped=true;
			    if (container.has(e.target).length === 0) {
					$('.navigation-inside').removeClass('active');
					$('.promo-section .header').removeClass('header-substrate');
					$('.header-substrate-bottom').height(0);
				}
			});
		});

    } else {

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