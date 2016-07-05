var clienteAddCtrl = function (crudService) {
  var vm = this;
  vm.formData = {};

  vm.fillForm = function(){
    vm.formData.nome = "Cliente Teste";
    vm.formData.login = "clienteteste";
    vm.formData.senha = "senhateste";
    vm.formData.email = "cliente@teste.com";
    vm.formData.cpf = 12345678900;
    vm.formData.telefone = 11999999999;
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    crudService.post('cliente', vm.formData)
      .then(function(){
        console.log('Success!');
        location.href = "#/usuario/cliente"
      }, function(err){
        console.log('err', err);
      });
  };

}

angular
  .module('app')
  .controller('clienteAddCtrl', clienteAddCtrl);
