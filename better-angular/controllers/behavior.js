var myApp = angular.module('myApp', []);
//use a Controller to add a method, which doubles a number, to the scope
myApp.controller('DoubleController', ['$scope', function($scope){
  //any objects (or primitives) assigned to the scope become model properties
  $scope.double = function(value){ return value * 2; }
  //Any methods assigned to the scope are available in the template/view, and can be invoked via angular expressions and ng event handler directives (e.g. ngClick)
}]);
