angular.module('port')
	.controller('homeCont', function HomeController($scope){
		
		$scope.heroMain = "WELCOME TO MY PORTFOLIO";
		$scope.subHero  = "I write code and make things."

		$scope.aboutMe  = {
			title: "About",
			body: "I am Cerebral, I like to write code, create things and have fun doing so. I am interested in creating apps that are fun but also useful or functional for people to use. I like to create apps currently using NodeJS, Angular and MongoDB but am always looking to learn new things. I hope to go on the learn python and start to take a look at machince learning as well as branching out into making games and many other things."
		}

		$scope.projects = [
			{
				"img": "img/1.png",
				"title": "Linkr",
				"desc": "Linkr is a URL shortening app.",
				"button": "Clicc Me"
			},
			{
				"img": "img/1.png",
				"title": "Mehssager.io",
				"desc": "Mehssager.io is an app to send super secret messages to your friends!",
				"button": "WHO UPP CLICC LIKE"
			}
		]

	});