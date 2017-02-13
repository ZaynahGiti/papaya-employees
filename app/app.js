angular.module('Crud.controllers', []);
angular.module('Crud.services', []);

//Inject dependencies to the Crud module.
var Crud = angular.module('Crud', [
  'ngMaterial',
  'ngMdIcons',
  'Crud.controllers',
  'Crud.services'
]);

Crud
  .config(['$mdThemingProvider', function ($mdThemingProvider) {
    //Set default theme
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('red');
  }])
  .config(['$mdIconProvider', function ($mdIconProvider) {
    //Placeholder icon for department profile.
    $mdIconProvider
      .icon('department', './images/svg/person.svg');
  }]);
