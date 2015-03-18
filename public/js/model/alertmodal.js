/**
 * 
 */
define([ 'angular', 'ui-bootstrap' ], function(angular, uibootstrap) {
	return angular.module('alertModal', [ 'ui.bootstrap' ]).service(
			'alertService',
			function ($modal) {
				/*var closeController = function($scope,$modalInstance){
					$scope.close = function(result) {
						$modalInstance.dismiss('cancel');
					};
				}*/
				var modalDefaults = {
					backdrop : true,
					keyboard : true,
					modalFade : true,
					backdropClick : true,
					windowClass : 'alert-dialog',
					templateUrl : 'alertmodal'//,
				    //controller: closeController
				};
			
			 	var modalOptions = {
			            bodyText: '..........'
			    };
				this.showModal = function(customModalDefaults, customModalOptions) {
					if (!customModalDefaults)
						customModalDefaults = {};
					customModalDefaults.backdrop = 'static';
					return this.show(customModalDefaults, customModalOptions);
				};

				this.show = function(customModalDefaults, customModalOptions) {
					var tempModalDefaults = {};
					var tempModalOptions = {};
					angular.extend(tempModalDefaults, modalDefaults,
							customModalDefaults);
					angular.extend(tempModalOptions, modalOptions, customModalOptions);
					if (!tempModalDefaults.controller) {
			                tempModalDefaults.controller = function ($scope, $modalInstance) {
			                    $scope.modalOptions = tempModalOptions;
			                    $scope.modalOptions.ok = function (result) {
			                        $modalInstance.close(result);
			                    };
			                    $scope.modalOptions.close = function (result) {
			                        $modalInstance.dismiss('cancel');
			                    };
			                }
			            }
					return $modal.open(tempModalDefaults).result;
				};

			});
})