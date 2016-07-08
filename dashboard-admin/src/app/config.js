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
        .state('usuario.cliente', {
            url: "/cliente",
            controller: clienteCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-table.html",
            data: { pageTitle: 'Cliente' }
        })
        .state('usuario.cliente-update', {
            url: "/cliente/:cpf",
            controller: clienteUpdateCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/cliente/cliente-update.html",
            data: { pageTitle: 'Atualizar Cliente' }
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

        .state('produto', {
            abstract: true,
            url: "/produto",
            templateUrl: "components/common/content.html"
        })

        .state('produto.table', {
            url: "/table",
            controller: produtoCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/produto/produto-table.html",
            data: { pageTitle: 'Produto' }
        })
        .state('produto.add', {
            url: "/addProduct",
            controller: produtoAddCtrl,
            controllerAs: "vm",
            templateUrl: "app/pages/produto/produto-add.html",
            data: { pageTitle: 'Add new Produto' }

        })

        ;

    $urlRouterProvider.otherwise('login');

  })
  .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });
