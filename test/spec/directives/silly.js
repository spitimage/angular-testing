'use strict';

describe('Directive: silly', function () {

  // load the directive's module
  beforeEach(module('angularTestingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should start empty', inject(function ($compile) {
    element = angular.element('<input type="text" ng-model="silly" silly>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));

  it('should force model value to Broncos', inject(function ($compile) {
    element = angular.element('<input type="text" ng-model="silly" silly>');
    element = $compile(element)(scope);
    element.val('Bogus');
    element.triggerHandler('blur');
    expect(scope.silly).toBe('Broncos');
  }));

});
