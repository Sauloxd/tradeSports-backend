var crudService = function ($http, $q) {

  var crud = {}

  crud.post = function(table, formData){
    console.log('inserting: ', formData);
    console.log('into ', table);
    return $http
      .post("http://localhost:3000/" + table, formData)
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
  .factory('crudService', crudService);
