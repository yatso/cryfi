(function() {
    'use strict';

    angular
        .module('cryfi')
        .factory('firebaseService', firebaseService);

    firebaseService.$inject = ['$firebaseArray'];

    /* @ngInject */
    function firebaseService($firebaseArray) {
        //this.func = func;
        var _ref = new Firebase("https://cryfi.firebaseio.com/");
        return $firebaseArray(_ref);

        ////////////////

//        function func() {
//        }
    }
})();