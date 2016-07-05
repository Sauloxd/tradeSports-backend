var clienteCtrl = function (crudService) {
  var vm = this;

  vm.goToAddClient = function() {
    location.href = "#/usuario/addCliente"
  }
}

angular
  .module('app')
  .controller('clienteCtrl', clienteCtrl);
