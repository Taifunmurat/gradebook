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
                            templateUrl: '../view/profile/change-mail-modal.html'
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
                });
            $urlRouterProvider.otherwise('login');
        })
})();