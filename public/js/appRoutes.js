angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'ProductController'
		})

		.when('/products/:productname', {
        templateUrl: 'views/detail.html',
        controller: 'DetailController'
      	})

		//.when('/nerds', {
		//	templateUrl: 'views/nerd.html',
		//	controller: 'NerdController'
		//})

		.when('/terms', {
			templateUrl: 'views/terms.html'	
		})
		.otherwise({redirectTo: '/'});

	$locationProvider.html5Mode(true);

}]);