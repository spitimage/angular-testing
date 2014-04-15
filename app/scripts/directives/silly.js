'use strict';

angular.module('angularTestingApp')
  .directive('silly', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, model) {
        element.on('blur', function(){
          element.val('Broncos');
          model.$setViewValue('Broncos');
        });
      }
    };
  });
