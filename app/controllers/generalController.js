(function(angular) {

    stadtApp.controller('generalController', function($scope) {

        $scope.message = stadtApp.currentCity.general;
        console.log(stadtApp.currentCity);
    });

})(window.angular);
