(function() {
    'use strict';

    angular
        .module('cryfi', [
            'ngRoute',
            'ngResource'
        ])

        .config(function($routeProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'pages/home.html',
                controller: 'AppController'
            })
            .otherwise({redirectTo: '/'});
        })
})();