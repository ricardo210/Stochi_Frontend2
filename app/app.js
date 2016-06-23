var app = angular.module('Stochi', ['ui.router', 'ngStorage', 'Stochi.Services', 'Stochi.Controllers']);

angular.module('Stochi.Controllers', []);
angular.module('Stochi.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('index');
	$stateProvider
	.state('index', {
		url: '/index',
		templateUrl: '/views/index.html',
		controller: 'loginController'
	})
	.state('perfil', {
		url: '/perfil',
		templateUrl: '/views/perfil.html',
		controller: 'perfilController'
	})
	.state('productos', {
		url: '/productos',
		templateUrl: '/views/producto.html',
		controller: 'productosController',
	})
	.state('usrproductos', {
		url: '/usrproduct',
		templateUrl: '/views/userproduct.html',
		controller: 'productosController',
	})
	.state('update', {
		url: '/update',
		templateUrl: '/views/update.html',
		controller: 'productosController',
	})
	.state('create', {
		url: '/create',
		templateUrl: '/views/create.html',
		controller: 'productosController',
	})
}]);
