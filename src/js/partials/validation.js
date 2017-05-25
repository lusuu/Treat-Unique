$(moveErrorTips);

function moveErrorTips() {

	var errorTip = $('.wpcf7-not-valid-tip');

	$(errorTip).each(function(){
        var newPlace = $(this).closest('.input-field').find('label');
        console.log( $(this) );
        console.log( newPlace.text() );
        newPlace.after( $(this) );
    });
}