'use strict';

describe('Controller: GuestdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestingApp'));

  var controller, $scope, $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    $scope = $rootScope.$new();
    $location = jasmine.createSpyObj('$location',['path']);
    controller = $controller('GuestdetailsCtrl', {
      $scope: $scope,
      $location: $location
    });
  }));

  it('should start with an empty guest object', function () {
    expect($scope.guest).toBeDefined();
  });

  // Notice the form hack here
  it('should not navigate when saving with invalid form', function () {
    $scope.form = {$valid: false};
    $scope.onSave();
    expect($location.path).not.toHaveBeenCalled();
  });

  it('should navigate when saving with a valid form', function () {
    $scope.form = {$valid: true};
    $scope.onSave();
    expect($location.path).toHaveBeenCalled();
  });

});

