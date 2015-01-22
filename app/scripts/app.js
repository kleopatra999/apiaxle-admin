'use strict';

/**
 * @ngdoc overview
 * @name apiaxleAdminApp
 * @description
 * # apiaxleAdminApp
 *
 * Main module of the application.
 */
angular
  .module('apiaxleAdminApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/apis', {
        templateUrl: 'views/apis.html',
        controller: 'ApisCtrl'
      })
      .when('/apis/:id', {
        templateUrl: 'views/api-detail.html',
        controller: 'ApiCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
