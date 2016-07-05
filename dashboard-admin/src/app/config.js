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
        .state('usuario.cliente', {
            url: "/cliente",
            controller: clienteCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-table.html",
            data: { pageTitle: 'Cliente' }
        })
        .state('usuario.cliente-add', {
            url: "/addCliente",
            controller: clienteAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-add.html",
            data: { pageTitle: 'Add new Cliente' }
        })
        .state('usuario.administrador', {
            url: "/administrador",
            controller: administradorCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/administrador/administrador-table.html",
            data: { pageTitle: 'Administrador' }
        })
        .state('usuario.administrador-add', {
            url: "/addAdministrador",
            controller: administradorAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/administrador/administrador-add.html",
            data: { pageTitle: 'Administrador' }
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
        });

    $urlRouterProvider.otherwise('produto/table');
  });
