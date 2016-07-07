'use strict';

angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'ngStorage'
  ])
  .run(function ($rootScope, $http, $state, $localStorage) {
      console.log('run foi chamado!');
        //keep user logged in after page refresh
        if ($localStorage.currentUser) {
            console.log('existe current user!');
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }

        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
            var publicStatePages = ['login'];
            console.log('going to state : => ', toState);
            console.log('currentUSer => ', $localStorage.currentUser);
            var restrictedPage = publicStatePages.indexOf(toState.name) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
              e.preventDefault();
              $state.go('login');
            }
            if (toState.name == 'login' && $localStorage.currentUser) {
              e.preventDefault();
              $state.go('produto.add');
            }
        });
    });
