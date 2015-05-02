define([ 'angular', 'angular-resource', 'ui-bootstrap' ], function(angular, resource, uibootstrap) {
	return angular.module('mailModal',['ngResource','ui.bootstrap' ]).service(
			'mailService',
			function($modal) {
				var mailController = function($scope, $modalInstance, $resource, project) {
					$scope.mail = {};
					$scope.project_id = project.id;
					$scope.dialog_title = "舟邮" + project.name + "所有团队成员";
					$scope.submit = function() {
						var Mail = $resource(API + 'email/broadcast');
						var m = new Mail();
						m.$save({
							title : $scope.mail.title,
							project_id : $scope.project_id,
							content : $scope.mail.content
						}, function(mes) {
							if (mes) {
								alert("发送成功");
							}
							$modalInstance.dismiss('cancel');
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
					// windowClass : 'login-dialog',
					controller : mailController,
					templateUrl : 'mailmodal',
					resolve : {
						project : {}
					}
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
});