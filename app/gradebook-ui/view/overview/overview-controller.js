(function () {
    angular.module('app')
        .controller('OverviewController', function ($scope, $rootScope, $http, $state) {
            this.editSchool = {
                'school': "GIBB"
            };
            this.editMatter = {
                'matter': "Mathe"
            };
            this.overviewInfo = {'0': {
                'ID_Mark': 'error',
                'ID_Matter': 'error',
                'ID_School': 'error',
                'ID_Semester': 'error',
                'mark': 'error',
                'matter': 'error',
                'school': 'error',
                'semester': 'error'
            }};
            var $this = this;
            $(document).ready(function () {
                $('ul.tabs').tabs();

                $('.collapsible').collapsible({
                    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                });
                if ($rootScope.logged) {
                    $this.userid = $rootScope.userInformation.userid;
                    getData();
                } else {
                    $state.go('login');
                }
            });
            function getData() {
                var $data = {'userid': $this.userid};
                $http.post('../../rest/grades/get-overview-info.php', $data)
                    .success(function (responseData, status) {
                        if (responseData.error) {
                            Materialize.toast("Ein Fehler ist unterlafuen, bitte Kontaktieren Sie den Support oder versuchen Sie es später erneut", 4000);
                        } else {
                            $this.overviewInfo = responseData.data;
                            console.log($this.overviewInfo);
                        }
                    })
            }

            this.getSemester = function (semester) {
                console.log("actualizeSemester");
            };

            this.editSchool = function () {
                $state.go("overview.editSchool").then(function () {
                    $('#editSchool').openModal();
                });
            };

            this.addMark = function () {
                $state.go("overview.addMark").then(function () {
                    $('#addMark').openModal();
                });
            };

            this.addMatter = function () {
                $state.go("overview.addMatter").then(function () {
                    $('#addMatter').openModal();
                });
            };

            this.editMatter = function () {
                $state.go("overview.editMatter").then(function () {
                    $('#editMatter').openModal();
                });
            };

            this.editSemester = function () {
                $state.go("overview.editSemester").then(function () {
                    $('#editSemester').openModal();
                });
            }
        });
})();