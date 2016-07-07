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
    }, function(err) {
      console.log('error', err);
    });
}

angular
  .module('app')
  .controller('produtoCtrl', produtoCtrl);
