angular.module('unit-test')
.controller('mainCtrl', function($scope, mainService, $interval) {

$scope.broken = mainService.broken;

$scope.getProduct = function() {
  mainService.getProduct().then(function(response) {
    $scope.products = response;
  })
};

$interval(function() {
  $scope.getProduct();
}, 2000);

$scope.addNew = function(newName, newPrice) {
  mainService.addNew(newName, newPrice);
}




})
