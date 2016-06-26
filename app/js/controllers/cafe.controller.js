(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('CafeController', CafeController);

    CafeController.$inject = ['$scope', 'firebaseService', 'CafeService'];

    /* @ngInject */
    function CafeController($scope, firebaseService, CafeService) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";
        $scope.fbService = firebaseService;
        $scope.addCafe = addCafe;
        $scope.getYelpCafe = getYelpCafe;

        activate();

        ////////////////

        function activate() {
        }
        
        function addCafe() {
            //pull the cafe from mike's array and add to our firebase db
            $scope.fbService.$add({
                businessName: $scope.businessName,
                  businessAddress: $scope.businessName,
                  latitude: $scope.businessName,
                  longitude: $scope.businessName,
                  businessPhone: $scope.businessName
            });
        }

        function getYelpCafe () {
            console.log(CafeService.cafes());
        }
    
    }
})();