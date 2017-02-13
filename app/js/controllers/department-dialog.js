angular.module('Crud.controllers')
  .controller('DepartmentDialogCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'Departments',
  function ($rootScope, $scope, $mdDialog, Toast, Departments) {
    //Save a new department
    $scope.saveDepartment = function (department) {
      Departments
        .new(department)
        .then(function (newDepartment) {
          //No employees added yet. Set books array to empty.
          newDepartment.Employees = [];
          $rootScope.Departments.push(newDepartment);
          Toast.show('department successfully created', 'top right', 3000);
          $mdDialog.cancel();
        })
        .catch(function () {
          Toast.show('Error creating department', 'top right', 3000);
        });
    };
  }]);
