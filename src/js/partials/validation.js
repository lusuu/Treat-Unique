$(document).ready(function() {

	$('#contacts-form').validate({
   		rules: {
			inputFirstName: {
				required: true
			},
			inputLastName: {
				required: true
			},
			inputEmailAddress: {
				required: true
			},
			inputPhoneNumber: {
				required: true
			},
			selectSubject: {
				selectSubjectCheck: true
			},
			inputMessage: {
				required: true
			}
	    },
	    messages: {
			inputFirstName: {
				required: "This field is required"
			},
			inputLastName: {
				required: "This field is required"
			},
			inputEmailAddress: {
				required: "This field is required"
			},
			inputPhoneNumber: {
				required: "This field is required"
			},
			inputMessage: {
				required: "This field is required"
			}
	    },
		errorPlacement: function (error, element) {
			if(element.attr("name") == "selectSubject") {
				error.appendTo(element.parent().prev('.label'));
			} else {
				error.appendTo(element.prev('.label'));
			}
		},
		highlight: function(element) {
			$(element).parent('.input-field').addClass('with-error');
		},
		unhighlight: function(element) {
			$(element).parent('.input-field').removeClass('with-error');
		}

	});

    jQuery.validator.addMethod('selectSubjectCheck', function (value) {
        return (value != 'hide');
    }, "This field is required");


	$('.agree-send-block .btn').on('click', function() {
		if( $('.select-styled').attr('rel') == 'hide' ) {
			$('.select-label').closest('.input-field').addClass('with-error');
		} else {
			$('.select-label').closest('.input-field').removeClass('with-error');
		}
	});

	$('.select-options li').on('click', function() {
		console.log('li');
		if( $(this).attr('rel') == 'hide' ) {
			$('.select-label').closest('.input-field').addClass('with-error');
			$('.select-label .error').show()
		} else {
			$('.select-label').closest('.input-field').removeClass('with-error');
			$('.select-label .error').hide()
		}
	});
});