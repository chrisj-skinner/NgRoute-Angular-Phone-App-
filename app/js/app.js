(function(){

'use strict';

	/* App Module */

	// define module
	var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers']);

	// set up route config
	phonecatApp.config(['$routeProvider', function($routeProvider) {
		$routeProvider.

		// when phones route dir
		when('/phones', {
    		templateUrl: 'partials/phone-list.html',
    		controller: 'PhoneListCtrl'
  		}).

  		// when phones route dir with phoneId
  		when('/phones/:phoneId', {
    		templateUrl: 'partials/phone-detail.html',
    		controller: 'PhoneDetailCtrl'
  		}).

  		// else
  		otherwise({
    		redirectTo: '/phones'
  		});
	}]);


})();