(function() {
    'use strict';

    angular
        .module('cryfi', [
            'ngRoute',
            'ngResource',
            'firebase'
        ])

        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'AppController'
            })
            .when('/cafe', {
                templateUrl: 'pages/cafe.html',
                controller: 'CafeController'
            })
            .otherwise({redirectTo: '/'});
        })
})();