(function() {
    'use strict';

    angular
        .module('cryfi')
        .controller('CafeController', CafeController);

    CafeController.$inject = ['$scope', '$http', 'firebaseService', 'CafeService'];

    /* @ngInject */
    function CafeController($scope, $http, firebaseService, CafeService) {
        // var vm = this;
        // vm.title = 'Controller';
        $scope.title = "CryFi";
        $scope.fbService = firebaseService;
        $scope.addCafe = addCafe;
        $scope.getYelpCafe = getYelpCafe;
        $scope.upvote = upvote;
        $scope.get = getFBDB;

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

        function addCafeObject(yelpObject) {
            //pull the cafe from mike's array and add to our firebase db
            $scope.fbService.$add(yelpObject);
        }

        function getYelpCafe () {
           var yelpCafes = CafeService.cafes();
           for (var i=0; i < yelpCafes.length; i++) {
                addCafeObject(yelpCafes[i]);
                console.log(yelpCafes[i]);
           }
        }

        function upvote (id) {
            var itemRef = new Firebase('https://cryfi.firebaseio.com/' + id +'/voteCount');
            itemRef.transaction(function(currentVote) {
                return currentVote+1;
            });
        }

        function getFBDB () {
            $http.get("https://cryfi.firebaseio.com/.json").then(function(result) {
                $scope.yelpCafeKeys = Object.keys(result.data);
                $scope.yelpCafes = result.data;
                // console.log(_keysArr);
                // console.log('scope', $scope.yelpCafes);
            })
        }
    }
})();