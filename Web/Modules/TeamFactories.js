app.factory("teamFactory", function () {
    return {
        getAll: function ($http) {
            return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/team/").then(function (response) {
                return response.data;
            });
        }
    }
});