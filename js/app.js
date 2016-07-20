/*
	Welcome to app.js
		This file will mainly be for routing :)
 */

var app = angular.module('port', ['ngRoute']);

/* App routing with ngRoute */

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'HomeCont',
			controllerAs: 'home'
		})
		.when('/skills', {
			templateUrl: 'templates/skills.html',
			controller: 'SkillsCont',
			controllerAs: 'skills'
		})
		.when('/projects', {
			templateUrl: 'templates/projects.html',
			controller: 'ProjectsCont',
			controllerAs: 'projects'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'AboutCont',
			controllerAs: 'about'
		})
		.otherwise({
			redirectTo: '/'
		});
})
