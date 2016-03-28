(function(angular) {

    stadtApp.controller('reviewsController', function($scope) {

        $scope.message = stadtApp.currentCity.reviews;

    });

})(window.angular);
