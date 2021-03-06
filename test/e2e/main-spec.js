'use strict';

describe('Super Bowl Party Application', function() {
  beforeEach(function() {
    browser.get('/');
  });

  it('Should display empty guest list warning', function() {
    var msg = element(by.className('alert'));
    expect(msg.getText()).toEqual('You have no guests yet');
  });

  it('Should navigate to the details view when the add button is pressed', function() {
    element(by.id('add')).click();
    browser.getCurrentUrl().then(function(url) {
      var match = url.match(/guestDetails/);
      expect(match).not.toBeNull();
    });
  });

  it('Should navigate to the details view from the navbar', function() {
    element(by.css('[href$="guestDetails"]')).click();
    browser.getCurrentUrl().then(function(url) {
      var match = url.match(/guestDetails/);
      expect(match).not.toBeNull();
    });
  });

  it('Should navigate to the details view and reflect the change in the navbar', function() {
    element(by.css('[href$="guestDetails"]')).click();
    var activeLink = element(by.className('active'));
    expect(activeLink.getText()).toEqual('New Guest');
  });

  // Async test
  it('Should wait for the delayed fake refresh to complete', function(){
    element(by.id('fakeRefresh')).click();
    // Fake refresh happens here - promise doesn't return until digest cycle is complete
    var all = element.all(by.repeater('guest in guests'));
    all.then(function(arr) {
      expect(arr.length).toEqual(1);
    });
  });


});
