'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestingApp'));

  var controller, $scope, $guests, $supplies;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$guests_, _$supplies_) {
    $guests = _$guests_;
    $supplies = _$supplies_;
    $scope = $rootScope.$new();
    controller = $controller('MainCtrl', {
      $scope: $scope
    });
  }));

  it('should start with an empty guest list', function () {
    expect($scope.guests).toBeDefined();
    expect($scope.guests.length).toBe(0);
  });

  it('should contain the $guests contents', function () {
    $guests.add({name: 'z'});
    $guests.add({name: 'a'});
    $guests.add({name: 'n'});

    expect($scope.guests.length).toBe(3);
  });

  it('should reflect a removed guest', function () {
    $guests.add({name: 'z', bringing: 'Ball'});

    // Remove the one and only user
    $scope.onRemove(0);
    expect($scope.guests.length).toBe(0);
  });


  it('should return a supply item back to $supplies when a guest is deleted', function () {
    var supplyCount = $supplies.all().length;
    $guests.add({name: 'z', bringing: 'Ball'});

    // Remove the one and only user
    $scope.onRemove(0);
    expect($supplies.all()[supplyCount]).toBe('Ball');
  });

});
