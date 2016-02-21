﻿(function () {
	angular
        .module('catchMeApp')
        .config(config);

	function config($routeProvider, $locationProvider) {	    
		$routeProvider.when('/', {
			templateUrl: '/Assets/Scripts/angular/templates/tripList.html',
			controller: 'TripListController',
			controllerAs: 'tripListVm'
		});

		$routeProvider.when('/TripAdd', {
		    templateUrl: '/Assets/Scripts/angular/templates/tripAdd.html'		    
		});

		$routeProvider.when('/Trips', { redirectTo: '/' });

		$routeProvider.otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);        
	}
})();