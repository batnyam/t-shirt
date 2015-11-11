app.controller('ItemController', ['$scope', 'shop', function($scope, shop){
	shop.success(function(data){
		$scope.shop = data;
	});

	$scope.selectedItems = [];
	
	function setCardItem(id){
		console.log('bb');
		currentProduct = $scope.shop.products[id];
		item = "<li><img src='"+currentProduct.thumb+"' class='product-image'></span><span class='product-name'>"+currentProduct.title+"</span><span class='product-price'>"+currentProduct.price+"</span></li>";
		card = $('.bag-product').html();
		card += item;
		$('.bag-product').html(card);
	}

	$scope.addCard = function(id){
		console.log(id);
		$scope.selectedItems.push(id);
		console.log($scope.selectedItems.indexOf(0));
		setCardItem(id);
		//bill();
	}

	function bill(){
		console.log($scope.selectedItems[0]);
		i = 0;
		bill = 0;
		while( i <= $scope.selectedItems.length){
			bill += $scope.selectedItems[i].price*$scope.selectedItems[i].statePer;
			i++;
		}
		console.log(bill);
	}
}]);