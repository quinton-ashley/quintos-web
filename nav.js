$('#referenceLinks').hover(
	() => {
		$('.refs').show();
		$('#referenceLink').css('height', 0);
		$('#referenceLink').css('opacity', 0);
	},
	() => {
		$('.refs').hide();
		$('#referenceLink').css('height', 'unset');
		$('#referenceLink').css('opacity', 1);
	}
);

$('#referenceLink').on('click', () => {
	$('.refs').show();
	$('#referenceLink').css('height', 0);
	$('#referenceLink').css('opacity', 0);
});
