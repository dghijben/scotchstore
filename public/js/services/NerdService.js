angular.module('NerdService', []).factory('Product', ['$http', function($http) {

	$http.get('/api/products')
		.success(function(data) {
			$scope.products = data;
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	return data;

}]);