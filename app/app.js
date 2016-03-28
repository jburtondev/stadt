//Global Application Object
var stadtApp = angular.module('stadtApp', ['ngRoute']);

(function(angular) {

    stadtApp.currentCity = {
        //Dummy data which will be filled with returned api data
        general: "This is a city",
        economy: "A city\'s economy information",
        reviews: "Reviews on a city"
    };

})(window.angular);
