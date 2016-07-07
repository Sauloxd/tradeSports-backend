var loginCtrl = function (AuthenticationService, $localStorage, $state) {
  var vm = this;
  vm.login = "testelogin";
  vm.senha = "testesenha";
  vm.doLogin = function(){
    AuthenticationService.login(vm.login, vm.senha, function (result) {
      console.log("resultado => ", result);
      if (result === true) {
          // $location.path('/');
          console.log('Success!');
          console.log($localStorage.currentUser);
          $state.go('produto.add');
      } else {
          vm.error = '';
          console.log('Username or password is incorrect');
      }
    });
  }

}

angular
  .module('app')
  .controller('loginCtrl', loginCtrl);
