app.directive('itemDirective', function(){
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'itemInfo.html'
	};
});