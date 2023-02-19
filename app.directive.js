(function () {
    "use strict";

    angular.module("my-app").directive("polyNumber", function () {
        return {
            require: "ngModel",
            link: function link(scope, element, attr, mCtrl) {
                mCtrl.$parsers.push((value) => {
                    if (value % 2 === 0 && value % 9 === 0) {
                        mCtrl.$setValidity("charE", true);
                    } else {
                        mCtrl.$setValidity("charE", false);
                    }
                    return value;
                });
            },
        };
    });

    /** @ngInject */
})();
