(function () {
    "use strict";

    angular.module("my-app").filter("percentage", percentage);

    function percentage($filter) {
        return percentageFn;

        function percentageFn(input, decimal) {
            return $filter("number")(input * 100, decimal) + "%";
        }
    }
})();
