app.controller('ItemController', ['$scope', 'shop', function($scope, shop){
	shop.success(function(data){
		$scope.shop = data;
	});

	$scope.selectedItems = [];
	
	function setCardItem(id){
		currentProduct = $scope.shop.products[id];
		item = "<li><img src='"+currentProduct.thumb+"' class='product-image'></span><span class='product-name'>"+currentProduct.title+"</span><span class='product-price'>"+currentProduct.price+"</span></li>";
		card = $('.dropdown-menu').html();
		card += item;
		$('.dropdown-menu').html(card);
		$('.dropdown-toggle').attr("aria-expanded", true);
	}

	$scope.addCard = function(id){
		$scope.selectedItems.push(id);
		setCardItem(id);
	}
}]);