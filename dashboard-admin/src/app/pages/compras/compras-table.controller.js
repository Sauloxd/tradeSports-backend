var comprasCtrl = function (crudService, $state) {
  var vm = this;
  var get = function () {
    crudService.get('compra')
      .then(function(response){
        vm.compras = response.data;
        console.log('RESULTADO -> ', response.data);
      }, function(err) {
        console.log('error', err);
      });
  };
  get();


  vm.delete = function (idProduto) {
    swal({
      title: "Você está certo disso?",
      text: "A compra será cancelada!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",
      confirmButtonText: "Sim, deletar!",
      closeOnConfirm: false,
      html: false
    }, function(){
      crudService.delete('produto', idProduto)
        .then(function(response){
          get();
          swal("Cancelado!", "A compra foi cancelada!.", "success");
        }, function(err) {
          console.log('error', err);
        });
    });
  };

}

angular
  .module('app')
  .controller('comprasCtrl', comprasCtrl);
