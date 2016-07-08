var crudService = function ($http, $q) {

  var crud = {}

  crud.post = function(table, formData){
    return $http
      .post("http://localhost:3000/api/" + table, formData)
      .then(function(response){
        console.log('Success');
        return;
      },function(response){
          return $q.reject(response.data);
    });
  }

  crud.get = function(table){
    return $http
      .get("http://localhost:3000/api/" + table)
  }

  crud.getById = function(table, searchId) {
    return $http
      .get("http://localhost:3000/api/" + table + "/" + searchId)
  }

  crud.delete = function(table, id){
    return $http
      .delete("http://localhost:3000/api/" + table + "/" + id)
      .then(function(response){
        console.log('Success');
        return;
      },function(response){
            return $q.reject(response.data);
      });
  }

  crud.update = function(table, id, formData){
    return $http
      .put("http://localhost:3000/api/" + table + "/" + id, formData)
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
