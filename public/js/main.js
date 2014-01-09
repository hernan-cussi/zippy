'use strict';

// Declare app level module which depends on filters, and services

var app = angular.module("app", []);
 
app.directive("zippy", function(){
  return {
    restrict: "E",
    /* scope local*/
    transclude: true,
    scope: {
      title: "@" /* extract an attribute by name, and assign it to the scope */
    },
    template: '<div>' +
      '<h3 ng-click="toggleContent()">{{title}}</h3>' +
      '<div ng-show="isContentVisible" ng-transclude></div>' +
      '</div>',
    link: function(scope){
      scope.isContentVisible = false;
      scope.toggleContent = function(){
        scope.isContentVisible = !scope.isContentVisible;
      };
    }
  };
});