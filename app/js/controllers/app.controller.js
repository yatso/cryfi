(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope', 'CafeService'];

    /* @ngInject */
    function AppController($scope, CafeService) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";

        activate();

        ////////////////

        function activate() {
//            console.log(JSON.stringify(CafeService.cafes()));
        }
    }
})();