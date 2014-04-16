var app = angular.module('formula1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.
        when("/drivers", {}).
        when("/drivers/:id", {}).
        otherwise({ redirectTo: '/drivers' });
    }]);
