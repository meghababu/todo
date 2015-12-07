'use strict';
angular.module('myapp',[])
  .controller('Ctrl',function ($scope) {
  	
  console.log("test");
 $scope.login = function(){   
 console.log("Hai");
 		window.location.assign("index.html")
 	

    }
 
});


   