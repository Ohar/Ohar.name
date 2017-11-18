$(function($){
	var $tds = $('#test1_DomEl td');
	var times = 1000;
	
	$('#test1_btn_jQuery_Each').on('click', function() {
		var testName = '$.each';
		console.time(testName);		
		for (var i = 0; i < times; i++) {
			$.each($tds, function(){
				1 + 1;
			});
		}
		console.timeEnd(testName);	
	});
	
	$('#test1_btn_Underscore_Each').on('click', function() {
		var testName = '_.each';
		console.time(testName);		
		for (var i = 0; i < times; i++) {
			_.each($tds, function($td){
				1 + 1;
			});
		}
		console.timeEnd(testName);	
	});
	
	$('#test1_btn_native_for').on('click', function() {
		var testName = 'for';
		console.time(testName);		
		for (var i = 0; i < times; i++) {
			for (var j = 0, $tds_length = $tds.length; j < $tds_length; j++) {
				1 + 1;
			}
		}
		console.timeEnd(testName);	
	});
	
});