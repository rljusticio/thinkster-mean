var myApp = angular.module('spicyApp2', []);
myApp.controller('SpicyController', ['$scope', function($scope){
  $scope.customSpice = 'wasabi';
  $scope.spice = 'very';
  //SpicyController Controller now defines just one method called spicy, which takes one argument called spice

  // The template then refers to this Controller method and passes in a string constant 'chili' in the binding for the first button and a model property customSpice (bound to an input box) in the second button
  $scope.spicy = function(spice){
    $scope.spice = spice;
  }
}]);
