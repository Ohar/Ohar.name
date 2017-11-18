function drawCircle (circle){
	var defaultColor = 'black',
	    x = parseNum(circle.x, 100),
	    y = parseNum(circle.y, 100),
	    R = parseNum(circle.R, 100);
		
	colorStroke = circle.color.stroke || defaultColor;
	colorFill = circle.color.fill || defaultColor;
	
	ctx.beginPath();
	ctx.arc(x, y, R, 0, 2 * Math.PI);
	ctx.strokeStyle = colorStroke;
	ctx.fillStyle = colorFill;
	ctx.stroke();
	ctx.fill(); 
	ctx.strokeStyle = defaultColor;
	ctx.fillStyle = defaultColor;
}


function drawPoint (coords){
	console.log(arguments);
	x = parseNum(coords.x);
	y = parseNum(coords.y);
	color = coords.color || defaultColor;
	
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + 1, y + 1);
	ctx.closePath();
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.strokeStyle = defaultColor;
}


function getRandomPoints(quantity, color){
	var points = [];
	
	quantity = parseNum(quantity);
	color = color || defaultColor;
	while (quantity--) {
		points.push(_.extend({}, {color: color}, getRandomCoords()));
	}
	return points;
}


function drawPoints(points){
	_.each(points, function(point){
		drawPoint(point);
	});
}


function drawPointsAtRandom(times, color){
	times = parseNum(times);
	var point, points = [];
	while (times--) {
		point = _.extend({}, {color: color}, getRandomCoords());
		points.push(point);
		drawPoint(point);
	}
	return points;
}


function drawLinesToCircle(points, circle){
	circle = circle || circleOpts;
	_.each(points, function(point){
		drawLine({
			xA: point.x, 
			yA: point.y, 
			xB: circle.x, 
			yB: circle.y, 
			color: point.color, 
		});	
	});
}


function drawLine (line){
	var xA = line.xA,
	    yA = line.yA,
	    xB = line.xB,
	    yB = line.yB,
	    color = line.color || defaultColor;
		
	ctx.beginPath();
	ctx.moveTo(xA, yA);
	ctx.lineTo(xB, yB);
	ctx.closePath();
	ctx.strokeStyle = color;
	ctx.stroke();
	ctx.strokeStyle = defaultColor;
}


function getPointsOnCircle(points, circle){
	var result = [];
	_.each(points, function(point){
		var dot = Math.random() > 0.5 ? 
		    lineCrossCircleDot(point, circle)[0] : 
		    lineCrossCircleDot(point, circle)[1];
		result.push(dot);
	});

	return result;
}


function lineCrossCircleDot(point, circle){
	// Прямая: y = (x * (y2 - y1) - x1 * y2 + y1 * x2) / (x2 - x1);
	// Окружность: (x - x0)² + (y − y0)² = R²
	// Вычислить х-координату точку пересечения: ax² + bx + c = 0
	var x1 = point.x,
	    y1 = point.y,
	    x2 = x0 = circle.x,
	    y2 = y0 = circle.y,
	    R = circle.R,
	    a = (((y2 - y1) * (y2 - y1)) / ((x2 - x1) * (x2 - x1))) + 1,
	    b = (2 * (y1*y2* (x1 + x2) - x1*y2*y2 - x2*y1*y1)) / (Math.pow(x2 - x1, 2)) - ((2*y0 * (y2 - y1)) / (x2 - x1)) - (2*x0),
	    c = ((-2*y0 * (y1*x2 - x1*y2)) / (x2 - x1)) + (Math.pow((x1*y2 - y1*x2), 2) / Math.pow(x2 - x1, 2)) + y0 * y0 + x0 * x0 - R * R,
	    D = (b * b) - (4 * a * c),
	    X1 = (-1*b + Math.sqrt(D)) / (2*a),
	    X2 = (-1*b - Math.sqrt(D)) / (2*a),
	    Y1 = (X1 * (y2 - y1) - x1*y2 + y1*x2) / (x2 - x1),
	    Y2 = (X2 * (y2 - y1) - x1*y2 + y1*x2) / (x2 - x1);
	return [{x: X1, y: Y1}, {x: X2, y: Y2}];
}


function getRandomCoords(){
	var minX = 0,
		minY = 0,
		maxX = canvas.width,
		maxY = canvas.height,
		randX = minX + (maxX - minX) * Math.random(),
		randY = minY + (maxY - minY) * Math.random();
	return {x: randX, y: randY};
}


function isPointOnTheCircle (point, circle) {
	var x = point.x,
	    y = point.y,
	    x0 = circle.x,
	    y0 = circle.y,
	    R  = circle.R,
	    // Формула окружности (x - x0)² + (y − y0)² = R²
	    result = (((x - x0) * (x - x0)) + ((y - y0) * (y - y0))) === (R * R);
		
	console.log(result, [x, y], [x0, y0, R]);
	return result;
}


