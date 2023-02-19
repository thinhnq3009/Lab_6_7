(function () {
    "use strict";

    angular.module("my-app").controller("controllerProducts", controllerProductsCtrl);

    controllerProductsCtrl.$inject = ["$scope", "$http", "$rootScope"];

    function controllerProductsCtrl($scope, $http, $rootScope) {
        $rootScope.isLoading = true;
        $http
            .get("/data/Products.json")
            .then(({ data }) => {
                $scope.products = data;
            })
            .finally(() => {
                $rootScope.isLoading = false;
            });
    }
})();
