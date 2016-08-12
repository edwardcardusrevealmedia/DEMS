var app = angular.module("app", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
    $routeProvider.when("/", {
        templateUrl: "/Home.html",
        controller: "homeController"
    }).when("/Home", {
        templateUrl: "/Home.html",
        controller: "homeController"
    }).when("/Library", {
        templateUrl: "/Library.html",
        controller: "libraryController"
    });
}]);

app.directive("ngPlaceholder", function($rootScope) {
    return { 
        restrict: "A",
        link: function (scope, element, attributes) {
            $rootScope["placeholder_" + attributes.ngPlaceholder] = element;

            $rootScope.$on("$routeChangeSuccess", function() {
                element[0].innerHTML = "";
            });
        }
    };
})

app.directive("ngSection", function($compile, $rootScope) {
    return {
        restrict: "A",
        link: function (scope, element, attributes) {
            var placeholder = $rootScope["placeholder_" + attributes.ngSection]

            placeholder[0].innerHTML = element[0].innerHTML;

            $compile(placeholder)(scope);
        }
    };
})