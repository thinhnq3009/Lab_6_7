(function () {
    "use strict";

    angular.module("my-app").controller("controllerSellingProducts", ControllerCtrl);

    ControllerCtrl.$inject = ["$scope", "$rootScope", "$http"];

    function ControllerCtrl($scope, $rootScope, $http) {
        $scope.getTotal = () => {
            return $scope.products && $scope.products.reduce((total, item) => {
                return total + item.quantity * item.price
            }, 0);
        };

        $rootScope.isLoading = true;
        $http
            .get($rootScope.apiUrl + "/products")
            .then(({ data }) => {
                $scope.products = data.map((i) => {
                    i.quantity = 0;
                    return i;
                });
            })
            .finally(() => {
                $rootScope.isLoading = false;
            });
    }
})();
