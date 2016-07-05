var administradorAddCtrl = function (administradorService) {
  var vm = this;
  vm.formData = {};

  vm.fillForm = function(){
    vm.formData.nome = "Admin Teste";
    vm.formData.login = "adminteste";
    vm.formData.senha = "senhateste";
    vm.formData.email = "admin@teste.com";
    vm.formData.cpf = 12345678900;
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    administradorService.post(vm.formData)
      .then(function(){
        console.log('Success!');
      }, function(err){
        console.log('err', err);
      });
  };

}

angular
  .module('app')
  .controller('administradorAddCtrl', administradorAddCtrl);
