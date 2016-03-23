//create an Angular Module, myApp, for our application
var myApp = angular.module('myApp', []);

//add the controller's constructor function to the module using the .controller() method
//This keeps the controller's constructor function out of the global scope
//We have used an inline injection annotation to explicitly specify the dependency of the Controller on the $scope service provided by Angular
myApp.controller('GreetingController', ['$scope', function($scope){
  $scope.greeting = 'Hola!';
}]);
