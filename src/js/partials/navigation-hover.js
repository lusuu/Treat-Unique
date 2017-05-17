$('.promo-section .navigation > li').hover(
	function() {
		$('.promo-section .navigation').toggleClass('opacity-navigation');
		$(this).toggleClass('hover-item');
	}
);

$('.promo-section .navigation-inside > li').hover(
	function() {
		$('.promo-section .navigation-inside').toggleClass('opacity-navigation');
		$(this).toggleClass('hover-item')
	}
);