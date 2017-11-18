$(document).ready(function(){

	mtg.on('change:has_list', function() {
		console.log(mtg.get('find_list').length, mtg.get('has_list').length, mtg.get('has_list'));
		var arr_intersection = intersection(mtg.get('find_list'), mtg.get('has_list'));		
		$('#founded').val(arr_intersection.join("\n")).focus();
	});

	$('#load_my_tappedout_buylist').click(function(){
		var find_list = [], has_list, user_to_search = $('#user_to_search').val();
		
		if (user_to_search) {
			getTappedOutCardList();
			mtg.on('change:find_list', function(){
				convert_MTGRU_CardList(user_to_search);
			});
		}
	});

	$('#do_search').click(function(){
		var inputCardArray = $('#search_list').val().split('\n'),
		    founded        = [];
		
		$.get('/api/getMtgListByName', {dir: $('#user_to_search').val()}, function(data, textStatus, jqXHR){
			var exchangeArray = data.split('\n');
			
			exchangeArray.forEach(function(string, i, arr){
			
				string = string.replace(/\s+/g, ' ').replace(/\/\/.*$/, '').trim();
				var inputCardArrayLength = inputCardArray.length;
				
				while (inputCardArrayLength--) {
					var e = inputCardArray[inputCardArrayLength];
					if (string.indexOf(e) >= 0 && founded.indexOf(e) < 0){
						founded[founded.length] = e;
						break;
					}
				
				}				
			});
			$('#founded').val(founded.join("\n")).focus();
		});
	});
});