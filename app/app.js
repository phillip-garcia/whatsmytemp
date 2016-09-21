'use strict';

angular
    .module('weatherApp', [
        'ngRoute',
        'ngResource'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'homeCtrl'
            })
            .when('/aboutme', {
                templateUrl: 'pages/aboutme.html',
                controller: 'aboutCtrl'
            })
            .otherwise({
                redirectTo:'/'
            });
    });