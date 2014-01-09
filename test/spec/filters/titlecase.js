'use strict';

describe('Filter: titleCase', function () {

  // load the filter's module
  beforeEach(module('angularTestingApp'));

  // initialize a new instance of the filter before each test
  var titleCase;
  beforeEach(inject(function ($filter) {
    titleCase = $filter('titleCase');
  }));

  it('should capitalize every word of the phrase"', function () {
    var text = 'john doe';
    expect(titleCase(text)).toBe('John Doe');
  });

  it('should capitalize ONLY the first word of the phrase"', function () {
    var text = 'JOHN DOE';
    expect(titleCase(text)).toBe('John Doe');
  });

});
