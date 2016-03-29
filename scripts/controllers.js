'use strict'

var controllers = angular.module('indeedForDevelopers.controllers', []);

controllers.controller('AppCtrl', function ($scope) {
  $scope.name = "Module";

});

controllers.controller('JobsCtrl', function($scope, $http){
  $http.get('http://api.indeed.com/ads/apisearch?publisher=3997996753290215&q=java&l=austin%2C+tx&sort=&radius=&st=&jt=&start=&limit=&fromage=&filter=&latlong=1&co=us&chnl=&userip=1.2.3.4&useragent=Mozilla/%2F4.0%28Firefox%29&v=2').then(function (data) {

      console.log(data);


  });



});
