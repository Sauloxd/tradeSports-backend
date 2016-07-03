var produtoAddCtrl = function (produtoService) {
  var vm = this;
  vm.formData = {};

  vm.fillForm = function(){
    vm.formData.Nome = "Tenis";
    vm.formData.Valor = 999;
    vm.formData.Descricao = "Tenis de couro  com muito gliter, do jeito que o ricado gosta";
    vm.formData.Peso = 999;
    vm.formData.Fabricante = "Chineis";
    vm.formData.Tamanho = "pequeno";
    vm.formData.Quantidade = 99;
    vm.formData.Tipo = "Calcado";
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    produtoService.post(vm.formData)
      .then(function(){
        console.log('Success!');
      }, function(err){
        console.log('err', err);
      });
  };

}

angular
  .module('app')
  .controller('produtoAddCtrl', produtoAddCtrl);
