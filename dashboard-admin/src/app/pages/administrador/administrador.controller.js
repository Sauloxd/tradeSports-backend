var administradorCtrl = function () {
	var vm = this;

	vm.goToAddAdmin = function() {
	  location.href = "#/usuario/addAdministrador"
	}
}

angular
  .module('app')
  .controller('administradorCtrl', administradorCtrl);
