$(document).ready(function(){
	var MtG = Backbone.Model.extend({
		defaults: {
			has_list: [],
			find_list: []
		},
	});
	
	window.mtg = new MtG;
});