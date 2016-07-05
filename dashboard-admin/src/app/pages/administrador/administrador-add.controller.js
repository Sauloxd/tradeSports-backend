var administradorAddCtrl = function (crudService) {
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
    crudService.post('administrador', vm.formData)
      .then(function(){
        console.log('Success!');
        location.href = "#/usuario/administrador"
      }, function(err){
        console.log('err', err);
      });
  };

}

angular
  .module('app')
  .controller('administradorAddCtrl', administradorAddCtrl);
