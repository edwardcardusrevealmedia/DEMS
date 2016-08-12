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

    $scope.page = 1;
    $scope.pageSize = 10;
    $scope.performingSearch = false;


    angular.element($window).bind("scroll", function (event) {
        if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
            $scope.showMore();
            $scope.show
        }
    });

    $scope.showMore = function () {
        $scope.page++;
        $scope.performingSearch = true;

        dems.performSearch($http, "", "", $scope.page, $scope.pageSize, "UploadDateTime", "DESC").then(function (returnValue) {
            $scope.records = $scope.records.concat(returnValue);
            $scope.performingSearch = false;
        });
    }

    dems.performSearch($http, "", "", 1, 5, "UploadDateTime", "DESC").then(function (returnValue) {
        $scope.records = returnValue;
    });
});