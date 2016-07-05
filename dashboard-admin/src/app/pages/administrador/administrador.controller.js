var administradorCtrl = function (crudService) {
	var vm = this;

	vm.goToAddAdmin = function() {
	  location.href = "#/usuario/addAdministrador"
	}

	vm.administradores = []

	crudService.get('administrador')
	.then(function(response){
	  console.log('Success');
	  vm.administradores = response.data;
	},function(response){
	  vm.administradores =  $q.reject(response.data);
	});
}

angular
  .module('app')
  .controller('administradorCtrl', administradorCtrl);
