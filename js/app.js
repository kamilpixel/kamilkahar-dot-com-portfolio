"use strict";

var kamilApp = angular.module('kamilApp', ['ngRoute','ngSanitize']);

// router
kamilApp.config(function ($locationProvider,$routeProvider) {

    $routeProvider
        .when('/portfolio', {
            templateUrl: 'portfolio.html'
        })
        .when('/portfolio/:projectId', {
            template: '<portfolio-detail></portfolio-detail>'
        })
        .when('/profile', {
            templateUrl: 'profile.html'
        })
        .otherwise({ redirectTo: '/portfolio' })
});

// profile ctrl
kamilApp.controller('profileCtrl', function ($scope, returnId){
    $scope.init  = function(){
        //console.log('profileCtrl init!');
        returnId.clear();
    }
    $scope.init();
});

// windows back button
kamilApp.directive('backButton', function ($location,returnId) {
    return {
        restrict: 'E',
        scope: {
            returnId: '@returnId'
        },
        template: '<button type="button" class="btn btn-outline-primary">Back to portfolio</button>',
        link: function (scope, elem, attrs) {
            elem.bind('click', function () {
                scope.$apply(function(){
                    returnId.set(attrs.returnId); // for reference to back previous state
                    $location.path("/portfolio");// redirect to portfolio list
                });
            });
        }
    };
});

// to keep record of current selected portfolio id
kamilApp.factory('returnId', function(){
    var _returnId = null;
    return {
        set: function(id){
            _returnId = '#thumbnail-'+id;
        },
        get: function(){
            return _returnId;
        },
        clear: function(){
            _returnId = null;
        }
    };
});

// navbar collapse 
$(document).ready(function () {
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
});