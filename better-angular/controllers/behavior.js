var myApp = angular.module('myApp', []);
//use a Controller to add a method, which doubles a number, to the scope
myApp.controller('DoubleController', ['$scope', function($scope){
  $scope.double = function(value){ return value * 2; }
}]);
