//var devApp = angular.module('devCustomerController',[]);
var devApp = angular.module('devAdminApp',[]);

devApp.controller('CustomerController', ['$scope', function($scope) {
  $scope.message = 'Hola!';
}]);