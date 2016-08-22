app.factory("mediaCategoryFactory", function () {
    return {
        getAll: function ($http) {
            return $http.get("http://demsdemoserver.revealmedia.local/demswebapi/api/mediacategory/").then(function (response) {
                return response.data;
            });
        }
    }
});