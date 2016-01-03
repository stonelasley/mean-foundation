'use strict';

/* jshint -W098 */
angular.module('mean.foundation').controller('FoundationController', ['$scope', 'Global', 'Foundation',
  function($scope, Global, Foundation) {
    $scope.global = Global;
    $scope.package = {
      name: 'foundation'
    };
  }
]);
