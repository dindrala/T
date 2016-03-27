'use strict'

var controllers = angular.module('indeedForDevelopers.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
  $scope.name = "Module";

});

controllers.controller('JobsCtrl', function($scope, $http){
  $http({
    method: "GET",
    url: ""



  }).then(function (data) {


  });

});
