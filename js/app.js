'use strict';

var App	=	angular.module('app',['ngRoute','HelloWorld','HeaderModule']);

App.config(['$routeProvider',function($routeProvider){
	
	$routeProvider.when('/hello',{
									templateUrl	:	'views/hello_world.html',
									controller	:	'HelloWorldCtrl'	
								}).
					when('/about-us',{
										templateUrl	:  'views/about.html',
										controller	:	'AboutCtrl'
									}).
					when('/careers',{	templateUrl	:  'views/careers.html',
										controller	:	'CareerCtrl'
									}).
					when('/clients',{
										templateUrl	:  'views/clients.html',
										controller	:	'ClientCtrl'
										}).
					when('/term-condition',	{
												templateUrl	:  'views/termcondition.html',
												controller	:	'TermCnditionCtrl'	}).
					when('/home',{
									templateUrl : 'views/home.html'
									
								}).	
					otherwise({redirectTo : 'home'});
	
	}]);

