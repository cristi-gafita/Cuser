(function () {
    "use strict";

    angular.module("CuserApp")
        .service("reviewsService",
        ["syncService", reviewsService]);

    function reviewsService(syncService) {
        var vm = this;

        vm.getReviews = function (id, cb) {
            syncService.getReviews(id, cb);
        }

        vm.addNewReview = function (review, cb) {
            syncService.addNewReview(review, cb);
        }
    }
}());