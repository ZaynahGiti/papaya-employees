angular.module('Crud.services')
  .factory('Employees', ['$http', '$q', function ($http, $q) {

    return {
      //Create a new Employees.
      new: function (employee) {
        var deferred = $q.defer();
        $http
          .post('/employees',employees)
          .then(function (response) {
            deferred.resolve(response.data);
          })
          .catch(function (error) {
            deferred.reject(error);
          });
        return deferred.promise;
      },

      //Delete an existing employeeId.
      delete: function(employeeId) {
        var deffered = $q.defer();
        $http
          .delete('/employees/' + employeeId)
          .then(function (response) {
            deffered.resolve(response.data);
          })
          .catch(function (error) {
            deffered.reject(error);
          });
        return deffered.promise;
      },

      //Update an existing employee.
      update: function (employee) {
        var deferred = $q.defer();
        $http
          .put('/employees/' + employee.id, employee)
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
