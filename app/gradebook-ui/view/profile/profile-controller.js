(function () {
    angular.module('app')
        .controller('ProfileController', function ($scope, $state) {
            this.email = "";

            this.editMail = function () {
                $state.go("profile.changeMail").then(function () {
                    $('#changeMail').openModal();
                });
            };
            this.changePassword = function () {
                $state.go("profile.changePassword").then(function () {
                    $('#changePassword').openModal();
                });
            };
            this.deleteAccount = function () {
                $state.go("profile.deleteAccount").then(function () {
                    $('#deleteAccount').openModal();
                });
            };
            this.saveMail = function ($mail) {
                
            }
        });
})();