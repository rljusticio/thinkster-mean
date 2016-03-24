var myApp = angular.module('spicyApp1', []);
myApp.controller('SpicyController', ['$scope', function($scope){
  //SpicyController is just a plain JavaScript function.
  //As an (optional) naming convention the name starts with capital letter and ends with "Controller".

  //Assigning a property to $scope creates or updates the model.
  $scope.spice = 'very';

  //Controller methods can be created through direct assignment to scope
  $scope.chiliSpicy = function() {
    $scope.spice = 'chili';
  }
  $scope.jalapenoSpicy = function(){
    $scope.spice = 'jalapeno';
  }
}]);
