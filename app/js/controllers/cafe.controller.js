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
        // $scope.fbService = firebaseService.ref;
        $scope.addCafe = addCafe;
        $scope.getYelpCafe = getYelpCafe;
        $scope.upvote = upvote;
        $scope.get = getFBDB;

        activate();

        ////////////////

        var _fbService = firebaseService;

        function activate() {
        }
        
        function addCafe() {
            _fbService.ref.$add({
                  businessId: $scope.businessId,
                  businessName: $scope.businessName,
                  businessAddress: $scope.businessAddress,
                  latitude: $scope.latitude,
                  longitude: $scope.longitude,
                  businessPhone: $scope.businessPhone,
                  voteCount: 0
            });
        }

        function addCafeObject(yelpObject) {
            _fbService.ref.$add(yelpObject);
        }

        function getYelpCafe () {
           var yelpCafes = CafeService.cafes();
           for (var i=0; i < yelpCafes.length; i++) {
                addCafeObject(yelpCafes[i]);
           }
        }

        function upvote (id) {
            _fbService.upvote(id);
        }

        function getFBDB () {
            var _promise = _fbService.retrieveCafes();

            _promise.then(function(result) {
                $scope.yelpCafeKeys = Object.keys(result.data);
                $scope.yelpCafes = result.data;
            });
            
        }
        
        function addUpvote () {
            var fredRankRef = new Firebase('https://cryfi.firebaseio.com/');
fredRankRef.transaction(function(currentRank) {
   // If /users/fred/rank has never been set, currentRank will be null.
    console.log("add up vote button clicked!");
  return currentRank+1;
});
        }
        
    }
})();