'use strict';

angular.module('angularTestingApp')
  .controller('GuestdetailsCtrl', function($scope, $routeParams, $location, $guests, $supplies) {
    // Note all of the navigation for this view is handled in this controller so it COULD be tested as unit tests...

    $scope.guest = {};
    $scope.options = $supplies.all();
    $scope.title = 'Add a New Guest';

    var index = $routeParams.index;

    // An index means we are editing details of an existing record
    if (index) {
      if ($guests.get(index)) {
        $scope.guest = $guests.get(index);
        $scope.title = 'Edit a Guest';

        // Re-add the guest's supplies to the mix
        if ($scope.guest.bringing) {
          $supplies.add($scope.guest.bringing);
        }
      }
    }

    $scope.onSave = function() {
      // This form exists in the template - not a natural fit for unit testing
      if ($scope.form.$valid) {

        // Remove supplies from the options
        $supplies.remove($scope.guest.bringing);

        // Only need to insert if this is a new record
        if (!index) {
          $guests.add($scope.guest);
        }

        $location.path('/');
      }
    };

  });
