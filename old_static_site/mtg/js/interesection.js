$(document).ready(function(){
	
	$('#do_intersec').click(function(){
	
		var arr_A = $('#list_A').val().split("\n"),
		    arr_B = $('#list_B').val().split("\n"),
		    arr_intersection = intersection(arr_A, arr_B),
		    intersection_list = arr_intersection.join("\n");
			
		$('#intersection_length').text('Совпало: '+arr_intersection.length).show();
		$('#intersection').val(intersection_list);
	});
	
	$('#do_intersec_buy_list').click(function(){
		getTappedOutCardList();
		mtg.on('change:find_list', function() {
			var arr_A = $('#list_A').val().split("\n"),
				arr_B = mtg.get('find_list'),
				arr_intersection = intersection(arr_A, arr_B),
				intersection_list = arr_intersection.join("\n");
				
			$('#intersection_length').text('Совпало: '+arr_intersection.length).show();
			$('#intersection').val(intersection_list);
		});
	});
});