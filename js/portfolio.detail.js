kamilApp.component('portfolioDetail', {
    templateUrl: 'portfolio-detail.html',
    controller: function portfolioDetailCtrl($window, $routeParams, PortfolioDb, $location) {
        var _self = this;

        _self.$onChanges = function () {
            $window.scrollTo(0, 0); // reset scroll
            _self.showProject();
        };

        _self.showProject = function(){
            // get project id from route
            var _projectId = $routeParams.projectId;

            // get portfolio data
            PortfolioDb.getItem(_projectId).then(function (data) {
                _self.projectData = data;
                if (!_self.projectData) {
                    // alert('project id not available!');
                    $location.path("/portfolio");
                }

            }, function(err){
                console.log(err);
            }); 

        }
    }
});