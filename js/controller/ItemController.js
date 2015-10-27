app.controller('ItemController', ['$scope', 'shop', function($scope, shop){
	shop.success(function(data){
		$scope.shop = data;
	});
}]);