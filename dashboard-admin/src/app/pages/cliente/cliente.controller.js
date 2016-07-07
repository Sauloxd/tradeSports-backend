var clienteCtrl = function (crudService) {
  var vm = this;

  vm.goToAddClient = function() {
    location.href = "#/usuario/addCliente"
  }

  vm.clientes = []

  crudService.get('cliente')
	  .then(function(response){
      console.log('Success');
      vm.clientes = response.data;
    }, function(err) {
      console.log('error', err);
    });
}

angular
  .module('app')
  .controller('clienteCtrl', clienteCtrl);
