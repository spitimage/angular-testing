'use strict';

describe('Super Bowl Party Application Edit Guest', function() {
  beforeEach(function() {
    browser.get('#/guestDetails');
    element(by.model('guest.name')).sendKeys('john doe');
    element(by.id('save')).click();
  });

  it('Should navigate to the edit view when the edit button is clicked', function() {
    element(by.css('[href$="#/guestDetails/0"]')).click();
    var title = element(by.binding('title'));
    expect(title.getText()).toEqual('Edit a Guest');
  });

  it('Should remove the guest when the remove button is clicked', function() {
    element(by.css('.remove')).click();
    var all = element.all(by.repeater('guest in guests'));
    all.then(function(arr) {
      expect(arr.length).toEqual(0);
    });
  });

});
