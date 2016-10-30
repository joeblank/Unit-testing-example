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
},

$scope.deleteProduct = function(param) {
  console.log(param);
  var deleteId = param;
  console.log('ng-model before: ' + $scope.idDelete);
  $scope.idDelete = '';
  console.log('ng-model after: ' + $scope.idDelete);
  mainService.deleteProduct(deleteId);
}




})
