'use strict';

angular.module('angularTestingApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/guestDetails/:index?', {
        templateUrl: 'views/guestdetails.html',
        controller: 'GuestdetailsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
