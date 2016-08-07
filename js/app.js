/*
	Welcome to app.js
		This file will mainly be for routing :)
 */

var app = angular.module('port', ['ngRoute']);

/* App routing with ngRoute */

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCont',
			controllerAs: 'home'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

})
