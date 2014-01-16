angular.module('hodor-filter', []).filter('hodor', function(){

	return function(input){
		var hodor = [
			'H',
			'o',
			'd',
			'o',
			'r',
			' '
		];

		var stringPos = 0;
		var hodorString = "";
		for (var i = 0; i <input.length; i++) {
			var chr = hodor[i%6];
			hodorString = hodorString + chr;
		}

		return hodorString;

	};

});