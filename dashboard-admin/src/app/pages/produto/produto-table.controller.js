var produtoCtrl = function (crudService) {
  var vm = this;

  vm.goToAddProduct = function() {
    location.href = "#/produto/addProduct"
  }

  vm.produtos = []

  crudService.get('produto')
  .then(function(response){
      console.log('Success');
      vm.produtos = response.data;
    },function(response){
      vm.produtos =  $q.reject(response.data);
  });
}

angular
  .module('app')
  .controller('produtoCtrl', produtoCtrl);
