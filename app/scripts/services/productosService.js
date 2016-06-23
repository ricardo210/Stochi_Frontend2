angular.module('Stochi.Services').factory('productoService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'https://stochi-b.herokuapp.com/';
		return {
				Getproducto: function(){
					return $http.get(baseUrl + "v1/products");
				},
				Postproducto: function(payload){
					return $http.post(baseUrl + "v1/product", payload);
				},
				Deleteproducto: function(payload,id){
					return $http.delete(baseUrl + "v1/productd/" + id,payload);
				},
				Deleteproducto: function(payload,id){
					return $http.delete(baseUrl + "v1/productu/" + id,payload);
				}
	    };
}]);
