$(document).ready(function(){

	$('#load_ohar').click(function(){
		$.get('/api/getMtgListByName', {dir: 'Ohar'}, function(data, textStatus, jqXHR){
			$('#input').val(data);
		});
	});
	
	$('.doConvert').click(function(){
	
		list = '';
	
		var btnId     = this.id,
		    $input    = $('#input'),
		    $output   = $('#output'),
			dataArray = $input.val().split('\n');
		
		_.map(dataArray, function(string, i, arr){
			var stringArray = [],
				resultArray = [];
				
			stringArray = string.replace(/\s+/g, ' ').replace(/\/\/.*$/, '').trim().split(' ');
			
			if (stringArray.join('') != '') {
				
				resultArray.length = 10;	
				resultArray[0] = stringArray.shift(); // Count
				resultArray[1] = 0;	 // Tradelist Count
				resultArray[7] = (function() { // Edition
					var shortie = stringArray.shift(),
						result  = '',
						l       = ABBRS.length;
						
					while (l--) {
						if (ABBRS[l][0] == shortie) {
							result = ABBRS[l][1];
							break;
						}
					}
					
					return result;
				})();
				
				resultArray[8] = 'Near Mint'; // Condition
				
				// Foil
				if (stringArray[stringArray.length - 1] == 'foil') {
					stringArray.pop();
					resultArray[3] = 'Foil';
				}
				
				// Language
				if (stringArray[stringArray.length - 1] == 'rus') {
					stringArray.pop();
					resultArray[9] = 'Russian';
				} else {
					resultArray[9] = 'English';
				}
				
				// Name
				resultArray[2] = stringArray.join(' ').replace(/''/g, '""').replace(/\s+[0-9]+$/, '').replace(/ \/ /, ' // ');				
				if (resultArray[2].indexOf(',') + 1) {
					resultArray[2] = '"' + resultArray[2] + '"';
				}
				
				
				if (btnId == 'convert_TappedoutNet') {
					resultArray.splice(1, 1);
					resultArray.length = 2;
					arr[i] = resultArray.join(' ');
				} else 
				if (btnId == 'convert_CardList') {
					resultArray.splice(0, 2);
					resultArray.length = 1;
					arr[i] = resultArray.join(' ');
				} else {
					arr[i] = resultArray.join(',');
				}
				
			} else {
				arr[i] = null;
			}
		});
		
		$output.val(
			(btnId == 'convert_DeckboxOrg' ? 'Count,Tradelist Count,Name,Foil,Textless,Promo,Signed,Edition,Condition,Language\n' : '') +
			_.compact(dataArray).join('\n')
		);
	});
	
});