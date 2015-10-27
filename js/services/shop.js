app.factory('shop', ['$http', function($http){
	return $http.get('http://localhost/t-shirt/data.json')
	.success(function(data){
		return data;
	})
	.error(function(err){
		return err;
	})
}]);