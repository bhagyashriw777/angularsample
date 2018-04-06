'use strict';

/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
var app=angular.module('testApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]);
    app.controller('dashboardController', function($scope,$http){ 
    $scope.pools = [];

    $http.get('http://api-testapp.9i2ixvpuxp.us-east-1.elasticbeanstalk.com/api/dashboard').success(function(data, status, headers, config) {
        $scope.pools = data;	 
    });/*
    $scope.addVote = function(pooloptions){
    $http.get('/api/pooloption/addvote/'+ pooloptions.id).
        success(function(data, status, headers, config) {
        pooloptions.vote++;
        });
    }*/
});