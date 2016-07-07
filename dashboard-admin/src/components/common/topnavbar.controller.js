var topnavCtrl = function (AuthenticationService) {
  var vm = this;
  vm.doLogout = function() {
    console.log('logout clicked!');
    AuthenticationService.logout();
  };
};

angular
  .module('app')
  .controller('topnavCtrl', topnavCtrl);
