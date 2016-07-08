var clienteUpdateCtrl = function (crudService, $state, $stateParams) {
  var vm = this;

  crudService.getById('cliente', $stateParams.cpf)
    .then(function(response){
      console.log('Success');
      vm.formData = response.data[0];
      vm.formData.senha = "password";
    }, function(err) {
      console.log('error', err);
    });

  vm.fillForm = function(){
    vm.formData.nome = "Cliente Teste";
    vm.formData.login = "clienteteste";
    vm.formData.senha = "senhateste";
    vm.formData.email = "cliente@teste.com";
    vm.formData.telefone = 11999999999;
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    delete vm.formData.cpf;
    console.log(vm.formData);
    crudService.update('cliente', $stateParams.cpf, vm.formData)
      .then(function(){
        console.log('Success!');
        $state.go('usuario.cliente');
      }, function(err){
        console.log('err', err);
      });
  };




}

angular
  .module('app')
  .controller('clienteUpdateCtrl', clienteUpdateCtrl);
