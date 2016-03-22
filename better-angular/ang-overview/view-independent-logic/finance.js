//When the application grows it is a good practice to move view-independent logic from the controller into a service, so it can be reused by other parts of the application as well
//we could also change that service to load the exchange rates from the web, e.g. by calling the Yahoo Finance API, without changing the controller.

//moved the convertCurrency function and the definition of the existing currencies into the new file finance.js
angular.module('finance', [])
  //we are using a function that returns the currencyConverter function as the factory for the service
  .factory('currencyConverter', function() {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };
    var convert = function (amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };
    return {
      currencies: currencies,
      convert: convert
    };
  });
