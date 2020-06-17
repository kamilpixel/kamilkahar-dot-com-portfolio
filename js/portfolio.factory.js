kamilApp.factory("PortfolioDb", ["$http", "$q", function ($http, $q) {
    var _collection = null;

    // return all projects
    var getCollection = function () {
        var defer = $q.defer();
        $http.get('js/portfolio.data.json?nocache=' + (new Date).getTime()).then(function (response) {
            _collection = response.data;
            defer.resolve(response.data);
        });
        return defer.promise;
    };

    // return selected project
    var getItem = function (id) {
        var defer = $q.defer();
        $http.get('js/portfolio.data.json?nocache=' + (new Date).getTime()).then(function (response) {
            var _item = _.find(response.data, function (o) { return o.id == id; });
            defer.resolve(_item);
        });
        return defer.promise;
    };

    return {
        getCollection: getCollection,
        getItem: getItem
    };
}]);