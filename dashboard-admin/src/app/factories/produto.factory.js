var produtoService = function ($http, $q) {

  var crud = {}

  crud.post = function(formData){
    console.log(formData);
    return $http
      .post("http://localhost:3000/produto", formData)
      .then(function(response){
        console.log('Success');
        return;
      },function(response){
          return $q.reject(response.data);
    });
  }

  return crud;

};

angular
  .module('app')
  .factory('produtoService', produtoService);
