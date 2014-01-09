'use strict';

describe('Controller: NavCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestingApp'));

  var NavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavCtrl = $controller('NavCtrl', {
      $scope: scope
    });
  }));

  it('should have a state variable for nav feedback', function () {
    expect(scope.activeState).toBeDefined();
  });
});