function calcPointsRepulse (points) {
	_.map(points, function(A){
		var otherPoints = _.reject(points, function(point){return point === A}),
		    vectors = [],
		    vector = {};
			// console.log(otherPoints);
		_.each(otherPoints, function(B){
			// Для отсчёта угла примем базовым 
			// вектор, направленный снизу вверх: ↑
			// Угол растёт по часовой стрелке
			var dX = Math.abs(A.x - B.x),
			    dY = Math.abs(A.y - B.y),
			    l = Math.sqrt(dX*dX + dY*dY),
				preciseKoef = $dot_quantity_selector.val() * Math.sqrt($dot_quantity_selector.val()) * 10,
			    force = Math.pow(Math.min(canvas.height, canvas.width), 2) / 
					(preciseKoef * l * Math.sqrt(l)),
			    aSin = Math.asin(dX / l),
			    part = (function(){
					if (A.x > B.x && A.y < B.y) {return 1}
					if (A.x > B.x && A.y > B.y) {return 2}
					if (A.x < B.x && A.y > B.y) {return 3}
					if (A.x < B.x && A.y < B.y) {return 4}
				})(),
				angle = (function() {
					switch (part) {
						case 1:
							return aSin;
						case 2:
							return Math.PI - aSin;
						case 3:
							return Math.PI + aSin;
						case 4:
							return 2 * Math.PI - aSin;
					}
				})();
			
			vectors.push({
				l: force,
				angle: angle
			});
		});
		vector = _.reduce(vectors, function(A, B){
			return summVectors (A, B);
		});
		return _.extend(A, {vector: vector});
	});
	return points;
}


function summVectors (A, B) {
	var anglesDiff = getAnglesDiff(),
	    l = getResultVectorLength(),
	    angle = getResultVectorAngle();
	
	return {
		l: l,
		angle: angle
	};
	
	function getAnglesDiff() {
		var y = Math.abs(A.angle - B.angle);
		return y > Math.PI ? 2*Math.PI - y : y;
	}
	
	function getResultVectorLength() {
		return Math.sqrt(A.l*A.l + B.l*B.l + 2*A.l*B.l * Math.cos(anglesDiff));
	}

	function getResultVectorAngle () {
		var resultAngle = (function (){
		    if (l > 0){
		    	var max = _.max([A, B], function(e){return e.angle}), 
		    	    min = _.reject([A, B], function(e){return e === max})[0];
		    	
		    	if (Math.abs(A.angle - B.angle) > Math.PI){
		    		return max.angle + Math.acos((max.l*max.l + l*l - min.l*min.l) / (2*max.l*l));
		    	} else {
		    		return min.angle + Math.acos((min.l*min.l + l*l - max.l*max.l) / (2*min.l*l));
		    	}
		    } else {
		    	return 0;
		    }
		})();
		return resultAngle % (Math.PI * 2);
	}
}


function drawPointsBig (points, fill){
	fill = fill || 'red';
	_.each(points, function(point){
		drawCircle(_.extend({R: Math.min(canvas.height, canvas.width)/200, color: {stroke: 'black', fill: fill}}, point));
	});
}


function drawVectors (points, color){
	color = color || 'black';
	_.each(points, function(point){		
		drawLine({
			xA: point.x,
			yA: point.y,
			xB: point.x + point.vector.l * Math.sin(point.vector.angle),
			yB: point.y - point.vector.l * Math.cos(point.vector.angle),
			color: color
		});
	});
}


function movePointsByVectors (oldPoints){
	var newPointsByVectors = getNewPointsByVectors(oldPoints),
     newPointsOnCircle = doProjectPointsOnCircle(newPointsByVectors);
 
	drawVectors(oldPoints, 'red');
	drawPointsBig(newPointsByVectors, 'blue');
	drawLinesToCircle(newPointsByVectors);
	
	return newPointsOnCircle;
	
	function getNewPointsByVectors (points) {
		return _.map(points, function(point){
			var x = point.x + point.vector.l * Math.sin(point.vector.angle),
			    y = point.y - point.vector.l * Math.cos(point.vector.angle);
				
			// drawLine({
				// xA: point.x,
				// yA: point.y,
				// xB: x,
				// yB: y,
				// color: 'orange'
			// });
			
			return {
				x: x,
				y: y
			}
		});
	}
}


function doProjectPointsOnCircle(points, circle) {
	circle = circle || circleOpts;
	result = [];
	
	_.each(points, function(point) {
		var pointsOnCircle = lineCrossCircleDot(point, circle);
		
		result.push(_.find(pointsOnCircle, function(pointOnCircle){
			var maxX = Math.max(circle.x, point.x),
			    minX = Math.min(circle.x, point.x),
			    maxY = Math.max(circle.y, point.y),
			    minY = Math.min(circle.y, point.y);
			
			return (
				(pointOnCircle.x <= maxX) &&
				(pointOnCircle.x >= minX) &&
				(pointOnCircle.y <= maxY) &&
				(pointOnCircle.y >= minY)
			);
		}));
	});
	return result;
}


function doBalancePoints(points, i, $balance_counter){
	drawPointsBig(points);
	i = (i || 0) + 1;
	$balance_counter = $balance_counter || $('#balance_counter');
	$balance_counter.html(i);
	
	points = calcPointsRepulse(points);
	if (!isPointsBalanced(points)) {
		setTimeout(function(){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			drawCircle(circleOpts);
			doBalancePoints(movePointsByVectors(points), i, $balance_counter);
		}, 1);
	} else {
		drawPointsBig(points, 'green');
	}
}


function isPointsBalanced(points){
	var isBalanced,
	    vectors = [], 
	    vectorMax, 
	    vectorMin;
	    balancingKoef = 0.001 * points.length;
	
	_.each(points, function(point){
		vectors.push(point.vector.l);
	});
	
	vectorMax = _.max(vectors);
	vectorMin = _.min(vectors);
	 	
	// Балансировать до точности в 5%
	isBalanced = (vectorMax - vectorMin) < (vectorMax * balancingKoef);
	return isBalanced;
}


function drawNewScene(peeks){
	var randomPoints = getRandomPoints(peeks),
	    pointsOnCircle = getPointsOnCircle(randomPoints, circleOpts);
	
	// $dot_quantity_selector.val(peeks);
	doBalancePoints(pointsOnCircle);
}