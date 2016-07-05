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
    },function(response){
      vm.clientes =  $q.reject(response.data);
  });
}

angular
  .module('app')
  .controller('clienteCtrl', clienteCtrl);
