app.service("dems", function () {
    this.getRetentionPolicies = function ($http) {
        return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/retentionpolicy/").then(function (response) {
            return response.data;
        });
    }

    this.getMediaCategories = function ($http) {
        return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/mediacategory/").then(function (response) {
            return response.data;
        });
    }

    this.getTeams = function ($http) {
        return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/team/").then(function (response) {
            return response.data;
        });
    }

    this.performSearch = function ($http, query, badgeId, page, pageSize, sortBy, sortDirection) {
        return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/searchresult", {
            params: {
                query: query,
                badgeId: badgeId,
                page: page,
                recordsPerPage: pageSize,
                SortBy: sortBy,
                SortDirection: sortDirection
            }
        }).then(function (response) {
            return response.data.Results;
        });
    }
});