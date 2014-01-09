'use strict';

angular.module('angularTestingApp')
  .factory('$guests', function() {
    var guests = [];

    return {
      all: function() {
        // Allows access to the underlying array but makes this demo much easier
        return guests;
      },
      get: function(index) {
        return guests[index];
      },
      add: function(guest) {
        guests.push(guest);

        // Let's sort the guests by first name
        guests = guests.sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          if (b.name < a.name) {
            return 1;
          }
          return 0;
        });
      },
      remove: function(index) {
        guests.splice(index, 1);
      }
    };

  });
