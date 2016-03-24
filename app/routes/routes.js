(function(angular) {

    // Route configurations
    App.stadtApp.config(function($routeProvider) {
        $routeProvider

        // route for the general page
            .when('/', {
            templateUrl: 'views/general.html',
            controller: 'generalController'
        })

        // route for the economy page
        .when('/economy', {
            templateUrl: 'views/economy.html',
            controller: 'economyController'
        })

        // route for the reviews page
        .when('/reviews', {
            templateUrl: 'views/reviews.html',
            controller: 'reviewsController'
        });
    });

})(window.angular);
