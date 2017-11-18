intersection = function (a, b){
	
	var result = [], 
		b_length = b.length;
		
	console.log(b);

	_.map(a, function(string, i, arr){ arr[i] = string.trim().toLowerCase() });
	_.map(b, function(string, i, arr){ arr[i] = string.trim().toLowerCase() });

	for (var i = 0; i < b_length; i++) {
		if (a.indexOf(b[i]) >= 0) {
			result.push(b[i]);
		}
	}

	return result;
};

convert_MTGRU_CardList = function (user_to_search) {
	var result = [],
	    raw_card_list;
	
	$.get('/api/getMtgListByName', {dir: user_to_search}, function(data, textStatus, jqXHR){
		raw_card_list = data.split('\n');
		
		raw_card_list.forEach(function(string, i, arr){		
			cardName = string.replace(/\/\/.*$/, '').replace(/\s\s+/g, '|').replace(/\s+/g, ' ').trim().split('|')[2];
			if (cardName && result.indexOf(cardName) < 0) {
				result.push(cardName);
			}
		});
				
		mtg.set({has_list: result});
				
		console.log(mtg.get('has_list'), mtg.get('find_list'));
	});
};

getTappedOutCardList = function (url, callback) {
	var url = arguments.length == 2 ? arguments[0] : 'http://tappedout.net/mtg-decks/18-05-14-/';
	    callback = arguments.length == 1 ? arguments[0] : callback;
	    result = [];	

	$.get(url, function(data){
		$(data).find('.board-container .card-link').each(function(){
			result.push($(this).text());
		});
		
		mtg.set({find_list: result});
		
		if (callback) {
			return callback(result);
		} else {
			return result;
		}
	});
};