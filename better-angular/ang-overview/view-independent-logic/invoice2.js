//specifies that the invoice2 module depends on the finance2 module
angular.module('invoice2', ['finance'])
  //Now that Angular knows of all the parts of the application, it needs to create them

  //we now pass an array to the module.controller function, instead of a plain function
    //The array first contains the names of the service dependencies that the controller needs.
    //The last entry in the array is the controller constructor function
      //Angular uses this array syntax to define the dependencies so that the DI also works after minifying the code, which will most probably rename the argument name of the controller constructor function to something shorter like a
  .controller('InvoiceController', ['currencyConverter', function (currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';
    this.currencies = currencyConverter.currencies;

    this.total = function total(outCurr) {
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
    };

    this.pay = function pay(){
      window.alert("Thanks!");
    };
}]);
