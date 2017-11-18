var $surnames = jQuery('<textarea id="surnames"></textarea>'),
    START = 1,
    END = START,
	URL = 'http://www.familii.ru/onomastika/spravka/1564-familii-spisokj',
	letters = getletters();
	
// jQuery('body').append($surnames);

letters.forEach(letter => {
	END = getEndPageNum(letter);
	parsePage(START, letter);
});

function getListFromHtml (html) {
	var $html = jQuery(html),
	    $list = jQuery('.fam_list_button2', $html),
	    list = [];
		
	$list.each((i, e) => {
		list.push(jQuery(e).html());
	});
	
	return list;
}

function parsePage (num, letter) {
	var url_template = URL + '?letr=' + letter + '&page=' + num,
	    dfd = jQuery.Deferred();
	
	jQuery.get(url_template, data => {
		$surnames.val(
			$surnames.val() + getListFromHtml(data).join("\n") + "\n"
		);
		
		dfd.resolve();
		
		if (num <= END) {
			parsePage(++num, letter);
		}
	});
	
	return dfd.promise();
}

function getletters () {
	var $lettersWrapper = jQuery('#fam_out_box center')[0],
		$letters = jQuery('.fam_button', $lettersWrapper), 
		letters = [];
		
	$letters.each((i, e) => {
		letters.push(jQuery(e).html().trim());
	});
	
	return letters;
}

function getEndPageNum (letter) {
	var url_template = URL + '?letr=' + letter,
	    dfd = jQuery.Deferred();
	
	jQuery.get(url_template, data => {
		var $wrapper = jQuery('#fam_out_box center', data)[1],
		    END = jQuery('.fam_button', $wrapper).length;
		
		dfd.resolve(END);
	});
	
	return dfd.promise();
}
