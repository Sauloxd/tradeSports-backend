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

  crud.get = function(table){
    console.log('getting ', table);
    return $http
      .get("http://localhost:3000/" + table)
  }

  crud.getById = function(table, searchId) { 
    console.log('searching: ', searchId)
    console.log('in ', table)
    return $http
      .get("http://localhost:3000/" + table, searchId)
  }

  return crud;

};

angular
  .module('app')
  .factory('crudService', crudService);
