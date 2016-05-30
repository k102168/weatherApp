'use strict';

/**
 * @ngdoc service
 * @name WeatherApp.yahooWeatherfactory
 * @description
 * # yahooWeatherfactory
 * Factory in the WeatherApp.
 */
angular.module('WeatherApp')
  .factory('yahooWeatherfactory', ['$http',function ($http) {
    // Service logic
    // ...
        var baseUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20';

        function getContinentName(){
            return $http.get(baseUrl + 'geo.continents%20&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
        }

        function getCountriesName(name){
            return $http.get(baseUrl + 'geo.countries%20where%20place%3D%22' + name + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
        }

        function getStatesName(name){
            return $http.get(baseUrl + 'geo.states%20where%20place%3D%22' + name + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
        }

        function getTownsName(state,country){
            return $http.get(baseUrl + 'geo.places.descendants%20where%20ancestor_woeid%20in%20(select%20woeid%20from%20geo.places%20where%20text%3D%22' + state + '%20%2C' + country +'%22)&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=');
        }



        function getWeather(town,country){
            return $http.get(baseUrl + 'weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + town +'%2C' + country +'%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
        }


        // Public API here
    return {
        getContinentName: getContinentName,
        getCountriesName: getCountriesName,
        getStatesName: getStatesName,
        getTownsName: getTownsName,
        getWeather: getWeather
    };
  }]);
