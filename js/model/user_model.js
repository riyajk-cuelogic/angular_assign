moduleMST.factory('UserList',['$http','$q',function($http,$q)
{
	 return {
				getUserList : function()
				{ 
					var deferred = $q.defer();
					
					$http({method:'POST',url :'index.php/user/get_user_list' }).
					success(function(data,status,header,config)
					{
						deferred.resolve(data);
						 
					}).
					error(function(data,status,header,config){});
					
					return deferred.promise;
				}	
				
		 }
	
}]);