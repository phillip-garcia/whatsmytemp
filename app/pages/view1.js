'use strict';

angular.module('myApp.view1', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/pages.html',
    controller: 'View1Ctrl'
  }).when('/pages', {
    templateUrl: 'pages/pages.html',
    controller: 'View1Ctrl'
  }).when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.service('cityService', function() {
      this.city = 'San Antonio, Tx';
})


.controller('View1Ctrl', function($scope, cityService) {
      $scope.city = cityService.city;

      $scope.$watch('city', function() {
        cityService.city = $scope.city;
      });
})

.controller('forecastController', function($scope, $resource, $routeParams, cityService) {
      $scope.city = cityService.city;
      $scope.days = $routeParams.days || '2';

      $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily",
          { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" } });

      $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, units: 'metric', cnt: $scope.days });

      $scope.convertToDate= function(dt) {
        return new Date(dt * 1000);
      }
    })
