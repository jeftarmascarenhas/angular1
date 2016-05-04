(function () {
'use strict';

angular.module('ctrl.users', ['ui.router'])
.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'users/list.html',
      controller: 'ctrlUsers'
    })
    .state('registre', {
      url:'/registre',
      templateUrl: 'users/registre.html',
      controller: 'ctrlUsers'
    });
}])

.controller('ctrlUsers', ctrlUsers);

ctrlUsers.$inject = ['$scope', 'contactApi'];

function ctrlUsers($scope, contactApi) {
  $scope.name =  'Seu Fulano';
  $scope.contacts = [];

  var loadContacts = function () {
    contactApi.getContacts()
      .success(function (data) {
        $scope.contacts = data;
      })
      .error(function (data, status) {
        $scope.message = data;
      });
  };

  $scope.addRegistre = function (registre) {
    registre.data = new Date();
    contactApi.postContacts(registre)
      .success(function (data) {
        console.log(data);
        delete $scope.registre;
        loadContacts();
      })
      .error(function (data, status) {
        $scope.message = 'Erro ao registrar: ' + data;
      });
  };

loadContacts();

}

})();
