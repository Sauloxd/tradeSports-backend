var clienteCtrl = function (clienteService) {
  var vm = this;
  vm.formData = {};

  vm.fillForm = function(){
    vm.formData.nome = "Teste Teste";
    vm.formData.login = "loginteste";
    vm.formData.senha = "senhateste";
    vm.formData.email = "teste@teste.com";
    vm.formData.cpf = "12345678900";
    vm.formData.telefone = "11999999999";
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    clienteService.post(vm.formData)
      .then(function(){
        console.log('Success!');
      }, function(err){
        console.log('err', err);
      });
  };

}

angular
  .module('app')
  .controller('clienteCtrl', clienteCtrl);
