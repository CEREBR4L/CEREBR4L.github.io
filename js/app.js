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
		.when('/skills', {
			templateUrl: 'templates/skills.html',
			controller: 'skillsCont',
			controllerAs: 'skills'
		})
		.when('/projects', {
			templateUrl: 'templates/projects.html',
			controller: 'projectsCont',
			controllerAs: 'projects'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCont',
			controllerAs: 'about'
		})
		.otherwise({
			redirectTo: '/'
		});

	$locationProvider.html5Mode(true);

})
