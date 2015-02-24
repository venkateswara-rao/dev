


var myApp = angular.module('app',['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider
    .when('/',{
        templateUrl:'index.html',
        controller:'homeCtrl'
    })
    .when('/login',{
        templateUrl:'login.html',
        controller:'loginCtrl'
    })
    .when('/dashboard',{
        templateUrl:'dashboard.html',
        controller:'dashboardCtrl'
    })
    .when('/logout',{
        templateUrl:'logout.html',
        controller:'logoutCtrl'
    })
    .when('/listby',{
        templateUrl:'listby.html',
        controller:'listCtrl'
    })
	.when('/footer',{
        templateUrl:'footer.html',
        controller:'homeCtrl'
    })
    .otherwise({redirectTo:'/'});

});

/*
myApp.controller("homeCtrl", function($scope) {

    $scope.title = "Home";
});

var includefiles = angular.module('includefiles', []);

includefiles.controller('IncludeCtrl', ['$rootScope','$route', '$location','$controller', function ($rootScope,$route,$location,$controller) { 
    $rootScope = angular.extend($rootScope, {
        name : 'Root scope',
        templates : { main: 'index.html', header: 'header.html', footer: 'footer.html' }
    });

*/
