(function () {
    angular.module('app')
        .controller('NavigationController', function ($rootScope, $http, $state) {
            $('.button-collapse').sideNav({
                closeOnClick: true
            });
            this.logged = $rootScope.logged;
            this.logout = function () {
                $http.get('../../rest/profile/logout.php').success(function (response) {
                    if (!response.error) {
                        $rootScope.logged = false;
                        Materialize.toast("Sie wurden ausgeloggt", 3000);
                        $state.go('login');
                    }
                })
            };
        });
})();