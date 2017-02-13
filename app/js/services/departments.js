angular.module('Crud.services')
  .factory('Departments', ['$http', '$q', function ($http, $q) {
    return {
      //Fetch all departments
      all: function() {
        var deferred = $q.defer();
        $http
          .get('/departments')
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
          return deferred.promise;
      },

      //add new department
      new: function (department) {
        var deferred = $q.defer();
        $http
          .post('/departments', department)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      }
    };
  }]);
