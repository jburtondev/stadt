(function(angular) {

    stadtApp.controller('economyController', function($scope) {

        $scope.message = stadtApp.currentCity.economy;
    });

})(window.angular);
