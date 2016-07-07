var administradorCtrl = function (crudService) {
	var vm = this;

	vm.goToAddAdmin = function() {
	  location.href = "#/usuario/addAdministrador"
	}

	vm.searchAdminByCPF = function() {
		
	}

	vm.administradores = []

	crudService.get('administrador')
	.then(function(response){
	  console.log('Success');
	  vm.administradores = response.data;
	}, function(err) {
		console.log('error', err);
	});
}

angular
  .module('app')
  .controller('administradorCtrl', administradorCtrl);
