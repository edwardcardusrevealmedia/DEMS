app.controller("libraryController", function ($scope, $http, $window, dems) {
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

    dems.getRetentionPolicies($http).then(function (returnValue) {
        $scope.retentionPolicies = returnValue;
    });

    dems.getMediaCategories($http).then(function (returnValue) {
        $scope.mediaCategories = returnValue;
    });

    dems.getTeams($http).then(function (returnValue) {
        $scope.teams = returnValue;
    });

    $scope.showMore = function () {
        $scope.page++;
        $scope.performingSearch = true;

        dems.performSearch($http, "", "", $scope.page, $scope.pageSize, "UploadDateTime", "DESC").then(function (returnValue) {
            $scope.records = $scope.records.concat(returnValue.Results);
            $scope.performingSearch = false;
        });
    }

    $scope.backToTop = function () {
        if ($scope.windowScrolledVertically) {
            scrollTo(scrollX, scrollY * 0.75)
            setTimeout($scope.backToTop, 10);
        }
    }

    $scope.page = 1;
    $scope.pageSize = 20;
    $scope.totalRecords = 0;
    $scope.performingSearch = false;
    $scope.windowScrolledVertically = scrollY > 0;

    angular.element($window).bind("scroll", function () {
        // window.scrollY + window.innerHeight >= document.body.scrollHeight
        $scope.windowScrolledVertically = scrollY > 0;
        $scope.$apply();
    });

    dems.performSearch($http, "", "", $scope.page, $scope.pageSize, "UploadDateTime", "DESC").then(function (returnValue) {
        $scope.totalRecords = returnValue.NumberOfRecords;
        $scope.records = returnValue.Results;
    });
});