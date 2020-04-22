'use strict';
angular.module('modal', ['ui.bootstrap']).controller('ModalInstanceCtrl', function($scope, $modalInstance) {
    $scope.ok = function() {
        $modalInstance.close();
    };
    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});
