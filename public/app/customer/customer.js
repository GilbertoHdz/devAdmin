'use strict';

angular.module("devAdminApp")

.config(function($routeProvider){
  $routeProvider
  .when("/customer", {
      templateUrl: "/app/customer/customer.html",
      controller: "CustomerCtrl"
    });
})
.controller("CustomerCtrl", function ($scope){
  $scope.message = "Customer Controller";
});