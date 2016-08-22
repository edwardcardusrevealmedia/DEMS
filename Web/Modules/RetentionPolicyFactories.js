app.factory("retentionPolicyFactory", function () {
    return {
        getAll: function ($http) {
            return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/retentionpolicy/").then(function (response) {
                return response.data;
            });
        }
    }
});