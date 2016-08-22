app.directive("dwRecordList", function ($http, recordFactory) {
    return {
        link: function (scope, element, attributes) {
            scope.page = 0;
            scope.performingSearch = false;
            scope.recordCount = 0;
            scope.records = null;

            scope.loadRecords = function () {
                scope.page++;
                scope.performingSearch = true;

                recordFactory.get($http, "", "", scope.page, scope.pageSize, "UploadDateTime", "DESC").then(function (returnValue) {
                    if (scope.records == null) {
                        scope.recordCount = returnValue.NumberOfRecords;
                        scope.records = returnValue.Results;
                    } else {
                        scope.records = scope.records.concat(returnValue.Results);
                    }

                    scope.performingSearch = false;
                });
            }
            
            scope.loadRecords();
        },
        replace: true,
        restrict: "E",
        scope: {
            pageSize: "@dwPageSize",
            title: "@dwTitle"
        },
        templateUrl: "Partials/RecordList.html"
    };
})