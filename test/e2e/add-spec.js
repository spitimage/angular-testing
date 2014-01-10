'use strict';

describe('Super Bowl Party Application', function() {
  beforeEach(function() {
    browser.get('#/guestDetails');
  });

  it('Should not save the guest record with a missing name', function() {
    element(by.id('save')).click();
    browser.getCurrentUrl().then(function(url) {
      // Assume no url change is a rejection
      var match = url.match(/guestDetails/);
      expect(match).not.toBeNull();
    });
  });

  it('Should save the guest record with only a name', function() {
    element(by.model('guest.name')).sendKeys('john doe');
    element(by.id('save')).click();
    browser.getCurrentUrl().then(function(url) {
      // Assume url change is an accept
      var match = url.match(/#\/$/);
      expect(match).not.toBeNull();

      // Find the record in the table
      var all = element.all(by.repeater('guest in guests'));
      all.then(function(arr) {
        expect(arr.length).toEqual(1);
      });
    });
  });

  it('Should display all names in title case', function(){
    element(by.model('guest.name')).sendKeys('john doe');
    element(by.id('save')).click();
    var cell = element(by.repeater('guest in guests').row(0).column('name'));
    expect(cell.getText()).toEqual('John Doe');
  });

});
