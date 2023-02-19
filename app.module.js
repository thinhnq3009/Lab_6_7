

!(function () {
    "use strict";

    angular.module("my-app", ["ngRoute"]).controller("rootController", ["$scope", "$rootScope", Controller]);

    /** @ngInject */
    function Controller($scope, $rootScope) {
        console.log($rootScope);
        $rootScope.isLoading = false;
        $rootScope.apiUrl = "https://63f0b8845703e063fa4b3e60.mockapi.io/lab_6_7";
    }
})();
