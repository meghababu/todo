'use strict';
angular.module('myapp',[])
  .controller('Ctrl',function ($scope) {
  	
  console.log("test");
 $scope.login = function(){   
 console.log("Hai");
 // if $scope.name equals"megha" && $scope.pwd equals "megha" then
 	
 		window.location.assign("index.html")
 	
 // window.location = "test.html";

        // $location.path('/test.html');
    }
  // $scope.name = function () {
  //   return $scope.userName;
  // };
});


   