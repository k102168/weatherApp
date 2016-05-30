'use strict';

/**
 * @ngdoc function
 * @name WeatherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the WeatherApp
 */
angular.module('WeatherApp')
    .controller('MainCtrl', function (yahooWeatherfactory,$scope) {

        function init(){
            $scope.setCountry = setCountry;
            $scope.setState = setState;
            $scope.setTown = setTown;
            $scope.setWeather = setWeather;

            yahooWeatherfactory.getContinentName().then(function(continents){
                $scope.continents = continents.data.query.results.place;
            });
        }


            function setCountry(name){
                yahooWeatherfactory.getCountriesName(name).then(function(countries){
                    $scope.countries = countries.data.query.results.place;

                });
            }

            function setState(country){
                yahooWeatherfactory.getStatesName(country).then(function(state){
                    $scope.states = state.data.query.results.place;
                });
            }


            function setTown(state){
                yahooWeatherfactory.getTownsName(state,$scope.countryName).then(function(cities){
                    var town = _.filter(cities.data.query.results.place, function(o) { return o.placeTypeName.content === "Town"; });
                    $scope.towns = town;
                });
            }

            function setWeather(town){
                yahooWeatherfactory.getWeather(town,$scope.cName).then(function(weather){
                    $scope.weather = weather.data.query.results.channel;
                });
            }



        init();

    });
