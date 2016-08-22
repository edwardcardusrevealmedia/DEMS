app.controller("libraryController", function ($scope, $http, $window, retentionPolicyFactory, mediaCategoryFactory, teamFactory) {
    $scope.criticalError = null;

    //function handleHttpError(response) {
    //    var message;

    //    if (response.status == 404) {
    //        message = "A connection to the server could not be established."
    //    } else if (response.status == 500) {
    //        message = "A server error has occurred."
    //    } else {
    //        message = "An unknown error has occurred."
    //    }

    //    $scope.criticalError = {
    //        message: message,
    //        showDetails: false,
    //        details: response
    //    };
    //}

    retentionPolicyFactory.getAll($http).then(function (returnValue) {
        $scope.retentionPolicies = returnValue;
    });

    mediaCategoryFactory.getAll($http).then(function (returnValue) {
        $scope.mediaCategories = returnValue;
    });

    teamFactory.getAll($http).then(function (returnValue) {
        $scope.teams = returnValue;
    });

    $scope.backToTop = function () {
        if ($scope.windowScrolledVertically) {
            scrollTo(scrollX, scrollY * 0.75)
            setTimeout($scope.backToTop, 10);
        }
    }

    $scope.windowScrolledVertically = scrollY > 0;

    angular.element($window).bind("scroll", function () {
        // window.scrollY + window.innerHeight >= document.body.scrollHeight
        $scope.windowScrolledVertically = scrollY > 0;
        $scope.$apply();
    });
});