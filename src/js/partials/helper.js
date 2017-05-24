// console.log('helper');

$(".input-field .wpcf7-form-control").focus(function() {
  $(this).closest(".input-field").addClass('focused');
});

$(".input-field .wpcf7-form-control").focusout(function(){
  $(this).closest(".input-field").removeClass('focused');
});