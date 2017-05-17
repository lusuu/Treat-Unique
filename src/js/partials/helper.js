// console.log('helper');

$(".input-field .input-text").focus(function() {
  $(this).closest(".input-field").addClass('focused');
});

$(".input-field .input-text").focusout(function(){
  $(this).closest(".input-field").removeClass('focused');
});

$(".input-field .input-textarea").focus(function() {
  $(this).closest(".input-field").addClass('focused');
});

$(".input-field .input-textarea").focusout(function(){
  $(this).closest(".input-field").removeClass('focused');
});