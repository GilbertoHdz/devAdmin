'use strict';

angular.module("devAdminApp")

.config(function ($routeProvider){
  $routeProvider
    .when("/admin", {
      templateUrl: "/app/admin/admin.html",
      controller: "AdminCtrl"
    })
    .otherwise({
        redirectTo: '/admin'
    });
})
.controller("AdminCtrl",function ($http, $scope){
  $scope.message = "Admin AdminCtrl";
});