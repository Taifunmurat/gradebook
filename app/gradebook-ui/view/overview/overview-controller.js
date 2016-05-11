(function () {
    angular.module('app')
        .controller('OverviewController', function ($scope) {
            $(document).ready(function () {
                $('ul.tabs').tabs();

                $('.collapsible').collapsible({
                    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                });
            });
            this.actualizeSemester = function (semester) {
                console.log("actualizeSemester");
            };

            this.editSchoolName = function (schoolId) {
                console.log("editSchoolName");
            };
            
            this.editMatter = function (matter) {
                console.log("editMatter");
            }
        });
})();