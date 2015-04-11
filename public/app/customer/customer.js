'use strict';

angular.module("devAdminApp")

.config(function ($routeProvider){
  $routeProvider
    .when("/customer", {
      templateUrl: "/app/customer/customer.html",
      controller: "CustomerCtrl"
    })
    //.when('/customer/excel', {
    //    redirectTo: '/customer'
    //})
    .otherwise({
        redirectTo: '/customer'
    });
})
.controller("CustomerCtrl",function ($http, $scope, myService){
  console.log(myService);
  $scope.message = "Customer Controller";

  $scope.excel = function() {
    //myService.getExcel().success(function (data) {
    //    console.log(data);
    //}).error(function (data) {
    //    //upload failed
    //});

  var pom = document.createElement('a'); 
      pom.setAttribute('href', 'customers/excel'); 
      pom.setAttribute('download', ''); //Colocar para que no aparesca esta leyenda en el consol "http://localhost:3000/customers/excel".
      pom.click();

  };

})

.service('myService', ['$http', function($http){
  var _artist = 'Slash';
  var obj = {};

  obj.getArtist = function(){
    return _artist;
  }

  obj.getExcel = function(){
    return $http.get('customers/excel');
  }

  return obj;

}]);