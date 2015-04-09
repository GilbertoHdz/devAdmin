'use strict';

//angular.module('appAdminApp', [])
//  .config(function ($routeProvider) {
//    $routeProvider
//      .when('/main', {
//        templateUrl: '/app/main/main.html',
//        controller: 'MainCtrl'
//      });
//  });

angular.module("devAdminApp")

.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "/app/main/main.html",
      controller: "MainCtrl"
    }
  );
}).controller("MainCtrl", function ($scope){
  $scope.message = "Main Controller";
  
});