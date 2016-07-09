var clienteCtrl = function (crudService, $state) {
  var vm = this;
  var getClientes = function () {
    crudService.get('cliente')
      .then(function(response){
        console.log('Success');
        vm.clientes = response.data;
      }, function(err) {
        console.log('error', err);
      });
  };
  vm.goToAddClient = function() {
    $state.go('usuario.cliente-add');
  }

  vm.clientes = [];

  getClientes();
  vm.delete = function (cpf) {
    swal({
      title: "Você está certo disso?",
      text: "O Cliente será deletado do banco de dados!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Sim, deletar!",
      closeOnConfirm: false,
      html: false
    }, function(){
      crudService.delete('cliente', cpf)
    	  .then(function(response){
        }, function(err) {
          console.log('error', err);
        });
      getClientes();
      swal("Deletado!", "O cliente foi deletado!.", "success");
    });
  };
  
}

angular
  .module('app')
  .controller('clienteCtrl', clienteCtrl);
