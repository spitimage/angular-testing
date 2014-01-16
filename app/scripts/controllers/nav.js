'use strict';

angular.module('angularTestingApp')
  .controller('NavCtrl', function($scope, $rootScope) {
    $scope.view = 'main';

    $rootScope.$on('$locationChangeSuccess', function(event, newUrl) {
      var match = newUrl.match(/#\/(.*)/);
      if(match.length > 1){
        $scope.view = match[1];
      }
    });
  });
