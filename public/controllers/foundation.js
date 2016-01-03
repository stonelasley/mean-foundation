'use strict';

/* jshint -W098 */
angular.module('mean.foundation').controller('FoundationController', ['$scope', 'Global', 'Foundation',
  function($scope, Global, Foundation) {
    $scope.global = Global;
    $scope.package = {
      name: 'foundation'
    };
  }
]).config(['$viewPathProvider', function ($viewPathProvider) {
  $viewPathProvider.override('system/views/header.html', 'foundation/views/header.html');
  $viewPathProvider.override('system/views/index.html', 'foundation/views/index.html');
}]);
