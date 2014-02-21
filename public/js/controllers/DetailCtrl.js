angular.module('DetailCtrl', []).controller('DetailController', ['$scope', '$routeParams', 'Restangular',
  function($scope, $routeParams, Restangular) {
	$scope.productname = $routeParams.productname;
}]);