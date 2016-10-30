angular.module('unit-test')
.service('mainService', function($http, $q) {

this.broken = 'working';

this.getProduct = function() {
  return $http({
    method: 'GET',
    url:'/products'
  })
  .then(function(response) {
    return response.data;
  });
};

this.addNew = function(newName, newPrice) {
  console.log(newName, newPrice)
  return $http({
    method: 'POST',
    url: '/addProduct',
    data: {
      name: newName,
      price: newPrice
    }
  })
};

this.deleteProduct = function(deleteId) {
  console.log('service: ' + deleteId);
  return $http({
    method: "DELETE",
    url: "/delete/" + deleteId
  })
}

})
