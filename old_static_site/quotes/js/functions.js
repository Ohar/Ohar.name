function get_quote (num) {
    var q, 
        max_num = window.quotes.length - 1, 
        min_num = 0,
        $nextBtn = $('.get_next_quote'),
        $prevBtn = $('.get_prev_quote');
        
    num = Math.min(max_num, Math.max(min_num, num));
    
    q = window.quotes[num];
    location.hash = num;
    $('.quote_link')
        .attr('href', '#' + num)
        .html('№&thinsp;' + num);
    $('.quote_text').html(q.text);
    $('.quote_origin')
        .attr('href', q.origin.uri)
        .html(q.origin.name);
    $('title').text('Цитата № ' + num + ' | Ohar');
    $('.meta_description').attr('content', q.text + "\n" + '© ' + q.origin.name);
        
    $nextBtn.add($prevBtn).removeAttr('disabled');
    
    if (num === max_num) {
        $nextBtn.attr('disabled', 'disabled');
    } else 
    if (num === min_num) {
        $prevBtn.attr('disabled', 'disabled');
    }
}

function get_next_quote () {
    get_quote(get_cur_num() + 1);
}

function get_prev_quote () {
    get_quote(get_cur_num() - 1);
}

function get_cur_quote () {
    get_quote(get_cur_num());
}

function get_random_quote () {
    var max_num = window.quotes.length - 1;
    get_quote(Math.round(Math.random() * max_num));
}

function get_cur_num () {
    var cur_num = Number(location.hash.slice(1));
    return isNaN(cur_num) ? 0 : cur_num;
}


function handleArrows (e) {
	if (e.keyCode === 37) { // ←
		get_prev_quote();
	} else if (e.keyCode === 39) { // →
		get_next_quote();
	}
}
