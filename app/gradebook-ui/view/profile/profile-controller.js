(function () {
    angular.module('app')
        .controller('ProfileController', function ($scope, $state) {
            this.email = "";

            this.editMail = function () {
                $state.go("profile.changeMail").then(function () {
                    $('#changeMail').openModal();
                });
            };
            this.saveMail = function ($mail) {
                
            }
        });
})();