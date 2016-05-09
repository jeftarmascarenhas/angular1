(function () {
  'use strict';

  angular.module('ctrl.home', ['ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
      $stateProvider
        .state('/', {
          url:'/',
          templateUrl:'home/home.html',
          controller:'ctrlHome'
        })
        ;
      }])
    .controller('ctrlHome', ctrlHome)
    ;

    function ctrlHome($scope) {
      $scope.title = 'Home Page';
    }

})();
