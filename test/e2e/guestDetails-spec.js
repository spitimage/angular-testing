'use strict';

describe('Super Bowl Party Application', function() {
  beforeEach(function() {
    browser.get('#/guestDetails');
  });

  it('Should navigate to the main view from the navbar', function() {
    element(by.css('[href$="#/"]')).click();
    browser.getCurrentUrl().then(function(url) {
      var match = url.match(/#\/$/);
      expect(match).not.toBeNull();
    });
  });

  it('Should navigate to the main view and reflect the change in the navbar', function() {
    element(by.css('[href$="#/"]')).click();
    var activeLink = element(by.className('active'));
    expect(activeLink.getText()).toEqual('Guests');
  });

});
