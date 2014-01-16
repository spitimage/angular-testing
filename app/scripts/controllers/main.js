'use strict';

angular.module('angularTestingApp')
  .controller('MainCtrl', function($scope, $timeout, $guests, $supplies) {
    // Note all of the navigation for this view is handled in the template so it CAN'T be tested as unit tests...

    // So how are these guests rendered? We really need E2E to find out.

    $scope.guests = $guests.all();

    // This can be tested by unit tests
    $scope.onRemove = function(index) {
      // Return the supplies back to the supply list
      if ($scope.guests[index].bringing) {
        $supplies.add($scope.guests[index].bringing);
      }
      $guests.remove(index);
    };

    // Simulates a backend refresh
    $scope.onFakeRefresh = function(){
      $timeout(function(){
        $guests.add({name: 'jane doe'});
      }, 1000);
    };

  });
