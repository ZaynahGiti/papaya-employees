angular.module('Crud.controllers')
.controller('MainCtrl', ['$rootScope', '$scope', '$mdSidenav', '$mdDialog', 'Departments', 'Employees', 'Toast',
function ($rootScope, $scope, $mdSidenav, $mdDialog, Departments, Employees, Toast) {
  
  //Fetch all departments
  Departments.all()
    .then(function (departments) {
      $rootScope.departments = departments;
      $rootScope.selectedDepartment = departments[0];
    });

  //set an department as selected
  $scope.selectedDepartment = function (department) {
    $rootScope.selectedDepartment = department;
  };

  //toggle the visibility of the Sidenav
  $scope.toggleSidenav = function () {
    $mdSidenav('left').toggle();
  };

  //Dialog to create new department
  $scope.newDepartmentDialog = function (ev) {
    $mdDialog.show({
      templateUrl: 'views/dialogs/new-department.html',
      controller: 'DepartmentDialogCtrl',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
  };

  //Show Department
  $scope.showDepartmentProfile = function (ev) {
    $mdDialog.show({
      templateUrl: 'views/dialogs/department-profile.html',
      controller: 'DepartmentDialogCtrl',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
  };

  //Dialog to create new Employee
  $scope.newEmployeeDialog = function (ev) {
    $mdDialog.show({
      templateUrl: 'views/dialogs/new-employee.html',
      controller: 'EmployeeDialogCtrl',
      locals: {
        employeeDetails: null
      },
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
  };

  //Delete an existing employee
  $scope.deleteEmployee = function (ev, employee) {
    var deleteEmployee = $mdDialog.confirm()
      .title('Delete ' + employee.name + '?')
      .textContent(employee.name + ' ')
      .ariaLabel('Delete employee')
      .ok('Yes! do it!')
      .cancel('No');

    $mdDialog.show(deleteEmployee)
      .then(function () {
        Employees.delete(employee.id)
          .then(function () {
            $scope.selectedDepartment.Employees = $scope.selectedDepartment.Employees.filter(function (i) {
              return i.id !== employee.id;
            });
            Toast.show(employee.name + ' has been deleted.', 'top right', 3000);
          })
          .catch(function (error) {
            Toast.show('Error deleting ' + employee.name + '. Please try again.', 'top right', 3000);
          });

      });
  };

  //Show modal to edit an existing employee details
  $scope.editEmployee = function (ev, book) {
    $mdDialog.show({
      templateUrl: 'views/dialogs/edit-employee.html',
      controller: 'EmployeeDialogCtrl',
      locals: {
        employeeDetails: employee
      },
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true
    });
  };
}]);
