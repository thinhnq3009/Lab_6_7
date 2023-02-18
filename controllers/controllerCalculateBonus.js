(function () {
    "use strict";

    angular.module("my-app").controller("controllerCalculateBonus", controllerCalculateBonus);

    controllerCalculateBonus.$inject = ["$scope"];
    function controllerCalculateBonus($scope) {
        $scope.user = {};
        $scope.user.gender = "male";

        $scope.handleSubmit = () => {

            console.log($scope.user);

            const user = $scope.user;

            let bonus = 0;

            if (user.age === "1") {
                bonus = user.salary * 0.07;
            } else if (user.age === "2") {
                bonus = user.salary * 0.1;
            } else if (user.age === "3") {
                bonus = user.salary * 0.15;
            } else {
                bonus = 0;
            }

            bonus += user.gender === "male" ? 0 : 200000;

            bonus = Math.floor(bonus);

            $scope.bonus = bonus;
        };
    }
})();
