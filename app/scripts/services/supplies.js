'use strict';

angular.module('angularTestingApp')
  .factory('$supplies', function () {
    var supplies = ['Beer', 'Pretzels', 'Shrimp Cocktail', 'Doritos', 'Coke', 'Salsa'];

    return {
      all: function () {
        return supplies;
      },
      add: function(item){
        supplies.push(item);
      },
      remove: function(name){
        var index = supplies.indexOf(name);
        if(index > -1){
          supplies.splice(index, 1);
        }
      }
    };
  });
