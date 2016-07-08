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
      .get("http://localhost:3000/" + table + "/" + searchId)
  }

  crud.delete = function(table, id){
    console.log('deleting the id : ', id);
    console.log('from ', table);
    return $http
      .delete("http://localhost:3000/" + table + "/" + id)
      .then(function(response){
        console.log('Success');
        return;
      },function(response){
            return $q.reject(response.data);
      });
  }

  crud.update = function(table, id, formData){
    console.log('inserting: ', formData);
    console.log('into ', table);
    return $http
      .put("http://localhost:3000/" + table + "/" + id, formData)
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
