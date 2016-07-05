var produtoAddCtrl = function (crudService) {
  var vm = this;
  vm.formData = {};

  vm.fillForm = function(){
    vm.formData.nome = "Tenis";
    vm.formData.valor = 999;
    vm.formData.descricao = "Tenis de couro  com muito gliter, do jeito que o ricado gosta";
    vm.formData.peso = 999;
    vm.formData.fabricante = "Chineis";
    vm.formData.tamanho = "pequeno";
    vm.formData.quantidade = 99;
    vm.formData.tipo = "Calcado";
  }

  vm.resetForm = function(){
    vm.formData = {};
  };

  vm.submitForm = function(){
    crudService.post('produto', vm.formData);
  };

}

angular
  .module('app')
  .controller('produtoAddCtrl', produtoAddCtrl);
