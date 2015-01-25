/**
 * 
 */
define([ 'angular', 'ui-bootstrap' ], function(angular, uibootstrap) {
	return angular.module('shareModal', [ 'ui.bootstrap' ]).service(
			'shareService',
			function($modal) {
				var mController = function($scope,$modalInstance){
					
					$scope.close = function(result) {
						$modalInstance.dismiss('cancel');
					};
				};
				var modalDefaults = {
					backdrop : true,
					keyboard : true,
					modalFade : true,
					backdropClick : true,
					windowClass : 'share-dialog',
					controller: mController,
					templateUrl : '/sharemodal'
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