//Application developers are free to define their own services by registering the service's name and service factory function, with an Angular module
angular.
module('myServiceModule', []).
 controller('MyController', ['$scope', 'notify', function ($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
 }]).
 //The service factory function generates the single object or function that represents the service to the rest of the application.
factory('notify', ['$window', function(win) {
   var msgs = [];
   //The object or function returned by the service is injected into any component (controller, service, filter or directive) that specifies a dependency on the service
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);
