var app = angular.module('shop', ['ngRoute']);
app.config(function ($routeProvider){
	$routeProvider
	.when('/', {
		controller: 'ItemController',
		templateUrl: 'js/views/container.html'
	})
	.when('/shop', {
		controller: 'ItemController',
		templateUrl: 'js/views/container.html'
	})
	.when('/about', {
		controller: 'AboutController',
		templateUrl: 'js/views/about.html'
	})
	.when('/where', {
		controller: 'WhereController',
		templateUrl: 'js/views/where.html'
	})
	.when('/faq', {
		controller: 'FaqController',
		templateUrl: 'js/views/faq.html'
	})
	.when('/contact', {
		//controller: 'ContactController',
		templateUrl: 'js/views/contact.html'
	})
	.when('/cart', {
		controller: 'CartController',
		templateUrl: 'js/views/cart.html'
	});
});

app.directive('itemDirective', function(){
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'directives/itemInfo.html'
	};
});