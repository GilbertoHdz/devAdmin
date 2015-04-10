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
    console.log(myService.getExcel());
      myService.getExcel();
   //myService.getExcel().success(function(response) {            
   //    console.log('True excel.');
   //    console.log(response._data);
   //}).error(function() {
   //    console.log('Error excel.');
   //});

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