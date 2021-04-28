let collapse_workout_collapsed = false;
$('#collapse_workout_button').on('click', () => {
	if (collapse_workout_collapsed) {
		collapse_workout_collapsed = false;
		$('#collapse_workout_text').text('Hide');
		$('#collapse_workout_icon').removeClass('fa-chevron-up');
		$('#collapse_workout_icon').addClass('fa-chevron-down');
	} else {
		collapse_workout_collapsed = true;
		$('#collapse_workout_text').text('Show');
		$('#collapse_workout_icon').removeClass('fa-chevron-down');
		$('#collapse_workout_icon').addClass('fa-chevron-up');
	}
});
