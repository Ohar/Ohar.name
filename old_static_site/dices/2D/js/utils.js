function radToDeg (rad){
	return rad * 180 / Math.PI;
}

function roundTo (num, pow){
	pow = pow || 0;
	var level = Math.pow(10, pow);
	return Math.round(num * level) / level;
}

function printObj(){
	$('body').append('<p>');
	_.each(arguments, function(e){
		 $('body').append(JSON.stringify(e) + '<br>');
	});
	$('body').append('</p>');
}

function parseNum (num, _default){
	return typeof num === 'undefined' ? _default || 1 : parseInt(num);
}