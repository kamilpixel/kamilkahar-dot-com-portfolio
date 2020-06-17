kamilApp.component('portfolio', {
    template:
    '<div class="container-fluid">' +

        '<div class="row">'+
            '<div class="col text-center lbl-featured">' +
                '<h4>Featured Work</h4>'+
            '</div>' +
        '</div>'+

        '<div class="row featured-works">' +

            '<div class="col-md-4 item" ng-repeat="project in $ctrl.projects track by $index" id="thumbnail-{{ project.id }}" >'+
                '<a href="#!portfolio/{{ project.id }}" class="text-left">' +
                    '<div class="card mb-4 box-shadow">'+
                        '<img class="card-img-top" ng-src="{{project.thumbnail}}">' +
                        '<div class="card-body lbl-thumbnail">'+
                            '<h4>{{ project.name }}</h4>' +
                            '<h5>{{ project.type }}</h5>'+
                        '</div>' +
                    '</div>'+
                '</a>' +
            '</div>'+

        '</div>'+
    '</div>',
    controller: function portfolioCtrl(PortfolioDb, returnId, $timeout) {
        var _self = this;

        _self.$onChanges = function () {
            // get portfolio data
            PortfolioDb.getCollection().then(function (data) {
                _self.projects = data;
            });

            // if redirected from portfolio-detail. auto scroll to previous state
            if (returnId.get()){
                
                $timeout(function(){
                    // console.log(returnId.get());
                    // var $anchor = $(returnId.get()).offset();
                    // window.scrollTo($anchor.left, $anchor.top);

                    // Scroll to a certain element
                    document.querySelector(returnId.get()).scrollIntoView({
                        behavior: 'smooth'
                    });

                }, 1000);

            }
        };
    }
});