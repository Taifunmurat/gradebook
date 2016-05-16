(function () {
    angular.module('app')
        .controller('OverviewController', function ($scope, $rootScope, $http, $state) {
            this.overviewInfo = "";
            var $this = this;
            Materialize.toast($rootScope.logged);
            $(document).ready(function () {
                $('ul.tabs').tabs();

                $('.collapsible').collapsible({
                    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                });
                if ($rootScope.logged) {
                    getData();
                    this.userid = $rootScope.userInformation.userid;
                    Materialize.toast(this.userid);
                } else {
                    $state.go('login');
                }
            });
            function getData() {
                if ($this.userid != undefined) {
                    var $data = {'userid': $this.userid};
                    $http.post('../../rest/grades/get-overview-info.php', $data)
                        .success(function (responseData, status) {
                            if (responseData.error) {
                                Materialize.toast("Ein Fehler ist unterlafuen, bitte Kontaktieren Sie den Support oder versuchen Sie es später erneut", 3000);
                            } else {
                                $this.overviewInfo = responseData;
                                console.log($this.overviewInfo);
                            }
                        })
                }
            }

            this.getSemester = function (semester) {
                console.log("actualizeSemester");
            };

            this.editSchoolName = function (schoolId) {
                console.log("editSchoolName");
            };

            this.editMatter = function (matter) {
                console.log("editMatter");
            };

            this.editSemestetr = function () {

            }
        });
})();