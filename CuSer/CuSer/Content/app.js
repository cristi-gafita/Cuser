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
                })
                .state("menu", {
                    url: "/menu",
                    templateUrl: "Content/views/menuView.html",
                    controller: "menuCtrl as vm"
                })
                .state("recommendation", {
                    url: "/recommendation",
                    templateUrl: "Content/views/recommendationView.html",
                    controller: "recommendationCtrl as vm"
                })
                .state("people", {
                    url: "/people",
                    templateUrl: "Content/views/peopleView.html",
                    controller: "peopleCtrl as vm"
                })
                .state("contact", {
                    url: "/contact",
                    templateUrl: "Content/views/contactView.html",
                    controller: "contactCtrl as vm"
                });
        }]);


}());