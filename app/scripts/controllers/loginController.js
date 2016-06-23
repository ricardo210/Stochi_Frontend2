angular.module('Stochi.Controllers')
  .controller('loginController', ['$state','$scope','AuthService', '$rootScope', '$sessionStorage',function ($state,$scope, authService, $rootScope, $sessionStorage) {

      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;
      $scope.boollog = false;
      $scope.viewBackground = "background";

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
              $state.go('index');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.register = function(){
        var user = {username: $scope.user.username, password:  $scope.user.password, scope: ['admin']};
        authService.Register(user).then(function(response){
          alert('Registered in correctly!');
          $scope.login({username: user.username, password: user.password});
        }).catch(function(err){
          console.log(err);
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
          authService.Login(user).then(function(response){
            $sessionStorage.currentUser = response.data;
            $scope.user = {};
            console.log($sessionStorage.currentUser.username);
            console.log($sessionStorage.length);
            if($sessionStorage.currentUser.nombre === ""){
              console.log("empty");
              $scope.boollog = true;
            }
            if($scope.boollog == false){
                $state.go('productos');
            }
        }).catch(function(err){
          alert("Error, ingrese los datos correctos");
          console.log((err.data.error + " " + err.data.message));
        });
      }

      $scope.changeState()=function(){
          $state.go('index');
      }
      $scope.changeStateU()=function(){
          $state.go('perfil');
      }
      $scope.changeStateP()=function(){
          $state.go('usrproductos');
      }
      $scope.changeStateC()=function(){
          $state.go('create');
      }

  }]);
