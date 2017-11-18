var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    $canvas = $('#canvas'),
    $dot_quantity_selector = $('.dot_quantity_selector'),
    $start_balancing = $('.start_balancing'),
	defaultColor = 'black',
	circleOpts = {
    	x: canvas.width/2, 
    	y: canvas.height/2, 
    	R: Math.min(canvas.height, canvas.width)/4, 
    	color: {stroke: 'black', fill: 'transparent'}
    };
