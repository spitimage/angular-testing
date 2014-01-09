'use strict';

describe('Service: supplies', function () {

  // load the service's module
  beforeEach(module('angularTestingApp'));

  var $supplies;

  beforeEach(inject(function (_$supplies_) {
    $supplies = _$supplies_;
  }));

  it('should have an API', function () {
    expect($supplies.all).toBeDefined();
    expect($supplies.add).toBeDefined();
    expect($supplies.remove).toBeDefined();
  });


  it('should support adds and removes by string', function () {
    var origLength = $supplies.all().length;
    $supplies.add('Cheetos');
    expect($supplies.all().length).toBe(origLength + 1);
    $supplies.remove('Cheetos');
    expect($supplies.all().length).toBe(origLength);
  });

});
