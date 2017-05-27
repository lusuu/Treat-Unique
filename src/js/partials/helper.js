// console.log('helper');

$(".input-field .wpcf7-form-control").focus(function() {
  $(this).closest(".input-field").addClass('focused');
});

$(".input-field .wpcf7-form-control").focusout(function(){
  $(this).closest(".input-field").removeClass('focused');
});

$('.filter-custom-dropdown .dropbtn').click(function() {
	$('.filter-dropdown-content').removeClass('hide');
	$('.filter-dropdown-content').toggleClass('show');
});

$(document).mouseup(function (e) {
	var container = $('.filter-custom-dropdown');
	if (container.has(e.target).length === 0){
		$('.filter-dropdown-content').removeClass('show');
		$('.filter-dropdown-content').addClass('hide');
	}
});

$('.filter-dropdown-content li').click(function() {
	$('.filter-dropdown-content').removeClass('show');
});