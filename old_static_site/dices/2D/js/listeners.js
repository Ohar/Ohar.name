$(function($){
	$start_balancing.on('click', function(){
		// $dot_quantity_selector.attr('disabled', 'disabled');
		// $start_balancing.attr('disabled', 'disabled');
		drawNewScene($dot_quantity_selector.val());
		// $dot_quantity_selector.removeAttr('disabled');
		// $start_balancing.removeAttr('disabled');
	});
});