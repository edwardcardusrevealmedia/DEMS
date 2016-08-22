app.factory("recordFactory", function () {
    return {
        get: function ($http, query, badgeId, page, pageSize, sortBy, sortDirection) {
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
                //return response.data;
                return {
                    "ShowSites": true,
                    "ShowCategory": true,
                    "ShowTeam": true,
                    "ViewCloakedMedia": true,
                    "CloakedImgMode": "sample string 5",
                    "NumberOfRecords": 6,
                    "CurrentUser": "sample string 7",
                    "Results": [
                      {
                          "IsCloaked": true,
                          "Thumbnail": "sample string 2",
                          "IncidentId": "sample string 3",
                          "Notes": "sample string 4",
                          "RecordedDate": "sample string 5",
                          "Length": 6.1,
                          "Duration": "sample string 7",
                          "Source": "sample string 8",
                          "Location": "sample string 9",
                          "Site": "sample string 10",
                          "UserId": "sample string 11",
                          "MediaCategory": "sample string 12",
                          "Team": "sample string 13",
                          "RetentionPolicy": "sample string 14",
                          "EntityID": 15,
                          "AssetType": "sample string 16"
                      },
                      {
                          "IsCloaked": true,
                          "Thumbnail": "sample string 2",
                          "IncidentId": "sample string 3",
                          "Notes": "sample string 4",
                          "RecordedDate": "sample string 5",
                          "Length": 6.1,
                          "Duration": "sample string 7",
                          "Source": "sample string 8",
                          "Location": "sample string 9",
                          "Site": "sample string 10",
                          "UserId": "sample string 11",
                          "MediaCategory": "sample string 12",
                          "Team": "sample string 13",
                          "RetentionPolicy": "sample string 14",
                          "EntityID": 15,
                          "AssetType": "sample string 16"
                      }
                    ]
                };
            });
        }
    }
});