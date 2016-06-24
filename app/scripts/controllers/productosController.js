angular.module('Stochi.Controllers')
  .controller('productosController', ['productosService', '$scope','$state', '$rootScope', '$sessionStorage',  function (productoService, $scope, $state, $rootScope, $sessionStorage) {

    $scope.productoArreglo = [];
      $scope.producto={};
          $scope.viewBackground = "background";

    $scope.loadProducto =  function(){
      productosService.Getproducto().then(function(response){
        $scope.productoArreglo = response.data;
      }).catch(function(err){
        alert("No se puede leer los productos");
      });
    }

    $scope.addProducto =  function(productos){
      $scope.producto=productos;
      $scope.producto.username=$sessionStorage.currentUser.username;
      productosService.Postproducto($scope.producto).then(function(response){
      }).catch(function(err){
        alert("No se puede leer el inventario de productos creados");
      });
    }
    $scope.deleteProducto= function(item){
    productosService.Deleteproducto(item,item._id).then(function(response){
      alert("Deleted");
      $scope.loadProducto();
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }

  $scope.updateProducto = function(item){
     productosService.Updateproducto(item,item._id).then(function(response){
       alert("updated product");
       $scope.loadProducto();
     }).catch(function(err){
       alert(err.data.error + " " + err.data.message);
     });

   }
  $scope.changeStateM=function(){
      $state.go('update');
  }
  $scope.changeStateU=function(){
      $state.go('perfil');
  }

  }]);
