//Services are registered to modules via the Module API. Typically you use the Module factory API to register a service
var myModule = angular.module('myModule', []);
myModule.factory('serviceId', function() {
  var shinyNewServiceInstance;
  // factory function body that constructs shinyNewServiceInstance
  return shinyNewServiceInstance;
});
//Note that you are not registering a service instance, but rather a factory function that will create this instance when called.
