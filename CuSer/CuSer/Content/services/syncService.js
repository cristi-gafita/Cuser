(function () {
    "use strict";

    angular.module("CuserApp")
        .service("syncService",
        ["configurationService", "$http", syncService]);

    function syncService(configurationService, $http) {

        var vm = this;

        var registerPostRequest = function (url, data, cb, errorCb) {

            $http.post(url, data).success(function (data) {
                cb(data);
            }).error(function (data) {
                errorCb(data);
            });
        };

        var registerGetRequest = function (url, data, cb, errorCb) {
            $http.get(url, data).success(function (data) {
                cb(data);
            }).error(function (data) {
                errorCb(data);
            });
        };      
    }

}());