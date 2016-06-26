(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', '$http', '$firebaseObject', 'FIREBASE_URL', 'firebaseService', '$timeout', 'CafeService'];

    /* @ngInject */
    function AppController($scope, $http, $firebaseObject, FIREBASE_URL, firebaseService, $timeout, CafeService) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";
        $scope.upvote = upvote;

        $timeout(function() {
            activate();
        }, 10);
        

        ////////////////

        var _fbService = firebaseService;

        function activate() {
            var _promise = _fbService.retrieveCafes();

            _promise.then(function(result) {
                $scope.yelpCafeKeys = Object.keys(result.data);
                $scope.yelpCafes = result.data;
                console.log('$scope.yelpCafes', $scope.yelpCafes);
            });
        }

        function upvote (id) {
            _fbService.upvote(id);
        }
    }
})();