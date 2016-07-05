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
        .state('usuario', {
            abstract: true,
            url: "/usuario",
            templateUrl: "components/common/content.html"
        })
        .state('usuario.administrador', {
            url: "/administrador",
            controller: administradorCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/administrador/administrador.html",
            data: { pageTitle: 'Administrador' }
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
        .state('index.cliente-add', {
            url: "/cliente-add",
            controller: clienteAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-add.html",
            data: { pageTitle: 'Add new Cliente' }
        })
        ;

    $urlRouterProvider.otherwise('index/produto');
  });
