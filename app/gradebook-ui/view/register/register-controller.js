(function () {
    angular.module('app')
        .controller('RegisterController', function ($scope, $state, $http) {
            this.email = "";
            this.password = "";
            this.repPassword = "";
            this.termsOfUsage = false;

            this.register = function () {
                if (!this.termsOfUsage) {
                    Materialize.toast("Bitte akzeptieren Sie die Nutzungsbedingungen, bevor Sie einen Account erstellen können", 3000);
                } else {
                    if (this.password === this.repPassword) {
                        var data = {
                            'mail': this.email,
                            'password': this.password
                        };
                        $http.post('./../rest/profile/register.php', data)
                            .success(function (responseData, status) {
                                console.log(responseData);
                                if (responseData.error) {
                                    if (responseData.exists != false) {
                                        Materialize.toast("Es wurde bereits ein Account mit dieser Mail erstellt", 3000);
                                    } else {
                                        Materialize.toast("Beim Erstellen des Accounts ist ein Fehler aufgetreten, versuchen Sie es später nchmals oder Kontaktieren Sie den Support", 3000);
                                    }
                                } else {
                                    Materialize.toast("Ihr Account wurde erfolgreich erstellt", 3000);
                                    $state.go('login');
                                }
                            })
                    } else {
                        Materialize.toast("Die Passwörter stimmen nicht überein", 3000);
                    }
                }
            }
        });
})();