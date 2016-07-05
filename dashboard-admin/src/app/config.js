angular
  .module('app')
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

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
        .state('usuario.cliente', {
            url: "/cliente-add",
            controller: clienteAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-add.html",
            data: { pageTitle: 'Add new Cliente' }
        })
        .state('produto', {
            abstract: true,
            url: "/produto",
            templateUrl: "components/common/content.html"
        })
        .state('produto.table', {
            url: "/table",
            templateUrl: "app/pages/produto/produto-table.html",
            data: { pageTitle: 'Produto' }
        })
        .state('produto.add', {
            url: "/add",
            controller: produtoAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/produto/produto-add.html",
            data: { pageTitle: 'Add new Produto' }
        })

        ;

    $urlRouterProvider.otherwise('produto/add');
  });
