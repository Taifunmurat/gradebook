(function () {
    angular.module('app')
        .controller('LoginController', function ($scope, $state, $http, $rootScope) {
            this.email = "";
            this.password = "";

            this.login = function () {
                var data = {
                    'mail': this.email,
                    'password': this.password
                };
                $http.post('../../rest/profile/login.php', data)
                    .success(function (responseData, status) {
                        if (responseData.error) {
                            Materialize.toast("Das Passwort oder die Email stimmen nicht.", 3000);
                        } else {
                            Materialize.toast("Sie wurden erfolgreich eingeloggt", 3000);
                            $rootScope.logged = true;
                            $rootScope.userInformation = {
                                mail: responseData.data.E_Mail,
                                userid: responseData.data.ID_Person
                            };
                            $state.go("overview");
                        }
                    })
            }
        });
})();