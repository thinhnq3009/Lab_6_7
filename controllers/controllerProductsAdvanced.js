(function () {
    "use strict";
    const getNavigator = ($scope, itemPerPage) => {
        const pageCount = Math.ceil($scope.products.length / 8);

        return {
            next: () => {
                console.log($scope);
                if ($scope.begin < (pageCount - 1) * itemPerPage) {
                    $scope.begin += itemPerPage;
                } else {
                    $scope.begin = 0;
                }
            },
            prev: () => {
                console.log($scope);
                if ($scope.begin > 0) {
                    $scope.begin -= itemPerPage;
                } else {
                    $scope.begin = (pageCount - 1) * itemPerPage;
                }
            },
            first: () => {
                console.log($scope);
                $scope.begin = 0;
            },
            last: () => {
                console.log($scope);
                $scope.begin = (pageCount - 1) * itemPerPage;
            },
        };
    };

    angular.module("my-app").controller("controllerProductsAdvanced", controllerProductsCtrl);

    controllerProductsCtrl.$inject = ["$scope", "$http", "$rootScope"];

    function controllerProductsCtrl($scope, $http, $rootScope) {
        $scope.sortBy = (filed) => {
            $scope.sort = $scope.sort || "";
            let firstChar = $scope.sort[0] == "+" ? "-" : "+";
            $scope.sort = firstChar + filed;
            console.log($scope.sort);
        };

        $scope.begin = 0;
        $scope.itemPerPage = 8;
        
        $rootScope.isLoading = true;

        $http
            .get("/data/Products.json")
            .then(({ data }) => {
                $scope.products = data.map((item, index)=> {
                    item.index = index;
                    return item;
                });
                $scope.navigator = getNavigator($scope, $scope.itemPerPage);
            })
            .finally(() => {
                $rootScope.isLoading = false;
            });
    }
})();
