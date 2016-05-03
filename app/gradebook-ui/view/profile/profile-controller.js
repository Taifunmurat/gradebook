(function () {
    'use strict';
    angular.module('app')
        .controller('ProfileController', function () {
            function changeMail() {
                $('#change-mail-modal').openModal(); //todo fix modal 
            }
        });
})();