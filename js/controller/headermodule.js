var HeaderModule		=	angular.module('HeaderModule',[]);

HeaderModule.controller('AboutCtrl',function($scope){
	
	$scope.strAboutUs	=	"Welcome to About me page..!!";	
});

HeaderModule.controller('CareerCtrl',function($scope){
	
	$scope.strCareer	=	"Welcome to CAREERS page..!!";	
});
HeaderModule.controller('ClientCtrl',function($scope){
	
	$scope.strClient	=	"Welcome to clients page..!!";	
});
HeaderModule.controller('TermCnditionCtrl',function($scope){
	
	$scope.strTaC	=	"Welcome to Term and Condition page..!!";	
});