/**
 * 
 */
define([ 'angular', 'ui-bootstrap' ], function(angular, uibootstrap) {
	return angular.module('loginModal', [ 'ui.bootstrap' ]).service(
			'loginService',
			function($modal) {
				var loginController = function($scope,$modalInstance){
					$scope.remember = true;
					if(localStorage.isRemember){
						  $scope.email = localStorage.email;
						  $scope.password = localStorage.password;
					}
					$scope.submit = function(loginForm) {
						console.log(loginForm);
						console.log($scope);
				      	var emailVal = loginForm.email.$modelValue;
				      	var passwordVal = loginForm.password.$modelValue;
				      	var data={
				      			email:emailVal,
				      	        password:passwordVal
				      	};
				      	$.ajax({
				      		   type: "GET",
				      		   url: "http://api.tongjo.com/accesstoken",
				      		   data: data,
				      		   dataType:"json",
				      		   success: function(msg){
				      			   if(msg.error){
				          	    	   $scope.$apply(function () {
				           	    		  $scope.errorMsg = "用户名或密码错误";
				           	          });
				          	    	  return;
				      			   }
				      			   var user = msg;
				      		       localStorage.user = JSON.stringify(msg);
				      		       localStorage.uid = user.id;
				      		       localStorage.accesstoken = user.accesstoken;
				      		       if(loginForm.remember.$modelValue){
				      		    	   localStorage.email = emailVal;
				      		    	   localStorage.password = passwordVal;
				      		    	   localStorage.isRemember = true;
				      		       }
				      		       $modalInstance.close(true);
				      		   },
				      	       error: function(data) {
				      	    	   $scope.$apply(function () {
				       	    		  $scope.errorMsg ="error";
				       	          });
				      	       }
				      	});
					};
					$scope.close = function(result) {
						$modalInstance.dismiss('cancel');
					};
				};
				var modalDefaults = {
					backdrop : true,
					keyboard : true,
					modalFade : true,
					backdropClick : true,
					windowClass : 'login-dialog',
					controller: loginController,
					templateUrl : 'loginmodal'
				};
				this.showModal = function(customModalDefaults) {
					if (!customModalDefaults)
						customModalDefaults = {};
					customModalDefaults.backdrop = 'static';
					return this.show(customModalDefaults);
				};

				this.show = function(customModalDefaults) {
					var tempModalDefaults = {};
					angular.extend(tempModalDefaults, modalDefaults,
							customModalDefaults);
					return $modal.open(tempModalDefaults).result;
				};

			});
})