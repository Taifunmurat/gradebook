(function () {
    'use strict';
    angular
        .module('app')
        .config(function ($stateProvider, $urlRouterProvider) {

            var navigationResource = '../view/navigation/navigation.tpl.html';

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
                            templateUrl: '../view/members/members.tpl.html'
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
                        }
                    }
                });
            $urlRouterProvider.otherwise('login');
        })
})();