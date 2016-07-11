var produtoUpdateCtrl = function (crudService, $state, $stateParams) {
  var vm = this;

  vm.formData = {};
  vm.htmlData = {};

  vm.htmlData.title = 'Atualizar produtos';
  vm.htmlData.subtitle = 'Atualizar Produtos';
  vm.htmlData.submit = 'Atualizar Produtos';

  vm.htmlData.forms = [{
    name: 'Nome',
    type: 'text',
    model: '',
    isRequired: true
  },
  {
    name: 'Valor',
    type: 'number',
    model: '',
    isRequired: true
  },
  {
    name: 'Descrição',
    type: 'text',
    model: '',
    isRequired: true
  },
  {
    name: 'Peso',
    type: 'number',
    model: '',
    isRequired: true
  },
  {
    name: 'Fabricante',
    type: 'text',
    model: '',
    isRequired: true
  },
  {
    name: 'Tamanho',
    type: 'text',
    model: '',
    isRequired: true
  },
  {
    name: 'Quantidade',
    type: 'number',
    model: '',
    isRequired: true
  },
  {
    name: 'Tipo',
    type: 'text',
    model: '',
    isRequired: true
  }];


  crudService.getById('produto', $stateParams.idproduto)
    .then(function(response){
      vm.formData = response.data[0];
      vm.htmlData.forms.forEach(function(curr, index, arr){
        curr.model = vm.formData[curr.name.toLowerCase()];
      });
    }, function(err) {
      console.log('error', err);
    });

  vm.submitForm = function(){

    vm.htmlData.forms.forEach(function(curr, index, arr){
      vm.formData[curr.name.toLowerCase()] = curr.model;
    });

    crudService.update('produto', $stateParams.idproduto , vm.formData)
      .then(function(){
        $state.go('produto.table');
      }, function(err){
        console.log('err', err);
      });
  };

  vm.resetForm = function(){
    vm.htmlData.forms.forEach(function(curr, index, arr){
      if(!curr.isDisabled) curr.model = '';
    });
  };
}

angular
  .module('app')
  .controller('produtoUpdateCtrl', produtoUpdateCtrl);
