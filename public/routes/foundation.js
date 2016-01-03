'use strict';

angular.module('mean.foundation').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('foundation example page', {
      url: '/foundation/example',
      templateUrl: 'foundation/views/index.html'
    });
  }
]);
