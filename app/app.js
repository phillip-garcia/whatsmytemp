'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      }).when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      }).when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      });
    }])

    .service('cityService', function() {
      this.city = 'San Antonio';
    })


    .controller('View1Ctrl', function($scope, cityService) {
      $scope.city = cityService.city;

      $scope.$watch('city', function() {
        cityService.city = $scope.city;
      });
    })

    // .controller('view2Ctrl', function ($scope, cityService)){
    //   $scope
    // };

    .controller('forecastController', function($scope, $resource, $routeParams, cityService) {
      $scope.city = cityService.city;
      $scope.days = $routeParams.days || '2';

      $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
          { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

      $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, units: 'metric', cnt: $scope.days });


    });
