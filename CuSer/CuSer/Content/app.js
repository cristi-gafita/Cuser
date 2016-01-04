(function () {
    angular.module("CuserApp", [
        "ui.router"
    ]).config([
        "$stateProvider",
        "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/home");

            $stateProvider
                .state("home", {
                    url: "/home",
                    templateUrl: "Content/views/homeView.html",
                    controller: "homeCtrl as vm"
                });
        }]);


}());