'use strict';

angular
    .module('weatherApp')
    .controller('homeCtrl', function($scope, Weather) {

        $scope.checkWeather = function() {

            var city = {
                q: $scope.city
            };

            $scope.weather = Weather.getWeather(city);
        }

    });