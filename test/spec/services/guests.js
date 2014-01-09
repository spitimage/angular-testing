'use strict';

describe('Service: guests', function () {

  // load the service's module
  beforeEach(module('angularTestingApp'));

  // instantiate service
  var $guests;
  beforeEach(inject(function (_$guests_) {
    $guests = _$guests_;
  }));

  it('should have an API', function () {
    expect($guests.all).toBeDefined();
    expect($guests.add).toBeDefined();
    expect($guests.remove).toBeDefined();
  });


  it('should be empty', function () {
    expect($guests.all().length).toBe(0);
  });

  it('should support adds and removes', function () {
    $guests.add({name: 'name'});
    expect($guests.all().length).toBe(1);
    $guests.remove(0);
    expect($guests.all().length).toBe(0);
  });

  it('should dynamically sort contents', function () {
    $guests.add({name: 'z'});
    $guests.add({name: 'a'});
    $guests.add({name: 'n'});
    var guests = $guests.all();

    expect(guests.length).toBe(3);
    expect(guests[0].name).toBe('a');
    expect(guests[1].name).toBe('n');
    expect(guests[2].name).toBe('z');
  });


});
