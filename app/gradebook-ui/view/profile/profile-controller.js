(function () {
    angular.module('app')
        .controller('ProfileController', function ($scope, $state) {
            this.editMail = function () {
                $state.go("profile.changeMail").then(function () {
                    $('#changeMail').openModal();
                });
            };
            this.changeMail = function () {
                this.email = "test123@test.com"
            };
            this.email = "test@test.com";
        });
})();