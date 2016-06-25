(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('CafeController', CafeController);

    CafeController.$inject = ['$scope', 'firebaseService'];

    /* @ngInject */
    function CafeController($scope, firebaseService) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";

        activate();

        ////////////////

        function activate() {
        }
        
        function addCafe() {
            //pull the cafe from mike's array and add to our firebase db
            
        }
    
    }
})();