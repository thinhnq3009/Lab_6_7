(function () {
    "use strict";

    angular.module("my-app").config(configConfig);

    configConfig.$inject = ["$routeProvider"];

    function configConfig($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "pages/home.html",
            })
            .when("/Lab_6/Bai_1", {
                templateUrl: "pages/Lab_6/Bai_1.html",
                controller: "controllerCalculateBonus",
            })
            .when("/Lab_6/Bai_2", {
                templateUrl: "pages/Lab_6/Bai_2.html",
                controller: "controllerSellingProducts",
            })
            .when("/Lab_6/Bai_3", {
                templateUrl: "pages/Lab_6/Bai_3.html",
                controller: "controllerCalculateBonus",
            })
            .when("/Lab_6/Bai_4", {
                templateUrl: "pages/Lab_6/Bai_4.html",
            })
            .when("/Lab_6/Bai_5", {
                templateUrl: "pages/Lab_6/Bai_5.html",
            })
            .when("/Lab_7/Bai_1", {
                templateUrl: "pages/Lab_7/Bai_1.html",
                controller: "controllerProducts"
            })
            .when("/Lab_7/Bai_2", {
                templateUrl: "pages/Lab_7/Bai_2.html",
                controller: "controllerProducts"
            })
            .when("/Lab_7/Bai_3", {
                templateUrl: "pages/Lab_7/Bai_3.html",
                controller: "controllerProducts"
            }).when("/Lab_7/Bai_4", {
                templateUrl: "pages/Lab_7/Bai_4.html",
                controller: "controllerProductsAdvanced"
            });
    }
})();
