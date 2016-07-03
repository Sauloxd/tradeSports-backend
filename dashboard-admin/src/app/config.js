angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/content.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "app/pages/login/login.html",
            controller: loginCtrl,
            controllerAs: 'loginVm',
            data: { pageTitle: 'Login', specialClass: 'gray-bg' }
        })
        .state('index.produto', {
            url: "/produto",
            templateUrl: "app/pages/produto/produto.html",
            data: { pageTitle: 'Produto' }
        })
        .state('index.produto-add', {
            url: "/produto-add",
            controller: produtoAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/produto/produto-add.html",
            data: { pageTitle: 'Add new Produto' }
        })
        ;

    $urlRouterProvider.otherwise('/login');
  });
