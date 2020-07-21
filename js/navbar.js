kamilApp.component('navBar', {
    template:
    '<nav class="navbar navbar-dark bg-dark">' +
        '<a class="navbar-brand" href="#">'+
            '<img class="rounded" src="img/logo.png" width="30" height="30" alt=""> <span>Portfolio of Kamil Kahar</span>' +
        '</a>'+

        '<button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#my-navbars" aria-controls="my-navbars" aria-expanded="false" aria - label="Toggle navigation"> '+
                '<span class="navbar-toggler-icon"></span>' +
        '</button>'+

        '<div class="navbar-collapse collapse" id="my-navbars">' +
            '<div class="d-flex justify-content-end">'+
                '<ul class="navbar-nav text-right">' +
                    '<li class="nav-item">'+
                        '<a class="nav-link" ng-href="#!portfolio">Portfolio</a>' +
                    '</li>'+
                    '<li class="nav-item">' +
                        '<a class="nav-link" ng-href="#!profile?v2">Profile</a>'+
                    '</li>' +
                '</ul>'+
            '</div>' +
        '</div>'+
    '</nav>',
    controller: function navBarCtrl() {
        //
    }
});