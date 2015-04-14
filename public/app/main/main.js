'use strict';

angular.module("devAdminApp")

.config(function($routeProvider){
  $routeProvider.when("/",{
      templateUrl: "/app/main/main.html",
      controller: "MainCtrl"
    })
  	.otherwise({
        redirectTo: '/'
    });
})
.controller("MainCtrl", function ($scope){
  $scope.message = "Main Controller";
  
});