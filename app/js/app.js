'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'directives',
  'CtrlModule'
]).
config(['$routeProvider', function($routeProvider)
{
  	$routeProvider.when('/hello', {templateUrl: 'partials/hello.html', controller: 'CtrlHello'}).
				   when('/home',{templateUrl : 'partials/home.html', controller: 'CtrlHome'}).
				   when('/aboutus',{templateUrl : 'partials/about.html',controller: 'CtrlHome'}).
				   when('/joinus',{templateUrl : 'partials/joinus.html',controller: 'CtrlHome'}).
				   when('/clients',{templateUrl : 'partials/client.html',controller: 'CtrlHome'}).
				   when('/career',{templateUrl : 'partials/career.html',controller: 'CtrlHome'}).
				   when('/toc',{templateUrl : 'partials/termcondition.html',controller: 'CtrlHome'}).
				   otherwise({redirectTo: '/hello'});
}]);
