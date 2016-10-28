angular.module('unit-test', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/home');

$stateProvider
  .state('home', {
    url: '/home',
    templateUrl: './home.html'
  })
  .state('products', {
    url: '/products',
    templateUrl: './products.html'
  })
  .state('add', {
    url: '/addProduct',
    templateUrl: './add.html'
  })




})
