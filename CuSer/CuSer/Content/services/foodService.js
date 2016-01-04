(function () {
    "use strict";

    angular.module("CuserApp")
        .service("foodService",
        ["syncService", foodService]);

    function foodService(syncService) {
        var vm = this;

        vm.getFoodCategories = function (id, cb) {
            syncService.getReviews(id, cb);
        }

        vm.getFoodFromCategory = function (categoryId, cb) {
            syncService.addNewReview(categoryId, cb);
        }
    }
}());