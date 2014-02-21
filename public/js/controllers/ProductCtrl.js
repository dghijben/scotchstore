
angular.module('ProductCtrl', []).controller('ProductController', function($scope, $http) {

	$scope.formData = {};

	// when landing on the page, get all products and show them
	$http.get('/api/products')
		.success(function(data) {
			$scope.products = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the item to the node API
	$scope.createProduct = function() {
		$http.post('/api/products', $scope.formData)
			.success(function(data) {
				$scope.formData = {};
				$scope.products = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});	
	};

	// delete a product after checking it
	$scope.deleteProduct = function(id) {
		$http.delete('/api/products/' + id)
			.success(function(data) {
				$scope.products = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};	

});