// Makes all links transparent
$('.promo-section .navigation > li').hover(
	function() {
		$('.promo-section .navigation').toggleClass('opacity-navigation');
		$(this).toggleClass('hover-item');
		$(this).prev('li').toggleClass('hover-item-prev');
		$(this).next('li').toggleClass('hover-item-next');
	}
);

// Makes left border list transparent
$('.promo-section .navigation > li:first-child').hover(
	function() {
		$(this).closest('ul').toggleClass('hover-item-ul-prev');
	}
);

// Makes right border list transparent
$('.promo-section .navigation > li:last-child').hover(
	function() {
		$(this).closest('ul').toggleClass('hover-item-ul-next');
	}
);

// Makes active link not transparent, pseudo hover
$('.promo-section .navigation-inside > li > a').hover(
	function() {
		$('.promo-section .navigation-inside').toggleClass('opacity-navigation');
		$(this).closest('li').toggleClass('hover-item')
	}
);