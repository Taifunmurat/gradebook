(function () {
    angular.module('app')
        .controller('ProfileController', function ($scope) {
            this.changeMail = function () {
                this.email = "test123@test.com"
            };
            this.email = "test@test.com";
        });
})();