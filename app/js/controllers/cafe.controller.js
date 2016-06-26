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
                  businessId: $scope.businessId,
                  businessName: $scope.businessName,
                  businessAddress: $scope.businessAddress,
                  latitude: $scope.latitude,
                  longitude: $scope.longitude,
                  businessPhone: $scope.businessPhone
            });
        }

        function getYelpCafe () {
           var yelpCafes = CafeService.cafes();
           for (var i=0; i < yelpCafes.length; i++) {
                addCafe(yelpCafes[i]);
                console.log(yelpCafes[i]);
           }    
        }
    
    }
})();