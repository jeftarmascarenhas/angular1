(function () {
'use strict';

angular.module('ctrl.users', ['ui.router'])
.config(['$stateProvider', function ($stateProvider) {

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: 'users/list.html',
      controller: 'ctrlUsers'
    });
}])

.controller('ctrlUsers', ctrlUsers);

function ctrlUsers($scope, contactApi) {
  $scope.name =  'Seu Fulano';
  $scope.contacts = [];

  var loadContacts = function () {
    contactApi.getContacts()
      .success(function (data) {
        $scope.contacts = data;
      })
      .error(function (data, status) {
          $scope.message = 'Deu merda: ' + data;
      });
  };

  loadContacts();

}

})();
