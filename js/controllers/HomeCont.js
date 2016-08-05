angular.module('port')
	.controller('homeCont', function HomeController(){
		this.heroMain = "WELCOME TO MY PORTFOLIO";
		this.subHero  = "I write code and make things."

		this.aboutMe  = {
			title: "About",
			body: "I am known as Cerebral, I like to write code, create things and have fun doing so. I am interested in creating apps that are fun but also useful or functional for people to use. I like to create apps currently using NodeJS, Angular and MongoDB but am always looking to learn new things. I hope to go on the learn python and start to take a look at machince learning as well as branching out into making games and many other things."
		}

	});