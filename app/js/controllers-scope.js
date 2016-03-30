(function(){

	'use strict';

	/* Controllers */
	var phonecatApp = angular.module('phonecatApp', []);

	phonecatApp.controller('PhoneListCtrl', function($scope, $http){
		
		$scope.errorMessage = false;
		$scope.orderProp = 'age';

		// get the data
		var request = $http.get('./phones/phones.json');

		// on success
		request.success(function(data){
			$scope.phones = data;
		});

		// on error
		request.error(function(data){
			$scope.errorMessage = true;
		});

	});

})();