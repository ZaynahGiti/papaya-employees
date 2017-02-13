angular.module('Crud.controllers')
  .controller('CrudDialogCtrl', ['$rootScope', '$scope', '$mdDialog', 'Toast', 'Employees', 'employeeDetails',
  function ($rootScope, $scope, $mdDialog, Toast, Employees, employeeDetails) {
    $scope.employee = employeeDetails;
    if ($scope.employee) {
      $scope.employee.birth_date = new Date($scope.employee.birth_date);
    }
    //create a new employee
    $scope.saveEmployee = function (employee) {
      employee['department_id'] = $rootScope.selectedDepartment.id;
      Employees
        .new(employee)
        .then(function (newEmployee) {
          Toast.show('Employee successfully created', 'top right', 3000);
          $rootScope.selectedDepartment.Employees.push(newEmployee);
          $mdDialog.cancel();
        })
        .catch(function () {
          Toast.show('Error creating employee', 'top right', 3000);
        });
    };

    //Update a employees details
    $scope.updateEmployees = function (employee) {
      Employees
        .update(employee)
        .then(function () {
          Toast.show('Employee successfully updated', 'top right', 3000);
          $mdDialog.cancel();
        })
        .catch(function () {
          Toast.show('Error updating Employee', 'top right', 3000);
        });
    };
  }]);
