(function () {
    "use strict";

    angular.module("my-app").component("appHeader", appHeader());

    function appHeader() {
        function appHeaderController() {}
        return {
            templateUrl: "components/app-header/app-header.template.html",
            controller: appHeaderController,
        };
    }
})();
