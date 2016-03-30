(function(){

'use strict';

	/* Controllers */
	var phonecatControllers = angular.module('phonecatControllers', []);

	// define PhoneListCtrl controller
	phonecatControllers.controller('PhoneListCtrl', ['$http', function ($http){

		var type = this;
		type.phones = [];
		
		// set to false to hide errorMessage
		this.connectionError = false;

		// default list by newest (-age would be oldest)
		this.orderProp = 'age';

		// set to true to hide 'num of'
		this.limitPropAll = true;

		// get the data
		$http.get('./phones/phones.json')
			// on success
			.then(function successCallback(response){
				type.phones = response.data;

				// set list to show all results
				type.limitProp = 'All';
			},
			// on error
			function errorCallback(response) { 
				type.connectionError = true;

				// default list to show all 0
				type.limitProp = 0;
		});

		// listen for change on option
		this.onChangeOption = function(value, length){
			if (value === 'All' || value == length) {
				type.limitPropAll = true;
			} else {
				type.limitPropAll = false;
			}

		};

		// reset option filter to all when filtering by input
		this.onChangeInput = function(){
			type.limitProp = 'All';
			type.limitPropAll = true;
		};

	}]);

	// define PhoneDetailCtrl controller
	phonecatControllers.controller('PhoneDetailCtrl', ['$http', '$routeParams', function ($http, $routeParams) {

		var type = this;
		type.details = [];

		// set the passed parameter to 'this' controller phoneId 
		// reference is made to phoneId within PhoneDetailsCtrl in phone-detail.html
		this.phoneId = $routeParams.phoneId;

		$http.get('./phones/' + this.phoneId + '.json')
			// on success
			.then(function successCallback(response){
				type.details = response.data;
				console.log('success in connection');
			},
			// on error
			function errorCallback(response){
				console.log('error in connection');
			});
	 }]);



})();