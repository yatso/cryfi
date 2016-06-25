(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('AppController', AppController);

    AppController.$inject = ['$scope'];

    /* @ngInject */
    function AppController($scope) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";

        activate();

        ////////////////

        function activate() {
        }
    }
})();