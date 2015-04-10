'use strict';

angular.module("devAdminApp")

.config(function ($routeProvider){
  $routeProvider
    .when("/customer", {
      templateUrl: "/app/customer/customer.html",
      controller: "CustomerCtrl"
    })
    .when('/customer/excel', {
        templateUrl: 'app/customer/customer.html',
        controller: 'CustomerCtrl',
        resolve: {
          customer: function(services, $route){
            var customerID = $route.current.params.customerID;
              if(customerID != 0){
                return services.getCustomer(customerID);
              } else {return ;}
          }
        }
    })
    .otherwise({
        redirectTo: '/'
    });
})
.controller("CustomerCtrl",function ($scope, $http){
  $scope.message = "Customer Controller";

 	$scope.excel = function() {
	    $http.get('/customers/excel');
	};


});