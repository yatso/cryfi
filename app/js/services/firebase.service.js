(function() {
    'use strict';

    angular
        .module('cryfi')
        .service('firebaseService', firebaseService);

    firebaseService.$inject = ['dependencies'];

    /* @ngInject */
    function firebaseService(dependencies) {
        this.func = func;

        ////////////////

        function func() {
        }
    }
})();