'use strict';

/* Directives */


angular.module('directives', []).
  directive('headerMenu', function() {
    return  {
				restrict: 'E',
				templateUrl :	'partials/header.html'
			}
  }).directive('footerMenu',function(){
	  return {
		  		restrict	:	'E',
		  		templateUrl	:	'partials/footer.html'
		  	 }
	  
	  });;
