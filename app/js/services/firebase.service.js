(function() {
    'use strict';

    angular
        .module('cryfi')
        .constant('FIREBASE_URL', 'https://cryfi.firebaseio.com/')
        .factory('firebaseService', firebaseService);

    firebaseService.$inject = ['$firebaseArray', '$http', '$q', 'FIREBASE_URL'];

    /* @ngInject */
    function firebaseService($firebaseArray, $http, $q, FIREBASE_URL) {
        //this.func = func;
        var service = {
            ref: ref(),
            upvote: upvote,
            downvote: downvote,
            retrieveCafes: retrieveCafes
        };

        return service;
        

        ////////////////

        function ref () {
            var _ref = new Firebase(FIREBASE_URL);
            return $firebaseArray(_ref);
        }

        function upvote (id) {
            var _itemRef = new Firebase(FIREBASE_URL + id +'/voteCount');
            _itemRef.transaction(function(currentVote) {
                return currentVote+1;
            });
        }

        function downvote (id) {
            var _itemRef = new Firebase(FIREBASE_URL + id +'/voteCount');
            _itemRef.transaction(function(currentVote) {
                return currentVote-1;
            });
        }

        function retrieveCafes () {
            var _deferred = $q.defer();
            $http.get(FIREBASE_URL + ".json").then(function(result) {
                _deferred.resolve(result);
            });

            return _deferred.promise;
        }

        function getVoteCount () {
            var _deferred = $q.defer();
            $http.get(FIREBASE_URL + ".json").then(function(result) {
                _deferred.resolve(result);
            });

            return _deferred.promise;
        }
    }
})();