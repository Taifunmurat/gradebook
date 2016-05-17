(function () {
    'use strict';
    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            var navigationResource = '../view/navigation/navigation.tpl.html';
            var footerResource = '../view/footer/footer.tpl.html';

            $stateProvider
                .state('login', {
                    name: 'login',
                    url: '/login',
                    views: {
                        'navigation': {
                            templateUrl: navigationResource
                        },
                        'content': {
                            templateUrl: '../view/login/login.tpl.html'
                        },
                        'footer': {
                            templateUrl: footerResource
                        }
                    }
                })
                .state('overview', {
                    name: 'overview',
                    url: '/overview',
                    views: {
                        'navigation': {
                            templateUrl: navigationResource
                        },
                        'content': {
                            templateUrl: '../view/overview/overview.tpl.html'
                        },
                        'footer': {
                            templateUrl: footerResource
                        },
                        onEnter: ["$state", function($state) {
                            $(document).on("keyup", function(e) {
                                if(e.keyCode == 27) {
                                    $(document).off("keyup");
                                    $state.go("profile");
                                }
                            });

                            $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
                                $state.go("profile");
                            });

                            $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
                                e.stopPropagation();
                            });
                        }]
                    }
                })
                .state('overview.editSchool', {
                    parent: 'overview',
                    url: '/edit-school',
                    views: {
                        'modal': {
                            templateUrl: '../view/overview/modal/edit-school-modal.html'
                        }
                    }
                })
                .state('overview.editMatter', {
                    parent: 'overview',
                    url: '/edit-matter',
                    views: {
                        'modal': {
                            templateUrl: '../view/overview/modal/edit-matter-modal.html'
                        }
                    }
                })
                .state('overview.addMatter', {
                    parent: 'overview',
                    url: '/add-matter',
                    views: {
                        'modal': {
                            templateUrl: '../view/overview/modal/add-matter-modal.html'
                        }
                    }
                })
                .state('overview.editSemester', {
                    parent: 'overview',
                    url: '/edit-semester',
                    views: {
                        'modal': {
                            templateUrl: '../view/overview/modal/edit-semester-modal.html'
                        }
                    }
                })
                .state('overview.addMark', {
                    parent: 'overview',
                    url: '/add-Mark',
                    views: {
                        'modal': {
                            templateUrl: '../view/overview/modal/add-mark-modal.html'
                        }
                    }
                })
                .state('profile', {
                    name: 'profile',
                    url: '/profile',
                    views: {
                        'navigation': {
                            templateUrl: navigationResource
                        },
                        'content': {
                            templateUrl: '../view/profile/profile.tpl.html'
                        },
                        'footer': {
                            templateUrl: footerResource
                        }
                    },
                    onEnter: ["$state", function($state) {
                        $(document).on("keyup", function(e) {
                            if(e.keyCode == 27) {
                                $(document).off("keyup");
                                $state.go("profile");
                            }
                        });

                        $(document).on("click", ".Modal-backdrop, .Modal-holder", function() {
                            $state.go("profile");
                        });

                        $(document).on("click", ".Modal-box, .Modal-box *", function(e) {
                            e.stopPropagation();
                        });
                    }]
                })
                .state('profile.changeMail', {
                    parent: 'profile',
                    url: '/change-mail',
                    views: {
                        'modal': {
                            templateUrl: '../view/profile/modal/change-mail-modal.html'
                        }
                    }
                })
                .state('profile.changePassword', {
                    parent: 'profile',
                    url: '/change-password',
                    views: {
                        'modal': {
                            templateUrl: '../view/profile/modal/change-password-modal.html'
                        }
                    }
                })
                .state('profile.deleteAccount', {
                    parent: 'profile',
                    url: '/delete-account',
                    views: {
                        'modal': {
                            templateUrl: '../view/profile/modal/delete-account-modal.html'
                        }
                    }
                })
                .state('terms-of-usage', {
                    name: 'terms of usage',
                    url: '/terms-of-usage',
                    views: {
                        'navigation': {
                            templateUrl: navigationResource
                        },
                        'content': {
                            templateUrl: '../view/legal/terms-of-usage.tpl.html'
                        },
                        'footer': {
                            templateUrl: footerResource
                        }
                    }
                })
                .state('register', {
                    name: 'register',
                    url: '/register',
                    views: {
                        'navigation': {
                            templateUrl: navigationResource
                        },
                        'content': {
                            templateUrl: '../view/register/register.tpl.html'
                        },
                        'footer': {
                            templateUrl: footerResource
                        }
                    }
                })
            ;
            $urlRouterProvider.otherwise('login');
        })
})();